import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import eslintPluginAstro from "eslint-plugin-astro";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: { globals: globals.browser }
    },
    tseslint.configs.recommended,
    { files: ["**/*.md"], plugins: { markdown }, language: "markdown/gfm", extends: ["markdown/recommended"] },
    { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
    {
        files: ["**/*.astro"],
        extends: [eslintPluginAstro.configs.recommended],
        languageOptions: { parserOptions: { parser: tseslint.parser }, extraFileExtensions: [".astro"] }
    }
]);
