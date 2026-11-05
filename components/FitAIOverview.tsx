import { ArrowRight } from "lucide-react";
import { DetailSection } from "@/components/DetailSection";
import { ProjectScreenshot } from "@/components/ProjectScreenshot";

const fittingSteps = [
  "사진 선택",
  "의류 선택",
  "AI 가상 피팅",
  "결과 확인·저장",
] as const;

export function FitAIOverview() {
  return (
    <DetailSection
      id="app-overview-heading"
      label="App overview"
      title="주요 화면과 사용 흐름"
    >
      <p className="mt-6 max-w-3xl leading-7 text-zinc-600 dark:text-zinc-400">
        홈, 옷장, 가상 피팅, AI 채팅, 마이페이지로 구성했습니다. 사진과 의류를
        선택해 가상 피팅을 진행하고 결과를 저장하며, 옷장 관리와 AI 상담으로
        코디를 탐색할 수 있습니다.
      </p>

      <div className="mt-8">
        <ProjectScreenshot
          src="/projects/fitai-screens.png"
          alt="홈에서 피팅을 시작하고, 옷장에서 아이템을 관리하며, 가상 피팅과 AI 스타일링 상담을 이용하고 저장 결과를 확인하는 FitAI의 다섯 화면"
          caption="홈 · 옷장 · 가상 피팅 · AI 채팅 · 마이페이지"
          width={2076}
          height={1166}
          fullWidth
        />
      </div>

      <ol
        aria-label="가상 피팅 진행 순서"
        className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {fittingSteps.map((step, index) => (
          <li key={step} className="flex items-center gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 font-mono text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium">{step}</span>
            {index < fittingSteps.length - 1 && (
              <ArrowRight
                aria-hidden="true"
                className="ml-auto hidden size-4 shrink-0 text-zinc-400 lg:block dark:text-zinc-600"
              />
            )}
          </li>
        ))}
      </ol>
    </DetailSection>
  );
}
