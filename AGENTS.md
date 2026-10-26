# AGENTS.md

공부한 내용을 정리하는 개인 학습 블로그입니다. Astro로 만들고 GitHub Pages에 배포합니다.

- 사이트: https://ddojai.github.io/learning/
- 저장소: https://github.com/ddojai/learning
- 사용자와는 한국어로 대화합니다.

## 명령어

Node.js 24를 사용합니다 (`.nvmrc`).

| 명령어 | 용도 |
| --- | --- |
| `npm install` | 의존성 설치 |
| `npm run dev` | 개발 서버 (http://localhost:4321/learning/) |
| `npm run build` | 정적 사이트 생성 (`dist/`) |
| `npm run preview` | 빌드 결과 미리 보기 |

변경 후에는 `npm run build`가 통과하는지 확인합니다.

## 구조

- `src/content/blog/*.md`: 글 하나가 파일 하나입니다. 파일 이름이 URL이 됩니다 (`tokenization.md` → `/learning/blog/tokenization/`).
- `src/content/blog/_template.md`: 새 글 템플릿입니다. `_`로 시작하는 파일은 사이트에 나오지 않습니다.
- `src/content.config.ts`: frontmatter 스키마입니다 (`title`, `description`, `pubDate`, `updatedDate?`, `heroImage?`, `draft`).
- `src/lib/posts.ts`: `getPosts()`는 공개된 글을 최신순으로 반환합니다. `draft: true`인 글은 개발 서버에서만 보입니다.
- `src/consts.ts`: 사이트 제목, 설명, GitHub 링크, 그리고 `url()` 함수가 있습니다.
- 홈(`src/pages/index.astro`)은 소개와 글 목록 링크만 있는 단순한 구조입니다. 참고한 사이트는 https://github.com/Julian-adv/Julian-adv.github.io 입니다.

## base 경로 주의

`astro.config.mjs`에 `base: '/learning'`이 설정되어 있습니다. 내부 링크와 `public/` 파일 경로는 `/blog/...`처럼 직접 쓰지 말고 반드시 `url('blog/...')`를 사용합니다. 그렇지 않으면 배포된 사이트에서 링크가 깨집니다.

## 글 작성 규칙

- 연재 글은 제목에 순서를 붙입니다. 예: `LLM 1: 토큰화 (Tokenization)`
- 글은 "~다" 체로 씁니다.
- 공개하지 않을 글은 `draft: true`로 둡니다.

## 배포

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`(withastro/action)이 빌드하고 배포합니다. 1~2분 걸립니다. 결과는 `gh run list -R ddojai/learning`으로 확인합니다.

## git 주의사항

- 이 저장소에는 작업 폴더가 두 개 있습니다.
  - `~/Documents/github/learning`: `main` 브랜치, `origin/main`을 추적합니다.
  - `~/orca/workspaces/learning/wreckfish`: Orca worktree이고 `learn-llm-basics` 브랜치이며, `origin/main`을 추적합니다.
- 로컬 브랜치 이름과 원격 브랜치 이름이 달라서 `push.default=upstream`이 설정되어 있습니다. 이 설정이 없으면 `git push`가 조용히 실패하므로, push한 뒤에는 `git status -sb`로 반영됐는지 확인합니다.
- 커밋과 push는 사용자가 요청할 때만 합니다.
