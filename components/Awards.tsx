const awards = [
  {
    year: "2026",
    event: "🥈사이버 가디언즈 CMX 대회",
    award: "우수상",
  },
  {
    year: "2026",
    event: "🥉경북 지역창업체험센터 청소년 창업 해커톤 대회",
    award: "창의상",
  },
  {
    year: "2026",
    event: "🥉경북소프트웨어고등학교 APC 대회",
    award: "백엔드 아키텍쳐상",
  },
];

export function Awards() {
  return (
    <section className="border-b border-zinc-200 pb-5 dark:border-zinc-800">
      <p className="font-medium tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        수상
      </p>
      <ul
        className="mt-5 max-h-80 space-y-3 overflow-y-auto pr-2"
        aria-label="대회 수상 이력"
      >
        {awards.map((award) => (
          <li
            key={award.event}
            className="flex flex-col gap-2 rounded-2xl border border-zinc-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="flex gap-4">
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {award.year}
              </span>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                {award.event}
              </p>
            </div>
            <span className="w-fit rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              {award.award}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
