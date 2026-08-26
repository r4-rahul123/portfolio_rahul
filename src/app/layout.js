import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rahul | Web Designer and Front-end Developer",
  description: "Personal portfolio of Rahul, a web designer and front-end developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={firaCode.variable}>
      <body>{children}</body>
    </html>
  );
}
