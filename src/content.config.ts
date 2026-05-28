import { defineCollection } from "astro:content";
import { glob, type Loader } from "astro/loaders";
import { z } from "astro/zod";

// https://stackoverflow.com/questions/79243125/customizing-definecollection-in-astro

const contentLoader: Loader = {
    ...glob,
    name: "Content Loader",
    load: async (loaderParams) => {
        const { store } = loaderParams;

        const baseLoader = glob({
            pattern: "**/*.{md,mdx}",
            base: "./src/content"
        });

        await baseLoader.load.call(this, loaderParams);

        let items = [...store.entries()].map(([_, value]) => value);

        items = items.map((item) => {
            const locale = item.filePath!.split(".").at(-2) || "en";
            return {
                ...item,
                data: {
                    ...item.data,
                    locale
                }
            };
        });
        store.clear();
        items.forEach((item) => {
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
