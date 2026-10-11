import { Code2, Server, Database, Layout } from "lucide-react";
import { SkillCategoryData } from "@/types/skill";

export const SKILLS_DATA: SkillCategoryData[] = [
  {
    title: "Linguagens de Programação",
    icon: <Code2 size={20} className="text-blue-400" />,
    items: [
      { name: "JavaScript", level: "Intermediário", desc: "Desenvolvimento Web, Node.js" },
      { name: "TypeScript", level: "Intermediário", desc: "APIs REST, Express, Tipagem Estática" },
      { name: "C / C++", level: "Básico a Intermediário", desc: "Algoritmos, Recursão, Ponteiros" },
      { name: "Java", level: "Básico", desc: "POO, Collections, Spring Boot" },
      { name: "SQL", level: "Intermediário", desc: "PostgreSQL, MySQL, Consultas e Modelagem" },
    ],
  },
  {
    title: "Backend & Arquitetura",
    icon: <Server size={20} className="text-cyan-400" />,
    items: [
      { name: "APIs REST", level: "Intermediário", desc: "Rotas, Controllers, Services e CRUD" },
      { name: "Node.js / Express", level: "Intermediário", desc: "Desenvolvimento de APIs com TypeScript" },
      { name: "Prisma ORM", level: "Básico", desc: "Modelagem, Relacionamentos e Migrations" },
      { name: "Insomnia", level: "Básico", desc: "Testes e Validação de APIs REST" },
    ],
  },
  {
    title: "Bancos de Dados & DevOps",
    icon: <Database size={20} className="text-purple-400" />,
    items: [
      { name: "PostgreSQL", level: "Intermediário", desc: "Modelagem relacional, Consultas e Migrations" },
      { name: "MySQL", level: "Intermediário", desc: "Consultas SQL e Modelagem de Dados" },
      { name: "Docker", level: "Básico", desc: "Containers, Docker Compose e Ambiente de Desenvolvimento" },
      { name: "Git & GitHub", level: "Intermediário", desc: "Versionamento, Commits, Branches e Repositórios" },
      { name: "Linux & Bash", level: "Básico", desc: "Terminal, Comandos Linux e Gerenciamento de Servidores" },
    ],
  },
  {
    title: "Frontend & Interfaces",
    icon: <Layout size={20} className="text-emerald-400" />,
    items: [
      { name: "React", level: "Básico", desc: "Componentes, Props e Hooks" },
      { name: "HTML & CSS", level: "Intermediário", desc: "Estruturação, Estilização e Layouts Responsivos" },
      { name: "Tailwind CSS", level: "Básico", desc: "Estilização de Interfaces" },
      { name: "UI/UX", level: "Básico", desc: "Organização Visual e Experiência do Usuário" },
    ],
  },
];
