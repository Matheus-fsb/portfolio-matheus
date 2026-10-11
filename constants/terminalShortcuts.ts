import { TerminalMenuItem } from "@/types/terminal";

export const TERMINAL_PAGE_COMMANDS: TerminalMenuItem[] = [
  { key: "sobre", command: "sobre", label: "1. sobre mim", sectionKey: "sobre" },
  { key: "projetos", command: "projetos", label: "2. projetos", sectionKey: "projetos" },
  { key: "skills", command: "skills", label: "3. habilidades", sectionKey: "skills" },
  { key: "jornada", command: "jornada", label: "4. jornada", sectionKey: "jornada" },
  { key: "contato", command: "contato", label: "5. contato", sectionKey: "contato" },
];

export const TERMINAL_ACTION_COMMANDS: TerminalMenuItem[] = [
  { key: "curriculo", command: "curriculo", label: "curriculo" },
  { key: "fechar", command: "fechar", label: "fechar" },
  { key: "clear", command: "clear", label: "clear" },
];
