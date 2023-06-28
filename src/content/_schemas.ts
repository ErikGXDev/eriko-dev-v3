import { z } from "astro:content";

export const blogSchema = z
  .object({
    title: z.string(),
    postSlug: z.string().optional(),
    draft: z.boolean().optional(),
    description: z.string(),
    pubDatetime: z.date(),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;
