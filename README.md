# Developer Portfolio

최시훈의 프로필, 기술 스택, 수상 이력과 프로젝트 경험을 소개하는 포트폴리오입니다.
Next.js App Router, React, TypeScript, Tailwind CSS와 Base UI를 사용합니다.

## 실행

Node.js 24 이상과 pnpm 10.30.3을 사용합니다. 테스트는 Node.js의 TypeScript 실행 및 모듈 훅 기능을 사용합니다.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

개발 서버는 <http://localhost:3000>에서 확인할 수 있습니다.
현재는 정적 콘텐츠만 사용하므로 환경 변수나 데이터베이스 설정은 필요하지 않습니다.
빌드 시 `next/font/google`이 Geist 폰트를 내려받으므로 Google Fonts에 연결할 수 있어야 합니다.

## 검증

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm format:check
pnpm build
pnpm audit --prod
```

`pnpm test`는 프로젝트 경로와 이미지 파일, 목록 분류 및 우선순위,
기술 이름 처리, 운영·개발 환경별 보안 설정을 검증합니다.
`pnpm format`으로 코드 스타일을 정리할 수 있습니다.
운영 서버는 빌드 후 `pnpm start`로 실행합니다.

## 코드 구조

| 경로                   | 역할                                            |
| ---------------------- | ----------------------------------------------- |
| `app/`                 | 페이지, 공통 레이아웃, 메타데이터와 전역 스타일 |
| `components/`          | 프로필, 프로젝트, 테마 전환 등 화면 구성 요소   |
| `components/ui/`       | Base UI 기반 공통 버튼                          |
| `lib/data/`            | 프로젝트, 수상 이력과 기술 그룹 콘텐츠          |
| `lib/types/project.ts` | 읽기 전용 프로젝트 데이터 타입                  |
| `lib/projects.ts`      | 프로젝트 조회, 분류와 표시 순서                 |
| `lib/technologies.ts`  | 기술 이름 정규화와 아이콘 목록                  |
| `tests/`               | Node.js 기본 테스트 러너로 실행하는 회귀 검사   |
| `public/`              | 로컬 이미지, 아이콘과 라이선스 고지             |

페이지와 정적 콘텐츠는 서버 컴포넌트로 렌더링합니다.
테마 전환, 툴팁, 이미지 확대처럼 상호작용이 필요한 부분만 클라이언트 컴포넌트로 구성합니다.

## 콘텐츠 수정

- 프로젝트: `lib/data/projects.ts`를 수정합니다. `slug`는 고유한 영문 소문자·숫자·하이픈으로 작성합니다.
- 분류 및 순서: `category`로 프로젝트와 서브 프로젝트를 구분하고, `featured: true`인 항목을 해당 분류의 맨 앞에 표시합니다. 나머지는 데이터에 작성된 순서를 유지합니다.
- 수상 이력: `lib/data/awards.ts`를 수정합니다.
- 홈 기술 그룹: `lib/data/skills.ts`를 수정합니다. 아이콘은 `lib/technologies.ts`에 등록합니다.
- 프로필: `components/ProfileSection.tsx`를 수정합니다.
- 상세 분석 글: `components/ReverseEngineeringDetails.tsx`를 수정합니다. 공통 상세 제목과 문제 해결 UI는 `DetailSection`, `Troubleshooting`을 재사용합니다.

이미지는 `public/projects`, `public/profile`, `public/icons`에 저장합니다.
프로젝트 상세 페이지는 등록된 `slug`만 빌드하며, 등록되지 않은 경로에는 404를 반환합니다.
데이터를 바꾸면 다시 빌드하고 배포해야 합니다.

## 보안 설정과 점검 결과

`next.config.ts`에서 CSP, 프레임 삽입 차단, MIME 추측 방지, 리퍼러 정책과
카메라·마이크·위치 권한 제한을 모든 경로에 적용합니다.
이미지 최적화는 지정된 로컬 디렉터리와 쿼리 문자열이 없는 경로만 허용합니다.
새 창 링크는 `ExternalLink`를 통해 `noopener noreferrer`를 일관되게 적용합니다.

정적 페이지의 Next.js 초기화 스크립트와 테마 설정을 위해 CSP의 `script-src`와
`style-src`에서 `unsafe-inline`을 허용합니다. 따라서 이 정책만으로 모든 스크립트 주입을
차단하지는 않습니다. `unsafe-eval`과 WebSocket 연결은 개발 환경에만 허용합니다.
HTTPS 리디렉션과 HSTS는 배포 도메인과 호스팅 환경에서 설정합니다.

2026-11-02 기준으로 Next.js를 16.3.3에서 16.4.1로 업데이트하고,
사용하지 않는 shadcn CLI 및 드롭다운 코드를 제거했으며 하위 의존성을 갱신했습니다.
[Next.js 보안 공지](https://github.com/vercel/next.js/security/advisories/GHSA-2464-fhr4-w9xw)에 명시된 이미지 최적화 취약점의 패치 버전을 반영했습니다.

- `pnpm audit --prod`: 알려진 취약점 없음.
- 전체 검사: ESLint와 TypeScript ESLint가 사용하는 minimatch에서 중간 위험도 2건이 남아 있습니다. 외부 요청을 처리하는 운영 코드의 의존성은 아닙니다.
- [minimatch 공지](https://github.com/isaacs/minimatch/security/advisories/GHSA-g3hv-75wg-m249)의 패치 버전은 11.0.1입니다. 현재 상위 도구가 요구하는 버전 범위를 벗어나므로 강제 버전 덮어쓰기는 적용하지 않았습니다. 호환되는 상위 패키지 릴리스가 나오면 갱신하고 전체 검사를 다시 실행합니다.

이 결과는 검사 시점의 공개 취약점 목록을 기준으로 합니다.
비밀 값이 필요해지면 `.env.local`에서 관리하고, 브라우저 공개가 필요한 값에만 `NEXT_PUBLIC_` 접두사를 사용합니다.
