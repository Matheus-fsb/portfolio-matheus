import { GraduationCap, Award, BookOpen } from "lucide-react";
import { TimelineStepData } from "@/types/timeline";

export const TIMELINE_DATA: TimelineStepData[] = [
  {
    title: "Ciência da Computação (Bacharelado)",
    institution: "Universidade Federal de Alagoas (UFAL)",
    period: "2026 — 2030 (Em andamento)",
    location: "Maceió, AL",
    badge: "Ensino Superior",
    badgeColor: "border-blue-500/40 text-blue-400 bg-blue-500/10",
    icon: <GraduationCap size={20} className="text-blue-400" />,
    description:
      "Formação acadêmica sólida focada em fundamentos teóricos da computação, estruturas de dados avançadas, análise de algoritmos, inteligência artificial e arquitetura de computadores.",
    highlights: ["Algoritmos & Complexidade", "Sistemas Operacionais", "Engenharia de Software"],
  },
  {
    title: "Técnico em Desenvolvimento de Sistemas",
    institution: "Instituto Federal de Alagoas (IFAL)",
    period: "2022 — 2025",
    location: "Maceió, AL",
    badge: "Formação Técnica",
    badgeColor: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
    icon: <Award size={20} className="text-cyan-400" />,
    description:
      "Formação integrada ao curso técnico em Desenvolvimento de Sistemas, onde tive meus primeiros contatos com programação, lógica computacional e desenvolvimento de aplicações.",
    highlights: ["Bancos de Dados Relacionais", "Desenvolvimento Web & Backend", "Lógica da Programação"],
  },
  {
    title: "Ensino Médio com Técnico Integrado",
    institution: "Instituto Federal de Alagoas (IFAL)",
    period: "2022 — 2025",
    location: "Maceió, AL",
    badge: "Ensino Médio",
    badgeColor: "border-purple-500/40 text-purple-400 bg-purple-500/10",
    icon: <BookOpen size={20} className="text-purple-400" />,
    description:
      "Concluí o Ensino Médio no IFAL, conciliando as disciplinas da formação geral com os estudos do curso técnico integrado.",
    highlights: ["Formação Geral", "Projetos Acadêmicos", "Trabalho em Equipe"],
  },
];
