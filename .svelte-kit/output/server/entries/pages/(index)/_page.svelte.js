import { c as create_ssr_component, e as escape, d as each, f as add_attribute, v as validate_component } from "../../../chunks/index.js";
const Namespace_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '#title.svelte-1529ust{width:100%;text-align:center;color:white;font-family:"roboto";line-height:10vh;font-size:8vh;text-shadow:0 1px 0 #000000, 0 2px 0 #00111f, 0 3px 0 #001825, 0 4px 0 #001e2c, 0 5px 0 #012533, 0 6px 0 #092b3a, 0 7px 0 #123241, 0 8px 0 #1a3949, 0 9px 0 #224150, 0 10px 0 #2a4858}',
  map: null
};
const Namespace = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div id="${"title"}" class="${"svelte-1529ust"}">berkay-yalin.io
</div>`;
});
const Carousel_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#gradient-to-right.svelte-55aave{height:100%;width:calc(var(--inner-width) / 2);position:absolute;z-index:99;background:linear-gradient(to right, #2e323b 0%, transparent 50%)}#gradient-to-left.svelte-55aave{height:100%;width:calc(var(--inner-width) / 2);position:absolute;z-index:99;left:50%;background:linear-gradient(to left, #2e323b 0%, transparent 50%)}#devicon-container.svelte-55aave{width:var(--inner-width);position:relative;display:flex;overflow:hidden}@-webkit-keyframes svelte-55aave-translate{100%{transform:translateX(calc(-1 * var(--inner-width)))}}@keyframes svelte-55aave-translate{100%{transform:translateX(calc(-1 * var(--inner-width)))}}.devicon-strip.svelte-55aave{min-width:var(--inner-width);display:flex;align-items:center;animation:svelte-55aave-translate 20s linear infinite;-webkit-animation:svelte-55aave-translate 20s linear infinite}.devicon-div.svelte-55aave{height:10vh;width:calc(var(--inner-width) / 11);display:flex;align-items:center;justify-content:center}.devicon.svelte-55aave{height:100%;width:100%;padding:0.5rem;box-sizing:border-box;object-fit:contain}",
  map: null
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const devicons = [
    "c",
    "python",
    "lua",
    "svelte",
    "javascript",
    "typescript",
    "html5",
    "css3",
    "sass",
    "flask",
    "sqlite"
  ];
  let innerWidth;
  $$result.css.add(css$2);
  return `

<div id="${"devicon-container"}" style="${"--inner-width: " + escape(innerWidth, true) + "px"}" class="${"svelte-55aave"}"><div id="${"gradient-to-left"}" class="${"svelte-55aave"}"></div>
    <div id="${"gradient-to-right"}" class="${"svelte-55aave"}"></div>

  <div class="${"devicon-strip svelte-55aave"}">${each(devicons, (path) => {
    return `<div class="${"devicon-div svelte-55aave"}"><img alt="${""}" class="${"devicon svelte-55aave"}" src="${"devicon/" + escape(path, true) + "-original.svg"}">
        </div>`;
  })}</div>

  <div class="${"devicon-strip svelte-55aave"}">${each(devicons, (path) => {
    return `<div class="${"devicon-div svelte-55aave"}"><img alt="${""}" class="${"devicon svelte-55aave"}" src="${"devicon/" + escape(path, true) + "-original.svg"}">
        </div>`;
  })}</div>
</div>`;
});
const RepositoryCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '#card-container.svelte-12vpwem.svelte-12vpwem{min-height:100%;padding:1rem;border-radius:0.5rem;box-sizing:border-box;font-family:"segoe";color:var(--color);background-color:var(--background-color);display:flex;flex-direction:column}#title.svelte-12vpwem.svelte-12vpwem,#languages.svelte-12vpwem.svelte-12vpwem{margin-bottom:1vh}#title.svelte-12vpwem.svelte-12vpwem{min-height:16px;display:flex;align-items:center}#title.svelte-12vpwem>svg.svelte-12vpwem{fill:var(--color)}#title.svelte-12vpwem>a.svelte-12vpwem{color:var(--link-color);text-decoration:none;line-height:16px;font-size:16px}#title.svelte-12vpwem>a.svelte-12vpwem{margin:0 0 3px 5px}#languages.svelte-12vpwem.svelte-12vpwem{height:14px;width:100%;display:flex;align-items:center;justify-content:start;flex-wrap:wrap}#languages.svelte-12vpwem>div.svelte-12vpwem{min-height:14px;display:flex;align-items:center}#language-span-icon.svelte-12vpwem.svelte-12vpwem{height:14px;width:14px;border-radius:100%;background-color:var(--language-color)}#language-span-text.svelte-12vpwem.svelte-12vpwem{line-height:14px;font-size:14px}#languages.svelte-12vpwem>div.svelte-12vpwem{margin-right:15px}#language-span-text.svelte-12vpwem.svelte-12vpwem{padding-left:5px}@media(max-width: 1000px){#description.svelte-12vpwem.svelte-12vpwem{text-align:center}}',
  map: null
};
const repositoryIcon = "M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z";
const RepositoryCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { username } = $$props;
  let { repository } = $$props;
  let { description } = $$props;
  let { language } = $$props;
  let { column } = $$props;
  let { row } = $$props;
  const githubLanguageColors = {
    "ABAP": "#E8274B",
    "ActionScript": "#882B0F",
    "Ada": "#02f88c",
    "Agda": "#315665",
    "AGS Script": "#B9D9FF",
    "Alloy": "#64C800",
    "AMPL": "#E6EFBB",
    "ANTLR": "#9DC3FF",
    "API Blueprint": "#2ACCA8",
    "APL": "#5A8164",
    "Arc": "#aa2afe",
    "Arduino": "#bd79d1",
    "ASP": "#6a40fd",
    "AspectJ": "#a957b0",
    "Assembly": "#6E4C13",
    "ATS": "#1ac620",
    "AutoHotkey": "#6594b9",
    "AutoIt": "#1C3552",
    "BlitzMax": "#cd6400",
    "Boo": "#d4bec1",
    "Brainfuck": "#2F2530",
    "C Sharp": "#178600",
    "C": "#555555",
    "Chapel": "#8dc63f",
    "Cirru": "#ccccff",
    "Clarion": "#db901e",
    "Clean": "#3F85AF",
    "Click": "#E4E6F3",
    "Clojure": "#db5855",
    "CoffeeScript": "#244776",
    "ColdFusion CFC": "#ed2cd6",
    "ColdFusion": "#ed2cd6",
    "Common Lisp": "#3fb68b",
    "Component Pascal": "#b0ce4e",
    "cpp": "#f34b7d",
    "Crystal": "#776791",
    "CSS": "#563d7c",
    "D": "#ba595e",
    "Dart": "#00B4AB",
    "Diff": "#88dddd",
    "DM": "#447265",
    "Dogescript": "#cca760",
    "Dylan": "#6c616e",
    "E": "#ccce35",
    "Eagle": "#814C05",
    "eC": "#913960",
    "ECL": "#8a1267",
    "edn": "#db5855",
    "Eiffel": "#946d57",
    "Elixir": "#6e4a7e",
    "Elm": "#60B5CC",
    "Emacs Lisp": "#c065db",
    "EmberScript": "#FFF4F3",
    "Erlang": "#B83998",
    "F#": "#b845fc",
    "Factor": "#636746",
    "Fancy": "#7b9db4",
    "Fantom": "#dbded5",
    "FLUX": "#88ccff",
    "Forth": "#341708",
    "FORTRAN": "#4d41b1",
    "FreeMarker": "#0050b2",
    "Frege": "#00cafe",
    "Game Maker Language": "#8fb200",
    "Glyph": "#e4cc98",
    "Gnuplot": "#f0a9f0",
    "Go": "#375eab",
    "Golo": "#88562A",
    "Gosu": "#82937f",
    "Grammatical Framework": "#79aa7a",
    "Groovy": "#e69f56",
    "Handlebars": "#01a9d6",
    "Harbour": "#0e60e3",
    "Haskell": "#29b544",
    "Haxe": "#df7900",
    "HTML": "#e44b23",
    "Hy": "#7790B2",
    "IDL": "#a3522f",
    "Io": "#a9188d",
    "Ioke": "#078193",
    "Isabelle": "#FEFE00",
    "J": "#9EEDFF",
    "Java": "#b07219",
    "JavaScript": "#f1e05a",
    "JFlex": "#DBCA00",
    "JSONiq": "#40d47e",
    "Julia": "#a270ba",
    "Jupyter Notebook": "#DA5B0B",
    "Kotlin": "#F18E33",
    "KRL": "#28431f",
    "Lasso": "#999999",
    "Latte": "#A8FF97",
    "Lex": "#DBCA00",
    "LFE": "#004200",
    "LiveScript": "#499886",
    "LOLCODE": "#cc9900",
    "LookML": "#652B81",
    "LSL": "#3d9970",
    "Lua": "#000080",
    "Makefile": "#427819",
    "Mask": "#f97732",
    "Matlab": "#bb92ac",
    "Max": "#c4a79c",
    "MAXScript": "#00a6a6",
    "Mercury": "#ff2b2b",
    "Metal": "#8f14e9",
    "Mirah": "#c7a938",
    "MTML": "#b7e1f4",
    "NCL": "#28431f",
    "Nemerle": "#3d3c6e",
    "nesC": "#94B0C7",
    "NetLinx": "#0aa0ff",
    "NetLinx+ERB": "#747faa",
    "NetLogo": "#ff6375",
    "NewLisp": "#87AED7",
    "Nimrod": "#37775b",
    "Nit": "#009917",
    "Nix": "#7e7eff",
    "Nu": "#c9df40",
    "Objective-C": "#438eff",
    "Objective-C++": "#6866fb",
    "Objective-J": "#ff0c5a",
    "OCaml": "#3be133",
    "Omgrofl": "#cabbff",
    "ooc": "#b0b77e",
    "Opal": "#f7ede0",
    "Oxygene": "#cdd0e3",
    "Oz": "#fab738",
    "Pan": "#cc0000",
    "Papyrus": "#6600cc",
    "Parrot": "#f3ca0a",
    "Pascal": "#b0ce4e",
    "PAWN": "#dbb284",
    "Perl": "#0298c3",
    "Perl6": "#0000fb",
    "PHP": "#4F5D95",
    "PigLatin": "#fcd7de",
    "Pike": "#005390",
    "PLSQL": "#dad8d8",
    "PogoScript": "#d80074",
    "Processing": "#0096D8",
    "Prolog": "#74283c",
    "Propeller Spin": "#7fa2a7",
    "Puppet": "#302B6D",
    "Pure Data": "#91de79",
    "PureBasic": "#5a6986",
    "PureScript": "#1D222D",
    "Python": "#3572A5",
    "QML": "#44a51c",
    "R": "#198ce7",
    "Racket": "#22228f",
    "Ragel in Ruby Host": "#9d5200",
    "RAML": "#77d9fb",
    "Rebol": "#358a5b",
    "Red": "#ee0000",
    "Ren'Py": "#ff7f7f",
    "Rouge": "#cc0088",
    "Ruby": "#701516",
    "Rust": "#dea584",
    "SaltStack": "#646464",
    "SAS": "#B34936",
    "Scala": "#DC322F",
    "Scheme": "#1e4aec",
    "Self": "#0579aa",
    "Shell": "#89e051",
    "Shen": "#120F14",
    "Slash": "#007eff",
    "Slim": "#ff8f77",
    "Smalltalk": "#596706",
    "SourcePawn": "#5c7611",
    "SQF": "#3F3F3F",
    "Squirrel": "#800000",
    "Stan": "#b2011d",
    "Standard ML": "#dc566d",
    "SuperCollider": "#46390b",
    "Swift": "#ffac45",
    "SystemVerilog": "#DAE1C2",
    "Tcl": "#e4cc98",
    "TeX": "#3D6117",
    "Turing": "#45f715",
    "TypeScript": "#2b7489",
    "Unified Parallel C": "#4e3617",
    "Unity3D Asset": "#ab69a1",
    "UnrealScript": "#a54c4d",
    "Vala": "#fbe5cd",
    "Verilog": "#b2b7f8",
    "VHDL": "#adb2cb",
    "VimL": "#199f4b",
    "Visual Basic": "#945db7",
    "Volt": "#1F1F1F",
    "Vue": "#2c3e50",
    "Web Ontology Language": "#9cc9dd",
    "wisp": "#7582D1",
    "X10": "#4B6BEF",
    "xBase": "#403a40",
    "XC": "#99DA07",
    "XQuery": "#5232e7",
    "Zephir": "#118f9e"
  };
  const data = {
    html_url: `https://github.com/${username}/${repository}`,
    name: repository,
    description,
    language
  };
  const cssThemeVariables = `
    --background-color: #21252B;
    --border-color: rgb(48, 54, 61);
    --color: rgb(139, 148, 158);
    --link-color: rgb(88, 166, 255);
    --language-color: ${githubLanguageColors[data.language]}
  `;
  if ($$props.username === void 0 && $$bindings.username && username !== void 0)
    $$bindings.username(username);
  if ($$props.repository === void 0 && $$bindings.repository && repository !== void 0)
    $$bindings.repository(repository);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  if ($$props.column === void 0 && $$bindings.column && column !== void 0)
    $$bindings.column(column);
  if ($$props.row === void 0 && $$bindings.row && row !== void 0)
    $$bindings.row(row);
  $$result.css.add(css$1);
  return `<div id="${"card-container"}" style="${"grid-column:" + escape(column, true) + "; grid-row:" + escape(row, true) + "; " + escape(cssThemeVariables, true)}" class="${"svelte-12vpwem"}"><div id="${"title"}" class="${"svelte-12vpwem"}"><svg height="${"16"}" width="${"16"}" viewBox="${"0 0 16 16"}" version="${"1.1"}" class="${"svelte-12vpwem"}"><path fill-rule="${"evenodd"}"${add_attribute("d", repositoryIcon, 0)}></path></svg>
        <a${add_attribute("href", data.html_url, 0)} class="${"svelte-12vpwem"}">${escape(data.name)}</a></div>

    <div id="${"languages"}" class="${"svelte-12vpwem"}"><div class="${"svelte-12vpwem"}"><div class="${"language-icon svelte-12vpwem"}" id="${"language-span-icon"}"></div>
            <div class="${"language-text svelte-12vpwem"}" id="${"language-span-text"}">${escape(language)}</div></div></div>

    <div id="${"description"}" class="${"svelte-12vpwem"}">${escape(data.description)}</div>
</div>`;
});
const Repositories_svelte_svelte_type_style_lang = "";
const css = {
  code: "#repository-grid.svelte-dosvfm{display:grid;grid-template-rows:repeat(3, min-content);grid-template-columns:1fr 1fr 1fr;gap:0.5rem}",
  map: null
};
const Repositories = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const repositories = [
    {
      username: "berkay-yalin",
      repository: "berkay-yalin.io",
      description: "personal portfolio website",
      language: "JavaScript",
      column: "1",
      row: "1"
    },
    {
      username: "berkay-yalin",
      repository: "scientific-computing-with-python",
      description: `my solution links to freeCodeCamp's "Scientific Computing with Python" course`,
      language: "Python",
      column: "2 / 4",
      row: "1"
    },
    {
      username: "mikeroyal",
      repository: "Windows-11-Guide",
      description: "Windows 11 Guide. Though, most of the Tools, Programs, Resources will also work for Windows 10.",
      language: "Shell",
      column: "1 / 3",
      row: "2"
    },
    {
      username: "berkay-yalin",
      repository: "python-probabilities",
      description: "Library for accurate statistical calculations using Python.",
      language: "Python",
      column: "1 / 3",
      row: "3"
    },
    {
      username: "berkay-yalin",
      repository: "svelte-github-repo-card",
      description: "Svelte component to showcase a GitHub repository.",
      language: "JavaScript",
      column: "3",
      row: "2"
    },
    {
      username: "berkay-yalin",
      repository: "dotfiles",
      description: "trying to figure out how neovim works",
      language: "Lua",
      column: "3",
      row: "3"
    }
  ];
  $$result.css.add(css);
  return `<div id="${"repository-grid"}" class="${"svelte-dosvfm"}">${each(repositories, (parameters) => {
    return `${validate_component(RepositoryCard, "RepositoryCard").$$render($$result, Object.assign({}, parameters), {}, {})}`;
  })}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1uq54ov_START -->${$$result.title = `<title>berkay-yalin.io</title>`, ""}<!-- HEAD_svelte-1uq54ov_END -->`, ""}



${validate_component(Namespace, "Namespace").$$render($$result, {}, {}, {})}
<div style="${"height: 1.5rem"}"></div>
${validate_component(Carousel, "Carousel").$$render($$result, {}, {}, {})}
<div style="${"height: 1.5rem"}"></div>
${validate_component(Repositories, "Repositories").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
