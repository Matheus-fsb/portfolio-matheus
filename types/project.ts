export type ProjectCategory = "all" | "backend" | "fullstack" | "algorithms";

export type ProjectStatus = "finalizado" | "em_andamento";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: Exclude<ProjectCategory, "all">;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  status: ProjectStatus;
}

export interface CategoryFilter {
  id: ProjectCategory;
  label: string;
  count: number;
}
