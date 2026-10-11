import { TechnologyIcon } from "@/components/TechnologyIcon";
import {
  TechnologyTooltip,
  TechnologyTooltipProvider,
} from "@/components/TechnologyTooltip";
import { getTechnology } from "@/lib/technologies";

const skillGroups = [
  {
    id: "analysis-skills",
    label: "분석",
    technologies: ["Assembly", "C", "Linux"].map(getTechnology),
  },
  {
    id: "web-skills",
    label: "웹",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Cloudflare",
      "Supabase",
    ].map(getTechnology),
  },
];

export function DevIcon() {
  return (
    <section className="border-b border-zinc-200 pb-5 dark:border-zinc-800">
      <h2 className="font-medium tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        기술
      </h2>
      <TechnologyTooltipProvider>
        <div className="mt-5 space-y-4">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="grid gap-3 sm:grid-cols-[4rem_1fr] sm:items-center"
            >
              <h3
                id={group.id}
                className="text-sm font-medium text-zinc-500 dark:text-zinc-400"
              >
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-3" aria-labelledby={group.id}>
                {group.technologies.map((technology) => (
                  <li key={technology.name} className="shrink-0">
                    <TechnologyTooltip name={technology.name}>
                      <TechnologyIcon
                        technology={technology}
                        size={40}
                        className="transition-transform group-hover:scale-105"
                      />
                    </TechnologyTooltip>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </TechnologyTooltipProvider>
    </section>
  );
}
