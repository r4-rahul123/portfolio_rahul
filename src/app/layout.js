import { Fira_Code } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider/ThemeProvider";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://rahul-portfolio.vercel.app"),
  title: "Rahul Kumar | Web Designer & Front-end Developer",
  description:
    "Personal portfolio of Rahul Kumar, a B.Tech CSE student at IIITDM Jabalpur and front-end developer skilled in React, Next.js, Node.js and AI/ML. Explore his projects, skills, and competitive programming achievements.",
  keywords: [
    "Rahul Kumar",
    "portfolio",
    "front-end developer",
    "web designer",
    "React",
    "Next.js",
    "Node.js",
    "IIITDM Jabalpur",
    "competitive programming",
    "AI/ML",
  ],
  authors: [{ name: "Rahul Kumar" }],
  creator: "Rahul Kumar",
  openGraph: {
    title: "Rahul Kumar | Web Designer & Front-end Developer",
    description:
      "Explore Rahul Kumar's portfolio — projects, skills, and competitive programming achievements in web development and AI/ML.",
    type: "website",
    locale: "en_US",
    siteName: "Rahul Kumar Portfolio",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Rahul Kumar — Front-end Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Kumar | Web Designer & Front-end Developer",
    description:
      "Explore Rahul Kumar's portfolio — projects, skills, and competitive programming achievements.",
    images: ["/hero.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={firaCode.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
