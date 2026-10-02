import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "최시훈의 프로젝트와 문제 해결 과정을 소개합니다.",
};

const projectSections = [
  {
    id: "main-projects-heading",
    title: "Projects",
    label: "프로젝트 목록",
    projects: projects
      .filter((project) => project.category === "project")
      .sort(
        (first, second) =>
          Number(second.slug === "soundmotion") -
          Number(first.slug === "soundmotion"),
      ),
  },
  {
    id: "sub-projects-heading",
    title: "Sub Projects",
    label: "서브 프로젝트 목록",
    projects: projects.filter((project) => project.category === "subproject"),
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-15 pt-15 sm:px-10 sm:pb-28 sm:pt-40">
      <h1 className="text-5xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-7xl dark:text-zinc-50">
        Projects
      </h1>
      <div className="mt-16 space-y-20 sm:mt-24">
        {projectSections.map((section) => (
          <section key={section.id} aria-labelledby={section.id}>
            <h2
              id={section.id}
              className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
            >
              {section.title}
            </h2>
            <ul className="mt-8 grid gap-4" aria-label={section.label}>
              {section.projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
