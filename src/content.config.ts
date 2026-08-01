import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  properties: defineCollection({
    loader: glob({ base: './content/properties', pattern: '**/*.md' }),
    schema: z.object({
      title: z.string(),
      category: z.enum(['plots', 'villas', 'guest-houses', 'apartments', 'hotels', 'resorts', 'commercial']),
      listingType: z.enum(['sale', 'lease', 'both']),
      status: z.enum(['available', 'sold', 'under-construction']),
      featured: z.boolean().default(false),
      price: z.string(),
      priceNote: z.string().optional(),
      location: z.string(),
      zone: z.enum(['north-goa', 'south-goa']),
      area: z.string(),
      beds: z.number().optional(),
      baths: z.number().optional(),
      plotSize: z.string().optional(),
      amenities: z.array(z.string()).default([]),
      highlights: z.array(z.string()).default([]),
      featuredImage: z.string(),
      gallery: z.array(z.string()).default([]),
      locationUrl: z.string().optional(),
      contactAgent: z.string().optional(),
      contactPhone: z.string().optional(),
      published: z.date(),
    }),
  }),

  posts: defineCollection({
    loader: glob({ base: './content/posts', pattern: '**/*.md' }),
    schema: z.object({
      title: z.string(),
      date: z.date(),
      excerpt: z.string(),
      coverImage: z.string(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      author: z.string().default('KC Property Solutions'),
    }),
  }),
};
