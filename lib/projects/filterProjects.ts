import { Project, ProjectCategory, CategoryFilter } from "@/types/project";
import { PROJECT_CATEGORY_LABELS } from "@/constants/projects";

export function getProjectCategories(projects: Project[]): CategoryFilter[] {
  const categoryKeys: ProjectCategory[] = ["all", "backend", "fullstack", "algorithms"];

  return categoryKeys.map((cat) => ({
    id: cat,
    label: PROJECT_CATEGORY_LABELS[cat],
    count: cat === "all" ? projects.length : projects.filter((p) => p.category === cat).length,
  }));
}

export function filterProjectsByCategory(
  projects: Project[],
  category: ProjectCategory
): Project[] {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
}
