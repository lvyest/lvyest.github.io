/* =====================================================================
   포트폴리오 데이터 파일
   ---------------------------------------------------------------------
   ★ 프로젝트와 블로그 글은 모두 이 파일에서 관리합니다.
     새 글/프로젝트를 추가하려면 아래 배열에 객체를 하나 추가하면 끝!
   ===================================================================== */


/* ─────────────────────────────────────────────────────────────
   1) 프로젝트
   ───────────────────────────────────────────────────────────────
   thumb : 실제 스크린샷을 넣고 싶으면 "img/파일명.png" 으로 지정.
           (null 이면 emoji + 색상으로 자동 썸네일 생성)
   emoji / accent : 썸네일 자동 생성용 이모지와 색상
   demo  : 배포(라이브) 주소 — 있으면 'Live Demo' 버튼이 생깁니다.
   ───────────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    title: "돌림력 (Dollim)",
    summary: "엑셀을 대신하는 동아리 전용 연습 캘린더",
    thumb: null,
    emoji: "🥁",
    accent: "#1f9e6e",
    period: "2026.06",
    role: "기획 · 프론트엔드 · 개인 프로젝트",
    stack: ["React", "TypeScript", "Vite", "Vercel"],
    description:
      "서울여대 중앙풍물패 '청천벽력' 채상들의 연습 일정과 참여 여부를 관리하는 캘린더 서비스입니다. 매달 엑셀 시트를 복사하고 손으로 채우던 불편함을 직접 겪고, 동아리원들이 실제로 쓸 수 있는 전용 앱으로 만들었습니다.",
    features: [
      "월간 / 주간 캘린더로 연습·특이일정을 한눈에",
      "요일별 고정 연습실 설정 시 정기 연습 자동 생성",
      "참여 / 부분참여 / 불참 / 미정 빠른 체크 및 사유 기록",
      "선배 참여 여부를 금색 테두리로 구분 · 별도 집계",
      "엑셀 → 웹앱으로 전환해 실제 동아리에서 사용 중",
    ],
    links: [
      { label: "Live Demo", url: "https://dollim-callendar-web.vercel.app" },
      { label: "GitHub", url: "https://github.com/lvyest/dollim-callendar" },
    ],
  },
  {
    title: "FixHub",
    summary: "이슈를 제기·공유·해결까지 관리하는 협업 플랫폼",
    thumb: null,
    emoji: "🛠️",
    accent: "#2b50e0",
    period: "2026.04 – 2026.05",
    role: "프론트엔드 · 팀 프로젝트 (프로그래머스 웹 풀스택 9기)",
    stack: ["React", "TypeScript", "Tailwind", "React Query", "Express", "Prisma"],
    description:
      "팀 단위에서 발생하는 이슈를 등록하고, 함께 공유하며 해결까지 추적할 수 있는 협업 플랫폼입니다. 프론트엔드와 백엔드를 분리한 구조로, REST API와 Swagger 문서를 기반으로 협업했습니다.",
    features: [
      "이슈 등록 · 공유 · 상태(해결 여부) 관리",
      "React Query / Zustand 기반 서버·클라이언트 상태 관리",
      "Tailwind CSS + shadcn/ui 로 일관된 디자인 시스템 구축",
      "Express + Prisma + PostgreSQL 백엔드, Swagger API 문서화",
      "Vercel(FE) · Render(BE) 분리 배포",
    ],
    links: [
      { label: "Live Demo", url: "https://webfull-9-10-fix-hub-frontend.vercel.app" },
      { label: "API Docs", url: "https://webfull-9-10-fixhub.onrender.com/api-docs" },
      { label: "GitHub", url: "https://github.com/lvyest/webfull_9_10_FixHub" },
    ],
  },
  {
    title: "토닥윗미 (Todak with me)",
    summary: "실시간 소통과 AI를 결합한 풀스택 팀 프로젝트",
    thumb: null,
    emoji: "💬",
    accent: "#ff5da2",
    period: "2026.05 – 2026.06",
    role: "프론트엔드 · 팀 프로젝트 (프로그래머스 웹 풀스택 9기)",
    stack: ["React", "TypeScript", "Socket.io", "Node.js", "Express", "Prisma"],
    description:
      "프로그래머스 웹 풀스택 9기 '토닥이들' 팀이 만든 서비스로, 실시간 통신과 작업 큐, AI를 활용한 기능까지 포함한 모노레포 기반 풀스택 프로젝트입니다. 저는 프론트엔드를 맡으며, 백엔드(Node.js·Express·Prisma)와 협업해 풀스택 구조를 익혔습니다.",
    features: [
      "Socket.io 기반 실시간 통신",
      "BullMQ + Redis 작업 큐로 비동기 처리",
      "Prisma 7 + PostgreSQL(Supabase) 데이터 모델링",
      "Zod 기반 검증 및 zod-to-openapi 자동 문서화",
      "Anthropic API 연동 · pnpm 모노레포 협업",
    ],
    links: [
      { label: "Live Demo", url: "https://webfull-9-10-todak-client.vercel.app" },
      { label: "GitHub", url: "https://github.com/lvyest/webfull_9_10_Todak" },
    ],
  },
  {
    title: "노련한 이력서",
    summary: "고령자를 위한 이력서 관리 서비스",
    thumb: "img/노련한이력서.png",
    emoji: "📄",
    accent: "#7a3df0",
    period: "2024.11",
    role: "프론트엔드 · 팀 프로젝트 (서울여대)",
    stack: ["React", "JavaScript", "SCSS"],
    description:
      "디지털 환경에 익숙하지 않은 고령 구직자도 쉽게 이력서를 작성·관리할 수 있도록 설계한 서비스입니다. 큰 글씨와 단계별 입력 플로우로 접근성을 높이는 데 집중했습니다.",
    features: [
      "단계별(스텝) 이력서 작성 플로우로 입력 부담 최소화",
      "고령 사용자를 고려한 큰 글씨 · 고대비 UI 설계",
      "작성한 이력서 저장 및 목록 관리",
      "반응형 레이아웃 구현",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/lvyest/SWUTeam1-Front" },
    ],
  },
  {
    title: "Noti's",
    summary: "근무 관리와 눈 건강을 챙기는 스마트 타이머",
    thumb: "img/Noti's.png",
    emoji: "👀",
    accent: "#ff6a1a",
    period: "2024.07 – 2024.08",
    role: "프론트엔드 · 해커톤 (중앙 해커톤)",
    stack: ["React", "JavaScript"],
    description:
      "근무 시간을 기록·관리하면서, 일정 시간마다 휴식 알림을 주어 눈 건강까지 챙길 수 있도록 만든 스마트 타이머 서비스입니다. 저는 프론트엔드를 맡아 화면과 타이머 인터랙션을 구현했습니다.",
    features: [
      "근무 시간 측정 및 월별 근무 통계 화면 구현",
      "주기적 휴식 알림으로 눈 건강 케어",
      "타이머 인터랙션 및 상태 관리",
      "백엔드 API 연동",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/HeheHeewon/center-hackathon/tree/one" },
    ],
  },
  {
    title: "goalGrove",
    summary: "함께 목표를 공유하고 인증하는 커뮤니티",
    thumb: "img/GoalGrove.png",
    emoji: "🌱",
    accent: "#f5b700",
    period: "2024.06 – 2024.07",
    role: "프론트엔드 · 해커톤 (여기톤 HERETHON 19조)",
    stack: ["Django", "Python", "JavaScript", "HTML/CSS"],
    description:
      "혼자서는 작심삼일이 되기 쉬운 목표를, 같은 목표를 가진 사람들과 함께 공유하고 인증하며 이어나가는 커뮤니티 서비스입니다. 여기톤 해커톤에서 기획부터 개발까지 진행했습니다.",
    features: [
      "목표 등록 및 진행 상황 인증 기능",
      "관심사 기반 커뮤니티 그룹",
      "사용자 간 응원 · 피드백 상호작용",
      "Django 기반 풀스택 협업 경험",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/2024-HERETHON/2024-Herethon-19/tree/main" },
    ],
  },
];


/* ─────────────────────────────────────────────────────────────
   2) 블로그 글
   ───────────────────────────────────────────────────────────────
   ★ '읽어보기'를 누르면 url(실제 티스토리 글)로 이동합니다.
   ★ 새 글 추가 방법: 아래 배열 맨 위에 객체를 하나 복사해 넣으세요.

   {
     title: "글 제목",
     date:  "2026-06-24",                          // YYYY-MM-DD
     url:   "https://ilove-ya.tistory.com/123",    // ← 그 글의 실제 주소
     tags:  ["회고", "React"],                     // 태그 (자유)
     excerpt: "목록에 보일 한 줄 요약",
   },
   (content 항목은 더 이상 화면에 쓰이지 않습니다 — 둬도 무방)
   ───────────────────────────────────────────────────────────── */
const BLOG_POSTS = [
  {
    title: "프론트엔드에서 백엔드까지, 풀스택으로 나아가는 중",
    date: "2026-06-24",
    url: "https://ilove-ya.tistory.com/",  // ← 각 글의 실제 티스토리 주소로 바꿔주세요
    tags: ["회고", "풀스택"],
    excerpt:
      "프론트엔드로 시작했지만, 화면 너머의 데이터 흐름이 궁금해졌습니다. 프로그래머스 웹 풀스택 과정을 통해 백엔드 기반의 풀스택 개발을 공부하고 있습니다.",
    content: `
화면을 만드는 일이 즐거워서 프론트엔드로 개발을 시작했습니다.
하지만 버튼 하나를 눌렀을 때 그 뒤에서 어떤 데이터가 오가는지,
서버는 어떻게 응답을 만들어내는지가 점점 더 궁금해졌습니다.

## 왜 백엔드인가
사용자에게 보이는 화면(프론트)과 보이지 않는 로직(백엔드)을
모두 이해할 때 비로소 '왜 이렇게 만들어야 하는지'를
설명할 수 있는 개발자가 된다고 생각했습니다.

## 지금 하고 있는 것
- 프로그래머스 웹 풀스택 9기 과정 수강
- Node.js / Express, TypeScript 기반 서버 개발 학습
- 데이터베이스(PostgreSQL) 설계와 REST API 구현 연습
- Prisma ORM, Socket.io 등 실무 도구 경험
- 프론트엔드와 백엔드를 직접 연결한 팀 프로젝트(토닥윗미, FixHub)

화려한 기술보다, 유지보수하기 좋은 단단한 코드를 만드는 개발자가 되겠습니다.
    `,
  },
  {
    title: "React Query를 처음 써보고 느낀 것",
    date: "2026-05-18",
    url: "https://ilove-ya.tistory.com/",  // ← 각 글의 실제 티스토리 주소로 바꿔주세요
    tags: ["React", "학습"],
    excerpt:
      "서버 상태와 클라이언트 상태를 분리하니, 컴포넌트가 훨씬 단순해졌습니다. FixHub 프로젝트에서 React Query를 도입한 경험을 정리했습니다.",
    content: `
useEffect로 데이터를 불러오고 로딩/에러 상태를 직접 관리하던 방식에서
React Query로 넘어오면서 코드가 눈에 띄게 줄었습니다.

## 무엇이 달라졌나
- 로딩 / 에러 / 캐싱을 라이브러리가 알아서 관리
- 같은 데이터를 여러 컴포넌트에서 중복 호출하지 않음
- 서버 상태와 UI 상태를 분리해서 생각하게 됨

## 배운 점
"상태"라고 다 같은 상태가 아니라는 걸 배웠습니다.
서버에서 오는 데이터는 캐시로, 화면 조작은 클라이언트 상태로.
이 구분만으로도 컴포넌트가 훨씬 읽기 쉬워졌어요.
    `,
  },
  {
    title: "TypeScript로 갈아타며 만난 빨간 줄들",
    date: "2026-04-30",
    url: "https://ilove-ya.tistory.com/",  // ← 각 글의 실제 티스토리 주소로 바꿔주세요
    tags: ["TypeScript", "회고"],
    excerpt:
      "처음엔 빨간 줄 투성이라 답답했지만, 실행 전에 실수를 잡아주는 든든함을 알게 되었습니다.",
    content: `
JavaScript만 쓰다가 TypeScript로 넘어왔을 때,
에디터 가득한 빨간 줄에 당황했습니다.

하지만 그 빨간 줄들은 대부분 '런타임에서 터졌을 버그'를
미리 알려주는 신호였습니다.

## 지금 느끼는 장점
- 자동완성이 정확해져서 개발 속도가 오히려 빨라짐
- 함수의 입력/출력이 명확해 협업 시 소통 비용이 줄어듦
- 리팩토링이 두렵지 않음

타입은 귀찮음이 아니라, 미래의 나를 위한 문서라는 걸 알게 됐습니다.
    `,
  },
  {
    title: "처음으로 내 손으로 배포해봤다 (Vercel)",
    date: "2026-04-10",
    url: "https://ilove-ya.tistory.com/",  // ← 각 글의 실제 티스토리 주소로 바꿔주세요
    tags: ["배포", "회고"],
    excerpt:
      "로컬에서만 돌던 프로젝트가 진짜 주소를 갖게 된 순간, 개발이 더 실감 났습니다.",
    content: `
그동안은 'localhost:3000'이 전부였는데,
직접 만든 화면이 진짜 URL로 세상에 열렸을 때의 기분은 특별했습니다.

## 배포하며 배운 것
- 환경 변수(.env)는 배포 환경에서 따로 등록해야 한다
- 빌드 에러는 로컬과 다르게 터질 수 있다
- main 브랜치에 push하면 자동 배포되는 CI/CD의 편리함

작은 프로젝트라도 '배포까지'가 진짜 완성이라는 걸 느꼈습니다.
    `,
  },
  {
    title: "팀 프로젝트에서 배운 Git 협업",
    date: "2026-03-22",
    url: "https://ilove-ya.tistory.com/",  // ← 각 글의 실제 티스토리 주소로 바꿔주세요
    tags: ["Git", "협업"],
    excerpt:
      "혼자 쓰던 Git과 함께 쓰는 Git은 완전히 달랐습니다. 브랜치 전략과 PR 리뷰를 처음 경험했습니다.",
    content: `
혼자 할 때는 main에 그냥 commit & push 하면 끝이었는데,
팀에서는 그러면 큰일 난다는 걸 배웠습니다.

## 익힌 협업 흐름
- 기능별 브랜치를 따서 작업
- Pull Request를 올리고 팀원에게 코드 리뷰 받기
- 충돌(conflict)을 만나도 당황하지 않고 해결하기
- 커밋 메시지 컨벤션 맞추기

코드를 '잘' 짜는 것만큼, '같이' 잘 짜는 법이 중요하다는 걸 배웠습니다.
    `,
  },
  {
    title: "첫 블로그를 열며",
    date: "2026-03-15",
    url: "https://ilove-ya.tistory.com/",  // ← 각 글의 실제 티스토리 주소로 바꿔주세요
    tags: ["일상"],
    excerpt:
      "배운 것과 고민한 것을 기록하기 위해 포트폴리오 안에 작은 블로그를 만들었습니다.",
    content: `
공부하면서 알게 된 것들, 프로젝트를 하며 부딪힌 문제들을
가볍게라도 기록해두려고 합니다.

기록은 나중의 나에게 가장 좋은 선물이 된다고 믿습니다.
앞으로 천천히, 그러나 꾸준히 채워나가겠습니다.
    `,
  },
];
