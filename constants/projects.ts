import { Project, ProjectCategory } from "@/types/project";

export const PROJECTS_DATA: Project[] = [
  {
    id: "cli-portfolio",
    title: "Portfólio Interativo CLI",
    subtitle: "Web Terminal & Portfólio Moderno",
    description:
      "Portfólio interativo construído com Next.js 16 e React 19, simulando um terminal zsh com histórico de comandos, navegação suave e design dark tech de alta performance.",
    category: "fullstack",
    tags: ["Next.js 16", "React 19", "Tailwind CSS v4", "TypeScript"],
    githubUrl: "https://github.com/Matheus-fsb/portfolio-matheus",
    demoUrl: "#terminal",
    status: "finalizado",
  },
  {
    id: "to-do-list-api",
    title: "API RESTful To Do List",
    subtitle: "Serviço de To Do List básico",
    description:
      "API escalável desenvolvida com Node.js e TypeScript. Faz gerenciamento de usuários, projetos e tarefas, com autenticação JWT, verificação de email, controle de acesso por perfil, paginação, filtros, soft delete e testes automatizados.",
    category: "backend",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "JWT", "Prisma"],
    githubUrl: "https://github.com/Matheus-fsb/todo-list-api",
    status: "finalizado",
  },
  {
    id: "node-graph",
    title: "Node Graph",
    subtitle: "Algoritmo de Cálculo Estatístico",
    description:
      "NodeGraph é um sistema Node.js desenvolvido para gerar relatórios gráficos estatísticos com base em dados de pesquisas. Ele processa dados agrupados em classes, calcula estatísticas como média e variância, e gera uma imagem (PNG) contendo um gráfico e os dados analisados.",
    category: "algorithms",
    tags: ["JavaScript", "Algoritmos", "Estatística"],
    githubUrl: "https://github.com/Matheus-fsb/NodeGraph",
    status: "finalizado",
  },
  {
    id: "tlint",
    title: "Tlint: Gestão Financeira",
    subtitle: "Sistema de Gestão Financeira",
    description:
      "O Tlint é um projeto de gestão financeira desenvolvido em Java, pensado para ajudar pessoas a organizar melhor seu dinheiro. A proposta é permitir o gerenciamento de cofres, carteiras e metas financeiras, facilitando o acompanhamento de saldos e o planejamento dos objetivos pessoais.",
    category: "fullstack",
    tags: ["Java", "SpringBoot", "Maven", "PostgreSQL"],
    githubUrl: "https://github.com/Tlint-Gestao-Financeira",
    status: "em_andamento",
  },
];

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  all: "Todos",
  backend: "Backend & APIs",
  fullstack: "Full Stack",
  algorithms: "Algoritmos",
};
