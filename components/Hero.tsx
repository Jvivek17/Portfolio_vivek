"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";

export default function Hero() {
  const [showSplash, setShowSplash] = useState(true);

  // Splash screen timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1600); // 1.6 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-6">
      <AnimatePresence>
        {/* --- SPLASH SCREEN --- */}
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-slate-950"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-6"
            >
              LVJ
            </motion.div>
            {/* Smooth Loading Bar */}
            <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.2, ease: "circOut" }}
                className="w-full h-full bg-indigo-500 rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      {!showSplash && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl w-full text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm text-indigo-300 text-sm font-medium tracking-wide"
          >
            Available for Opportunities
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-100">
            <span className="block mb-2">Lakshmi Vivek J.</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              Software Development Engineer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Results-driven engineer with over 3 years of experience designing,
            developing, and deploying scalable Java-based applications and
            full-stack solutions across AWS, Salesforce, and GCP.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#experience"
              className="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] flex items-center gap-2"
            >
              View Experience
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="/Lakshmi_Vivek_J_Resume.pdf"
              download="Lakshmi_Vivek_J_Resume.pdf"
              className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 text-slate-200 font-semibold rounded-full transition-all backdrop-blur-md flex items-center gap-2 hover:border-indigo-500/50"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}
