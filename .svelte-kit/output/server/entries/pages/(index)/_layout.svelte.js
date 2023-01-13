import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
const Navigation_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'nav.svelte-n28cs5.svelte-n28cs5{height:5vh;width:100%;background-color:#21252B;padding:0 1rem 0 1rem;box-sizing:border-box;display:grid;gap:1rem;grid-template-columns:repeat(4, min-content) auto min-content;grid-template-rows:1fr;grid-template-areas:"index projects articles gists . github"}#nav-index.svelte-n28cs5.svelte-n28cs5{grid-area:index;padding-right:1vw;font-size:2.4vh}.nav-text.svelte-n28cs5.svelte-n28cs5{white-space:nowrap;color:white;text-decoration:none;line-height:5vh;font-size:2vh;font-family:courier;font-weight:bold}.nav-image.svelte-n28cs5.svelte-n28cs5{display:flex;justify-content:center;align-items:center}.nav-image.svelte-n28cs5>img.svelte-n28cs5{height:3vh;width:3vh}',
  map: null
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="${"svelte-n28cs5"}"><a data-sveltekit-reload class="${"nav-text svelte-n28cs5"}" id="${"nav-index"}" href="${"/"}">~/berkay-yalin.io</a>
    <a data-sveltekit-reload class="${"nav-text svelte-n28cs5"}" style="${"grid-area: projects"}" href="${"/projects"}">Projects</a>
    <a data-sveltekit-reload class="${"nav-text svelte-n28cs5"}" style="${"grid-area: articles"}" href="${"/articles"}">Articles</a>
    

    <a class="${"nav-image svelte-n28cs5"}" style="${"grid-area: github"}" href="${"https://github.com/berkay-yalin"}"><img alt="${""}" src="${"devicon/github-original.svg"}" class="${"svelte-n28cs5"}"></a>

    
</nav>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{background-color:#2e323b}body{margin:0 !important;overflow-x:hidden}#main-wrapper.svelte-zk8pfi{padding:2rem;box-sizing:border-box}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1lp6qam_START --><style>@font-face {
            font-family: "roboto";
            src: url("fonts/RobotoMono-VariableFont_wght.ttf");
        } /* Namespace.svelte */

        @font-face {
            font-family: "segoe";
            src: url("fonts/Segoe-UI.ttf");
        } /* Repositories.svelte */

        ::-webkit-scrollbar { width: 0.5vw }
        ::-webkit-scrollbar-track { background: rgb(206, 206, 206) }
        ::-webkit-scrollbar-thumb { background: rgb(136, 136, 136) }
        ::-webkit-scrollbar-thumb:hover { background: rgb(85, 85, 85) }
    </style><!-- HEAD_svelte-1lp6qam_END -->`, ""}

${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}
<div id="${"main-wrapper"}" class="${"svelte-zk8pfi"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Layout as default
};
