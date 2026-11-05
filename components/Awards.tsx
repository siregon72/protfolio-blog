import { awards } from "@/lib/data/awards";

const categories = ["교외 대회", "교내 대회"];

export function Awards() {
  return (
    <section className="border-b border-zinc-200 pb-5 dark:border-zinc-800">
      <h2 className="font-medium tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        수상
      </h2>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        {categories.map((category) => (
          <div
            key={category}
            className="min-w-0 rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {category}
            </h3>
            <ul
              className="mt-4 max-h-80 space-y-2 overflow-y-auto"
              aria-label={`${category} 수상 이력`}
            >
              {awards
                .filter((award) => award.category === category)
                .map((award) => (
                  <li
                    key={award.event}
                    className="flex items-center justify-between gap-3 border-t border-zinc-100 pt-3 dark:border-zinc-800"
                  >
                    <div className="flex min-w-0 gap-3">
                      <span className="shrink-0 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                        {award.year}
                      </span>
                      <p className="min-w-0 break-keep text-sm font-bold text-zinc-700 dark:text-zinc-300">
                        {award.event}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      {award.award}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
