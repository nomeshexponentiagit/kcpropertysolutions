import { site } from './site';

interface SEOMeta {
  title: string;
  description: string;
  ogImage: string;
  canonical?: string;
}

export function buildMeta(overrides: Partial<SEOMeta> = {}): SEOMeta {
  return {
    title: overrides.title || site.seo.defaultTitle,
    description: overrides.description || site.seo.defaultDescription,
    ogImage: overrides.ogImage || site.seo.ogImage,
    canonical: overrides.canonical,
  };
}
