import type { ReactNode } from "react";
import { ArrowDown, Wrench } from "lucide-react";
import { ProjectScreenshot } from "@/components/ProjectScreenshot";

const imagePath = "/projects/2048-reverse-engineering";
const paragraphStyle = "leading-7 text-zinc-600 dark:text-zinc-400";

const troubleshootingCases = [
  {
    title: "IDA에서 ARM64 바이너리를 열 수 없음",
    problem:
      "Apple Silicon Mac에서 기본으로 컴파일한 실행 파일을 IDA로 열었지만, 설치된 IDA 버전에서 ARM 프로세서를 지원하지 않아 분석할 수 없었습니다.",
    cause: "clang이 기본적으로 ARM64 Mach-O 실행 파일을 생성하고 있었습니다.",
    solution: (
      <>
        <p>분석용 바이너리를 x86-64 아키텍처로 다시 컴파일했습니다.</p>
        <CodeBlock label="x86-64 분석용 바이너리 컴파일">
          {"clang -arch x86_64 -O0 2048.c -o 2048_x86"}
        </CodeBlock>
        <p>그 결과 IDA에서 정상적으로 x86-64 Assembly를 분석할 수 있었습니다.</p>
      </>
    ),
  },
  {
    title: "잘못된 위치를 패치해 의도와 다른 동작 발생",
    problem:
      "점수를 변경하기 위해 기계어 패턴을 검색해 수정했지만, 점수가 아니라 타일 병합 결과 자체가 달라지는 문제가 발생했습니다.",
    cause:
      "같은 형태의 기계어 패턴이 여러 위치에 존재해 점수 계산 코드가 아닌 다른 연산을 수정했습니다.",
    solution: (
      <>
        <p>단순 바이트 검색 대신 IDA에서 점수 계산 코드를 다시 추적했습니다.</p>
        <CodeBlock label="C · 점수 계산식">
          {"*score += 1 << ++array[t];"}
        </CodeBlock>
        <CodeBlock label="Assembly · 패치 대상 명령어">
          {"mov eax, 1\nshl eax, cl"}
        </CodeBlock>
        <p>
          해당 명령의 정확한 주소인 <code className="font-mono">0x100000B86</code>을 확인했습니다.
        </p>
      </>
    ),
  },
];

export function ReverseEngineeringDetails() {
  return (
    <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-24">
      <AnalysisSection id="program-structure" number="01" title="프로그램 구조 분석">
        <div className="space-y-5">
          <p className={paragraphStyle}>
            IDA를 이용해 main부터 게임의 입력 처리와 이동 로직을 추적했습니다.
          </p>
          <CodeBlock label="입력 → 이동 함수">{"W → moveUp\nA → moveLeft\nS → moveDown\nD → moveRight"}</CodeBlock>
          <p className={paragraphStyle}>
            moveLeft는 보드를 회전한 뒤 moveUp을 재사용하고, 다시 회전해 원래 방향으로 되돌리는 구조였습니다.
          </p>
        </div>
        <div className="space-y-4">
          <ProjectScreenshot
            src={`${imagePath}/main-functions.png`}
            width={3024} height={1716}
            alt="IDA의 main 디컴파일과 slideArray, rotateBoard, 방향별 이동 함수 목록"
            caption="입력 처리와 방향별 이동 함수 추적 · main"
          />
          <div className="grid items-start gap-4 sm:grid-cols-2">
            <ProjectScreenshot
              src={`${imagePath}/input-mapping.png`}
              width={954} height={1122}
              alt="switch 문에서 w, a, s, d 입력을 각 방향의 이동 함수와 연결하는 코드"
              caption="W / A / S / D 입력 분기"
            />
            <ProjectScreenshot
              src={`${imagePath}/move-left.png`}
              width={1040} height={402}
              alt="moveLeft에서 rotateBoard와 moveUp을 호출한 뒤 보드를 다시 회전하는 코드"
              caption="moveLeft의 rotateBoard / moveUp 재사용"
            />
          </div>
        </div>
      </AnalysisSection>

      <AnalysisSection id="score-logic" number="02" title="타일 병합 및 점수 로직 분석">
        <div className="space-y-5">
          <p className={paragraphStyle}>
            이동 함수를 따라 실제 타일 이동과 병합을 처리하는 slideArray까지 확인했습니다.
          </p>
          <CodeBlock label="C · 점수 계산식">{"*score += 1 << ++array[t];"}</CodeBlock>
          <p className={paragraphStyle}>
            타일은 숫자 자체 대신 2의 지수로 저장됩니다. 병합 시 지수를 1 늘리고,
            1 &lt;&lt; n으로 실제 타일 값과 획득 점수를 계산합니다.
          </p>
          <CodeBlock label="저장된 지수 → 타일 값">{"1 → 2    2 → 4\n3 → 8    4 → 16"}</CodeBlock>
        </div>
        <div id="slide-array-evidence" className="scroll-mt-24">
          <ProjectScreenshot
            src={`${imagePath}/slide-array.png`}
            width={1310} height={998}
            alt="심볼 제거 후 slideArray 후보인 sub_100000AC0에서 반복문, 타일 비교와 점수 비트 시프트를 확인한 디컴파일 화면"
            caption="타일 병합과 점수 계산 로직 · 심볼 제거 후 화면"
          />
        </div>
      </AnalysisSection>

      <AnalysisSection id="assembly-analysis" number="03" title="x86-64 Assembly 분석">
        <div className="space-y-5">
          <p className={paragraphStyle}>
            Decompiler의 점수 계산식을 실제 x86-64 명령어까지 추적했습니다.
          </p>
          <div className="space-y-3">
            <CodeBlock label="C">{"*score += 1 << ++array[t];"}</CodeBlock>
            <ArrowDown aria-hidden="true" className="mx-auto size-4 text-zinc-400" />
            <CodeBlock label="Assembly · 비트 시프트 부분">{"mov eax, 1\nshl eax, cl"}</CodeBlock>
          </div>
          <p className={paragraphStyle}>
            mov eax, 1로 기준값을 설정하고, shl eax, cl로 1 &lt;&lt; n을 계산합니다.
            이어지는 add 명령에서 이 값을 점수에 더합니다.
          </p>
        </div>
        <ProjectScreenshot
          src={`${imagePath}/score-assembly.png`}
          width={808} height={852}
          alt="타일 지수를 늘린 후 mov eax, 1과 shl eax, cl을 수행하고 점수를 더하는 Assembly"
          caption="C 코드와 실제 Assembly 명령 연결"
        />
      </AnalysisSection>

      <AnalysisSection id="stripped-binary" number="04" title="Stripped Binary 재분석">
        <div className="space-y-5">
          <p className={paragraphStyle}>
            함수 심볼이 포함된 바이너리로 구조를 이해한 뒤, 심볼을 제거한 실행 파일을 다시 분석했습니다.
          </p>
          <CodeBlock label="분석용 실행 파일 준비">{"clang -arch x86_64 -O0 2048.c -o 2048_stripped\nstrip 2048_stripped"}</CodeBlock>
          <p className={paragraphStyle}>
            함수명이 sub_100000… 형태로 표시되는 상태에서 키 입력, 반복 구조,
            함수 호출 관계를 단서로 각 함수의 역할을 추론했습니다.
          </p>
          <CodeBlock label="키 입력을 단서로 역할 추론">{"'w'\n ↓\nsub_100000D60\n ↓\nmoveUp으로 추론"}</CodeBlock>
          <p className={paragraphStyle}>
            <a href="#slide-array-evidence" className="rounded-sm underline underline-offset-4 outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">
              위의 병합 함수 후보 화면
            </a>
            에서는 sub_100000AC0의 반복문과 비트 시프트 연산으로 slideArray의 역할을 확인했습니다.
          </p>
        </div>
        <ProjectScreenshot
          src={`${imagePath}/stripped-main.png`}
          width={3014} height={1722}
          alt="함수 이름이 start와 sub_100000… 형태로 표시되는 IDA 함수 목록과 디컴파일 화면"
          caption="함수 심볼이 제거된 바이너리에서 기능 재추론"
        />
      </AnalysisSection>

      <AnalysisSection id="binary-patching" number="05" title="Binary Patching">
        <div className="space-y-5">
          <p className={paragraphStyle}>
            점수 계산 명령어의 주소 0x100000B86을 확인하고, 실행 파일의 해당 바이트를 변경했습니다.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <PatchCard label="Before" instruction="mov eax, 1" score="점수 +4" />
            <PatchCard label="After" instruction="mov eax, 2" score="점수 +8" />
          </div>
          <p className={paragraphStyle}>
            점수 계산의 기준값만 1에서 2로 바꿨습니다. 타일 이동과 병합 규칙은 유지하면서
            획득 점수가 2배가 되도록 변경했습니다.
          </p>
          <p className={paragraphStyle}>
            분석용 바이너리를 준비한 이후에는 소스코드를 수정하거나 다시 컴파일하지 않고,
            실행 파일을 직접 패치해 동작을 변경했습니다.
          </p>
        </div>
        <div className="space-y-4">
          <ProjectScreenshot
            src={`${imagePath}/patch-address.png`}
            width={1052} height={358}
            alt="IDA Assemble instruction 창의 주소 0x100000B86과 패치 전 mov eax, 1 명령어"
            caption="패치 대상 주소와 원래 명령어 확인"
          />
          <ProjectScreenshot
            src={`${imagePath}/patched-game.png`}
            width={448} height={472}
            alt="패치 후 실행한 2048 게임에서 4 타일과 8 pts 점수가 표시된 화면"
            caption="바이너리 패치 후 2048 실행 화면"
          />
        </div>
      </AnalysisSection>

      <section aria-labelledby="troubleshooting-heading">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900">
            <Wrench aria-hidden="true" className="size-5" />
          </span>
          <h2 id="troubleshooting-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Troubleshooting
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          {troubleshootingCases.map((item, index) => (
            <article key={item.title} className="rounded-3xl border border-zinc-200 p-6 sm:p-8 dark:border-zinc-800">
              <div className="flex items-start gap-4">
                <span className="font-mono text-sm text-zinc-400 dark:text-zinc-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
              </div>
              <dl className="mt-7 space-y-6 sm:ml-9">
                <TroubleItem label="문제"><p>{item.problem}</p></TroubleItem>
                <TroubleItem label="원인"><p>{item.cause}</p></TroubleItem>
                <TroubleItem label="해결">{item.solution}</TroubleItem>
              </dl>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}

function TroubleItem({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-2 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-4">
      <dt className="text-sm font-semibold text-zinc-950 dark:text-zinc-100">{label}</dt>
      <dd className="min-w-0 space-y-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        {children}
      </dd>
    </div>
  );
}

function AnalysisSection({ id, number, title, children }: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={`${id}-heading`}>
      <p className="font-mono text-xs tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
        {number}
      </p>
      <h2 id={`${id}-heading`} className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 grid items-start gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10">
        {children}
      </div>
    </section>
  );
}

function CodeBlock({ label, children }: { label: string; children: string }) {
  return (
    <div className="min-w-0 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
      <p className="border-b border-zinc-200 px-4 py-2 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        {label}
      </p>
      <pre className="overflow-x-auto p-4 font-mono text-xs leading-6 text-zinc-800 sm:text-sm dark:text-zinc-200">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function PatchCard({ label, instruction, score }: {
  label: string;
  instruction: string;
  score: string;
}) {
  return (
    <div className="min-w-0 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
      <p className="text-xs text-zinc-500 dark:text-zinc-400">{label}</p>
      <code className="mt-3 block font-mono text-sm">{instruction}</code>
      <p className="mt-4 font-mono text-sm text-zinc-600 dark:text-zinc-400">2 + 2 → 4</p>
      <p className="mt-1 text-sm">{score}</p>
    </div>
  );
}
