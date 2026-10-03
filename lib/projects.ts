export type Project = {
  slug: string;
  category: "project" | "subproject";
  title: string;
  englishTitle: string;
  summary: string;
  description: string;
  year: string;
  status: string;
  technologies: string[];
  image: string | null;
  imageAlt: string;
  imageAspectRatio?: number;
  caseStudy?: "2048-reverse-engineering";
  contributions: string[];
  learnings?: string[];
  troubleshooting: {
    title: string;
    problem: string;
    solution: string;
    result: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "2048-reverse-engineering",
    category: "project",
    title: "2048 Reverse Engineering & Binary Patching",
    englishTitle: "Reverse Engineering",
    summary:
      "2048 실행 파일을 IDA로 분석하고, 소스코드 수정 없이 바이너리를 패치해 획득 점수를 변경했습니다.",
    description:
      "오픈소스 2048 게임의 실행 파일을 IDA로 분석하고, 점수 계산 로직을 찾아 소스코드를 수정하지 않고 바이너리 패치를 통해 획득 점수를 변경한 프로젝트입니다.",
    year: "2026",
    status: "분석·패치 완료",
    technologies: ["Assembly", "C", "IDA", "macOS"],
    image: "/projects/2048-reverse-engineering/patched-game.png",
    imageAlt: "바이너리 패치 후 실행한 2048 게임 화면",
    caseStudy: "2048-reverse-engineering",
    contributions: [],
    troubleshooting: [],
  },
  {
    slug: "developer-portfolio",
    category: "project",
    title: "Protfolio Blog",
    englishTitle: "Developer Portfolio",
    summary:
      "프로필, 기술 스택, 수상 내역과 프로젝트 경험을 한곳에서 소개하는 반응형 포트폴리오 웹사이트입니다.",
    description:
      "Next.js App Router와 TypeScript로 만든 개인 포트폴리오 웹사이트입니다. 첫 화면에서 프로필과 기술 스택, 수상 내역을 소개하고, 프로젝트 페이지에서는 프로젝트와 서브 프로젝트를 나누어 보여줍니다. 각 항목은 기여 내용과 문제 해결 과정을 담은 상세 페이지로 이어지며, 모바일 화면과 시스템 테마 설정도 지원합니다.",
    year: "2026",
    status: "개발·개선 중",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
    image: "/projects/developer-portfolio.png",
    imageAlt: "Developer Portfolio 웹사이트의 화면 구성 미리보기",
    contributions: [],
    troubleshooting: [],
  },
  {
    slug: "soundmotion",
    category: "project",
    title: "Sound Motion",
    englishTitle: "SoundMotion",
    summary:
      "음악 탐색부터 재생까지 자연스럽게 이어지는 경험을 제공하는 반응형 음악 플레이어입니다.",
    description:
      "SoundMotion은 음악 탐색부터 재생까지 자연스럽게 이어지는 경험을 제공하는 음악 플레이어입니다. 앨범 아트와 음악 정보를 중심으로 콘텐츠에 몰입할 수 있도록 구성하고, 다양한 화면에서 편안하게 사용할 수 있는 반응형 인터페이스와 다크 테마를 적용했습니다.",
    year: "2026",
    status: "개발 종료",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Cloudflare",
      "Supabase",
    ],
    image: "/projects/soundmotion.png",
    imageAlt: "SoundMotion 음악 비주얼라이저 프로젝트 화면",
    contributions: [
      "서비스의 주요 기능과 화면 구성을 정의하고, 음악 탐색부터 재생까지 이어지는 전체 프로젝트 구조를 설계했습니다.",
      "사용자 흐름을 고려한 반응형 웹 UI/UX를 설계·구현해 다양한 화면 크기에서도 일관된 사용 경험을 제공했습니다.",
      "Canvas를 활용한 음악 플레이어를 구현하고, 재생 상태와 화면 정보가 일치하도록 관리했습니다.",
    ],
    troubleshooting: [
      {
        title: "Canvas 값 업데이트로 인한 잦은 재렌더링",
        problem:
          "Canvas의 실시간 값을 useState로 관리하면서 값이 바뀔 때마다 React 컴포넌트가 반복 렌더링되고 화면이 끊기는 문제가 발생했습니다.",
        solution:
          "고빈도로 바뀌는 Canvas 값을 useRef로 관리해 React 상태와 분리하고, 불필요한 재렌더링을 줄였습니다.",
        result:
          "화면 성능을 개선하고 Canvas 애니메이션이 더 부드럽게 동작하도록 했습니다. 이 경험을 통해 자주 변하지만 React 렌더링을 유발할 필요가 없는 값은 useRef로 관리하는 것이 효과적임을 배웠습니다.",
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
    slug: "ctf-writeup-manager",
    category: "subproject",
    title: "CTF Writeup Manager",
    englishTitle: "CTF Writeup Manager",
    summary:
      "CTF 문제 풀이를 분야별로 기록하고 관리하는 Flask 기반 웹앱입니다.",
    description:
      "CTF 문제의 이름과 분야, 풀이 과정을 한곳에 기록하고 관리하는 웹 애플리케이션입니다. 문제 풀이를 추가·조회·수정·삭제할 수 있으며, 최신 기록 목록에서 원하는 문제를 선택해 상세 내용을 확인할 수 있습니다.",
    year: "2026",
    status: "구현 완료",
    technologies: ["Python", "Flask", "Tailwind CSS"],
    image: "/projects/ctf-writeup-manager.png",
    imageAlt: "CTF Writeup Manager의 Reversing 문제 풀이 상세 화면",
    contributions: [
      "Flask 라우트와 SQLite를 사용해 풀이 기록의 추가·조회·수정·삭제 기능을 구현했습니다.",
      "Reversing, Pwn, Web, Crypto, Forensics 분야로 기록을 분류하고 최신 기록부터 목록에 표시했습니다.",
      "문제 목록에서 항목을 선택하면 풀이 상세 화면을 볼 수 있도록 구성했습니다.",
      "기록이 없을 때 안내 화면을 표시하고, 존재하지 않는 기록 요청은 404로 처리했습니다.",
      "조회와 데이터 변경에 SQL 매개변수 바인딩을 적용하고, Tailwind CSS로 반응형 화면을 구성했습니다.",
    ],
    learnings: [
      "Flask 라우트와 SQLite를 연결해 데이터의 추가·조회·수정·삭제가 처리되는 흐름을 익혔습니다.",
      "SQL 매개변수 바인딩을 적용하며 사용자 입력과 SQL 쿼리를 분리해 안전하게 처리하는 방법을 배웠습니다.",
      "기록 목록과 상세 화면을 구성하며, 빈 목록과 잘못된 요청에 대한 사용자 안내도 함께 설계했습니다.",
    ],
    troubleshooting: [],
  },
  {
    slug: "simplechat",
    category: "subproject",
    title: "Simple Chat",
    englishTitle: "SimpleChat",
    summary:
      "Java Socket과 Thread로 구현한 콘솔 기반 실시간 1:1 채팅 프로그램입니다.",
    description:
      "Java의 Socket과 ServerSocket을 활용한 콘솔 기반 1:1 채팅 프로그램입니다. ChatServer가 5001번 포트에서 클라이언트 접속을 기다리고, 연결 후에는 서버와 클라이언트가 TCP 소켓의 입출력 스트림으로 메시지를 주고받습니다. 수신 작업을 별도 스레드에서 실행해 메시지를 받으면서도 직접 입력하고 전송할 수 있도록 구현했습니다.",
    year: "2026",
    status: "구현 완료",
    technologies: ["Java"],
    image: "/projects/simplechat.png",
    imageAlt:
      "SimpleChat 서버와 클라이언트 콘솔에서 test와 test2 메시지를 주고받는 실행 화면",
    imageAspectRatio: 2916 / 530,
    contributions: [
      "ServerSocket으로 5001번 포트에 채팅 서버를 열고 클라이언트 접속을 기다리도록 구현했습니다.",
      "Socket으로 서버와 클라이언트를 연결하고 입출력 스트림을 사용한 양방향 통신을 구현했습니다.",
      "BufferedReader로 상대방의 메시지를 수신하고 PrintWriter로 콘솔에서 입력한 메시지를 전송했습니다.",
      "메시지 수신 작업을 별도의 Thread로 분리해 수신과 사용자 입력을 동시에 처리했습니다.",
    ],
    learnings: [
      "서버의 접속 대기부터 클라이언트 연결까지 TCP 소켓 통신의 기본 흐름을 이해했습니다.",
      "입출력 스트림을 통해 서버와 클라이언트 사이에 메시지가 전달되는 방식을 학습했습니다.",
      "스레드를 활용해 메시지 수신과 사용자 입력을 동시에 처리하는 방식을 경험했습니다.",
    ],
    troubleshooting: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
