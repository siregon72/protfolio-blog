import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { SubProjectCard } from "@/components/SubProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "최시훈의 프로젝트와 문제 해결 과정을 소개합니다.",
};

export default function ProjectsPage() {
  const mainProjects = projects.filter(
    (project) => project.category === "project",
  );
  const subProjects = projects.filter(
    (project) => project.category === "subproject",
  );

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-15 pt-15 sm:px-10 sm:pb-28 sm:pt-40">
      <section aria-labelledby="projects-heading">
        <h1
          id="projects-heading"
          className="text-5xl font-semibold `tracking-[-0.05em]` text-zinc-950 sm:text-7xl dark:text-zinc-50"
        >
          Projects
        </h1>
      </section>

      <div className="mt-16 space-y-20 sm:mt-24">
        <section aria-labelledby="main-projects-heading">
          <h2
            id="main-projects-heading"
            className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
          >
            Projects
          </h2>
          <ul className="mt-8" aria-label="프로젝트 목록">
            {mainProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </ul>
        </section>

        <section aria-labelledby="sub-projects-heading">
          <h2
            id="sub-projects-heading"
            className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
          >
            Sub Projects
          </h2>
          <ul className="mt-8 grid gap-4" aria-label="서브 프로젝트 목록">
            {subProjects.map((project) => (
              <SubProjectCard key={project.slug} project={project} />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
