import type { ReactNode } from "react";

export type TroubleshootingCase = {
  readonly title: string;
  readonly problem: ReactNode;
  readonly cause?: ReactNode;
  readonly solution: ReactNode;
  readonly result?: ReactNode;
};

export function Troubleshooting({
  cases,
}: {
  cases: readonly TroubleshootingCase[];
}) {
  return (
    <div className="mt-8 space-y-6">
      {cases.map((item, index) => (
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
            <TroubleshootingField label="문제">
              {item.problem}
            </TroubleshootingField>
            {item.cause != null && (
              <TroubleshootingField label="원인">
                {item.cause}
              </TroubleshootingField>
            )}
            <TroubleshootingField label="해결">
              {item.solution}
            </TroubleshootingField>
            {item.result != null && (
              <TroubleshootingField label="결과">
                {item.result}
              </TroubleshootingField>
            )}
          </dl>
        </article>
      ))}
    </div>
  );
}

function TroubleshootingField({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-4">
      <dt className="text-sm font-semibold text-zinc-950 dark:text-zinc-100">
        {label}
      </dt>
      <dd className="min-w-0 space-y-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        {children}
      </dd>
    </div>
  );
}
