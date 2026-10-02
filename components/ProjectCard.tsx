import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { TechnologyBadges } from "@/components/TechnologyBadges";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li>
      <Link
        href={`/projects/${project.slug}`}
        className="group block rounded-2xl border border-zinc-200 p-6 outline-none transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:ring-2 focus-visible:ring-ring sm:p-8 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-900/50"
      >
        <h3 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl dark:text-zinc-50">
          {project.title}
          <ChevronRight
            aria-hidden="true"
            className="size-5 shrink-0 text-zinc-400 transition-transform group-hover:translate-x-1"
          />
        </h3>
        <p className="mt-3 leading-7 text-zinc-500 dark:text-zinc-400">
          {project.summary}
        </p>
        <TechnologyBadges
          technologies={project.technologies}
          className="mt-5"
        />
      </Link>
    </li>
  );
}
