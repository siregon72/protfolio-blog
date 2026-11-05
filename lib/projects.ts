import { projects } from "@/lib/data/projects";
import type { Project, ProjectCategory } from "@/lib/types/project";

export { projects };
export type { Project };

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects
    .filter((project) => project.category === category)
    .sort(
      (first, second) =>
        Number(Boolean(second.featured)) - Number(Boolean(first.featured)),
    );
}

export const projectSections = [
  {
    id: "main-projects-heading",
    title: "Projects",
    label: "프로젝트 목록",
    projects: getProjectsByCategory("project"),
  },
  {
    id: "sub-projects-heading",
    title: "Sub Projects",
    label: "서브 프로젝트 목록",
    projects: getProjectsByCategory("subproject"),
  },
] as const;
