export type SectionKey = "sobre" | "projetos" | "skills" | "jornada" | "contato";

export type NavItemKey = SectionKey | "terminal";

export interface NavLinkItem {
  name: string;
  key: NavItemKey;
}
