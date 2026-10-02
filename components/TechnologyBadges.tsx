import Image from "next/image";

type TechnologyBadge = {
  name: string;
  icon?: string;
  iconClassName?: string;
};

const technologyCatalog: {
  match: RegExp;
  name: string;
  icon?: string;
  iconClassName?: string;
}[] = [
  { match: /^next\.js(?:\s|$)/i, name: "Next.js", icon: "/icons/nextjs.svg" },
  { match: /^react(?:\s+\d+(?:\.\d+)*)?$/i, name: "React", icon: "/icons/react.svg" },
  { match: /^typescript(?:\s|$)/i, name: "TypeScript", icon: "/icons/typescript.svg" },
  {
    match: /^tailwind\s*css(?:\s|$)/i,
    name: "Tailwind CSS",
    icon: "/icons/tailwindcss.svg",
  },
  { match: /^sveltekit$/i, name: "SvelteKit", icon: "/icons/svelte.svg" },
  { match: /^svelte$/i, name: "Svelte", icon: "/icons/svelte.svg" },
  { match: /^rust$/i, name: "Rust", icon: "/icons/rust.svg" },
  {
    match: /^vercel$/i,
    name: "Vercel",
    icon: "/icons/vercel.svg",
    iconClassName: "dark:invert",
  },
  { match: /^cloudflare$/i, name: "Cloudflare", icon: "/icons/cloudflare.svg" },
  { match: /^python(?:\s|$)/i, name: "Python", icon: "/icons/python-original.svg" },
  { match: /^flask$/i, name: "Flask", icon: "/icons/flask-original.svg" },
  { match: /^supabase$/i, name: "Supabase", icon: "/icons/supabase.svg" },
  { match: /^sqlite$/i, name: "SQLite", icon: "/icons/sqlite.svg" },
  { match: /^java$/i, name: "Java", icon: "/icons/java.svg" },
  { match: /^javascript$/i, name: "JavaScript", icon: "/icons/javascript.svg" },
  { match: /^gradle$/i, name: "Gradle", icon: "/icons/gradle.svg" },
];

function getTechnologyBadge(technology: string): TechnologyBadge {
  const match = technologyCatalog.find(({ match }) => match.test(technology));

  return match
    ? {
        name: match.name,
        icon: match.icon,
        iconClassName: match.iconClassName,
      }
    : { name: technology };
}

export function TechnologyBadges({
  technologies,
  className = "",
}: {
  technologies: string[];
  className?: string;
}) {
  return (
    <ul
      className={`flex flex-wrap gap-2 ${className}`}
      aria-label="사용 기술"
    >
      {technologies.map((technology) => {
        const badge = getTechnologyBadge(technology);

        return (
          <li
            key={technology}
            className="inline-flex min-h-10 items-center gap-2.5 rounded-xl bg-zinc-100 px-3.5 py-1.5 text-sm font-medium text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
          >
            {badge.icon && (
              <Image
                src={badge.icon}
                alt=""
                aria-hidden="true"
                width={24}
                height={24}
                className={`size-6 shrink-0 object-contain ${badge.iconClassName ?? ""}`}
              />
            )}
            <span>{badge.name}</span>
          </li>
        );
      })}
    </ul>
  );
}
