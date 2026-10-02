import { TechnologyIcon } from "@/components/TechnologyIcon";
import {
  TechnologyTooltip,
  TechnologyTooltipProvider,
} from "@/components/TechnologyTooltip";
import { getTechnology } from "@/lib/technologies";

const skills = [
  "Assembly",
  "C",
  "Python",
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Cloudflare",
  "Supabase",
  "GitHub",
].map(getTechnology);

export function DevIcon() {
  return (
    <section className="border-b border-zinc-200 pb-5 dark:border-zinc-800">
      <p className="font-medium tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        기술
      </p>
      <TechnologyTooltipProvider>
        <ul
          className="mt-5 flex flex-nowrap gap-3 overflow-x-auto pb-2"
          aria-label="사용 기술 목록"
        >
          {skills.map((technology) => (
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
      </TechnologyTooltipProvider>
    </section>
  );
}
