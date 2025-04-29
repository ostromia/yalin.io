import { defineCollection, z } from "astro:content";

const articles = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publicationDate: z.coerce.date(),
        updatedDate: z.coerce.date(),
        heroImage: z.string().optional()
    })
});

export const collections = { articles };
