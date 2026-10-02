"use client";

import Image from "next/image";
import { Tooltip } from "@base-ui/react/tooltip";

type Technology = {
  name: string;
  icon?: string;
  imageClassName?: string;
  iconClass?: string;
  text?: string;
};

const technologies: Technology[] = [
  { name: "Assembly", text: "ASM" },
  { name: "C", icon: "/icons/c.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "Python", icon: "/icons/python-original.svg" },
  { name: "Flask", iconClass: "devicon-flask-original" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
  { name: "Cloudflare", icon: "/icons/cloudflare.svg" },
  { name: "Supabase", icon: "/icons/supabase.svg" },
  {
    name: "GitHub",
    icon: "/icons/github.svg",
    imageClassName: "dark:invert",
  },
];

export const DevIcon = () => {
  return (
    <section className="border-b border-zinc-200 pb-5 dark:border-zinc-800">
      <div className="flex items-end justify-between gap-4">
        <p className="font-medium tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          기술
        </p>
      </div>

      <Tooltip.Provider delay={0}>
        <ul
          className="mt-5 flex flex-nowrap gap-3 overflow-x-auto pb-2"
          aria-label="사용 기술 목록"
        >
          {technologies.map((technology) => (
            <li key={technology.name} className="shrink-0">
              <Tooltip.Root>
                <Tooltip.Trigger
                  type="button"
                  aria-label={technology.name}
                  className="group flex size-14 items-center justify-center rounded-2xl border border-zinc-200 bg-white outline-none transition-colors hover:border-zinc-400 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600"
                >
                  {technology.iconClass ? (
                    <i
                      className={`${technology.iconClass} text-[2.5rem] text-zinc-900 transition-transform group-hover:scale-105 dark:text-white`}
                      aria-hidden="true"
                    />
                  ) : technology.icon ? (
                    <Image
                      src={technology.icon}
                      alt=""
                      width={48}
                      height={48}
                      className={`size-10 object-contain transition-transform group-hover:scale-105 ${technology.imageClassName ?? ""}`}
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex size-10 items-center justify-center text-sm font-semibold tracking-[0.08em] text-zinc-900 dark:text-zinc-100"
                    >
                      {technology.text}
                    </span>
                  )}
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Positioner side="top" sideOffset={8} className="z-60">
                    <Tooltip.Popup className="rounded-lg bg-zinc-950 px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white shadow-md dark:bg-zinc-100 dark:text-zinc-950">
                      {technology.name}
                    </Tooltip.Popup>
                  </Tooltip.Positioner>
                </Tooltip.Portal>
              </Tooltip.Root>
            </li>
          ))}
        </ul>
      </Tooltip.Provider>
    </section>
  );
};
