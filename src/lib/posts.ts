import { getCollection } from 'astro:content';

// 공개된 노트만 최신순으로 가져온다. 개발 서버에서는 draft도 보여준다.
export async function getPosts() {
	const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
