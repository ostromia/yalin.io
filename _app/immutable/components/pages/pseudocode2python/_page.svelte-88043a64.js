var me=Object.defineProperty;var ge=(t,e,n)=>e in t?me(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var re=(t,e,n)=>(ge(t,typeof e!="symbol"?e+"":e,n),n);import{S as K,i as W,s as Y,k as _,q as B,a as x,l as v,m as b,r as E,h as m,c as w,n as f,b as A,G as h,M as L,u as ue,B as M,T as $e,H as q,U as ye,J as I,e as ie,I as _e,w as Q,x as J,y as T,f as H,t as j,z as U,o as ve}from"../../../chunks/index-4939aa82.js";import{w as fe}from"../../../chunks/index-6bcefe8b.js";const F=fe(!1),be=fe(`// 2020 Sample assessment materials J277/02

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
endif`);function Pe(t){let e,n,s,r,o,i,l,c,g=(t[0]==!1?"Show":"Hide")+" Pseudocode Guide (J277)",p,P,$,O,u,d,V,Z,X;return{c(){e=_("nav"),n=_("span"),s=B("Online OCR Pseudocode to Python Transpiler"),r=x(),o=_("button"),i=B("View Past Paper Pseudocode"),l=x(),c=_("button"),p=B(g),P=x(),$=_("button"),O=B("Convert Pseudocode to Python"),u=x(),d=_("button"),V=B("Execute Python Code"),this.h()},l(S){e=v(S,"NAV",{class:!0});var y=b(e);n=v(y,"SPAN",{class:!0});var N=b(n);s=E(N,"Online OCR Pseudocode to Python Transpiler"),N.forEach(m),r=w(y),o=v(y,"BUTTON",{id:!0,class:!0});var ee=b(o);i=E(ee,"View Past Paper Pseudocode"),ee.forEach(m),l=w(y),c=v(y,"BUTTON",{id:!0,class:!0});var te=b(c);p=E(te,g),te.forEach(m),P=w(y),$=v(y,"BUTTON",{id:!0,class:!0});var se=b($);O=E(se,"Convert Pseudocode to Python"),se.forEach(m),u=w(y),d=v(y,"BUTTON",{id:!0,class:!0});var ne=b(d);V=E(ne,"Execute Python Code"),ne.forEach(m),y.forEach(m),this.h()},h(){f(n,"class","svelte-13xpehd"),f(o,"id","viewPastPaperPseudocode"),f(o,"class","svelte-13xpehd"),f(c,"id","viewPseudocodeGuide"),f(c,"class","svelte-13xpehd"),f($,"id","convertPseudocodeToPython"),f($,"class","svelte-13xpehd"),f(d,"id","executePythonCode"),d.disabled=!0,f(d,"class","svelte-13xpehd"),f(e,"class","svelte-13xpehd")},m(S,y){A(S,e,y),h(e,n),h(n,s),h(e,r),h(e,o),h(o,i),h(e,l),h(e,c),h(c,p),h(e,P),h(e,$),h($,O),h(e,u),h(e,d),h(d,V),Z||(X=[L(o,"click",t[2]),L(c,"click",t[3]),L($,"click",t[4])],Z=!0)},p(S,[y]){y&1&&g!==(g=(S[0]==!1?"Show":"Hide")+" Pseudocode Guide (J277)")&&ue(p,g)},i:M,o:M,d(S){S&&m(e),Z=!1,$e(X)}}}function xe(t,e,n){let s;q(t,F,c=>n(0,s=c));const r=ye();return[s,r,()=>r("vPPP"),()=>r("vPG"),()=>r("cPTP")]}class we extends K{constructor(e){super(),W(this,e,xe,Pe,Y,{})}}function ke(t){let e,n,s,r,o,i;return{c(){e=_("div"),n=_("img"),r=x(),o=_("span"),i=B(t[0]),this.h()},l(l){e=v(l,"DIV",{style:!0,class:!0});var c=b(e);n=v(c,"IMG",{alt:!0,class:!0,src:!0}),r=w(c),o=v(c,"SPAN",{class:!0});var g=b(o);i=E(g,t[0]),g.forEach(m),c.forEach(m),this.h()},h(){f(n,"alt",""),f(n,"class","logo svelte-1kkyt28"),I(n.src,s=t[1])||f(n,"src",s),f(o,"class","text svelte-1kkyt28"),f(e,"style",t[2]),f(e,"class","heading-wrapper svelte-1kkyt28")},m(l,c){A(l,e,c),h(e,n),h(e,r),h(e,o),h(o,i)},p(l,[c]){c&2&&!I(n.src,s=l[1])&&f(n,"src",s),c&1&&ue(i,l[0]),c&4&&f(e,"style",l[2])},i:M,o:M,d(l){l&&m(e)}}}function Oe(t,e,n){let{text:s}=e,{src:r}=e,{style:o=""}=e;return t.$$set=i=>{"text"in i&&n(0,s=i.text),"src"in i&&n(1,r=i.src),"style"in i&&n(2,o=i.style)},[s,r,o]}class oe extends K{constructor(e){super(),W(this,e,Oe,ke,Y,{text:0,src:1,style:2})}}function le(t,e,n){const s=t.slice();return s[1]=e[n],s}function ae(t){let e,n=[...Array(7).keys()],s=[];for(let r=0;r<n.length;r+=1)s[r]=ce(le(t,n,r));return{c(){e=_("div");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=v(r,"DIV",{id:!0,class:!0});var o=b(e);for(let i=0;i<s.length;i+=1)s[i].l(o);o.forEach(m),this.h()},h(){f(e,"id","J277Editor"),f(e,"class","svelte-1estv5p")},m(r,o){A(r,e,o);for(let i=0;i<s.length;i+=1)s[i].m(e,null)},p(r,o){if(o&0){n=[...Array(7).keys()];let i;for(i=0;i<n.length;i+=1){const l=le(r,n,i);s[i]?s[i].p(l,o):(s[i]=ce(l),s[i].c(),s[i].m(e,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=n.length}},d(r){r&&m(e),_e(s,r)}}}function ce(t){let e,n;return{c(){e=_("img"),this.h()},l(s){e=v(s,"IMG",{alt:!0,src:!0}),this.h()},h(){f(e,"alt",""),I(e.src,n="Pseudocode-Guide-J277/0"+t[1]+".jpg")||f(e,"src",n)},m(s,r){A(s,e,r)},p:M,d(s){s&&m(e)}}}function Ve(t){let e,n=t[0]&&ae(t);return{c(){n&&n.c(),e=ie()},l(s){n&&n.l(s),e=ie()},m(s,r){n&&n.m(s,r),A(s,e,r)},p(s,[r]){s[0]?n?n.p(s,r):(n=ae(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:M,o:M,d(s){n&&n.d(s),s&&m(e)}}}function Se(t,e,n){let s;return q(t,F,r=>n(0,s=r)),[s]}class Ce extends K{constructor(e){super(),W(this,e,Se,Ve,Y,{})}}String.prototype.replaceBetween=function(t,e,n){const s=this.slice(0,t),r=this.slice(e+1,this.length);return`${s}${n}${r}`};String.prototype.blockify=function(t,e){let n=[],s=[];for(let r=0;r<this.length;r++)t.test(this[r])?n.push(r):e.test(this[r]);for(let r=0;r<n.length;r++){let o=0;for(let i=n[r]+1;i<this.length;i++)if(t.test(this[i]))o+=1;else if(e.test(this[i])&&o!=0)o-=1;else if(e.test(this[i])&&o==0){let l=n[r],c=i;s.push([l,c,this.slice(l+1,c)]);break}}return s};function C(t){return t.includes("AND")?C(t.replace("AND","and")):t.includes("OR")?C(t.replace("OR","or")):t.includes("NOT")?C(t.replace("NOT","not")):t.includes("^")?C(t.replace("^","**")):t.includes("MOD")?C(t.replace("MOD","%")):t.includes("DIV")?C(t.replace("DIV","//")):t}function de(t){return t.includes("//")?de(t.replace("//","#")):t}function Re(t){const e=/^(?:const|let|var)\s(.*?)$/;return e.test(t)?t.match(e)[1]:t}function D(t){if(t=t.replaceAll("real(","float("),/bool\s*\((.*?)\)/.test(t)){const e=/bool\s*\((.*?)\)/.exec(t),n=e[1].replace(/'|"/g,"").trim();if(["True","true"].includes(n))return D(t.replaceAll(e[0],"True"));if(["False","false"].includes(n))return D(t.replaceAll(e[0],"False"))}return t}function R(t){if(/\)\.length/.test(t)){let s=0,r=t.indexOf(").length"),o=t.blockify(/\(/,/\)/);for(let l=0;l<o.length;l++)if(o[l][1]==r){s=o[l][0];break}let i=null;for(let l=s-1;l>=0&&/\w/.test(t[l]);l--)i=l;if(i!=null){const l=[i,r+7],c=/(.*?)\((.*?)\)\.length/.exec(t.slice(l[0],l[1]+1)),g=`len(${c[1]}(${c[2]}))`;return R(t.replaceBetween(...l,g))}else{const l=[s,r+7],g=`len(${/\((.*?)\)\.length/.exec(t.slice(l[0],l[1]+1))[1]})`;return R(t.replaceBetween(...l,g))}}else if(/\.length/.test(t)){const s=/([\w'"]+)\.length/.exec(t),r=[s.index,s.index-1+s[0].length],o=`len(${s[1]})`;return R(t.replaceBetween(...r,o))}else if(/\.substring\((.*?),(.*?)\)/.test(t)){const s=/\.substring\((.*?),(.*?)\)/.exec(t),r=[s.index,s.index-1+s[0].length],o=`[${s[1]},${s[2]}]`;return R(t.replaceBetween(...r,o))}else if(/\.left/.test(t)){const s=/\.left\((.*?)\)/.exec(t),r=[s.index,s.index-1+s[0].length],o=`[:${s[1]}]`;return R(t.replaceBetween(...r,o))}else if(/\.right/.test(t)){const s=/\.right\((.*?)\)/.exec(t),r=[s.index,s.index-1+s[0].length],o=`[-${s[1]}:]`;return R(t.replaceBetween(...r,o))}const e=[".upper",".lower","ASC","CHR"],n=[".upper()",".lower()","ord","chr"];for(let s=0;s<e.length;s++)t=t.replaceAll(e[s],n[s]);return t}function Ge(t){if(/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.test(t)){const e=/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.exec(t),n=`${e[1]} = [[0 for i in range(${e[2]})] for j in range(${e[3]})]`;return t.replace(e[0],n)}else if(/^array\s*(\w+)\[(.*?)\](?!=)/.test(t)){const e=/^array\s*(\w+)\[(.*?)\](?!=)/.exec(t),n=`${e[1]} = [0 for i in range(${e[2]})]`;return t.replace(e[0],n)}else if(/(\w+)\[(.*?),(.*?)\]/.test(t)){const e=/(\w+)\[(.*?),(.*?)\]/.exec(t),n=`${e[1]}[${e[2].trim()}][${e[3].trim()}]`;return t.replace(e[0],n)}return t}function pe(t){if(/random\((.*?),(.*?)\)/.test(t)){he=!0;const e=t.match(/random\((.*?),(.*?)\)/),n=`randint(${e[1].trim()}, ${e[2].trim()})`;return pe(t.replace(e[0],n))}return t}function Ae(t){return t.includes("console.writeline")?t.replaceAll("console.writeline","print"):t.includes("console.log")?t.replaceAll("console.log","print"):/^print\s*\((.*?)\)$/.test(t)?`print(${/^print\s*\((.*?)\)$/.exec(t)[1]})`:t}function G(t,e,n){return!t&&e==n}function Me(t,e){for(let o=e;o<a.length;o++){let[i,l,c]=[...a[o]];if(G(i,l,t)&&c.includes("next")){a[o]=[!0,t,"REMOVED"];break}}const n=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s*:?$/,s=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?)\s*:?$/;let r=a[e][2];if(s.test(r)){let[o,i,l,c]=s.exec(r).slice(-4);r=`for ${o} in range(${i}, ${l}, ${c}):`}else if(n.test(r)){let[o,i,l]=n.exec(r).slice(-3);r=`for ${o} in range(${i}, ${l}):`}a[e]=[!0,t,r]}function Be(t,e){for(let r=e;r<a.length;r++){let[o,i,l]=[...a[r]];if(G(o,i,t)&&l=="endwhile"){a[r]=[!0,t,"REMOVED"];break}}let s=a[e][2].match(/^while(.*?):?$/)[1].trim();a[e]=[!0,t,`while ${s}:`]}function Ee(t,e){for(let n=e;n<a.length;n++){let[s,r,o]=[...a[n]];if(G(s,r,t)&&/^until(.*?)$/.test(o)){a[n]=[!0,t,"REMOVED"],a[e]=[!0,t,"while True:"];let i=o.match(/^until(.*?)$/)[1].trim();a.splice(n,0,[!0,t+4,"break"]),a.splice(n,0,[!0,t+2,`if ${i}:`]),a.splice(n,0,[!0,t+2,""]);break}}}function Qe(t,e){for(let r=e;r<a.length;r++){let[o,i,l]=[...a[r]];if(G(o,i,t)&&l.match(/^elseif(.*?)then$/)){let c=l.match(/^elseif(.*?)then$/)[1].trim();a[r]=[!0,t,`elif ${c}:`]}else if(G(o,i,t)&&(l=="else"||l=="else:"))a[r]=[!0,t,"else:"];else if(G(o,i,t)&&l==="endif"){a[r]=[!0,t,"REMOVED"];break}}let n=a[e][2];const s=/^if\s+(.*?)\s*(?:then)?\:?$/;s.test(n)&&(n=`if ${s.exec(n)[1]}:`,a[e]=[!0,t,n])}function Je(t,e){for(let s=e;s<a.length;s++){let[r,o,i]=[...a[s]];if(G(r,o,t)&&/^end(procedure|function)$/.test(i)){a[s]=[!0,t,"REMOVED"];break}}let n=/^(?:procedure|function)\s(.*?)\s*:?$/.exec(a[e][2]);a[e][0]=!0,a[e][2]=`def ${n[1]}:`}function Te(t){a=t;for(let e=0;e<a.length;e++){const[n,s,r]=[...a[e]];!n&&r!=""&&r!="REMOVED"&&(a[e][2]=de(a[e][2]),a[e][2]=C(a[e][2]),a[e][2]=Re(a[e][2]),a[e][2]=D(a[e][2]),a[e][2]=R(a[e][2]),a[e][2]=Ge(a[e][2]),a[e][2]=pe(a[e][2]),a[e][2]=Ae(a[e][2]),/^for(.*?)$/.test(a[e][2])?Me(s,e):/^while(.*?)$/.test(a[e][2])?Be(s,e):/^do(.*?)$/.test(a[e][2])?Ee(s,e):/^if(.*?)$/.test(a[e][2])?Qe(s,e):/^(?:procedure|function)(.*?)$/.test(r)&&Je(s,e))}return he&&(a.unshift([!0,0,""]),a.unshift([!0,0,"from random import randint"])),a.filter(e=>e[2]!="REMOVED")}let a=[],he=!1;String.prototype.isIdentifier=function(){return/^[a-zA-Z_]\w*$/.test(this)};String.prototype.isStringInteger=function(){return Number.isInteger(Number(this))};function He(t,e,n){const s=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s*:?$/,r=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?)\s*:?$/;if(r.test(n)){let[o,i,l,c]=r.exec(n).slice(-4);return o.isIdentifier()?!i.isIdentifier()&&!i.isStringInteger()?(k=`Error on line ${e}
    ${i} isn't a valid identifier/number`,!1):!l.isIdentifier()&&!l.isStringInteger()?(k=`Error on line ${e}
    ${l} isn't a valid identifier/number`,!1):!c.isIdentifier()&&!c.isStringInteger()?(k=`Error on line ${e}
    ${c} isn't a valid identifier/number`,!1):!0:(k=`Error on line ${e}
    ${o} isn't a valid identifier`,!1)}else if(s.test(n)){let[o,i,l]=s.exec(n).slice(-3);return o.isIdentifier()?!i.isIdentifier()&&!Number.isInteger(Number(i))?(k=`Error on line ${e}
    ${i} isn't a valid identifier/number`,!1):!l.isIdentifier()&&!Number.isInteger(Number(l))?(k=`Error on line ${e}
    ${l} isn't a valid identifier/number`,!1):!0:(k=`Error on line ${e}
    ${o} isn't a valid identifier`,!1)}else return k=`Error on line ${e}
    ${n}

Please declare for loops as specified by the OCR guide:
    for i=0 to 9
      ...
    next i`,!1}function je(t){z=t;for(let e=0;e<z.length;e++){const[n,s,r]=[...z[e]];if(/^for(.*?)$/.test(z[e][2])&&!He(s,e,r))return k}return!0}let z=[],k="";class Ue{constructor(e){re(this,"pseudocode");this.input=e,this.pseudocode=e.split(`
`).map(n=>[!1,n.search(/\S|$/),n.trim()])}validate(){let e=je(this.pseudocode);return e===!0?"":e}transpile(){return Te(this.pseudocode).map(n=>`${" ".repeat(n[1])}${n[2]}`)}}function ze(t){let e,n,s,r,o,i,l,c,g,p,P,$,O;return e=new we({}),e.$on("vPPP",t[1]),e.$on("vPG",t[2]),e.$on("cPTP",t[3]),r=new oe({props:{style:"grid-column: 1; grid-row: 1",text:"Pseudocode",src:"ocr-logo.svg"}}),i=new oe({props:{style:"grid-column: 2; grid-row: 1",text:t[0]?"Python":"Pseudocode Guide",src:t[0]?"devicon/python-original.svg":"ocr-logo.svg"}}),$=new Ce({}),{c(){Q(e.$$.fragment),n=x(),s=_("main"),Q(r.$$.fragment),o=x(),Q(i.$$.fragment),l=x(),c=_("div"),g=x(),p=_("div"),P=x(),Q($.$$.fragment),this.h()},l(u){J(e.$$.fragment,u),n=w(u),s=v(u,"MAIN",{class:!0});var d=b(s);J(r.$$.fragment,d),o=w(d),J(i.$$.fragment,d),l=w(d),c=v(d,"DIV",{id:!0,class:!0}),b(c).forEach(m),g=w(d),p=v(d,"DIV",{id:!0,class:!0}),b(p).forEach(m),P=w(d),J($.$$.fragment,d),d.forEach(m),this.h()},h(){f(c,"id","pseudoEditor"),f(c,"class","svelte-1h6cy83"),f(p,"id","pythonEditor"),f(p,"class","svelte-1h6cy83"),f(s,"class","svelte-1h6cy83")},m(u,d){T(e,u,d),A(u,n,d),A(u,s,d),T(r,s,null),h(s,o),T(i,s,null),h(s,l),h(s,c),h(s,g),h(s,p),h(s,P),T($,s,null),O=!0},p(u,[d]){const V={};d&1&&(V.text=u[0]?"Python":"Pseudocode Guide"),d&1&&(V.src=u[0]?"devicon/python-original.svg":"ocr-logo.svg"),i.$set(V)},i(u){O||(H(e.$$.fragment,u),H(r.$$.fragment,u),H(i.$$.fragment,u),H($.$$.fragment,u),O=!0)},o(u){j(e.$$.fragment,u),j(r.$$.fragment,u),j(i.$$.fragment,u),j($.$$.fragment,u),O=!1},d(u){U(e,u),u&&m(n),u&&m(s),U(r),U(i),U($)}}}function qe(t,e,n){let s,r;q(t,be,p=>n(6,s=p)),q(t,F,p=>n(0,r=p));let o,i;ve(()=>{function p(P){P.setTheme("ace/theme/dracula"),P.setFontSize(16),P.resize()}o=ace.edit("pseudoEditor"),p(o),i=ace.edit("pythonEditor"),p(i),i.setReadOnly(!0)});function l(){o.setValue(s,1)}function c(){F.update(p=>p=!p)}function g(){const p=new Ue(o.getValue());p.validate()===""?(i.session.setMode("ace/mode/python"),i.setValue(p.transpile().join(`
`)+`
`,1)):(i.session.setMode("ace/mode/text"),i.setValue(p.transpile()+`
`,1))}return[r,l,c,g]}class Ye extends K{constructor(e){super(),W(this,e,qe,ze,Y,{})}}export{Ye as default};
