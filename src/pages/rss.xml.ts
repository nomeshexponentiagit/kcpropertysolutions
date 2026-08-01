import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../lib/site';

export async function GET() {
  const posts = await getCollection('posts');
  const sortedPosts = posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: site.siteName,
    description: site.seo.defaultDescription,
    site: 'https://kcpropertysolutions.in',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `/news/${post.id}`,
    })),
  });
}
