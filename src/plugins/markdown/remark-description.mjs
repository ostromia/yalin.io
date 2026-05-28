// https://hunormarton.com/blog/astro-description/
import { visit, EXIT } from "unist-util-visit";

function getNodeValue(node) {
    return node.children.map((child) => child.value ?? getNodeValue(child)).join("");
}

export default function remarkDescription() {
    return (tree, file) => {
        visit(tree, "paragraph", (node) => {
            file.data.astro.frontmatter.description = getNodeValue(node);
            return EXIT;
        });
    };
}
