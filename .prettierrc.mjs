/** @type {import("prettier").Config} */
export default {
    useTabs: false,
    tabWidth: 4,
    singleQuote: false,
    trailingComma: "none",
    printWidth: 1000,
    plugins: ["prettier-plugin-astro"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro"
            }
        }
    ]
};
