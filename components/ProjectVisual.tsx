import type { ProjectVisual as ProjectVisualType } from "@/lib/projects";

const visualStyles = {
  portfolio: {
    backdrop: "from-violet-500 via-fuchsia-400 to-amber-300",
    panel: "bg-white/90",
    accent: "bg-violet-500",
  },
  campus: {
    backdrop: "from-emerald-400 via-teal-300 to-sky-300",
    panel: "bg-white/90",
    accent: "bg-emerald-500",
  },
  teamflow: {
    backdrop: "from-orange-400 via-rose-400 to-violet-400",
    panel: "bg-zinc-950/90",
    accent: "bg-orange-400",
  },
} as const;

export function ProjectVisual({
  type,
  title,
  className = "",
}: {
  type: ProjectVisualType;
  title: string;
  className?: string;
}) {
  const style = visualStyles[type];

  return (
    <div
      role="img"
      aria-label={`${title} 프로젝트 화면 미리보기`}
      className={`relative isolate overflow-hidden bg-linear-to-br ${style.backdrop} ${className}`}
    >
      <div className="absolute -left-[8%] top-[12%] size-[42%] rounded-full bg-white/30 blur-3xl" />
      <div className="absolute -right-[6%] bottom-[4%] size-[38%] rounded-full bg-zinc-950/15 blur-3xl" />

      <div
        className={`absolute inset-x-[9%] top-[12%] bottom-[-12%] overflow-hidden rounded-t-[1.2rem] border border-white/50 shadow-2xl ${style.panel}`}
      >
        <div className="flex h-[12%] min-h-6 items-center gap-1.5 border-b border-zinc-900/10 px-[4%]">
          <span className="size-1.5 rounded-full bg-rose-400" />
          <span className="size-1.5 rounded-full bg-amber-400" />
          <span className="size-1.5 rounded-full bg-emerald-400" />
          <span className="ml-[3%] h-1.5 w-[28%] rounded-full bg-zinc-400/25" />
        </div>

        {type === "portfolio" && <PortfolioPreview accent={style.accent} />}
        {type === "campus" && <CampusPreview accent={style.accent} />}
        {type === "teamflow" && <TeamPreview accent={style.accent} />}
      </div>
    </div>
  );
}

function PortfolioPreview({ accent }: { accent: string }) {
  return (
    <div className="grid h-[88%] grid-cols-[0.7fr_1.3fr] items-center gap-[7%] px-[8%]">
      <div className="aspect-4/5 rounded-lg bg-linear-to-br from-zinc-200 to-zinc-400 shadow-sm" />
      <div>
        <div className={`mb-[8%] h-1.5 w-[24%] rounded-full ${accent}`} />
        <div className="h-3 w-[85%] rounded-full bg-zinc-900" />
        <div className="mt-[5%] h-3 w-[60%] rounded-full bg-zinc-900" />
        <div className="mt-[10%] h-1.5 w-full rounded-full bg-zinc-300" />
        <div className="mt-[4%] h-1.5 w-[75%] rounded-full bg-zinc-300" />
        <div className="mt-[12%] flex gap-[4%]">
          {[0, 1, 2, 3].map((item) => (
            <span key={item} className="size-5 rounded-md bg-zinc-100 shadow-sm" />
          ))}
        </div>
      </div>
    </div>
  );
}

function CampusPreview({ accent }: { accent: string }) {
  return (
    <div className="h-[88%] px-[7%] py-[5%]">
      <div className="flex items-center justify-between">
        <div>
          <div className="h-2.5 w-20 rounded-full bg-zinc-900" />
          <div className="mt-2 h-1.5 w-12 rounded-full bg-zinc-300" />
        </div>
        <div className={`size-6 rounded-full ${accent}`} />
      </div>
      <div className="mt-[7%] grid grid-cols-3 gap-[3%]">
        {["bg-emerald-100", "bg-sky-100", "bg-amber-100"].map((color, index) => (
          <div key={color} className={`rounded-lg p-[9%] ${color}`}>
            <div className="text-[7px] font-bold text-zinc-800">0{index + 7}</div>
            <div className="mt-[28%] h-1.5 w-full rounded-full bg-zinc-800/70" />
            <div className="mt-1 h-1 w-[60%] rounded-full bg-zinc-400/50" />
          </div>
        ))}
      </div>
      <div className="mt-[6%] space-y-[3%]">
        {[0, 1].map((item) => (
          <div key={item} className="flex items-center gap-[4%] rounded-lg border border-zinc-200 bg-white p-[3%]">
            <span className={`size-5 shrink-0 rounded-md ${item === 0 ? "bg-emerald-400" : "bg-sky-400"}`} />
            <span className="h-1.5 w-[46%] rounded-full bg-zinc-700" />
            <span className="ml-auto h-1.5 w-[16%] rounded-full bg-zinc-200" />
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamPreview({ accent }: { accent: string }) {
  return (
    <div className="h-[88%] px-[6%] py-[5%] text-white">
      <div className="flex items-center gap-[4%]">
        <div className={`size-5 rounded-md ${accent}`} />
        <div className="h-2 w-[28%] rounded-full bg-white/80" />
        <div className="ml-auto flex -space-x-1">
          {["bg-rose-300", "bg-sky-300", "bg-amber-300"].map((color) => (
            <span key={color} className={`size-4 rounded-full border border-zinc-900 ${color}`} />
          ))}
        </div>
      </div>
      <div className="mt-[7%] grid grid-cols-3 gap-[3%]">
        {[0, 1, 2].map((column) => (
          <div key={column} className="rounded-lg bg-white/8 p-[7%]">
            <div className="mb-[12%] h-1.5 w-[58%] rounded-full bg-white/60" />
            {[0, 1].map((card) => (
              <div key={card} className="mb-[7%] rounded-md bg-white/90 p-[8%]">
                <div className="h-1.5 w-full rounded-full bg-zinc-700" />
                <div className="mt-[9%] h-1 w-[58%] rounded-full bg-zinc-300" />
                <div className="mt-[16%] flex items-center justify-between">
                  <span className={`h-1.5 w-[30%] rounded-full ${column === 1 ? accent : "bg-violet-400"}`} />
                  <span className="size-3 rounded-full bg-zinc-300" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
