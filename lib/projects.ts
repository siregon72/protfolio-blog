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
  {
    slug: "contest-archive",
    title: "대회 모음",
    englishTitle: "Contest Archive",
    summary:
      "흩어진 공모전·해커톤·CTF 정보를 한곳에서 탐색하고 안전하게 관리할 수 있는 대회 아카이브입니다.",
    description:
      "대회 모음은 여러 사이트와 커뮤니티에 흩어진 공모전·해커톤·CTF 정보를 한곳에서 탐색할 수 있도록 만든 아카이브 플랫폼입니다. 일반 사용자는 로그인 없이 대회를 검색하고 비교할 수 있으며, 관리자는 인증된 환경에서 대회 정보와 포스터를 등록·수정·삭제할 수 있습니다.",
    year: "2026",
    status: "개발 완료",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "Tailwind CSS 4",
      "Cloudflare Workers",
    ],
    image: "/projects/contest-archive.png",
    imageAlt: "대회 모음 아카이브 프로젝트 화면",
    contributions: [
      "카테고리 필터, 실시간 검색, 추천 대회와 카테고리별 개수를 결합해 대회 탐색 흐름을 설계하고 구현했습니다.",
      "HMAC 서명 쿠키 기반의 관리자 인증과 서버 측 권한 검증을 적용해 모든 콘텐츠 변경 API를 보호했습니다.",
      "Supabase Storage의 서명된 업로드 URL을 활용해 서버 비밀 키를 노출하지 않는 포스터 업로드 구조를 구현했습니다.",
      "Next.js 애플리케이션을 OpenNext와 Wrangler를 통해 Cloudflare Workers 환경에 배포했습니다.",
    ],
    troubleshooting: [
      {
        title: "서버 비밀 키를 노출하지 않는 포스터 업로드",
        problem:
          "브라우저에서 Supabase Storage에 직접 접근하면 높은 권한의 서버 키가 노출될 수 있고, 이미지를 Next.js 서버를 거쳐 전달하면 서버리스 환경에서 불필요한 트래픽과 메모리 사용이 발생할 수 있었습니다.",
        solution:
          "관리자 세션과 파일 정보를 서버에서 검증한 요청에만 서명된 업로드 URL을 발급했습니다. 파일 형식과 크기를 클라이언트와 서버에서 모두 검사하고, 업로드 경로도 editor/{uuid}.{확장자} 형식으로 제한했습니다.",
        result:
          "서버 비밀 키를 브라우저에 노출하지 않으면서도 클라이언트가 Storage에 직접 포스터를 업로드하는 효율적인 구조를 구현했습니다.",
      },
      {
        title: "서버리스 환경에서 관리자 세션 유지",
        problem:
          "Cloudflare Workers는 요청마다 실행되는 서버리스 환경이므로 서버 메모리에 로그인 상태를 저장할 수 없었고, 화면에서 관리 기능을 숨기는 것만으로는 API 접근을 보호할 수 없었습니다.",
        solution:
          "만료 시각을 포함한 세션 데이터를 HMAC-SHA256으로 서명해 HttpOnly 쿠키에 저장했습니다. 등록·수정·삭제와 업로드 URL 발급 요청마다 Web Crypto API로 쿠키의 서명과 만료 시간을 다시 검증했습니다.",
        result:
          "별도의 세션 저장소 없이 7일간 유지되는 관리자 인증을 구현하고, 모든 데이터 변경 API를 서버에서 일관되게 보호했습니다.",
      },
      {
        title: "데이터베이스와 이미지 Storage의 상태 동기화",
        problem:
          "대회 정보만 수정하거나 삭제하면 이전 포스터가 Storage에 남고, 새 포스터 업로드 뒤 데이터베이스 작업이 실패하면 사용되지 않는 이미지가 누적될 수 있었습니다.",
        solution:
          "포스터 교체 시 새 이미지 업로드와 데이터베이스 수정이 모두 성공한 뒤 기존 이미지를 제거했습니다. 데이터베이스 작업이 실패하면 새 파일을 삭제하고, 대회 삭제 시에는 연결된 포스터도 함께 정리했습니다.",
        result:
          "실패 상황에서도 이전 상태를 유지하도록 보상 처리를 구성해 데이터베이스와 Storage 사이의 불일치 및 불필요한 파일 누적을 줄였습니다.",
      },
      {
        title: "검색·카테고리·추천 필터의 상태 동기화",
        problem:
          "검색어와 카테고리, 추천 여부를 따로 처리하면 조건이 조합될 때 목록과 카테고리별 개수가 서로 다르게 표시되고, 관리 작업마다 전체 목록을 다시 요청하면 UI 반응성이 떨어질 수 있었습니다.",
        solution:
          "원본 대회 목록을 하나의 상태로 관리하고 useMemo로 검색 결과와 카테고리별 개수를 계산했습니다. 관리 작업 후에는 API 응답을 사용해 변경된 항목만 불변 방식으로 갱신했습니다.",
        result:
          "여러 필터가 동시에 적용돼도 일관된 결과를 제공하고, 추가 요청 없이 관리 작업의 결과를 즉시 화면에 반영할 수 있게 되었습니다.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
