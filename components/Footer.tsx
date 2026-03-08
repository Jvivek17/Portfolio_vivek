"use client";
import { Mail, Phone, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full relative z-10 mt-20">
      {/* Subtle top glowing divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50" />

      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center">
        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10">
          <a
            href="mailto:lakshmj2@umbc.edu"
            className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors group"
          >
            <div className="p-2 rounded-full bg-slate-800/50 group-hover:bg-indigo-500/10 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <span className="font-medium">lakshmj2@umbc.edu</span>
          </a>

          <a
            href="tel:+14106278205"
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <div className="p-2 rounded-full bg-slate-800/50 group-hover:bg-cyan-500/10 transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <span className="font-medium">+1 410-627-8205</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group"
          >
            <div className="p-2 rounded-full bg-slate-800/50 group-hover:bg-blue-500/10 transition-colors">
              <Linkedin className="w-5 h-5" />
            </div>
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-3xl border-t border-slate-800/50 pt-8 gap-4 text-sm text-slate-500">
          <p>© 2026 Lakshmi Vivek J. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-slate-300 transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
