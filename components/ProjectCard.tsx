import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProjectVisual } from "@/components/ProjectVisual";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <li>
      <Link
        href={`/projects/${project.slug}`}
        className="group grid gap-6 border-t border-zinc-200 py-8 outline-none sm:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] sm:items-center sm:py-10 dark:border-zinc-800"
      >
        <ProjectVisual
          type={project.visual}
          title={project.title}
          className="aspect-[16/10] rounded-3xl transition duration-500 group-hover:-translate-y-1 group-hover:shadow-xl group-focus-visible:-translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-zinc-900 group-focus-visible:ring-offset-4 dark:group-focus-visible:ring-zinc-100 dark:group-focus-visible:ring-offset-zinc-950"
        />

        <div className="sm:px-3">
          <div className="flex items-center justify-between gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span>{project.year}</span>
          </div>
          <h2 className="mt-8 flex items-start justify-between gap-5 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50">
            {project.title}
            <ArrowUpRight
              aria-hidden="true"
              className="mt-1 size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </h2>
          <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
            {project.summary}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="사용 기술">
            {project.technologies.slice(0, 3).map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 transition-colors group-hover:border-zinc-400 dark:border-zinc-800 dark:text-zinc-400 dark:group-hover:border-zinc-600"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </li>
  );
}
