import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
    loader: glob({ base: "./src/content/articles", pattern: "**/*.{md,mdx}" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            publicationDate: z.coerce.date(),
            updatedDate: z.coerce.date(),
            heroImage: image().optional()
        })
});

export const collections = { articles };
