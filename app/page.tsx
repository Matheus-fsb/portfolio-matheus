"use client";

import { useState } from "react";
import Image from "next/image";
import starIcon from "@/app/images/star.svg";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";
import Terminal from "@/components/Terminal";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import { SectionKey } from "@/types/navigation";
import { X } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionKey | null>(null);

  return (
    <div className="relative min-h-screen bg-[#07080d] text-zinc-100 flex flex-col selection:bg-blue-500/30 selection:text-white">
      {/* Background Animated Particle Canvas */}
      <ParticlesBackground />

      {/* Ambient Top Glow Orbs (Suaves e Minimalistas) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Floating Navigation HUD */}
      <Navbar
        activeSection={activeSection}
        onSelectSection={(sec) => setActiveSection(sec)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 flex flex-col items-center relative z-10">
        {/* Hero Header Area */}
        <div className="w-full text-center flex flex-col items-center mb-8">
          {/* Estrela de Identidade Branca do Matheus */}
          <div className="mb-6 flex items-center justify-center">
            <Image
              src={starIcon}
              alt="Matheus Star"
              width={32}
              height={32}
              priority
              className="w-8 h-7"
            />
          </div>

          <div className="mt-5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-400 mb-5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-zinc-200">Terminal CLI v2.1</span>
            <span className="text-zinc-600">•</span>
            <span>Maceió, AL</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl">
            Olá! Bem-vindo ao meu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r bg-linear-to-r from-blue-400 via-cyan-400 to-indigo-400">
              portfólio.
            </span>
          </h1>

          <p className="mt-4 text-xs sm:text-sm text-zinc-400 max-w-lg font-sans leading-relaxed">
            Digite um comando no terminal abaixo para navegar pelo site.
          </p>
        </div>

        {/* The Interactive Terminal Component */}
        <div className="w-full mb-8 mt-5">
          <Terminal
            activeSection={activeSection}
            onSelectSection={(sec) => setActiveSection(sec)}
          />
        </div>

        {/* DYNAMIC SECTION CONTAINER */}
        <div id="active-section-container" className="w-full scroll-mt-24">
          {activeSection !== null && (
            <div key={activeSection} className="w-full animate-section-enter">
              {/* Section HUD / Header control bar */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-6 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-zinc-500">SEÇÃO ATIVA:</span>
                  <span className="text-cyan-300 font-bold uppercase tracking-wider">{activeSection}</span>
                </div>
                <button
                  onClick={() => setActiveSection(null)}
                  className="px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-rose-500/20 border border-zinc-800 hover:border-rose-500/30 text-zinc-400 hover:text-rose-300 transition-colors cursor-pointer flex items-center gap-1.5"
                  title="Fechar seção ativa"
                >
                  <X size={13} />
                  <span>Fechar seção</span>
                </button>
              </div>

              {/* Render only the active section */}
              {activeSection === "sobre" && <About />}
              {activeSection === "projetos" && <Projects />}
              {activeSection === "skills" && <Skills />}
              {activeSection === "jornada" && <Timeline />}
              {activeSection === "contato" && <Contact />}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}