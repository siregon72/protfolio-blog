import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ProjectDetails } from "@/components/ProjectDetails";
import { ProjectVisual } from "@/components/ProjectVisual";
import { TechnologyBadges } from "@/components/TechnologyBadges";
import { getProject, projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "프로젝트를 찾을 수 없습니다" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-24 pt-28 sm:px-10 sm:pb-32 sm:pt-36">
      <Link
        href="/projects"
        className="group inline-flex items-center gap-2 rounded-sm text-sm text-zinc-500 outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring dark:text-zinc-400"
      >
        <ArrowLeft
          aria-hidden="true"
          className="size-4 transition-transform group-hover:-translate-x-1"
        />
        모든 프로젝트
      </Link>

      <header className="mt-12 grid gap-8 sm:grid-cols-[1fr_0.45fr] sm:items-end">
        <div>
          <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
            <span>{project.englishTitle}</span>
            <span
              aria-hidden="true"
              className="size-1 rounded-full bg-zinc-300 dark:bg-zinc-700"
            />
            <span>{project.year}</span>
          </div>
          <h1
            className={cn(
              "mt-5 font-semibold tracking-[-0.055em] text-zinc-950 dark:text-zinc-50",
              project.caseStudy
                ? "text-3xl leading-tight sm:text-5xl lg:text-6xl"
                : "text-5xl sm:text-7xl",
            )}
          >
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
          <TechnologyBadges technologies={project.technologies} className="mt-6" />
        </div>
        <span className="w-fit rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-600 sm:justify-self-end dark:border-zinc-800 dark:text-zinc-400">
          {project.status}
        </span>
      </header>

      {!project.caseStudy && (
        <ProjectVisual
          image={project.image}
          alt={project.imageAlt}
          aspectRatio={project.imageAspectRatio}
          className={cn(
            "mt-12 sm:mt-16",
            project.imageAspectRatio
              ? "rounded-xl"
              : "rounded-[2rem] sm:rounded-[2.5rem]",
          )}
        />
      )}

      <ProjectDetails project={project} />
    </main>
  );
}
