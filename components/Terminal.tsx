"use client";

import { Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";
import { TerminalProps } from "@/types/terminal";
import {
  TERMINAL_PAGE_COMMANDS,
  TERMINAL_ACTION_COMMANDS,
} from "@/constants/terminalShortcuts";
import { useTerminal } from "@/hooks/useTerminal";

export default function Terminal({ activeSection, onSelectSection }: TerminalProps) {
  const {
    inputVal,
    setInputVal,
    history,
    isMinimized,
    inputRef,
    handleCommand,
    handleKeyDown,
    fillCommand,
    clearTerminal,
    toggleMinimized,
  } = useTerminal({ onSelectSection });

  return (
    <section id="terminal" className="relative w-full mx-auto">
      {/* Subtle Glow Backdrop */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/15 via-cyan-500/15 to-purple-600/15 opacity-60 blur-2xl -z-10 animate-glow pointer-events-none" />

      {/* Terminal Container */}
      <div className="relative w-full bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/70 rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-zinc-900/50 border-b border-zinc-800/60 select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={clearTerminal}
              title="Limpar terminal"
              className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors cursor-pointer"
            />
            <button
              onClick={toggleMinimized}
              title="Minimizar"
              className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors cursor-pointer"
            />
            <button
              onClick={() => handleCommand("help")}
              title="Ajuda"
              className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors cursor-pointer"
            />
            <span className="ml-3 text-xs font-mono text-zinc-400 hidden sm:inline-flex items-center gap-1.5">
              <TerminalIcon size={13} className="text-blue-400" />
              <span>matheus@portfolio: ~ (zsh)</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {activeSection && (
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/30">
                ativa: {activeSection}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              online
            </span>
          </div>
        </div>

        {/* Terminal Body */}
        {!isMinimized && (
          <div
            className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-zinc-300 min-h-[240px] max-h-[420px] overflow-y-auto space-y-3 cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Welcome Banner */}
            <div className="space-y-2 pb-2">
              <div className="flex items-center gap-2 text-zinc-400 text-xs">
                <span className="text-emerald-400 font-bold">●</span>
                <span>Sessão bash iniciada • auto-clear ativo</span>
              </div>

              <div className="text-zinc-200 text-xs sm:text-sm leading-relaxed">
                <p>Olá! Digite ou clique na seção desejada para navegar:</p>
              </div>

              {/* Text Navigation Commands - Cada página separada por quebra de linha */}
              <div className="pt-2 pb-1 space-y-1.5 text-xs sm:text-sm">
                {TERMINAL_PAGE_COMMANDS.map((item) => {
                  const isSelected = activeSection === item.sectionKey;
                  return (
                    <div key={item.key}>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          fillCommand(item.command);
                        }}
                        className={`group inline-flex items-center gap-2 text-left transition-all cursor-pointer ${
                          isSelected
                            ? "text-cyan-400 font-bold"
                            : "text-zinc-400 hover:text-cyan-300 hover:translate-x-1"
                        }`}
                        title={`Clique para digitar "${item.command}" no terminal`}
                      >
                        <span className="text-zinc-600 group-hover:text-cyan-400 transition-colors">
                          {isSelected ? "●" : ">"}
                        </span>
                        <span className="group-hover:underline underline-offset-4">
                          {item.label}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded font-normal bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                            [ativa]
                          </span>
                        )}
                      </button>
                    </div>
                  );
                })}

                {/* Comandos de utilidade */}
                <div className="pt-2.5 border-t border-zinc-800/60 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-zinc-500">
                  {TERMINAL_ACTION_COMMANDS.map((item) => {
                    if (item.key === "fechar" && !activeSection) return null;
                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          fillCommand(item.command);
                        }}
                        className="group inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
                        title={`Clique para digitar "${item.command}" no terminal`}
                      >
                        <span className="text-zinc-600 group-hover:text-zinc-400">&gt;</span>
                        <span className="group-hover:underline underline-offset-4">
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Latest History Output */}
            {history.map((item) => (
              <div key={item.id} className="space-y-1 animate-in fade-in duration-150">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <span className="text-emerald-400 font-bold">➜</span>
                  <span className="text-cyan-400 font-semibold">matheus@portifolio:~$</span>
                  <span className="text-[10px] text-zinc-500 ml-auto font-sans">{item.time}</span>
                </div>
                <div className="pl-4 py-0.5 border-l-2 border-zinc-800 text-zinc-200">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Active Input Line */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-emerald-400 font-bold">➜</span>
              <span className="text-cyan-400 font-semibold hidden sm:inline">matheus@portifolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="digite o comando e aperte enter..."
                className="flex-1 bg-transparent border-none outline-none text-zinc-100 font-mono text-xs sm:text-sm placeholder:text-zinc-600 focus:ring-0"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
              <button
                type="button"
                onClick={() => handleCommand(inputVal)}
                aria-label="Executar comando"
                className="text-zinc-500 hover:text-blue-400 p-1 transition cursor-pointer"
              >
                <CornerDownLeft size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Terminal Footer Info Bar */}
        <div className="px-4 py-2 bg-zinc-900/40 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
          <span className="hidden sm:inline">Clique no texto para digitar • Aperte Enter para executar</span>
          <span className="sm:hidden">Clique para digitar, Enter para rodar</span>
          <span className="text-zinc-400">v2.1 • clean-cli</span>
        </div>
      </div>
    </section>
  );
}