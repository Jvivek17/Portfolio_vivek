import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lakshmi Vivek Jagabathina | Software Development Engineer",
  description: "Portfolio of Lakshmi Vivek Jagabathina",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.className} text-slate-100 antialiased selection:bg-indigo-500/30`}
      >
        <AnimatedBackground />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
