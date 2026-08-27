import Image from "next/image";

const technologies = [
  "/icons/react.svg",
  "/icons/nextjs.svg",
  "/icons/typescript.svg",
  "/icons/javascript.svg",
  "/icons/tailwindcss.svg",
  "/icons/cloudflare.svg",
  "/icons/supabase.svg",
  "/icons/github.svg",
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
            key={technology}
            className="group flex size-15 flex-col items-center justify-center gap-3 rounded-2xl border border-zinc-200 bg-white p-2 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600"
          >
            <Image
              src={technology}
              alt=""
              width={48}
              height={48}
              className="size-10 object-contain transition-transform group-hover:scale-105"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
