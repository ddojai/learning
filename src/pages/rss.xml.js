import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE, url } from '../consts';
import { getPosts } from '../lib/posts';

export async function GET(context) {
	const posts = await getPosts();
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: new URL(url(), context.site),
		items: posts.map((post) => ({
			...post.data,
			link: url(`blog/${post.id}/`),
		})),
	});
}
