import Image from "next/image";

type Technology = {
  name: string;
  icon?: string;
  iconClass?: string;
  text?: string;
};

const technologies: Technology[] = [
  { name: "Assembly", text: "ASM" },
  { name: "C", icon: "/icons/c.svg" },
  { name: "Python", icon: "/icons/python-original.svg" },
  { name: "Flask", iconClass: "devicon-flask-original" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
  { name: "Cloudflare", icon: "/icons/cloudflare.svg" },
  { name: "Supabase", icon: "/icons/supabase.svg" },
];

export const DevIcon = () => {
  return (
    <section className="border-b border-zinc-200 pb-5 dark:border-zinc-800">
      <div className="flex items-end justify-between gap-4">
        <p className="font-medium tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          기술
        </p>
      </div>

      <ul className="mt-5 flex flex-wrap gap-3" aria-label="사용 기술 목록">
        {technologies.map((technology) => (
          <li
            key={technology.name}
            title={technology.name}
            className="group flex h-15 items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-3 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600"
          >
            {technology.iconClass ? (
              <i
                className={`${technology.iconClass} text-[2.5rem] text-zinc-900 transition-transform group-hover:scale-105 dark:text-white`}
                aria-hidden="true"
              />
            ) : technology.icon ? (
              <Image
                src={technology.icon}
                alt={technology.name}
                width={48}
                height={48}
                className="size-10 object-contain transition-transform group-hover:scale-105"
              />
            ) : (
              <span className="flex size-10 items-center justify-center text-sm font-semibold tracking-[0.08em] text-zinc-900 dark:text-zinc-100">
                {technology.text}
              </span>
            )}
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {technology.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
