"use client";

import { ArrowUp, Terminal } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-md text-zinc-500 py-10 px-4 mt-20 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Info */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400">
            <Terminal size={16} />
          </div>
          <div>
            <p className="font-mono text-xs text-zinc-300 font-semibold">
              Matheus Barros <span className="text-zinc-600">|</span> Portfólio & Terminal
            </p>
            <p className="text-[11px] font-mono text-zinc-500 mt-0.5">
              Construído com Next.js 16, React 19 & Tailwind CSS
            </p>
          </div>
        </div>

        {/* Center: status/greeting */}
        <div className="text-center font-mono text-xs text-zinc-500 hidden md:block">
          <span className="text-blue-500">&gt;</span> echo &quot;Obrigado pela visita!&quot;
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-400 hover:text-white transition-all cursor-pointer"
          title="Voltar ao topo"
        >
          <span>Voltar ao topo</span>
          <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
