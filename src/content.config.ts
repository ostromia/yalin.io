import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articles = defineCollection({
    loader: glob({ base: "./src/content/articles", pattern: "**/*.{md,mdx}" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string().optional(),
            publicationDate: z.coerce.date(),
            updatedDate: z.coerce.date()
        })
});

const thoughts = defineCollection({
    loader: glob({ base: "./src/content/thoughts", pattern: "**/*.{md,mdx}" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            hero: z.optional(image()),
            publicationDate: z.coerce.date(),
            updatedDate: z.coerce.date()
        })
});

export const collections = { articles, thoughts };
