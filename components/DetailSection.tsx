import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type DetailSectionProps = {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  titleClassName?: string;
};

export function DetailSection({
  id,
  label,
  title,
  children,
  titleClassName,
}: DetailSectionProps) {
  return (
    <section aria-labelledby={id}>
      <p className="text-xs font-medium tracking-[0.18em] text-zinc-500 uppercase dark:text-zinc-400">
        {label}
      </p>
      <h2
        id={id}
        className={cn(
          "mt-4 text-3xl font-semibold tracking-tight",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
