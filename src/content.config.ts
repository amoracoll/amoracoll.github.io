import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const YEAR_MONTH = /^\d{4}-(0[1-9]|1[0-2])$/;

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  // TODO: SPEC.md shows a video link on the detail page, but the content model has no `video` field.
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(160),
      date: z.coerce.date(),
      tags: z.array(z.string()),
      featured: z.boolean().default(false),
      repo: z.string().url().optional(),
      demo: z.string().url().optional(),
      cover: image().optional(),
    }),
});

const experience = defineCollection({
  loader: file("src/content/experience.yaml"),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    start: z.string().regex(YEAR_MONTH, "Use YYYY-MM"),
    end: z.string().regex(YEAR_MONTH, "Use YYYY-MM").nullable(),
    location: z.string(),
    highlights: z.array(z.string()).min(2).max(4),
  }),
});

const site = defineCollection({
  loader: file("src/content/site.yaml"),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    tagline: z.string(),
    email: z.string(),
    linkedin: z.string(),
    github: z.string().url(),
  }),
});

export const collections = { projects, experience, site };
