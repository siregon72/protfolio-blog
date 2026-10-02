import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Wrench } from "lucide-react";
import { ProjectVisual } from "@/components/ProjectVisual";
import { TechnologyBadges } from "@/components/TechnologyBadges";
import { getProject, projects } from "@/lib/projects";

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
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.055em] text-zinc-950 sm:text-7xl dark:text-zinc-50">
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

      <ProjectVisual
        image={project.image}
        alt={project.imageAlt}
        aspectRatio={project.imageAspectRatio}
        className={`mt-12 aspect-[16/9] sm:mt-16 ${project.imageAspectRatio ? "rounded-xl" : "rounded-[2rem] sm:rounded-[2.5rem]"}`}
      />

      <div className="mt-20 space-y-24">
        <section aria-labelledby="contribution-heading">
          <SectionLabel>What I did</SectionLabel>
          <h2
            id="contribution-heading"
            className="mt-4 text-3xl font-semibold tracking-tight"
          >
            {project.category === "subproject" ? "주요 기능 및 구현" : "주요 기여"}
          </h2>
          <ul className="mt-8 space-y-4">
            {project.contributions.map((contribution) => (
              <li
                key={contribution}
                className="flex gap-4 leading-7 text-zinc-700 dark:text-zinc-300"
              >
                <span className="mt-1.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950">
                  <Check
                    aria-hidden="true"
                    className="size-3"
                    strokeWidth={3}
                  />
                </span>
                {contribution}
              </li>
            ))}
          </ul>
        </section>

        {project.learnings && project.learnings.length > 0 && (
          <section aria-labelledby="learnings-heading">
            <SectionLabel>What I learned</SectionLabel>
            <h2
              id="learnings-heading"
              className="mt-4 text-3xl font-semibold tracking-tight"
            >
              배운 점
            </h2>
            <ul className="mt-8 list-disc space-y-4 pl-5 leading-7 text-zinc-700 marker:text-zinc-400 dark:text-zinc-300">
              {project.learnings.map((learning) => (
                <li key={learning}>{learning}</li>
              ))}
            </ul>
          </section>
        )}

        {project.troubleshooting.length > 0 && (
          <section aria-labelledby="troubleshooting-heading">
            <SectionLabel>Troubleshooting</SectionLabel>
            <div className="mt-4 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900">
                <Wrench aria-hidden="true" className="size-5" />
              </span>
              <h2
                id="troubleshooting-heading"
                className="text-3xl font-semibold tracking-tight"
              >
                문제 해결 과정
              </h2>
            </div>

            <div className="mt-8 space-y-6">
              {project.troubleshooting.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-zinc-200 p-6 sm:p-8 dark:border-zinc-800"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-sm text-zinc-400 dark:text-zinc-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <dl className="mt-7 space-y-6 sm:ml-9">
                    <TroubleItem label="문제" text={item.problem} />
                    <TroubleItem label="해결" text={item.solution} />
                    <TroubleItem label="결과" text={item.result} />
                  </dl>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
      {children}
    </p>
  );
}

function TroubleItem({ label, text }: { label: string; text: string }) {
  return (
    <div className="grid gap-2 sm:grid-cols-[3.5rem_1fr] sm:gap-4">
      <dt className="text-sm font-semibold text-zinc-950 dark:text-zinc-100">
        {label}
      </dt>
      <dd className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        {text}
      </dd>
    </div>
  );
}
