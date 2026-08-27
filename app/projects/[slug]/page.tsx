import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  Clock3,
  Users,
  Wrench,
} from "lucide-react";
import { ProjectVisual } from "@/components/ProjectVisual";
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
            <span aria-hidden="true" className="size-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span>{project.year}</span>
          </div>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.055em] text-zinc-950 sm:text-7xl dark:text-zinc-50">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
        </div>
        <span className="w-fit rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-600 sm:justify-self-end dark:border-zinc-800 dark:text-zinc-400">
          {project.status}
        </span>
      </header>

      <ProjectVisual
        type={project.visual}
        title={project.title}
        className="mt-12 aspect-[16/9] rounded-[2rem] sm:mt-16 sm:rounded-[2.5rem]"
      />

      <section className="grid border-b border-zinc-200 py-10 sm:grid-cols-3 dark:border-zinc-800">
        <ProjectInfo icon={CalendarDays} label="기간" value={project.period} />
        <ProjectInfo icon={Users} label="팀 구성" value={project.team} />
        <ProjectInfo icon={Clock3} label="담당 역할" value={project.role} />
      </section>

      <div className="mt-20 grid gap-16 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-24">
        <aside>
          <p className="text-xs font-medium tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
            Tech stack
          </p>
          <ul className="mt-5 flex flex-wrap gap-2 lg:flex-col lg:items-start">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
              >
                {technology}
              </li>
            ))}
          </ul>
        </aside>

        <div className="space-y-24">
          <section aria-labelledby="highlights-heading">
            <SectionLabel>Overview</SectionLabel>
            <h2 id="highlights-heading" className="mt-4 text-3xl font-semibold tracking-tight">
              프로젝트 한눈에 보기
            </h2>
            <dl className="mt-8 grid grid-cols-3 divide-x divide-zinc-200 rounded-2xl border border-zinc-200 py-6 dark:divide-zinc-800 dark:border-zinc-800">
              {project.highlights.map((highlight) => (
                <div key={highlight.label} className="px-3 text-center sm:px-6">
                  <dt className="text-xs text-zinc-500 dark:text-zinc-400">{highlight.label}</dt>
                  <dd className="mt-2 text-sm font-semibold sm:text-lg">{highlight.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="contribution-heading">
            <SectionLabel>What I did</SectionLabel>
            <h2 id="contribution-heading" className="mt-4 text-3xl font-semibold tracking-tight">
              주요 기여
            </h2>
            <ul className="mt-8 space-y-4">
              {project.contributions.map((contribution) => (
                <li key={contribution} className="flex gap-4 leading-7 text-zinc-700 dark:text-zinc-300">
                  <span className="mt-1.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950">
                    <Check aria-hidden="true" className="size-3" strokeWidth={3} />
                  </span>
                  {contribution}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="troubleshooting-heading">
            <SectionLabel>Troubleshooting</SectionLabel>
            <div className="mt-4 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900">
                <Wrench aria-hidden="true" className="size-5" />
              </span>
              <h2 id="troubleshooting-heading" className="text-3xl font-semibold tracking-tight">
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
                    <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
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
        </div>
      </div>

      <footer className="mt-28 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <Link
          href="/projects"
          className="group flex items-center justify-between rounded-2xl px-1 py-4 outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Back to</p>
            <p className="mt-1 text-2xl font-semibold tracking-tight">모든 프로젝트 보기</p>
          </div>
          <ArrowLeft
            aria-hidden="true"
            className="size-6 transition-transform group-hover:-translate-x-1"
          />
        </Link>
      </footer>
    </main>
  );
}

function ProjectInfo({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof CalendarDays;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 py-3 sm:px-5 sm:first:pl-0">
      <Icon aria-hidden="true" className="mt-0.5 size-4 text-zinc-400" />
      <div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">{label}</p>
        <p className="mt-1 text-sm font-medium">{value}</p>
      </div>
    </div>
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
      <dt className="text-sm font-semibold text-zinc-950 dark:text-zinc-100">{label}</dt>
      <dd className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">{text}</dd>
    </div>
  );
}
