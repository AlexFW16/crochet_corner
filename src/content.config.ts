import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    shortDescription: z.string(),
    coverImage: z.string(),
    images: z.array(z.string()).default([]),
    status: z.enum(['future', 'in-progress', 'completed']),
    sources: z.array(z.object({
      type: z.enum(['youtube', 'blog', 'etsy', 'pattern', 'other']),
      title: z.string(),
      url: z.string(),
      notes: z.string().optional(),
    })).default([]),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
  }),
});

export const collections = { projects };