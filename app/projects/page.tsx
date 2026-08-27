import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "최시훈의 프로젝트와 문제 해결 과정을 소개합니다.",
};

export default function ProjectsPage() {
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

      <ul className="mt-16 sm:mt-24" aria-label="프로젝트 목록">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </ul>
    </main>
  );
}
