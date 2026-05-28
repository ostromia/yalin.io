import { defineCollection } from "astro:content";
import { glob, type Loader } from "astro/loaders";
import { z } from "astro/zod";

const contentLoader: Loader = {
    ...glob,
    name: "Content Loader",
    load: async (loaderContext) => {
        const { store } = loaderContext;

        const globLoader = glob({
            pattern: "**/*.{md,mdx}",
            base: "./src/content"
        });

        await globLoader.load.call(this, loaderContext);

        const result = Array.from(store.entries(), ([, value]) => ({
            ...value,
            data: {
                ...value.data,
                locale: value.filePath!.replace(/\.(md|mdx)$/, "")
            }
        }));

        store.clear();

        result.forEach((item) => {
            store.set({ ...item });
        });
    }
};

const writing = defineCollection({
    loader: contentLoader,
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string().optional(),
            publicationDate: z.coerce.date(),
            updatedDate: z.coerce.date()
        })
});

export const collections = { writing };
