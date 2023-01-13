import { c as create_ssr_component, f as add_attribute, e as escape, d as each, v as validate_component } from "../../../../chunks/index.js";
const Title_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.title.svelte-27pbyn{line-height:1.5rem;font-family:"cabin";font-size:1.5rem;color:white;z-index:2}',
  map: null
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { style = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$1);
  return `<div class="${"title svelte-27pbyn"}"${add_attribute("style", style, 0)}>${escape(text)}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '#project-container.svelte-9wp3yn.svelte-9wp3yn{width:100%}#project-container.svelte-9wp3yn>div.svelte-9wp3yn{padding:1rem;border-radius:0.5rem;box-sizing:border-box;background-color:rgb(33, 37, 43);font-size:16px;font-family:"segoe";color:rgb(139, 148, 158);text-decoration:none}#title.svelte-9wp3yn.svelte-9wp3yn{min-height:2rem;display:flex;align-items:center}#title.svelte-9wp3yn>svg.svelte-9wp3yn{fill:rgb(139, 148, 158)}#title.svelte-9wp3yn>a.svelte-9wp3yn{color:rgb(88, 166, 255);text-decoration:none}#title.svelte-9wp3yn>a.svelte-9wp3yn{margin:0 0 3px 5px}#languages.svelte-9wp3yn.svelte-9wp3yn{min-height:2rem;width:100%;display:flex;align-items:center;justify-content:start;flex-wrap:wrap}#languages.svelte-9wp3yn>div.svelte-9wp3yn{min-height:14px;display:flex;align-items:center;margin-bottom:0.5rem}.language-icon.svelte-9wp3yn.svelte-9wp3yn{height:14px;width:14px;border-radius:100%}.language-text.svelte-9wp3yn.svelte-9wp3yn{font-weight:bold;line-height:14px;font-size:14px}#languages.svelte-9wp3yn>div.svelte-9wp3yn{margin-right:15px}.language-text.svelte-9wp3yn.svelte-9wp3yn{padding-left:5px}#image_container.svelte-9wp3yn.svelte-9wp3yn{display:grid;grid-template-columns:1fr 1fr;grid-template-areas:"t1 t2" "p1 p2" "i1 i2";grid-column-gap:1rem;margin-top:1rem}#image_container.svelte-9wp3yn p.svelte-9wp3yn{line-height:16px;margin-top:0.5rem !important}#image_container.svelte-9wp3yn img.svelte-9wp3yn{height:100%;width:100%;object-fit:contain;display:block;border:2px solid white;box-sizing:border-box;cursor:pointer}',
  map: null
};
const repositoryIcon = "M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const images = [
    {
      id: "image_p2p",
      url: "https://berkay-yalin.github.io/berkay-yalin.io/pseudocode2python",
      src: "Web capture_17-10-2022_05026_berkay-yalin.github.io.jpeg"
    },
    {
      id: "image_pi",
      url: "https://berkay-yalin.github.io/berkay-yalin.io/s/pythonInterpreter.html",
      src: "Web capture_17-10-2022_05345_berkay-yalin.github.io.jpeg"
    }
  ];
  const languages = [
    { name: "HTML", color: "#e34c26" },
    { name: "Svelte", color: "#ff3e00" },
    { name: "JavaScript", color: "#f1e05a" },
    { name: "TypeScript", color: "#3178c6" },
    { name: "CSS", color: "#563d7c" },
    { name: "Sass", color: "#a53b70" }
  ];
  const data = {
    html_url: "https://github.com/berkay-yalin/berkay-yalin.io",
    name: "berkay.yalin.io",
    description: "personal portfolio website",
    language: "JavaScript"
  };
  $$result.css.add(css);
  return `<div id="${"project-container"}" class="${"svelte-9wp3yn"}"><div class="${"svelte-9wp3yn"}"><div id="${"title"}" class="${"svelte-9wp3yn"}"><svg height="${"16"}" width="${"16"}" viewBox="${"0 0 16 16"}" version="${"1.1"}" class="${"svelte-9wp3yn"}"><path fill-rule="${"evenodd"}"${add_attribute("d", repositoryIcon, 0)}></path></svg>
            <a${add_attribute("href", data.html_url, 0)} class="${"svelte-9wp3yn"}">${escape(data.name)}</a></div>

        <div id="${"languages"}" class="${"svelte-9wp3yn"}">${each(languages, ({ name, color }) => {
    return `<div class="${"svelte-9wp3yn"}"><div class="${"language-icon svelte-9wp3yn"}" id="${escape(name.toLowerCase(), true) + "-icon"}" style="${"background-color:" + escape(color, true)}"></div>
                    <div class="${"language-text svelte-9wp3yn"}">${escape(name)}</div>
                </div>`;
  })}</div>

        <div id="${"image_container"}" class="${"svelte-9wp3yn"}">${validate_component(Title, "Title").$$render($$result, { text: "Pseudocde to Python Transpiler" }, {}, {})}
            ${validate_component(Title, "Title").$$render($$result, { text: "Online Python Interpreter" }, {}, {})}

            <p class="${"svelte-9wp3yn"}">Convert OCR regulated pseudocode into Python</p>
            <p class="${"svelte-9wp3yn"}">Simplistic IDE to write Python code in the browser</p>

            ${each(images, ({ id, url, src }) => {
    return `
                <img alt="${""}"${add_attribute("id", id, 0)}${add_attribute("src", src, 0)} class="${"svelte-9wp3yn"}">`;
  })}</div></div>
</div>`;
});
export {
  Page as default
};
