import { NextResponse } from 'next/server';

// This is a simulated RAG document store
const RAG_KNOWLEDGE_BASE = [
  "Rahul Kumar is a B.Tech Computer Science and Engineering student at IIITDM Jabalpur (Aug 2024 - Aug 2028).",
  "Rahul is a passionate developer exploring scalable web applications and AI/ML.",
  "Rahul's programming languages include Python, C++, C, Java, JavaScript, TypeScript, PHP, and SQL.",
  "On the frontend and backend, Rahul works with HTML, CSS, React, Redux, Tailwind CSS, Node.js, Express.js, Django, and Next.js.",
  "Rahul's AI and data science toolkit includes NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, and Jupyter.",
  "Rahul's tools include Git, AWS, GitHub Actions, and CI/CD pipelines.",
  "Rahul's databases include MongoDB, MySQL, and PostgreSQL.",
  "Rahul's competitive programming profiles include LeetCode (300+ problems solved, 50+ day streak), Codeforces (70+ problems, 1133 rating Newbie), and CodeChef (1453 rating 2 Star). He specializes in C++ STL, mathematical optimizations, greedy algorithms, graph theory, and combinatorial logic.",
  "Rahul's projects include the AI Notes Generator (Next.js, BullMQ, Redis, Gemini AI), available at https://ai-notes-generator-omega.vercel.app/.",
  "You can contact Rahul via email at rahul9199140817@gmail.com, on LinkedIn (/in/rahul-kumar-20r123), or on GitHub (r4-rahul123)."
];

function retrieveContext() {
  // For a small knowledge base, it's best to provide the full context to the LLM
  // so it never misses out on details.
  return RAG_KNOWLEDGE_BASE.join(' ');
}

// Maximum allowed length for a user message to prevent abuse / oversized prompts.
const MAX_MESSAGE_LENGTH = 1000;

// Fast, widely-available Gemini model. Change here if you want a different one.
const GEMINI_MODEL = 'gemini-3.6-flash';

// Keyword-based fallback so the bot still gives useful answers when the AI
// provider is unavailable (no key, rate limited, or network error).
function keywordFallback(message) {
  const m = message.toLowerCase().trim();
  // Friendly greeting when the user just says hi/hello/hey etc.
  if (/^(hi|hello|hey|hlo|helo|yo|hola|namaste|hii+|heyy+)\b/.test(m) || m === 'hi' || m === 'hey') {
    return "Hey there! 👋 I'm Rahul's assistant. How can I help you today? You can ask me about his **skills**, **projects**, **competitive programming**, or how to **contact** him.";
  }
  if (m.includes('skill') || m.includes('tech')) {
     return "Rahul knows **Python, PHP, C++, JavaScript, SQL**, and works with frameworks like **React, Node.js, and Next.js**. He also uses **AWS, GitHub Actions, CI/CD**, and databases like **MongoDB, MySQL, PostgreSQL**.";
  }
  if (m.includes('competitive') || m.includes('leetcode') || m.includes('codeforces')) {
     return "Rahul is a **Codeforces Newbie (1133)**, **CodeChef 2-Star (1453)**, and has solved **300+ problems on LeetCode** with a 50+ day streak. He specializes in **C++ STL, mathematical optimizations, greedy algorithms, and graph theory**.";
  }
  if (m.includes('contact')) {
    return "You can reach Rahul via email at **rahul9199140817@gmail.com** or connect with him on **LinkedIn (/in/rahul-kumar-20r123)**.";
  }
  if (m.includes('project')) {
     return "Rahul has built awesome projects like **AI Notes Generator** (Next.js, BullMQ, Gemini AI). You can try it live at https://ai-notes-generator-omega.vercel.app/.";
  }
  if (m.includes('education') || m.includes('college') || m.includes('study')) {
    return "Rahul is a **B.Tech Computer Science & Engineering** student at **IIITDM Jabalpur** (2024–2028).";
  }
  return "I can tell you about Rahul's **skills**, **projects**, **competitive programming**, **education**, or how to **contact** him. What would you like to know?";
}

export async function POST(request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { reply: "Invalid request. Expected a JSON body with a 'message' field." },
        { status: 400 }
      );
    }

    const message = typeof body?.message === 'string' ? body.message.trim() : '';

    // 0. Validation Phase
    if (!message) {
      return NextResponse.json(
        { reply: "Please enter a message so I can help you." },
        { status: 400 }
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { reply: `Your message is too long. Please keep it under ${MAX_MESSAGE_LENGTH} characters.` },
        { status: 400 }
      );
    }

    // 1. Context Phase
    const contextText = retrieveContext();
    
    // 2. Generation Phase
    let reply = '';

    // Use Google Gemini if a key is configured; otherwise fall back to keywords.
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      const systemPrompt = `You are a helpful, friendly, and professional AI assistant for Rahul Kumar's personal portfolio website. 
Your job is to answer questions about Rahul, his skills, education, and projects to impress recruiters and visitors.
Use the following context to answer the user's questions accurately. If the answer is not in the context, politely say that you don't have that specific information but provide his contact email (rahul9199140817@gmail.com).
Do not break character. Do not say "Based on the context". Keep answers concise and well-formatted using markdown.

CONTEXT ABOUT RAHUL:
${contextText}`;

      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-goog-api-key': apiKey
            },
            body: JSON.stringify({
              systemInstruction: {
                parts: [{ text: systemPrompt }]
              },
              contents: [
                {
                  role: 'user',
                  parts: [{ text: message }]
                }
              ]
            })
          }
        );

        if (!res.ok) {
          const errText = await res.text().catch(() => '');
          console.error(`Gemini API responded with status ${res.status}. Body:`, errText);
          // Rate-limited: let the user know it's temporary, then still give a useful answer.
          if (res.status === 429) {
            reply = `I'm getting a lot of requests right now, so here's a quick answer:\n\n${keywordFallback(message)}`;
          } else {
            reply = keywordFallback(message);
          }
        } else {
          const data = await res.json();
          reply =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            keywordFallback(message);
        }
      } catch (fetchError) {
        console.error("Failed to reach Gemini API:", fetchError);
        reply = keywordFallback(message);
      }
    } else {
      // No API key configured — use the keyword-based fallback.
      reply = keywordFallback(message);
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ reply: "Error processing your request." }, { status: 500 });
  }
}
