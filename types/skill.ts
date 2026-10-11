import { ReactNode } from "react";

export type SkillLevel = "Básico" | "Básico a Intermediário" | "Intermediário" | "Avançado";

export interface SkillItemData {
  name: string;
  level: SkillLevel;
  desc: string;
}

export interface SkillCategoryData {
  title: string;
  icon: ReactNode;
  items: SkillItemData[];
}
