import { c as create_ssr_component, b as subscribe, h as createEventDispatcher, e as escape, f as add_attribute, d as each, v as validate_component } from "../../../chunks/index.js";
import { w as writable } from "../../../chunks/index2.js";
const VPG_s = writable(false);
const pastPaperPseudocode = writable(`// 2020 Sample assessment materials J277/02

// Question 2(a)
num1 = input("enter first number")
num2 = input("enter second number")
if num1 > num2 then
  print(num1)
else
  print(num2)
endif

// Question 2(b)
do
  number = input()
  print(number * 2)
until number < 0

// Question 7
radius = 0
area = 0.0
radius = input("Enter radius")
if radius < 1 OR radius > 30 then
  print("Sorry, that radius is invalid")
else
  area = 3.142 * (radius ^ 2)
  print (area)
endif

// Question 8(b)(i)
mins = input("Enter minutes played: ")
if mins < 0 or mins > 300 then
  print ("Invalid input")
endif

// Question 8(c)
print (minsPlayed[0,4])

// Question 8(d)
// e.g.
total = 0
for x = 0 to 4
  total = total + hoursplayed[2, x]
next x
console.writeline(total)

// Question 8(e)
x = 15
y = 0
while x > 0
  y = y + 1
  x = x - y
endwhile
print(y)

// Question 8(f)
valid = false
while(valid == false)
  gameName = input("Enter the game name")
  if (gameName.length > 0) AND (gameName.length < 20)
    gamesPlayed = gameName.upper
    valid = true
    print("Valid game name")
  else
    print("Game name is not valid")
  endif
endwhile

// Question 8(g)(ii)
hours = input("Please enter number of hours played")
minutes = input("Please enter number of minutes played")
finalTotal = totalMins(hours, minutes)
print (finalTotal)
function totalMins(hours, minutes)
  total = (hours * 60) + mins
  return total
endfunction

// Question 8(g)(iii)
minutes = input("Enter minutes played")
if minutes > 120
  print "You played games for too long!"
else
  print "You are under your time limit!"
endif`);
const Navigation_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: 'nav.svelte-13xpehd.svelte-13xpehd{height:5vh;width:100vw;background-color:#21252B;align-items:center;padding-left:1rem;padding-right:0.5rem;box-sizing:border-box;display:grid;grid-template-columns:auto 1fr auto auto auto auto;grid-template-rows:1fr;gap:0.5rem;overflow-y:hidden;overflow-x:auto}nav.svelte-13xpehd>span.svelte-13xpehd{max-height:5vh;color:white;text-decoration:none;font-size:2vh;font-family:"cabin";font-weight:bold;cursor:default}nav.svelte-13xpehd>button.svelte-13xpehd{height:4vh;color:white;background:#333842;font-family:"cabin";border:1;border-radius:4px;border-color:#282c34;box-sizing:border-box;white-space:nowrap;cursor:pointer}#viewPastPaperPseudocode.svelte-13xpehd.svelte-13xpehd{grid-column:3}#viewPseudocodeGuide.svelte-13xpehd.svelte-13xpehd{grid-column:4}#convertPseudocodeToPython.svelte-13xpehd.svelte-13xpehd{grid-column:5}#executePythonCode.svelte-13xpehd.svelte-13xpehd{grid-column:6;color:grey}',
  map: null
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $VPG_s, $$unsubscribe_VPG_s;
  $$unsubscribe_VPG_s = subscribe(VPG_s, (value) => $VPG_s = value);
  createEventDispatcher();
  $$result.css.add(css$3);
  $$unsubscribe_VPG_s();
  return `<nav class="${"svelte-13xpehd"}"><span class="${"svelte-13xpehd"}">Online OCR Pseudocode to Python Transpiler</span>

  <button id="${"viewPastPaperPseudocode"}" class="${"svelte-13xpehd"}">View Past Paper Pseudocode
  </button>

  <button id="${"viewPseudocodeGuide"}" class="${"svelte-13xpehd"}">${escape(($VPG_s == false ? "Show" : "Hide") + " Pseudocode Guide (J277)")}</button>

  <button id="${"convertPseudocodeToPython"}" class="${"svelte-13xpehd"}">Convert Pseudocode to Python
  </button>

  <button id="${"executePythonCode"}" disabled class="${"svelte-13xpehd"}">Execute Python Code
  </button>
</nav>`;
});
const Heading_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".heading-wrapper.svelte-1kkyt28{width:100%;display:flex;align-content:center;align-items:center}.logo.svelte-1kkyt28{height:3vh}.text.svelte-1kkyt28{font-size:2vh;font-family:'cabin';color:white;margin-left:0.5vw}",
  map: null
};
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { src } = $$props;
  let { style = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$2);
  return `<div${add_attribute("style", style, 0)} class="${"heading-wrapper svelte-1kkyt28"}"><img alt="${""}" class="${"logo svelte-1kkyt28"}"${add_attribute("src", src, 0)}>
  <span class="${"text svelte-1kkyt28"}">${escape(text)}</span>
</div>`;
});
const J277Guide_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#J277Editor.svelte-1estv5p{grid-column:2;grid-row:2;z-index:99;display:flex;flex-direction:column;overflow:auto}",
  map: null
};
const J277Guide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $VPG_s, $$unsubscribe_VPG_s;
  $$unsubscribe_VPG_s = subscribe(VPG_s, (value) => $VPG_s = value);
  $$result.css.add(css$1);
  $$unsubscribe_VPG_s();
  return `${$VPG_s ? `<div id="${"J277Editor"}" class="${"svelte-1estv5p"}">${each([...Array(7).keys()], (i) => {
    return `<img alt="${""}" src="${"Pseudocode-Guide-J277/0" + escape(i, true) + ".jpg"}">`;
  })}</div>` : ``}`;
});
String.prototype.replaceBetween = function(start, stop, substring) {
  const left = this.slice(0, start);
  const right = this.slice(stop + 1, this.length);
  return `${left}${substring}${right}`;
};
String.prototype.blockify = function(r1, r2) {
  let opening = [];
  let brackets = [];
  for (let i = 0; i < this.length; i++) {
    if (r1.test(this[i])) {
      opening.push(i);
    } else if (r2.test(this[i]))
      ;
  }
  for (let i = 0; i < opening.length; i++) {
    let count = 0;
    for (let j = opening[i] + 1; j < this.length; j++) {
      if (r1.test(this[j])) {
        count += 1;
      } else if (r2.test(this[j]) && count != 0) {
        count -= 1;
      } else if (r2.test(this[j]) && count == 0) {
        let start = opening[i];
        let stop = j;
        brackets.push([start, stop, this.slice(start + 1, stop)]);
        break;
      }
    }
  }
  return brackets;
};
String.prototype.isIdentifier = function() {
  return /^[a-zA-Z_]\w*$/.test(this);
};
String.prototype.isStringInteger = function() {
  return Number.isInteger(Number(this));
};
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1h6cy83{height:95vh;width:100vw;padding:0.5rem;box-sizing:border-box;display:grid;grid-template-rows:auto 1fr;grid-template-columns:1fr 1fr;gap:0.5rem}#pseudoEditor.svelte-1h6cy83{grid-column:1;grid-row:2}#pythonEditor.svelte-1h6cy83{grid-column:2;grid-row:2}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_pastPaperPseudocode;
  let $VPG_s, $$unsubscribe_VPG_s;
  $$unsubscribe_pastPaperPseudocode = subscribe(pastPaperPseudocode, (value) => value);
  $$unsubscribe_VPG_s = subscribe(VPG_s, (value) => $VPG_s = value);
  $$result.css.add(css);
  $$unsubscribe_pastPaperPseudocode();
  $$unsubscribe_VPG_s();
  return `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}

<main class="${"svelte-1h6cy83"}">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      style: "grid-column: 1; grid-row: 1",
      text: "Pseudocode",
      src: "ocr-logo.svg"
    },
    {},
    {}
  )}

  ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      style: "grid-column: 2; grid-row: 1",
      text: $VPG_s ? "Python" : "Pseudocode Guide",
      src: $VPG_s ? "devicon/python-original.svg" : "ocr-logo.svg"
    },
    {},
    {}
  )}

  <div id="${"pseudoEditor"}" class="${"svelte-1h6cy83"}"></div>
  <div id="${"pythonEditor"}" class="${"svelte-1h6cy83"}"></div>
  ${validate_component(J277Guide, "J277Guide").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Page as default
};
