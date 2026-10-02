import { TechnologyIcon } from "@/components/TechnologyIcon";
import { getTechnology } from "@/lib/technologies";
import { cn } from "@/lib/utils";

export function TechnologyBadges({
  technologies,
  className,
}: {
  technologies: readonly string[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)} aria-label="사용 기술">
      {technologies.map((technology) => {
        const badge = getTechnology(technology);

        return (
          <li
            key={technology}
            className="inline-flex min-h-10 items-center gap-2.5 rounded-xl bg-zinc-100 px-3.5 py-1.5 text-sm font-medium text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
          >
            <TechnologyIcon technology={badge} />
            <span>{badge.name}</span>
          </li>
        );
      })}
    </ul>
  );
}
