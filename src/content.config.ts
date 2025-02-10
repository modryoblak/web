import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"; // Not available with legacy API
import { redirect } from "node_modules/@keystatic/core/dist/declarations/src/api/internal-utils";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      description: z.string().optional(),
      date: z.date(),
      cover: image(),
    }),
});

const redirects = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/content/redirects" }),
  schema: z.object({
    name: z.string(),
    redirect: z.string(),
    base: z.string(),
  }),
});

export const collections = { posts, redirects };
