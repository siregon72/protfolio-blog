import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projectSections } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "최시훈의 프로젝트와 문제 해결 과정을 소개합니다.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-15 pt-28 sm:px-10 sm:pb-28 sm:pt-40">
      <h1 className="sr-only">Projects</h1>
      <div className="space-y-20">
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
