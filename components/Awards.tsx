const awards = [
  {
    year: "2026",
    event: "🥉경북 지역창업체험센터 청소년 창업 해커톤 대회",
    award: "창의상",
    category: "교외 대회",
  },
  {
    year: "2026",
    event: "🥈사이버 가디언즈 CMX 대회",
    award: "우수상",
    category: "교외 대회",
  },
  {
    year: "2026",
    event: "🥉경북소프트웨어고등학교 APC 대회",
    award: "백엔드 아키텍쳐상",
    category: "교내 대회",
  },
  {
    year: "2026",
    event: "🥇경북소프트웨어마이스터고등학교 AISW 개발자 부스트캠프",
    award: "최우수상",
    category: "교내 대회",
  },
  {
    year: "2026",
    event: "🥉대전 AI 영상 공모전",
    award: "장려상",
    category: "교외 대회",
  },
];

const categories = ["교외 대회", "교내 대회"];

export function Awards() {
  return (
    <section className="border-b border-zinc-200 pb-5 dark:border-zinc-800">
      <p className="font-medium tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        수상
      </p>
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
              className="mt-4 max-h-80 space-y-4 overflow-y-auto"
              aria-label={`${category} 수상 이력`}
            >
              {awards
                .filter((award) => award.category === category)
                .map((award) => (
                  <li
                    key={award.event}
                    className="flex flex-col items-start gap-2 border-t border-zinc-100 pt-4 dark:border-zinc-800"
                  >
                    <div className="flex gap-3">
                      <span className="shrink-0 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                        {award.year}
                      </span>
                      <p className="min-w-0 break-keep text-sm text-zinc-700 dark:text-zinc-300">
                        {award.event}
                      </p>
                    </div>
                    <span className="self-end rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
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
