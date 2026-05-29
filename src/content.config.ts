import { glob, type Loader } from "astro/loaders";
import { z } from "astro/zod";
import { type DataEntry, defineCollection } from "astro:content";

import { toString } from "mdast-util-to-string";
import remarkMath from "remark-math";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { EXIT, visit } from "unist-util-visit";

function mutateEntry(entry: DataEntry) {
    const tree = unified().use(remarkParse).use(remarkMath).use(remarkMdx).parse(entry.body);

    let first;
    visit(tree, "paragraph", (node) => {
        first = node;
        return EXIT;
    });

    return {
        ...entry,
        data: {
            ...entry.data,
            description: toString(first)
        }
    };
}

const writingLoader: Loader = {
    ...glob,
    name: "Content Loader",
    load: async (loaderContext) => {
        const { store } = loaderContext;

        const globLoader = glob({
            pattern: "**/*.{md,mdx}",
            base: "./src/content"
        });

        await globLoader.load.call(this, loaderContext);

        const storeValues = Array.from(store.values());

        store.clear();

        for (const i of storeValues) {
            store.set(mutateEntry(i));
        }
    }
};

const writing = defineCollection({
    loader: writingLoader,
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string().optional(),
            publicationDate: z.coerce.date(),
            updatedDate: z.coerce.date()
        })
});

export const collections = { writing };
