import { ReactNode } from "react";
import { SectionKey } from "./navigation";

export interface CommandLog {
  id: string;
  command: string;
  output: ReactNode;
  time: string;
}

export interface TerminalProps {
  activeSection?: SectionKey | null;
  onSelectSection?: (section: SectionKey | null) => void;
}

export interface TerminalMenuItem {
  key: string;
  command: string;
  label: string;
  sectionKey?: SectionKey;
}
