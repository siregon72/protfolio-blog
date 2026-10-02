import type { ReactNode } from "react";
import { Check, Wrench } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectDetails({ project }: { project: Project }) {
  if (
    project.contributions.length === 0 &&
    !project.learnings?.length &&
    project.troubleshooting.length === 0
  ) {
    return null;
  }

  return (
    <div className="mt-20 space-y-24">
      {project.contributions.length > 0 && (
        <section aria-labelledby="contribution-heading">
          <SectionLabel>What I did</SectionLabel>
          <h2
            id="contribution-heading"
            className="mt-4 text-3xl font-semibold tracking-tight"
          >
            {project.category === "subproject"
              ? "주요 기능 및 구현"
              : "주요 기여"}
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
      )}

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
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
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
