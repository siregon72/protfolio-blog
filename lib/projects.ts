export type Project = {
  slug: string;
  title: string;
  englishTitle: string;
  summary: string;
  description: string;
  year: string;
  status: string;
  technologies: string[];
  image: string | null;
  imageAlt: string;
  contributions: string[];
  troubleshooting: {
    title: string;
    problem: string;
    solution: string;
    result: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "soundmotion",
    title: "SoundMotion",
    englishTitle: "SoundMotion",
    summary:
      "음악 탐색부터 재생까지 자연스럽게 이어지는 경험을 제공하는 반응형 음악 플레이어입니다.",
    description:
      "SoundMotion은 음악 탐색부터 재생까지 자연스럽게 이어지는 경험을 제공하는 음악 플레이어입니다. 앨범 아트와 음악 정보를 중심으로 콘텐츠에 몰입할 수 있도록 구성하고, 다양한 화면에서 편안하게 사용할 수 있는 반응형 인터페이스와 다크 테마를 적용했습니다.",
    year: "2026",
    status: "개발 중",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/projects/soundmotion-cover.png",
    imageAlt: "SoundMotion 음악 비주얼라이저 프로젝트 화면",
    contributions: [
      "음악 탐색부터 재생까지 자연스럽게 이어지는 사용자 흐름을 설계하고 구현했습니다.",
      "재생·일시정지, 진행 시간, 볼륨 등 오디오 상태와 화면이 일관되게 동작하도록 관리했습니다.",
      "앨범 아트와 음악 정보를 중심으로 콘텐츠에 몰입할 수 있는 반응형 인터페이스를 제작했습니다.",
    ],
    troubleshooting: [
      {
        title: "고정 헤더에 가려지는 페이지 시작점",
        problem:
          "페이지를 이동하거나 특정 영역으로 스크롤했을 때, 콘텐츠 상단이 고정 헤더에 가려져 제목과 주요 정보가 보이지 않는 문제가 있었습니다.",
        solution:
          "공통 레이아웃에서 헤더 높이를 기준값으로 관리하고, 각 페이지와 앵커 영역에 동일한 상단 여백이 적용되도록 구조를 수정했습니다.",
        result:
          "페이지 진입 경로와 화면 크기에 관계없이 콘텐츠가 일정한 위치에서 시작하며, 탐색 흐름도 더욱 안정적으로 유지되었습니다.",
      },
      {
        title: "오디오 상태와 화면 상태의 불일치",
        problem:
          "재생 버튼, 진행 시간, 선택된 트랙 정보를 각각 관리하면서 실제 오디오 상태와 화면에 표시되는 정보가 어긋나는 문제가 발생했습니다.",
        solution:
          "현재 트랙과 재생 여부, 재생 시간을 하나의 상태 흐름으로 통합하고 오디오 이벤트를 기준으로 화면이 갱신되도록 구성했습니다.",
        result:
          "트랙을 변경하거나 재생 위치를 이동해도 플레이어 정보가 즉시 동기화되어 일관된 음악 감상 경험을 제공할 수 있게 되었습니다.",
      },
      {
        title: "반응형 화면에서 발생하는 플레이어 레이아웃 문제",
        problem:
          "화면 폭이 줄어들면서 앨범 정보와 재생 컨트롤이 겹치거나 일부 버튼의 터치 영역이 지나치게 작아지는 문제가 있었습니다.",
        solution:
          "화면 크기에 따라 정보 배치와 컨트롤 구조가 변경되도록 반응형 레이아웃을 설계하고, 모바일 환경에서는 핵심 기능을 중심으로 인터페이스를 단순화했습니다.",
        result:
          "데스크톱과 모바일 모두에서 정보의 우선순위가 유지되고, 주요 재생 기능을 편리하게 조작할 수 있게 되었습니다.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
