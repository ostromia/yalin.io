import{S as Y,i as q,s as F,k as P,q as E,a as k,l as w,m as x,r as B,h as m,c as O,n as $,b as R,H as _,M as L,u as ce,C as S,U as pe,I as Z,V as he,J as W,e as se,N as me,o as ge,x as Q,K as $e,y as H,z as J,f as j,t as z,A as U,v as ne}from"../../../chunks/index-ddf3eb23.js";import{r as _e,w as ve}from"../../../chunks/index-d01a5eb0.js";import{p as re}from"../../../chunks/python-80229e37.js";import{_ as D}from"../../../chunks/preload-helper-41c905a7.js";const I=ve(!1),ye=_e(`// 2020 Sample assessment materials J277/02

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
endif`);function be(t){let e,r,s,n,i,o,l,c,f=(t[0]==!1?"Show":"Hide")+" Pseudocode Guide (J277)",y,d,g,v,b,u;return{c(){e=P("nav"),r=P("span"),s=E("Online OCR Pseudocode to Python Transpiler"),n=k(),i=P("button"),o=E("View Past Paper Pseudocode"),l=k(),c=P("button"),y=E(f),d=k(),g=P("button"),v=E("Convert Pseudocode to Python"),this.h()},l(p){e=w(p,"NAV",{class:!0});var h=x(e);r=w(h,"SPAN",{class:!0});var A=x(r);s=B(A,"Online OCR Pseudocode to Python Transpiler"),A.forEach(m),n=O(h),i=w(h,"BUTTON",{class:!0});var T=x(i);o=B(T,"View Past Paper Pseudocode"),T.forEach(m),l=O(h),c=w(h,"BUTTON",{class:!0});var ee=x(c);y=B(ee,f),ee.forEach(m),d=O(h),g=w(h,"BUTTON",{class:!0});var te=x(g);v=B(te,"Convert Pseudocode to Python"),te.forEach(m),h.forEach(m),this.h()},h(){$(r,"class","svelte-4u8824"),$(i,"class","svelte-4u8824"),$(c,"class","svelte-4u8824"),$(g,"class","svelte-4u8824"),$(e,"class","svelte-4u8824")},m(p,h){R(p,e,h),_(e,r),_(r,s),_(e,n),_(e,i),_(i,o),_(e,l),_(e,c),_(c,y),_(e,d),_(e,g),_(g,v),b||(u=[L(i,"click",t[2]),L(c,"click",t[3]),L(g,"click",t[4])],b=!0)},p(p,[h]){h&1&&f!==(f=(p[0]==!1?"Show":"Hide")+" Pseudocode Guide (J277)")&&ce(y,f)},i:S,o:S,d(p){p&&m(e),b=!1,pe(u)}}}function Pe(t,e,r){let s;Z(t,I,c=>r(0,s=c));const n=he();return[s,n,()=>n("vPPP"),()=>n("vPG"),()=>n("cPTP")]}class we extends Y{constructor(e){super(),q(this,e,Pe,be,F,{})}}function xe(t){let e,r,s,n,i,o,l,c,f,y,d,g,v=t[0]?"Pseudocode Guide":"Python",b;return{c(){e=P("div"),r=P("img"),n=k(),i=P("span"),o=E("Pseudocode"),l=k(),c=P("div"),f=P("img"),d=k(),g=P("span"),b=E(v),this.h()},l(u){e=w(u,"DIV",{class:!0});var p=x(e);r=w(p,"IMG",{alt:!0,src:!0,class:!0}),n=O(p),i=w(p,"SPAN",{class:!0});var h=x(i);o=B(h,"Pseudocode"),h.forEach(m),p.forEach(m),l=O(u),c=w(u,"DIV",{class:!0});var A=x(c);f=w(A,"IMG",{alt:!0,src:!0,class:!0}),d=O(A),g=w(A,"SPAN",{class:!0});var T=x(g);b=B(T,v),T.forEach(m),A.forEach(m),this.h()},h(){$(r,"alt",""),W(r.src,s=X)||$(r,"src",s),$(r,"class","svelte-1vo54wp"),$(i,"class","svelte-1vo54wp"),$(e,"class","svelte-1vo54wp"),$(f,"alt",""),W(f.src,y=t[0]?X:re)||$(f,"src",y),$(f,"class","svelte-1vo54wp"),$(g,"class","svelte-1vo54wp"),$(c,"class","svelte-1vo54wp")},m(u,p){R(u,e,p),_(e,r),_(e,n),_(e,i),_(i,o),R(u,l,p),R(u,c,p),_(c,f),_(c,d),_(c,g),_(g,b)},p(u,[p]){p&1&&!W(f.src,y=u[0]?X:re)&&$(f,"src",y),p&1&&v!==(v=u[0]?"Pseudocode Guide":"Python")&&ce(b,v)},i:S,o:S,d(u){u&&m(e),u&&m(l),u&&m(c)}}}const X="assets/pseudocode2python/ocr-logo.svg";function ke(t,e,r){let s;return Z(t,I,n=>r(0,s=n)),[s]}class Oe extends Y{constructor(e){super(),q(this,e,ke,xe,F,{})}}function ie(t,e,r){const s=t.slice();return s[1]=e[r],s}function oe(t){let e,r=[...Array(7).keys()],s=[];for(let n=0;n<r.length;n+=1)s[n]=le(ie(t,r,n));return{c(){e=P("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=w(n,"DIV",{class:!0});var i=x(e);for(let o=0;o<s.length;o+=1)s[o].l(i);i.forEach(m),this.h()},h(){$(e,"class","svelte-ia0vks")},m(n,i){R(n,e,i);for(let o=0;o<s.length;o+=1)s[o].m(e,null)},p(n,i){if(i&0){r=[...Array(7).keys()];let o;for(o=0;o<r.length;o+=1){const l=ie(n,r,o);s[o]?s[o].p(l,i):(s[o]=le(l),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=r.length}},d(n){n&&m(e),me(s,n)}}}function le(t){let e,r;return{c(){e=P("img"),this.h()},l(s){e=w(s,"IMG",{alt:!0,src:!0}),this.h()},h(){$(e,"alt",""),W(e.src,r="assets/pseudocode2python/Pseudocode-Guide-J277/0"+t[1]+".jpg")||$(e,"src",r)},m(s,n){R(s,e,n)},p:S,d(s){s&&m(e)}}}function Re(t){let e,r=t[0]&&oe(t);return{c(){r&&r.c(),e=se()},l(s){r&&r.l(s),e=se()},m(s,n){r&&r.m(s,n),R(s,e,n)},p(s,[n]){s[0]?r?r.p(s,n):(r=oe(s),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:S,o:S,d(s){r&&r.d(s),s&&m(e)}}}function Ve(t,e,r){let s;return Z(t,I,n=>r(0,s=n)),[s]}class Ae extends Y{constructor(e){super(),q(this,e,Ve,Re,F,{})}}function Se(t){let e;return{c(){e=P("div"),this.h()},l(r){e=w(r,"DIV",{id:!0}),x(e).forEach(m),this.h()},h(){$(e,"id",t[0])},m(r,s){R(r,e,s)},p(r,[s]){s&1&&$(e,"id",r[0])},i:S,o:S,d(r){r&&m(e)}}}function Ce(t,e,r){let{id:s}=e,n;function i(c,f=1){n.setValue(c,f)}function o(){return n.getValue()}function l(c){n.session.setMode("ace/mode/"+c)}return ge(async()=>{const c=await D(()=>import("../../../chunks/ace-284b2852.js").then(f=>f.a),[],import.meta.url);await D(()=>import("../../../chunks/theme-dracula-56e33506.js").then(f=>f.t),[],import.meta.url),await D(()=>import("../../../chunks/mode-python-33043df3.js").then(f=>f.m),[],import.meta.url),n=c.edit(s),n.setTheme("ace/theme/dracula"),n.setFontSize("16px"),n.resize()}),t.$$set=c=>{"id"in c&&r(0,s=c.id)},[s,i,o,l]}class ae extends Y{constructor(e){super(),q(this,e,Ce,Se,F,{id:0,set:1,get:2,mode:3})}get set(){return this.$$.ctx[1]}get get(){return this.$$.ctx[2]}get mode(){return this.$$.ctx[3]}}String.prototype.replaceBetween=function(t,e,r){const s=this.slice(0,t),n=this.slice(e+1,this.length);return`${s}${r}${n}`};String.prototype.blockify=function(t,e){let r=[],s=[];for(let n=0;n<this.length;n++)t.test(this[n])?r.push(n):e.test(this[n]);for(let n=0;n<r.length;n++){let i=0;for(let o=r[n]+1;o<this.length;o++)if(t.test(this[o]))i+=1;else if(e.test(this[o])&&i!=0)i-=1;else if(e.test(this[o])&&i==0){let l=r[n],c=o;s.push([l,c,this.slice(l+1,c)]);break}}return s};function C(t){return t.includes("AND")?C(t.replace("AND","and")):t.includes("OR")?C(t.replace("OR","or")):t.includes("NOT")?C(t.replace("NOT","not")):t.includes("^")?C(t.replace("^","**")):t.includes("MOD")?C(t.replace("MOD","%")):t.includes("DIV")?C(t.replace("DIV","//")):t}function ue(t){return t.includes("//")?ue(t.replace("//","#")):t}function Ge(t){const e=/^(?:const|let|var)\s(.*?)$/;return e.test(t)?t.match(e)[1]:t}function N(t){if(t=t.replaceAll("real(","float("),/bool\s*\((.*?)\)/.test(t)){const e=/bool\s*\((.*?)\)/.exec(t),r=e[1].replace(/'|"/g,"").trim();if(["True","true"].includes(r))return N(t.replaceAll(e[0],"True"));if(["False","false"].includes(r))return N(t.replaceAll(e[0],"False"))}return t}function G(t){if(/\)\.length/.test(t)){let s=0,n=t.indexOf(").length"),i=t.blockify(/\(/,/\)/);for(let l=0;l<i.length;l++)if(i[l][1]==n){s=i[l][0];break}let o=null;for(let l=s-1;l>=0&&/\w/.test(t[l]);l--)o=l;if(o!=null){const l=[o,n+7],c=/(.*?)\((.*?)\)\.length/.exec(t.slice(l[0],l[1]+1)),f=`len(${c[1]}(${c[2]}))`;return G(t.replaceBetween(...l,f))}else{const l=[s,n+7],f=`len(${/\((.*?)\)\.length/.exec(t.slice(l[0],l[1]+1))[1]})`;return G(t.replaceBetween(...l,f))}}else if(/\.length/.test(t)){const s=/([\w'"]+)\.length/.exec(t),n=[s.index,s.index-1+s[0].length],i=`len(${s[1]})`;return G(t.replaceBetween(...n,i))}else if(/\.substring\((.*?),(.*?)\)/.test(t)){const s=/\.substring\((.*?),(.*?)\)/.exec(t),n=[s.index,s.index-1+s[0].length],i=`[${s[1]},${s[2]}]`;return G(t.replaceBetween(...n,i))}else if(/\.left/.test(t)){const s=/\.left\((.*?)\)/.exec(t),n=[s.index,s.index-1+s[0].length],i=`[:${s[1]}]`;return G(t.replaceBetween(...n,i))}else if(/\.right/.test(t)){const s=/\.right\((.*?)\)/.exec(t),n=[s.index,s.index-1+s[0].length],i=`[-${s[1]}:]`;return G(t.replaceBetween(...n,i))}const e=[".upper",".lower","ASC","CHR"],r=[".upper()",".lower()","ord","chr"];for(let s=0;s<e.length;s++)t=t.replaceAll(e[s],r[s]);return t}function Me(t){if(/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.test(t)){const e=/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.exec(t),r=`${e[1]} = [[0 for i in range(${e[2]})] for j in range(${e[3]})]`;return t.replace(e[0],r)}else if(/^array\s*(\w+)\[(.*?)\](?!=)/.test(t)){const e=/^array\s*(\w+)\[(.*?)\](?!=)/.exec(t),r=`${e[1]} = [0 for i in range(${e[2]})]`;return t.replace(e[0],r)}else if(/(\w+)\[(.*?),(.*?)\]/.test(t)){const e=/(\w+)\[(.*?),(.*?)\]/.exec(t),r=`${e[1]}[${e[2].trim()}][${e[3].trim()}]`;return t.replace(e[0],r)}return t}function fe(t){if(/random\((.*?),(.*?)\)/.test(t)){de=!0;const e=t.match(/random\((.*?),(.*?)\)/),r=`randint(${e[1].trim()}, ${e[2].trim()})`;return fe(t.replace(e[0],r))}return t}function Ee(t){return t.includes("console.writeline")?t.replaceAll("console.writeline","print"):t.includes("console.log")?t.replaceAll("console.log","print"):/^print\s*\((.*?)\)$/.test(t)?`print(${/^print\s*\((.*?)\)$/.exec(t)[1]})`:t}function M(t,e,r){return!t&&e==r}function Be(t,e){for(let i=e;i<a.length;i++){let[o,l,c]=[...a[i]];if(M(o,l,t)&&c.includes("next")){a[i]=[!0,t,"REMOVED"];break}}const r=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s*:?$/,s=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?)\s*:?$/;let n=a[e][2];if(s.test(n)){let[i,o,l,c]=s.exec(n).slice(-4);n=`for ${i} in range(${o}, ${l}, ${c}):`}else if(r.test(n)){let[i,o,l]=r.exec(n).slice(-3);n=`for ${i} in range(${o}, ${l}):`}a[e]=[!0,t,n]}function Te(t,e){for(let n=e;n<a.length;n++){let[i,o,l]=[...a[n]];if(M(i,o,t)&&l=="endwhile"){a[n]=[!0,t,"REMOVED"];break}}let s=a[e][2].match(/^while(.*?):?$/)[1].trim();a[e]=[!0,t,`while ${s}:`]}function Qe(t,e){for(let r=e;r<a.length;r++){let[s,n,i]=[...a[r]];if(M(s,n,t)&&/^until(.*?)$/.test(i)){a[r]=[!0,t,"REMOVED"],a[e]=[!0,t,"while True:"];let o=i.match(/^until(.*?)$/)[1].trim();a.splice(r,0,[!0,t+4,"break"]),a.splice(r,0,[!0,t+2,`if ${o}:`]),a.splice(r,0,[!0,t+2,""]);break}}}function He(t,e){for(let n=e;n<a.length;n++){let[i,o,l]=[...a[n]];if(M(i,o,t)&&l.match(/^elseif(.*?)then$/)){let c=l.match(/^elseif(.*?)then$/)[1].trim();a[n]=[!0,t,`elif ${c}:`]}else if(M(i,o,t)&&(l=="else"||l=="else:"))a[n]=[!0,t,"else:"];else if(M(i,o,t)&&l==="endif"){a[n]=[!0,t,"REMOVED"];break}}let r=a[e][2];const s=/^if\s+(.*?)\s*(?:then)?:?$/;s.test(r)&&(r=`if ${s.exec(r)[1]}:`,a[e]=[!0,t,r])}function Je(t,e){for(let s=e;s<a.length;s++){let[n,i,o]=[...a[s]];if(M(n,i,t)&&/^end(procedure|function)$/.test(o)){a[s]=[!0,t,"REMOVED"];break}}let r=/^(?:procedure|function)\s(.*?)\s*:?$/.exec(a[e][2]);a[e][0]=!0,a[e][2]=`def ${r[1]}:`}function je(t){a=t;for(let e=0;e<a.length;e++){const[r,s,n]=[...a[e]];!r&&n!=""&&n!="REMOVED"&&(a[e][2]=ue(a[e][2]),a[e][2]=C(a[e][2]),a[e][2]=Ge(a[e][2]),a[e][2]=N(a[e][2]),a[e][2]=G(a[e][2]),a[e][2]=Me(a[e][2]),a[e][2]=fe(a[e][2]),a[e][2]=Ee(a[e][2]),/^for(.*?)$/.test(a[e][2])?Be(s,e):/^while(.*?)$/.test(a[e][2])?Te(s,e):/^do(.*?)$/.test(a[e][2])?Qe(s,e):/^if(.*?)$/.test(a[e][2])?He(s,e):/^(?:procedure|function)(.*?)$/.test(n)&&Je(s,e))}return de&&(a.unshift([!0,0,""]),a.unshift([!0,0,"from random import randint"])),a}let a=[],de=!1;String.prototype.isIdentifier=function(){return/^[a-zA-Z_]\w*$/.test(this)};String.prototype.isStringInteger=function(){return Number.isInteger(Number(this))};function ze(t,e,r){const s=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s*:?$/,n=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?)\s*:?$/;if(n.test(r)){let[i,o,l,c]=n.exec(r).slice(-4);return i.isIdentifier()?!o.isIdentifier()&&!o.isStringInteger()?(V=`Error on line ${e}
    ${o} isn't a valid identifier/number`,!1):!l.isIdentifier()&&!l.isStringInteger()?(V=`Error on line ${e}
    ${l} isn't a valid identifier/number`,!1):!c.isIdentifier()&&!c.isStringInteger()?(V=`Error on line ${e}
    ${c} isn't a valid identifier/number`,!1):!0:(V=`Error on line ${e}
    ${i} isn't a valid identifier`,!1)}else if(s.test(r)){let[i,o,l]=s.exec(r).slice(-3);return i.isIdentifier()?!o.isIdentifier()&&!Number.isInteger(Number(o))?(V=`Error on line ${e}
    ${o} isn't a valid identifier/number`,!1):!l.isIdentifier()&&!Number.isInteger(Number(l))?(V=`Error on line ${e}
    ${l} isn't a valid identifier/number`,!1):!0:(V=`Error on line ${e}
    ${i} isn't a valid identifier`,!1)}else return V=`Error on line ${e}
    ${r}

		Please declare for loops as specified by the OCR guide:
		for i=0 to 9
		...
		next i`,!1}function Ue(t){K=t;for(let e=0;e<K.length;e++){const[r,s,n]=[...K[e]];if(/^for(.*?)$/.test(K[e][2])&&!ze(s,e,n))return V}return V}let K=[],V="";function Ye(t){let e,r,s,n,i,o,l,c,f,y,d,g;r=new we({}),r.$on("vPPP",t[2]),r.$on("vPG",t[3]),r.$on("cPTP",t[4]),i=new Oe({});let v={id:"0"};l=new ae({props:v}),t[5](l);let b={id:"1"};return f=new ae({props:b}),t[6](f),d=new Ae({}),{c(){e=k(),Q(r.$$.fragment),s=k(),n=P("main"),Q(i.$$.fragment),o=k(),Q(l.$$.fragment),c=k(),Q(f.$$.fragment),y=k(),Q(d.$$.fragment),this.h()},l(u){$e("svelte-2mdzcm",document.head).forEach(m),e=O(u),H(r.$$.fragment,u),s=O(u),n=w(u,"MAIN",{class:!0});var h=x(n);H(i.$$.fragment,h),o=O(h),H(l.$$.fragment,h),c=O(h),H(f.$$.fragment,h),y=O(h),H(d.$$.fragment,h),h.forEach(m),this.h()},h(){document.title="Pseudocode to Python Transpiler",$(n,"class","svelte-15oobuy")},m(u,p){R(u,e,p),J(r,u,p),R(u,s,p),R(u,n,p),J(i,n,null),_(n,o),J(l,n,null),_(n,c),J(f,n,null),_(n,y),J(d,n,null),g=!0},p(u,[p]){const h={};l.$set(h);const A={};f.$set(A)},i(u){g||(j(r.$$.fragment,u),j(i.$$.fragment,u),j(l.$$.fragment,u),j(f.$$.fragment,u),j(d.$$.fragment,u),g=!0)},o(u){z(r.$$.fragment,u),z(i.$$.fragment,u),z(l.$$.fragment,u),z(f.$$.fragment,u),z(d.$$.fragment,u),g=!1},d(u){u&&m(e),U(r,u),u&&m(s),u&&m(n),U(i),t[5](null),U(l),t[6](null),U(f),U(d)}}}function qe(t,e,r){let s;Z(t,ye,d=>r(7,s=d));let n,i;function o(){n.set(s)}function l(){I.update(d=>!d)}function c(){const d=n.get().split(`
`).map(v=>[!1,v.search(/\S|$/),v.trim()]),g=Ue(d);if(g==""){i.mode("python");const v=je(d).filter(b=>b[2]!="REMOVED").map(b=>" ".repeat(b[1])+b[2]).join(`
`);i.set(v)}else i.mode("text"),i.set(g)}function f(d){ne[d?"unshift":"push"](()=>{n=d,r(0,n)})}function y(d){ne[d?"unshift":"push"](()=>{i=d,r(1,i)})}return[n,i,o,l,c,f,y]}class Ie extends Y{constructor(e){super(),q(this,e,qe,Ye,F,{})}}export{Ie as default};
