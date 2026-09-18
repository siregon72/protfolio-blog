export type Project = {
  slug: string;
  title: string;
  englishTitle: string;
  summary: string;
  description: string;
  year: string;
  status: string;
  technologies: string[];
  image: string | null;
  imageAlt: string;
  contributions: string[];
  troubleshooting: {
    title: string;
    problem: string;
    solution: string;
    result: string;
  }[];
};

export const projects: Project[] = [];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
