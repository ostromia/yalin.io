import { c as create_ssr_component } from "../../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "html{background-color:#2e323b}body{margin:0 !important}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-xht7kc_START -->${$$result.title = `<title>Pseudocode to Python Transpiler</title>`, ""}<style>@font-face {
      font-family: 'cabin';
      src: url("./Cabin-VariableFont_wdth,wght.ttf");
    }

    ::-webkit-scrollbar             { height: 0.2rem; width: 0.2rem  }
    ::-webkit-scrollbar-track       { background: rgb(206, 206, 206) }
    ::-webkit-scrollbar-thumb       { background: rgb(136, 136, 136) }
    ::-webkit-scrollbar-thumb:hover { background: rgb(85, 85, 85)    }
  </style><script src="${"https://cdnjs.cloudflare.com/ajax/libs/ace/1.12.5/ace.js"}" integrity="${"sha512-gLQA+KKlMRzGRNhdvGX+3F5UHojWkIIKvG2lNQk0ZM5QUbdG17/hDobp06zXMthrJrd4U1+boOEACntTGlPjJQ=="}" crossorigin="${"anonymous"}" referrerpolicy="${"no-referrer"}"><\/script><script src="${"https://cdnjs.cloudflare.com/ajax/libs/ace/1.12.5/theme-dracula.min.js"}" integrity="${"sha512-XzFsZJNE1AU2unPycw2UaT32KTSB76GPZDWi/CkO1P3f0ctnnYHop1iFI5aIVFrArykenccug+QI629Gp+vORg=="}" crossorigin="${"anonymous"}" referrerpolicy="${"no-referrer"}"><\/script><script src="${"https://cdnjs.cloudflare.com/ajax/libs/ace/1.12.5/mode-python.min.js"}" integrity="${"sha512-W1k0SdTb7FU3nxWYkBLQVhTC8b8BU6Je3deBSnLm/dSQ956goMMnL+NYi2SXse1i7k0eUJNMNycTvbEdrJmEFw=="}" crossorigin="${"anonymous"}" referrerpolicy="${"no-referrer"}"><\/script><!-- HEAD_svelte-xht7kc_END -->`, ""}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
