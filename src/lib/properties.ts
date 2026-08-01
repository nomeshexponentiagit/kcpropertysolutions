import type { CollectionEntry } from 'astro:content';

export const CATEGORIES = {
  all: { label: 'All Properties', slug: '' },
  plots: { label: 'Plots', slug: 'plots' },
  villas: { label: 'Villas', slug: 'villas' },
  'guest-houses': { label: 'Guest Houses', slug: 'guest-houses' },
  apartments: { label: 'Apartments', slug: 'apartments' },
  hotels: { label: 'Hotels', slug: 'hotels' },
  resorts: { label: 'Resorts', slug: 'resorts' },
  commercial: { label: 'Commercial', slug: 'commercial' },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;

export const ZONES = {
  'north-goa': 'North Goa',
  'south-goa': 'South Goa',
} as const;

export const LISTING_TYPES = {
  sale: 'For Sale',
  lease: 'For Lease',
  both: 'Sale / Lease',
} as const;

export const STATUS_LABELS = {
  available: 'Available',
  sold: 'Sold',
  'under-construction': 'Under Construction',
} as const;

export function filterProperties(
  properties: CollectionEntry<'properties'>[],
  category?: string,
  zone?: string,
  listingType?: string,
) {
  return properties.filter((p) => {
    if (category && category !== 'all' && p.data.category !== category) return false;
    if (zone && p.data.zone !== zone) return false;
    if (listingType && p.data.listingType !== listingType && p.data.listingType !== 'both')
      return false;
    return true;
  });
}

export function getFeaturedProperties(properties: CollectionEntry<'properties'>[]) {
  return properties.filter((p) => p.data.featured && p.data.status === 'available');
}

export function getPropertiesByCategory(
  properties: CollectionEntry<'properties'>[],
  category: string,
  limit?: number,
) {
  const filtered = properties.filter(
    (p) => p.data.category === category && p.data.status === 'available',
  );
  return limit ? filtered.slice(0, limit) : filtered;
}
