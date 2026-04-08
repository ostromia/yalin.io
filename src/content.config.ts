import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articles = defineCollection({
    loader: glob({ base: "./src/content/articles", pattern: "**/*.{md,mdx}" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            publicationDate: z.coerce.date(),
            updatedDate: z.coerce.date(),
            heroImage: z.optional(image())
        })
});

export const collections = { articles };
