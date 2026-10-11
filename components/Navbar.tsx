"use client";

import { useState } from "react";
import { Terminal as TerminalIcon, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { SectionKey, NavItemKey } from "@/types/navigation";
import { NAV_LINKS } from "@/constants/navigation";
import { PROFILE } from "@/constants/profile";
import { useScrolled } from "@/hooks/useScrolled";

interface NavbarProps {
  activeSection: SectionKey | null;
  onSelectSection: (section: SectionKey) => void;
}

export default function Navbar({ activeSection, onSelectSection }: NavbarProps) {
  const scrolled = useScrolled(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (key: NavItemKey) => {
    setMobileMenuOpen(false);
    if (key === "terminal") {
      const el = document.getElementById("terminal");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      onSelectSection(key);
      setTimeout(() => {
        const el = document.getElementById("active-section-container");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:pt-6 transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto transition-all duration-300 rounded-2xl md:rounded-full border px-4 sm:px-6 py-3 flex items-center justify-between ${
          scrolled
            ? "bg-zinc-950/80 backdrop-blur-xl border-zinc-800/80 shadow-2xl shadow-blue-950/20"
            : "bg-zinc-950/50 backdrop-blur-md border-zinc-800/50"
        }`}
      >
        {/* Brand */}
        <a
          href="#terminal"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("terminal");
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:border-blue-400 group-hover:scale-105 transition duration-300">
            <TerminalIcon size={16} />
          </div>
          <span className="font-mono text-sm font-semibold text-white tracking-wider">
            matheus<span className="text-blue-400">_dev()</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = link.key !== "terminal" && activeSection === link.key;
            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.key)}
                className={`text-xs font-mono px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/25"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PROFILE.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/60 rounded-full transition-colors"
          >
            <GithubIcon size={18} />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg focus:outline-none"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-5xl mx-auto bg-zinc-950/95 backdrop-blur-2xl border border-zinc-800 rounded-2xl p-4 shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {NAV_LINKS.map((link) => {
            const isActive = link.key !== "terminal" && activeSection === link.key;
            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.key)}
                className={`text-left font-mono text-sm px-3 py-2.5 rounded-lg transition flex items-center justify-between ${
                  isActive
                    ? "bg-blue-600/30 text-blue-300 font-bold border border-blue-500/30"
                    : "text-zinc-300 hover:text-blue-400 hover:bg-zinc-900"
                }`}
              >
                <span>{link.name}</span>
                <ArrowUpRight size={14} className="text-zinc-500" />
              </button>
            );
          })}
          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between px-3 text-xs font-mono text-zinc-400">
            <span>Status:</span>
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Estudante de Ciência da Computação
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
