export type ProjectVisual = "portfolio" | "campus" | "teamflow";

export type Project = {
  slug: string;
  title: string;
  englishTitle: string;
  summary: string;
  description: string;
  year: string;
  period: string;
  role: string;
  team: string;
  status: string;
  technologies: string[];
  visual: ProjectVisual;
  highlights: {
    label: string;
    value: string;
  }[];
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
    slug: "portfolio-blog",
    title: "포트폴리오 블로그",
    englishTitle: "Portfolio Blog",
    summary:
      "프로젝트와 경험을 빠르게 탐색할 수 있도록 설계한 개인 포트폴리오 웹사이트입니다.",
    description:
      "개발자로서의 경험과 프로젝트 과정을 단순한 결과물이 아닌 문제 해결의 흐름으로 전달하는 포트폴리오입니다. 읽기 편한 정보 구조와 빠른 페이지 전환, 다크 모드까지 세심하게 다듬었습니다.",
    year: "2026",
    period: "진행 중",
    role: "기획 · 디자인 · 프론트엔드",
    team: "개인 프로젝트",
    status: "Developing",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    visual: "portfolio",
    highlights: [
      { label: "담당", value: "100%" },
      { label: "반응형", value: "Mobile First" },
      { label: "테마", value: "Light / Dark" },
    ],
    contributions: [
      "프로젝트 목록과 상세 정보가 자연스럽게 이어지는 정보 구조를 설계했습니다.",
      "App Router의 동적 라우트를 사용해 프로젝트가 늘어나도 확장하기 쉬운 구조로 구현했습니다.",
      "라이트·다크 테마 모두에서 명확한 대비와 일관된 인터랙션을 유지했습니다.",
    ],
    troubleshooting: [
      {
        title: "고정 헤더에 가려지는 페이지 시작점",
        problem:
          "페이지를 이동했을 때 상단 콘텐츠가 고정 헤더 뒤로 들어가 제목 일부가 보이지 않는 문제가 있었습니다.",
        solution:
          "페이지 공통 여백과 스크롤 패딩을 헤더 높이에 맞추고, 모바일과 데스크톱에서 각각 여백을 검증했습니다.",
        result:
          "어떤 경로로 진입해도 첫 콘텐츠가 안정적으로 노출되고 페이지 이동 흐름이 자연스러워졌습니다.",
      },
      {
        title: "프로젝트 콘텐츠가 늘어날수록 반복되는 마크업",
        problem:
          "프로젝트마다 페이지를 따로 작성하면 카드와 상세 페이지의 정보가 어긋나고 유지보수가 어려워질 수 있었습니다.",
        solution:
          "프로젝트 정보를 하나의 타입 안전한 데이터로 관리하고 목록과 동적 상세 페이지가 동일한 데이터를 사용하도록 구성했습니다.",
        result:
          "새 프로젝트는 데이터 한 항목만 추가해 목록, 상세 페이지, 메타데이터에 함께 반영할 수 있게 되었습니다.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
