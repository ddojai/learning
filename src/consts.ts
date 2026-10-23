// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = '학습 기록';
export const SITE_DESCRIPTION = '공부하면서 배운 것을 정리하는 기록입니다.';
export const GITHUB_URL = 'https://github.com/ddojai';

// base 경로(/learning)를 붙인 내부 링크를 만든다.
export function url(path = '') {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}/${path.replace(/^\//, '')}`;
}
