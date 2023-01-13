import { c as create_ssr_component } from "../../../../chunks/index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1otwrqg_START --><style>@font-face {
            font-family: "cabin";
            src: url("fonts/Cabin-VariableFont_wdth,wght.ttf");
        } /* +page.svelte */
    </style><!-- HEAD_svelte-1otwrqg_END -->`, ""}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
