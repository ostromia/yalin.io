const MAX_LENGTH = 155;

function nodeToText(node) {
    if (node.value) return node.value;
    if (!node.children) return "";
    return node.children.map(nodeToText).join("");
}

function truncate(text) {
    const collapsed = text.replace(/\s+/g, " ").trim();
    if (collapsed.length <= MAX_LENGTH) return collapsed;
    const sliced = collapsed.slice(0, MAX_LENGTH);
    const lastSpace = sliced.lastIndexOf(" ");
    return (lastSpace > 0 ? sliced.slice(0, lastSpace) : sliced).trimEnd() + "…";
}

export default function remarkDescription() {
    return function (tree, file) {
        const frontmatter = (file.data.astro ??= {}).frontmatter ??= {};
        if (frontmatter.description) return;

        const firstParagraph = tree.children.find((node) => node.type === "paragraph");
        if (!firstParagraph) return;

        const text = nodeToText(firstParagraph);
        if (!text.trim()) return;

        frontmatter.description = truncate(text);
    };
}
