import { NextResponse } from 'next/server';

// This is a simulated RAG document store
const RAG_KNOWLEDGE_BASE = [
  "Rahul Kumar is a B.Tech Computer Science and Engineering student at IIITDM Jabalpur (Aug 2024 - Aug 2028).",
  "Rahul is a passionate developer exploring scalable web applications and AI/ML.",
  "Rahul's skills include Python, PHP, C++, C, JavaScript, SQL, JAVA, HTML, CSS, TypeScript.",
  "Rahul uses frameworks like React, Redux, Tailwind CSS, Scikit, TensorFlow, Django, Node.js, Express.js, Next.js.",
  "Rahul's tools and databases include Pandas, NumPy, Matplotlib, GIT, PostgreSQL, MySQL, Jupyter, MongoDB.",
  "Rahul's competitive programming profiles include LeetCode (300+ problems solved, 50+ day streak), Codeforces (70+ problems, 1133 rating Newbie), and CodeChef (1453 rating 2 Star).",
  "Rahul's projects include AI Notes Generator (Next.js, BullMQ, Redis, Gemini AI) and Unified CP Tracker (PHP, MySQL).",
  "Rahul was on the Hackbyte 3.0 Sponsor Team at IIIT Jabalpur, securing sponsors for the event.",
  "You can contact Rahul via email at rahul9199140817@gmail.com, on LinkedIn (/in/rahul-kumar-20r123), or on GitHub (r4-rahul123)."
];

function retrieveContext() {
  // For a small knowledge base, it's best to provide the full context to the LLM
  // so it never misses out on details.
  return RAG_KNOWLEDGE_BASE.join(' ');
}

export async function POST(request) {
  try {
    const { message } = await request.json();
    
    // 1. Context Phase
    const contextText = retrieveContext();
    
    // 2. Generation Phase
    let reply = '';
    
    // If MISTRAL_API_KEY is provided in environment variables, use the real LLM
    const apiKey = process.env.MISTRAL_API_KEY || process.env.GEMINI_API_KEY;
    if (apiKey) {
      const res = await fetch("https://api.mistral.ai/v1/chat/completions", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "mistral-small-latest",
          messages: [
            { 
              role: "system", 
              content: `You are a helpful, friendly, and professional AI assistant for Rahul Kumar's personal portfolio website. 
Your job is to answer questions about Rahul, his skills, education, and projects to impress recruiters and visitors.
Use the following context to answer the user's questions accurately. If the answer is not in the context, politely say that you don't have that specific information but provide his contact email (rahul9199140817@gmail.com).
Do not break character. Do not say "Based on the context". Keep answers concise and well-formatted using markdown.

CONTEXT ABOUT RAHUL:
${contextText}` 
            },
            { 
              role: "user", 
              content: message 
            }
          ]
        })
      });
      
      const data = await res.json();
      reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response. Please try again.";
    } else {
      // Simulated Generation based on context (Fallback)
      if (message.toLowerCase().includes('skill') || message.toLowerCase().includes('tech')) {
        reply = "Rahul knows **Python, PHP, C++, JavaScript, SQL**, and works with frameworks like **React, Node.js, and Next.js**.";
      } else if (message.toLowerCase().includes('competitive') || message.toLowerCase().includes('leetcode') || message.toLowerCase().includes('codeforces')) {
        reply = "Rahul is a **Codeforces Newbie (1133)**, **CodeChef 2-Star (1453)**, and has solved **300+ problems on LeetCode** with a 50+ day streak.";
      } else if (message.toLowerCase().includes('contact')) {
        reply = "You can reach Rahul via email at **rahul9199140817@gmail.com** or connect with him on **LinkedIn (/in/rahul-kumar-20r123)**.";
      } else if (message.toLowerCase().includes('project')) {
        reply = "Rahul has built awesome projects like **AI Notes Generator** (Next.js, BullMQ, Gemini AI) and **Unified CP Tracker** (PHP, MySQL).";
      } else {
        reply = "I am a simple fallback bot. Please configure the `MISTRAL_API_KEY` for full AI chat. For now, know that Rahul is a passionate B.Tech student at IIITDM Jabalpur!";
      }
    }
    
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ reply: "Error processing your request." }, { status: 500 });
  }
}
