import{S as Y,i as q,s as F,k as y,q as E,a as x,l as b,m as w,r as B,h as m,c as k,n as $,b as O,H as _,M as L,u as ue,C as S,U as he,I as Z,V as me,J as W,e as ne,N as ge,o as $e,x as T,K as _e,y as H,z as J,f as j,t as z,A as U,v as se}from"../../../chunks/index-ddf3eb23.js";import{r as ve,w as ye}from"../../../chunks/index-d01a5eb0.js";import{p as re}from"../../../chunks/python-80229e37.js";import{_ as D}from"../../../chunks/preload-helper-41c905a7.js";const I=ye(!1),be=ve(`// 2020 Sample assessment materials J277/02

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
endif`);function Pe(t){let e,r,n,s,i,o,l,c,f=(t[0]==!1?"Show":"Hide")+" Pseudocode Guide (J277)",v,d,g,P,A,u;return{c(){e=y("nav"),r=y("span"),n=E("Online OCR Pseudocode to Python Transpiler"),s=x(),i=y("button"),o=E("View Past Paper Pseudocode"),l=x(),c=y("button"),v=E(f),d=x(),g=y("button"),P=E("Convert Pseudocode to Python"),this.h()},l(p){e=b(p,"NAV",{class:!0});var h=w(e);r=b(h,"SPAN",{class:!0});var V=w(r);n=B(V,"Online OCR Pseudocode to Python Transpiler"),V.forEach(m),s=k(h),i=b(h,"BUTTON",{class:!0});var Q=w(i);o=B(Q,"View Past Paper Pseudocode"),Q.forEach(m),l=k(h),c=b(h,"BUTTON",{class:!0});var ee=w(c);v=B(ee,f),ee.forEach(m),d=k(h),g=b(h,"BUTTON",{class:!0});var te=w(g);P=B(te,"Convert Pseudocode to Python"),te.forEach(m),h.forEach(m),this.h()},h(){$(r,"class","svelte-4u8824"),$(i,"class","svelte-4u8824"),$(c,"class","svelte-4u8824"),$(g,"class","svelte-4u8824"),$(e,"class","svelte-4u8824")},m(p,h){O(p,e,h),_(e,r),_(r,n),_(e,s),_(e,i),_(i,o),_(e,l),_(e,c),_(c,v),_(e,d),_(e,g),_(g,P),A||(u=[L(i,"click",t[2]),L(c,"click",t[3]),L(g,"click",t[4])],A=!0)},p(p,[h]){h&1&&f!==(f=(p[0]==!1?"Show":"Hide")+" Pseudocode Guide (J277)")&&ue(v,f)},i:S,o:S,d(p){p&&m(e),A=!1,he(u)}}}function we(t,e,r){let n;Z(t,I,c=>r(0,n=c));const s=me();return[n,s,()=>s("vPPP"),()=>s("vPG"),()=>s("cPTP")]}class xe extends Y{constructor(e){super(),q(this,e,we,Pe,F,{})}}function ke(t){let e,r,n,s,i,o,l,c,f,v,d,g,P=t[0]?"Pseudocode Guide":"Python",A;return{c(){e=y("div"),r=y("img"),s=x(),i=y("span"),o=E("Pseudocode"),l=x(),c=y("div"),f=y("img"),d=x(),g=y("span"),A=E(P),this.h()},l(u){e=b(u,"DIV",{class:!0});var p=w(e);r=b(p,"IMG",{alt:!0,src:!0,class:!0}),s=k(p),i=b(p,"SPAN",{class:!0});var h=w(i);o=B(h,"Pseudocode"),h.forEach(m),p.forEach(m),l=k(u),c=b(u,"DIV",{class:!0});var V=w(c);f=b(V,"IMG",{alt:!0,src:!0,class:!0}),d=k(V),g=b(V,"SPAN",{class:!0});var Q=w(g);A=B(Q,P),Q.forEach(m),V.forEach(m),this.h()},h(){$(r,"alt",""),W(r.src,n=X)||$(r,"src",n),$(r,"class","svelte-1vo54wp"),$(i,"class","svelte-1vo54wp"),$(e,"class","svelte-1vo54wp"),$(f,"alt",""),W(f.src,v=t[0]?X:re)||$(f,"src",v),$(f,"class","svelte-1vo54wp"),$(g,"class","svelte-1vo54wp"),$(c,"class","svelte-1vo54wp")},m(u,p){O(u,e,p),_(e,r),_(e,s),_(e,i),_(i,o),O(u,l,p),O(u,c,p),_(c,f),_(c,d),_(c,g),_(g,A)},p(u,[p]){p&1&&!W(f.src,v=u[0]?X:re)&&$(f,"src",v),p&1&&P!==(P=u[0]?"Pseudocode Guide":"Python")&&ue(A,P)},i:S,o:S,d(u){u&&m(e),u&&m(l),u&&m(c)}}}const X="assets/pseudocode2python/ocr-logo.svg";function Oe(t,e,r){let n;return Z(t,I,s=>r(0,n=s)),[n]}class Ae extends Y{constructor(e){super(),q(this,e,Oe,ke,F,{})}}function ie(t,e,r){const n=t.slice();return n[1]=e[r],n}function oe(t){let e,r=[...Array(7).keys()],n=[];for(let s=0;s<r.length;s+=1)n[s]=le(ie(t,r,s));return{c(){e=y("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=b(s,"DIV",{class:!0});var i=w(e);for(let o=0;o<n.length;o+=1)n[o].l(i);i.forEach(m),this.h()},h(){$(e,"class","svelte-ia0vks")},m(s,i){O(s,e,i);for(let o=0;o<n.length;o+=1)n[o].m(e,null)},p(s,i){if(i&0){r=[...Array(7).keys()];let o;for(o=0;o<r.length;o+=1){const l=ie(s,r,o);n[o]?n[o].p(l,i):(n[o]=le(l),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=r.length}},d(s){s&&m(e),ge(n,s)}}}function le(t){let e,r;return{c(){e=y("img"),this.h()},l(n){e=b(n,"IMG",{alt:!0,src:!0}),this.h()},h(){$(e,"alt",""),W(e.src,r="assets/pseudocode2python/Pseudocode-Guide-J277/0"+t[1]+".jpg")||$(e,"src",r)},m(n,s){O(n,e,s)},p:S,d(n){n&&m(e)}}}function Re(t){let e,r=t[0]&&oe(t);return{c(){r&&r.c(),e=ne()},l(n){r&&r.l(n),e=ne()},m(n,s){r&&r.m(n,s),O(n,e,s)},p(n,[s]){n[0]?r?r.p(n,s):(r=oe(n),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:S,o:S,d(n){r&&r.d(n),n&&m(e)}}}function Ve(t,e,r){let n;return Z(t,I,s=>r(0,n=s)),[n]}class Se extends Y{constructor(e){super(),q(this,e,Ve,Re,F,{})}}function Ce(t){let e;return{c(){e=y("div"),this.h()},l(r){e=b(r,"DIV",{id:!0}),w(e).forEach(m),this.h()},h(){$(e,"id",t[0])},m(r,n){O(r,e,n)},p(r,[n]){n&1&&$(e,"id",r[0])},i:S,o:S,d(r){r&&m(e)}}}function Ge(t,e,r){let{id:n}=e,s;function i(){return s.getValue()}function o(c="",f=1){s.setValue(c,f)}function l(c){s.session.setMode("ace/mode/"+c)}return $e(async()=>{const c=await D(()=>import("../../../chunks/ace-284b2852.js").then(f=>f.a),[],import.meta.url);await D(()=>import("../../../chunks/theme-dracula-56e33506.js").then(f=>f.t),[],import.meta.url),await D(()=>import("../../../chunks/mode-python-33043df3.js").then(f=>f.m),[],import.meta.url),s=c.edit(n),s.setTheme("ace/theme/dracula"),s.setFontSize("16px"),s.resize()}),t.$$set=c=>{"id"in c&&r(0,n=c.id)},[n,i,o,l]}class ae extends Y{constructor(e){super(),q(this,e,Ge,Ce,F,{id:0,get:1,set:2,mode:3})}get get(){return this.$$.ctx[1]}get set(){return this.$$.ctx[2]}get mode(){return this.$$.ctx[3]}}String.prototype.replaceBetween=function(t,e,r){const n=this.slice(0,t),s=this.slice(e+1,this.length);return`${n}${r}${s}`};String.prototype.blockify=function(t,e){let r=[],n=[];for(let s=0;s<this.length;s++)t.test(this[s])?r.push(s):e.test(this[s]);for(let s=0;s<r.length;s++){let i=0;for(let o=r[s]+1;o<this.length;o++)if(t.test(this[o]))i+=1;else if(e.test(this[o])&&i!=0)i-=1;else if(e.test(this[o])&&i==0){let l=r[s],c=o;n.push([l,c,this.slice(l+1,c)]);break}}return n};function C(t){return t.includes("AND")?C(t.replace("AND","and")):t.includes("OR")?C(t.replace("OR","or")):t.includes("NOT")?C(t.replace("NOT","not")):t.includes("^")?C(t.replace("^","**")):t.includes("MOD")?C(t.replace("MOD","%")):t.includes("DIV")?C(t.replace("DIV","//")):t}function fe(t){return t.includes("//")?fe(t.replace("//","#")):t}function Me(t){const e=/^(?:const|let|var)\s(.*?)$/;return e.test(t)?t.match(e)[1]:t}function N(t){if(t=t.replaceAll("real(","float("),/bool\s*\((.*?)\)/.test(t)){const e=/bool\s*\((.*?)\)/.exec(t),r=e[1].replace(/'|"/g,"").trim();if(["True","true"].includes(r))return N(t.replaceAll(e[0],"True"));if(["False","false"].includes(r))return N(t.replaceAll(e[0],"False"))}return t}function G(t){if(/\)\.length/.test(t)){let n=0,s=t.indexOf(").length"),i=t.blockify(/\(/,/\)/);for(let l=0;l<i.length;l++)if(i[l][1]==s){n=i[l][0];break}let o=null;for(let l=n-1;l>=0&&/\w/.test(t[l]);l--)o=l;if(o!=null){const l=[o,s+7],c=/(.*?)\((.*?)\)\.length/.exec(t.slice(l[0],l[1]+1)),f=`len(${c[1]}(${c[2]}))`;return G(t.replaceBetween(...l,f))}else{const l=[n,s+7],f=`len(${/\((.*?)\)\.length/.exec(t.slice(l[0],l[1]+1))[1]})`;return G(t.replaceBetween(...l,f))}}else if(/\.length/.test(t)){const n=/([\w'"]+)\.length/.exec(t),s=[n.index,n.index-1+n[0].length],i=`len(${n[1]})`;return G(t.replaceBetween(...s,i))}else if(/\.substring\((.*?),(.*?)\)/.test(t)){const n=/\.substring\((.*?),(.*?)\)/.exec(t),s=[n.index,n.index-1+n[0].length],i=`[${n[1]},${n[2]}]`;return G(t.replaceBetween(...s,i))}else if(/\.left/.test(t)){const n=/\.left\((.*?)\)/.exec(t),s=[n.index,n.index-1+n[0].length],i=`[:${n[1]}]`;return G(t.replaceBetween(...s,i))}else if(/\.right/.test(t)){const n=/\.right\((.*?)\)/.exec(t),s=[n.index,n.index-1+n[0].length],i=`[-${n[1]}:]`;return G(t.replaceBetween(...s,i))}const e=[".upper",".lower","ASC","CHR"],r=[".upper()",".lower()","ord","chr"];for(let n=0;n<e.length;n++)t=t.replaceAll(e[n],r[n]);return t}function Ee(t){if(/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.test(t)){const e=/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.exec(t),r=`${e[1]} = [[0 for i in range(${e[2]})] for j in range(${e[3]})]`;return t.replace(e[0],r)}else if(/^array\s*(\w+)\[(.*?)\](?!=)/.test(t)){const e=/^array\s*(\w+)\[(.*?)\](?!=)/.exec(t),r=`${e[1]} = [0 for i in range(${e[2]})]`;return t.replace(e[0],r)}else if(/(\w+)\[(.*?),(.*?)\]/.test(t)){const e=/(\w+)\[(.*?),(.*?)\]/.exec(t),r=`${e[1]}[${e[2].trim()}][${e[3].trim()}]`;return t.replace(e[0],r)}return t}function de(t){if(/random\((.*?),(.*?)\)/.test(t)){pe=!0;const e=t.match(/random\((.*?),(.*?)\)/),r=`randint(${e[1].trim()}, ${e[2].trim()})`;return de(t.replace(e[0],r))}return t}function Be(t){return t.includes("console.writeline")?t.replaceAll("console.writeline","print"):t.includes("console.log")?t.replaceAll("console.log","print"):/^print\s*\((.*?)\)$/.test(t)?`print(${/^print\s*\((.*?)\)$/.exec(t)[1]})`:t}function M(t,e,r){return!t&&e==r}function Qe(t,e){for(let i=e;i<a.length;i++){let[o,l,c]=[...a[i]];if(M(o,l,t)&&c.includes("next")){a[i]=[!0,t,"REMOVED"];break}}const r=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s*:?$/,n=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?)\s*:?$/;let s=a[e][2];if(n.test(s)){let[i,o,l,c]=n.exec(s).slice(-4);s=`for ${i} in range(${o}, ${l}, ${c}):`}else if(r.test(s)){let[i,o,l]=r.exec(s).slice(-3);s=`for ${i} in range(${o}, ${l}):`}a[e]=[!0,t,s]}function Te(t,e){for(let s=e;s<a.length;s++){let[i,o,l]=[...a[s]];if(M(i,o,t)&&l=="endwhile"){a[s]=[!0,t,"REMOVED"];break}}let n=a[e][2].match(/^while(.*?):?$/)[1].trim();a[e]=[!0,t,`while ${n}:`]}function He(t,e){for(let r=e;r<a.length;r++){let[n,s,i]=[...a[r]];if(M(n,s,t)&&/^until(.*?)$/.test(i)){a[r]=[!0,t,"REMOVED"],a[e]=[!0,t,"while True:"];let o=i.match(/^until(.*?)$/)[1].trim();a.splice(r,0,[!0,t+4,"break"]),a.splice(r,0,[!0,t+2,`if ${o}:`]),a.splice(r,0,[!0,t+2,""]);break}}}function Je(t,e){for(let s=e;s<a.length;s++){let[i,o,l]=[...a[s]];if(M(i,o,t)&&l.match(/^elseif(.*?)then$/)){let c=l.match(/^elseif(.*?)then$/)[1].trim();a[s]=[!0,t,`elif ${c}:`]}else if(M(i,o,t)&&(l=="else"||l=="else:"))a[s]=[!0,t,"else:"];else if(M(i,o,t)&&l==="endif"){a[s]=[!0,t,"REMOVED"];break}}let r=a[e][2];const n=/^if\s+(.*?)\s*(?:then)?:?$/;n.test(r)&&(r=`if ${n.exec(r)[1]}:`,a[e]=[!0,t,r])}function je(t,e){for(let n=e;n<a.length;n++){let[s,i,o]=[...a[n]];if(M(s,i,t)&&/^end(procedure|function)$/.test(o)){a[n]=[!0,t,"REMOVED"];break}}let r=/^(?:procedure|function)\s(.*?)\s*:?$/.exec(a[e][2]);a[e][0]=!0,a[e][2]=`def ${r[1]}:`}function ze(t){a=t;for(let e=0;e<a.length;e++){const[r,n,s]=[...a[e]];!r&&s!=""&&s!="REMOVED"&&(a[e][2]=fe(a[e][2]),a[e][2]=C(a[e][2]),a[e][2]=Me(a[e][2]),a[e][2]=N(a[e][2]),a[e][2]=G(a[e][2]),a[e][2]=Ee(a[e][2]),a[e][2]=de(a[e][2]),a[e][2]=Be(a[e][2]),/^for(.*?)$/.test(a[e][2])?Qe(n,e):/^while(.*?)$/.test(a[e][2])?Te(n,e):/^do(.*?)$/.test(a[e][2])?He(n,e):/^if(.*?)$/.test(a[e][2])?Je(n,e):/^(?:procedure|function)(.*?)$/.test(s)&&je(n,e))}return pe&&(a.unshift([!0,0,""]),a.unshift([!0,0,"from random import randint"])),a}let a=[],pe=!1;String.prototype.isIdentifier=function(){return/^[a-zA-Z_]\w*$/.test(this)};String.prototype.isStringInteger=function(){return Number.isInteger(Number(this))};function Ue(t,e,r){const n=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s*:?$/,s=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?)\s*:?$/;if(s.test(r)){let[i,o,l,c]=s.exec(r).slice(-4);return i.isIdentifier()?!o.isIdentifier()&&!o.isStringInteger()?(R=`Error on line ${e}
    ${o} isn't a valid identifier/number`,!1):!l.isIdentifier()&&!l.isStringInteger()?(R=`Error on line ${e}
    ${l} isn't a valid identifier/number`,!1):!c.isIdentifier()&&!c.isStringInteger()?(R=`Error on line ${e}
    ${c} isn't a valid identifier/number`,!1):!0:(R=`Error on line ${e}
    ${i} isn't a valid identifier`,!1)}else if(n.test(r)){let[i,o,l]=n.exec(r).slice(-3);return i.isIdentifier()?!o.isIdentifier()&&!Number.isInteger(Number(o))?(R=`Error on line ${e}
    ${o} isn't a valid identifier/number`,!1):!l.isIdentifier()&&!Number.isInteger(Number(l))?(R=`Error on line ${e}
    ${l} isn't a valid identifier/number`,!1):!0:(R=`Error on line ${e}
    ${i} isn't a valid identifier`,!1)}else return R=`Error on line ${e}
    ${r}

		Please declare for loops as specified by the OCR guide:
		for i=0 to 9
		...
		next i`,!1}function Ye(t){K=t;for(let e=0;e<K.length;e++){const[r,n,s]=[...K[e]];if(/^for(.*?)$/.test(K[e][2])&&!Ue(n,e,s))return R}return R}let K=[],R="";const ce={toArray(t){return t.split(/\n/).map(e=>[!1,e.search(/\S|$/),e.trim()])},toString(t){return t.filter(e=>e[2]!="REMOVED").map(e=>" ".repeat(e[1])+e[2]).join(`
`)}};function qe(t){let e,r,n,s,i,o,l,c,f,v,d,g;r=new xe({}),r.$on("vPPP",t[2]),r.$on("vPG",t[3]),r.$on("cPTP",t[4]),i=new Ae({});let P={id:"0"};l=new ae({props:P}),t[5](l);let A={id:"1"};return f=new ae({props:A}),t[6](f),d=new Se({}),{c(){e=x(),T(r.$$.fragment),n=x(),s=y("main"),T(i.$$.fragment),o=x(),T(l.$$.fragment),c=x(),T(f.$$.fragment),v=x(),T(d.$$.fragment),this.h()},l(u){_e("svelte-2mdzcm",document.head).forEach(m),e=k(u),H(r.$$.fragment,u),n=k(u),s=b(u,"MAIN",{class:!0});var h=w(s);H(i.$$.fragment,h),o=k(h),H(l.$$.fragment,h),c=k(h),H(f.$$.fragment,h),v=k(h),H(d.$$.fragment,h),h.forEach(m),this.h()},h(){document.title="Pseudocode to Python Transpiler",$(s,"class","svelte-15oobuy")},m(u,p){O(u,e,p),J(r,u,p),O(u,n,p),O(u,s,p),J(i,s,null),_(s,o),J(l,s,null),_(s,c),J(f,s,null),_(s,v),J(d,s,null),g=!0},p(u,[p]){const h={};l.$set(h);const V={};f.$set(V)},i(u){g||(j(r.$$.fragment,u),j(i.$$.fragment,u),j(l.$$.fragment,u),j(f.$$.fragment,u),j(d.$$.fragment,u),g=!0)},o(u){z(r.$$.fragment,u),z(i.$$.fragment,u),z(l.$$.fragment,u),z(f.$$.fragment,u),z(d.$$.fragment,u),g=!1},d(u){u&&m(e),U(r,u),u&&m(n),u&&m(s),U(i),t[5](null),U(l),t[6](null),U(f),U(d)}}}function Fe(t,e,r){let n;Z(t,be,d=>r(7,n=d));let s,i;function o(){s.set(n)}function l(){I.update(d=>!d)}function c(){const d=ce.toArray(s.get()),g=Ye(d);if(g===""){i.mode("python");const P=ze(d);i.set(ce.toString(P))}else i.mode("text"),i.set(g)}function f(d){se[d?"unshift":"push"](()=>{s=d,r(0,s)})}function v(d){se[d?"unshift":"push"](()=>{i=d,r(1,i)})}return[s,i,o,l,c,f,v]}class Le extends Y{constructor(e){super(),q(this,e,Fe,qe,F,{})}}export{Le as default};
