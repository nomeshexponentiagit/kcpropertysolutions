import type { CollectionEntry } from 'astro:content';

// This file is loaded by pages to read site.json.
// In a real build with Astro content collections, you'd use getCollection or a data loader.
// For simplicity, we import the JSON directly.

import siteData from '../../content/settings/site.json';

export interface SiteSettings {
  siteName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  addresses: {
    name: string;
    address: string;
    phone: string;
    mapUrl: string;
  }[];
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
  heroSlides: {
    image: string;
    heading: string;
    subheading: string;
    ctaText: string;
    ctaUrl: string;
  }[];
  stats: {
    value: string;
    suffix: string;
    label: string;
  }[];
  homeAbout: {
    heading: string;
    body: string;
    ctaText: string;
    ctaUrl: string;
  };
  awards: {
    title: string;
    org: string;
    year: string;
  }[];
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    ogImage: string;
  };
}

export const site = siteData as SiteSettings;
