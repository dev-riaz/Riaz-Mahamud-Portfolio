import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "Riaz Mahamud | Jr.Fullstack Developer",
  description: "I'm Riaz Mahamud, a Jr,Fullstack Developer skilled in React, Next.js, JavaScript, Tailwind CSS, Node.js, Express.js, and MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
