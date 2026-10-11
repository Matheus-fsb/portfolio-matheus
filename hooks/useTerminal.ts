"use client";

import { useState, useRef, KeyboardEvent } from "react";
import { CommandLog } from "@/types/terminal";
import { SectionKey } from "@/types/navigation";
import { executeTerminalCommand } from "@/lib/terminal/commandHandler";

interface UseTerminalProps {
  onSelectSection?: (section: SectionKey | null) => void;
}

export function useTerminal({ onSelectSection }: UseTerminalProps = {}) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [pastCommands, setPastCommands] = useState<string[]>([]);
  const [isMinimized, setIsMinimized] = useState(false);

  const idRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const getTime = () => {
    const now = new Date();
    return now.toTimeString().split(" ")[0];
  };

  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    setPastCommands((prev) => [...prev, trimmed]);
    setHistoryIndex(null);

    const result = executeTerminalCommand(
      trimmed,
      onSelectSection,
      () => handleCommand("help")
    );

    if (result.clearRequested) {
      setHistory([]);
      setInputVal("");
      return;
    }

    if (result.output) {
      idRef.current += 1;
      // Auto-clear: mantém apenas o log do comando atual, evitando poluição visual
      setHistory([
        {
          id: String(idRef.current),
          command: rawCmd,
          output: result.output,
          time: getTime(),
        },
      ]);
    }

    setInputVal("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (pastCommands.length === 0) return;
      const nextIndex =
        historyIndex === null
          ? pastCommands.length - 1
          : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(pastCommands[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= pastCommands.length) {
        setHistoryIndex(null);
        setInputVal("");
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(pastCommands[nextIndex]);
      }
    }
  };

  const clearTerminal = () => {
    setHistory([]);
    setInputVal("");
  };

  const fillCommand = (cmd: string) => {
    setInputVal(cmd);
    inputRef.current?.focus();
  };

  const toggleMinimized = () => {
    setIsMinimized((prev) => !prev);
  };

  return {
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
  };
}
