# LLM 학습 노트

`https://ddojai.github.io/learning`에 배포되는 Astro 기반 학습 사이트입니다.

## 로컬 실행

Node.js 24를 사용합니다.

```sh
npm install
npm run dev
```

## 노트 작성

`src/content/blog/_template.md`를 복사해서 이름을 바꾸고 내용을 채웁니다.

- `step`: 커리큘럼 단계 번호입니다. 홈 화면의 커리큘럼 목록에 연결됩니다. 단계 목록은 `src/consts.ts`의 `CURRICULUM`에서 관리합니다.
- `draft: true`: 개발 서버에서만 보이고 배포되지 않습니다. 공개할 때 `false`로 바꾸거나 줄을 지웁니다.

## 배포

GitHub에 `ddojai/learning` 저장소를 만들고 push합니다. 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정하면 `main` 브랜치에 push할 때마다 자동으로 배포됩니다.

## 명령어

| 명령어 | 용도 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 배포용 정적 사이트 생성 |
| `npm run preview` | 생성 결과 미리 보기 |
