import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const writing = defineCollection({
    loader: glob({ base: "./src/content", pattern: "**/*.{md,mdx}" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string().optional(),
            publicationDate: z.coerce.date(),
            updatedDate: z.coerce.date()
        })
});

export const collections = { writing };
