// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'LLM 학습 노트';
export const SITE_DESCRIPTION = 'LLM이 어떻게 동작하는지 원리부터 차근차근 정리하는 학습 기록';
export const GITHUB_URL = 'https://github.com/ddojai';

// 커리큘럼 순서. 노트의 frontmatter `step`과 연결된다.
export const CURRICULUM = [
	{ step: 1, title: '토큰화 (Tokenization)', question: '텍스트를 어떻게 숫자로 바꾸나?' },
	{ step: 2, title: '임베딩 (Embedding)', question: '단어의 의미를 벡터로 어떻게 표현하나?' },
	{ step: 3, title: '트랜스포머와 어텐션', question: '문맥을 어떻게 이해하나?' },
	{ step: 4, title: '사전학습 (Pre-training)', question: '다음 토큰 예측으로 어떻게 학습하나?' },
	{ step: 5, title: '파인튜닝과 RLHF', question: '어떻게 말 잘 듣는 비서가 되나?' },
	{ step: 6, title: '추론 (Inference)', question: 'temperature, 샘플링, 컨텍스트 윈도우란?' },
	{ step: 7, title: '활용', question: '프롬프팅, RAG, 에이전트, 툴 사용' },
];

// base 경로(/learning)를 붙인 내부 링크를 만든다.
export function url(path = '') {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}/${path.replace(/^\//, '')}`;
}
