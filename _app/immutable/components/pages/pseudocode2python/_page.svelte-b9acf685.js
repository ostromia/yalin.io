import{S as Y,i as q,s as F,k as b,q as E,a as k,l as w,m as x,r as T,h as g,c as O,n as h,b as R,G as _,L as I,u as ce,B as S,T as me,H as L,U as he,I as W,e as ne,M as ge,o as $e,w as Q,J as _e,x as H,y as J,f as U,t as j,z,V as se}from"../../../chunks/index-9e7dd6aa.js";import{w as ue}from"../../../chunks/index-5f4a0c90.js";import{p as re}from"../../../chunks/python-80229e37.js";import{_ as D}from"../../../chunks/preload-helper-41c905a7.js";const Z=ue(!1),ve=ue(`// 2020 Sample assessment materials J277/02

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
endif`);function ye(t){let e,r,n,s,i,o,l,c,f=(t[0]==!1?"Show":"Hide")+" Pseudocode Guide (J277)",y,d,$,v,P,u;return{c(){e=b("nav"),r=b("span"),n=E("Online OCR Pseudocode to Python Transpiler"),s=k(),i=b("button"),o=E("View Past Paper Pseudocode"),l=k(),c=b("button"),y=E(f),d=k(),$=b("button"),v=E("Convert Pseudocode to Python"),this.h()},l(p){e=w(p,"NAV",{class:!0});var m=x(e);r=w(m,"SPAN",{class:!0});var A=x(r);n=T(A,"Online OCR Pseudocode to Python Transpiler"),A.forEach(g),s=O(m),i=w(m,"BUTTON",{id:!0,class:!0});var B=x(i);o=T(B,"View Past Paper Pseudocode"),B.forEach(g),l=O(m),c=w(m,"BUTTON",{id:!0,class:!0});var ee=x(c);y=T(ee,f),ee.forEach(g),d=O(m),$=w(m,"BUTTON",{id:!0,class:!0});var te=x($);v=T(te,"Convert Pseudocode to Python"),te.forEach(g),m.forEach(g),this.h()},h(){h(r,"class","svelte-4u8824"),h(i,"id","viewPastPaperPseudocode"),h(i,"class","svelte-4u8824"),h(c,"id","viewPseudocodeGuide"),h(c,"class","svelte-4u8824"),h($,"id","convertPseudocodeToPython"),h($,"class","svelte-4u8824"),h(e,"class","svelte-4u8824")},m(p,m){R(p,e,m),_(e,r),_(r,n),_(e,s),_(e,i),_(i,o),_(e,l),_(e,c),_(c,y),_(e,d),_(e,$),_($,v),P||(u=[I(i,"click",t[2]),I(c,"click",t[3]),I($,"click",t[4])],P=!0)},p(p,[m]){m&1&&f!==(f=(p[0]==!1?"Show":"Hide")+" Pseudocode Guide (J277)")&&ce(y,f)},i:S,o:S,d(p){p&&g(e),P=!1,me(u)}}}function Pe(t,e,r){let n;L(t,Z,c=>r(0,n=c));const s=he();return[n,s,()=>s("vPPP"),()=>s("vPG"),()=>s("cPTP")]}class be extends Y{constructor(e){super(),q(this,e,Pe,ye,F,{})}}const X=""+new URL("../../../assets/ocr-logo-3617e3b0.svg",import.meta.url).href;function we(t){let e,r,n,s,i,o,l,c,f,y,d,$,v=t[0]?"Pseudocode Guide":"Python",P;return{c(){e=b("div"),r=b("img"),s=k(),i=b("span"),o=E("Pseudocode"),l=k(),c=b("div"),f=b("img"),d=k(),$=b("span"),P=E(v),this.h()},l(u){e=w(u,"DIV",{class:!0});var p=x(e);r=w(p,"IMG",{alt:!0,src:!0,class:!0}),s=O(p),i=w(p,"SPAN",{class:!0});var m=x(i);o=T(m,"Pseudocode"),m.forEach(g),p.forEach(g),l=O(u),c=w(u,"DIV",{class:!0});var A=x(c);f=w(A,"IMG",{alt:!0,src:!0,class:!0}),d=O(A),$=w(A,"SPAN",{class:!0});var B=x($);P=T(B,v),B.forEach(g),A.forEach(g),this.h()},h(){h(r,"alt",""),W(r.src,n=X)||h(r,"src",n),h(r,"class","svelte-1vo54wp"),h(i,"class","svelte-1vo54wp"),h(e,"class","svelte-1vo54wp"),h(f,"alt",""),W(f.src,y=t[0]?X:re)||h(f,"src",y),h(f,"class","svelte-1vo54wp"),h($,"class","svelte-1vo54wp"),h(c,"class","svelte-1vo54wp")},m(u,p){R(u,e,p),_(e,r),_(e,s),_(e,i),_(i,o),R(u,l,p),R(u,c,p),_(c,f),_(c,d),_(c,$),_($,P)},p(u,[p]){p&1&&!W(f.src,y=u[0]?X:re)&&h(f,"src",y),p&1&&v!==(v=u[0]?"Pseudocode Guide":"Python")&&ce(P,v)},i:S,o:S,d(u){u&&g(e),u&&g(l),u&&g(c)}}}function xe(t,e,r){let n;return L(t,Z,s=>r(0,n=s)),[n]}class ke extends Y{constructor(e){super(),q(this,e,xe,we,F,{})}}function ie(t,e,r){const n=t.slice();return n[1]=e[r],n}function oe(t){let e,r=[...Array(7).keys()],n=[];for(let s=0;s<r.length;s+=1)n[s]=le(ie(t,r,s));return{c(){e=b("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=w(s,"DIV",{class:!0});var i=x(e);for(let o=0;o<n.length;o+=1)n[o].l(i);i.forEach(g),this.h()},h(){h(e,"class","svelte-ia0vks")},m(s,i){R(s,e,i);for(let o=0;o<n.length;o+=1)n[o].m(e,null)},p(s,i){if(i&0){r=[...Array(7).keys()];let o;for(o=0;o<r.length;o+=1){const l=ie(s,r,o);n[o]?n[o].p(l,i):(n[o]=le(l),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=r.length}},d(s){s&&g(e),ge(n,s)}}}function le(t){let e,r;return{c(){e=b("img"),this.h()},l(n){e=w(n,"IMG",{alt:!0,src:!0}),this.h()},h(){h(e,"alt",""),W(e.src,r="Pseudocode-Guide-J277/0"+t[1]+".jpg")||h(e,"src",r)},m(n,s){R(n,e,s)},p:S,d(n){n&&g(e)}}}function Oe(t){let e,r=t[0]&&oe(t);return{c(){r&&r.c(),e=ne()},l(n){r&&r.l(n),e=ne()},m(n,s){r&&r.m(n,s),R(n,e,s)},p(n,[s]){n[0]?r?r.p(n,s):(r=oe(n),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:S,o:S,d(n){r&&r.d(n),n&&g(e)}}}function Re(t,e,r){let n;return L(t,Z,s=>r(0,n=s)),[n]}class Ve extends Y{constructor(e){super(),q(this,e,Re,Oe,F,{})}}function Ae(t){let e;return{c(){e=b("div"),this.h()},l(r){e=w(r,"DIV",{id:!0}),x(e).forEach(g),this.h()},h(){h(e,"id",t[0])},m(r,n){R(r,e,n)},p(r,[n]){n&1&&h(e,"id",r[0])},i:S,o:S,d(r){r&&g(e)}}}function Se(t,e,r){let{id:n}=e,s;function i(c,f=1){s.setValue(c,f)}function o(){return s.getValue()}function l(c){s.session.setMode("ace/mode/"+c)}return $e(async()=>{const c=await D(()=>import("../../../chunks/ace-c3b2f90e.js").then(f=>f.a),[],import.meta.url);await D(()=>import("../../../chunks/theme-dracula-56e33506.js").then(f=>f.t),[],import.meta.url),await D(()=>import("../../../chunks/mode-python-33043df3.js").then(f=>f.m),[],import.meta.url),s=c.edit(n),s.setTheme("ace/theme/dracula"),s.setFontSize("16px"),s.resize()}),t.$$set=c=>{"id"in c&&r(0,n=c.id)},[n,i,o,l]}class ae extends Y{constructor(e){super(),q(this,e,Se,Ae,F,{id:0,set:1,get:2,mode:3})}get set(){return this.$$.ctx[1]}get get(){return this.$$.ctx[2]}get mode(){return this.$$.ctx[3]}}String.prototype.replaceBetween=function(t,e,r){const n=this.slice(0,t),s=this.slice(e+1,this.length);return`${n}${r}${s}`};String.prototype.blockify=function(t,e){let r=[],n=[];for(let s=0;s<this.length;s++)t.test(this[s])?r.push(s):e.test(this[s]);for(let s=0;s<r.length;s++){let i=0;for(let o=r[s]+1;o<this.length;o++)if(t.test(this[o]))i+=1;else if(e.test(this[o])&&i!=0)i-=1;else if(e.test(this[o])&&i==0){let l=r[s],c=o;n.push([l,c,this.slice(l+1,c)]);break}}return n};function G(t){return t.includes("AND")?G(t.replace("AND","and")):t.includes("OR")?G(t.replace("OR","or")):t.includes("NOT")?G(t.replace("NOT","not")):t.includes("^")?G(t.replace("^","**")):t.includes("MOD")?G(t.replace("MOD","%")):t.includes("DIV")?G(t.replace("DIV","//")):t}function fe(t){return t.includes("//")?fe(t.replace("//","#")):t}function Ge(t){const e=/^(?:const|let|var)\s(.*?)$/;return e.test(t)?t.match(e)[1]:t}function N(t){if(t=t.replaceAll("real(","float("),/bool\s*\((.*?)\)/.test(t)){const e=/bool\s*\((.*?)\)/.exec(t),r=e[1].replace(/'|"/g,"").trim();if(["True","true"].includes(r))return N(t.replaceAll(e[0],"True"));if(["False","false"].includes(r))return N(t.replaceAll(e[0],"False"))}return t}function C(t){if(/\)\.length/.test(t)){let n=0,s=t.indexOf(").length"),i=t.blockify(/\(/,/\)/);for(let l=0;l<i.length;l++)if(i[l][1]==s){n=i[l][0];break}let o=null;for(let l=n-1;l>=0&&/\w/.test(t[l]);l--)o=l;if(o!=null){const l=[o,s+7],c=/(.*?)\((.*?)\)\.length/.exec(t.slice(l[0],l[1]+1)),f=`len(${c[1]}(${c[2]}))`;return C(t.replaceBetween(...l,f))}else{const l=[n,s+7],f=`len(${/\((.*?)\)\.length/.exec(t.slice(l[0],l[1]+1))[1]})`;return C(t.replaceBetween(...l,f))}}else if(/\.length/.test(t)){const n=/([\w'"]+)\.length/.exec(t),s=[n.index,n.index-1+n[0].length],i=`len(${n[1]})`;return C(t.replaceBetween(...s,i))}else if(/\.substring\((.*?),(.*?)\)/.test(t)){const n=/\.substring\((.*?),(.*?)\)/.exec(t),s=[n.index,n.index-1+n[0].length],i=`[${n[1]},${n[2]}]`;return C(t.replaceBetween(...s,i))}else if(/\.left/.test(t)){const n=/\.left\((.*?)\)/.exec(t),s=[n.index,n.index-1+n[0].length],i=`[:${n[1]}]`;return C(t.replaceBetween(...s,i))}else if(/\.right/.test(t)){const n=/\.right\((.*?)\)/.exec(t),s=[n.index,n.index-1+n[0].length],i=`[-${n[1]}:]`;return C(t.replaceBetween(...s,i))}const e=[".upper",".lower","ASC","CHR"],r=[".upper()",".lower()","ord","chr"];for(let n=0;n<e.length;n++)t=t.replaceAll(e[n],r[n]);return t}function Ce(t){if(/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.test(t)){const e=/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.exec(t),r=`${e[1]} = [[0 for i in range(${e[2]})] for j in range(${e[3]})]`;return t.replace(e[0],r)}else if(/^array\s*(\w+)\[(.*?)\](?!=)/.test(t)){const e=/^array\s*(\w+)\[(.*?)\](?!=)/.exec(t),r=`${e[1]} = [0 for i in range(${e[2]})]`;return t.replace(e[0],r)}else if(/(\w+)\[(.*?),(.*?)\]/.test(t)){const e=/(\w+)\[(.*?),(.*?)\]/.exec(t),r=`${e[1]}[${e[2].trim()}][${e[3].trim()}]`;return t.replace(e[0],r)}return t}function de(t){if(/random\((.*?),(.*?)\)/.test(t)){pe=!0;const e=t.match(/random\((.*?),(.*?)\)/),r=`randint(${e[1].trim()}, ${e[2].trim()})`;return de(t.replace(e[0],r))}return t}function Me(t){return t.includes("console.writeline")?t.replaceAll("console.writeline","print"):t.includes("console.log")?t.replaceAll("console.log","print"):/^print\s*\((.*?)\)$/.test(t)?`print(${/^print\s*\((.*?)\)$/.exec(t)[1]})`:t}function M(t,e,r){return!t&&e==r}function Ee(t,e){for(let i=e;i<a.length;i++){let[o,l,c]=[...a[i]];if(M(o,l,t)&&c.includes("next")){a[i]=[!0,t,"REMOVED"];break}}const r=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s*:?$/,n=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?)\s*:?$/;let s=a[e][2];if(n.test(s)){let[i,o,l,c]=n.exec(s).slice(-4);s=`for ${i} in range(${o}, ${l}, ${c}):`}else if(r.test(s)){let[i,o,l]=r.exec(s).slice(-3);s=`for ${i} in range(${o}, ${l}):`}a[e]=[!0,t,s]}function Te(t,e){for(let s=e;s<a.length;s++){let[i,o,l]=[...a[s]];if(M(i,o,t)&&l=="endwhile"){a[s]=[!0,t,"REMOVED"];break}}let n=a[e][2].match(/^while(.*?):?$/)[1].trim();a[e]=[!0,t,`while ${n}:`]}function Be(t,e){for(let r=e;r<a.length;r++){let[n,s,i]=[...a[r]];if(M(n,s,t)&&/^until(.*?)$/.test(i)){a[r]=[!0,t,"REMOVED"],a[e]=[!0,t,"while True:"];let o=i.match(/^until(.*?)$/)[1].trim();a.splice(r,0,[!0,t+4,"break"]),a.splice(r,0,[!0,t+2,`if ${o}:`]),a.splice(r,0,[!0,t+2,""]);break}}}function Qe(t,e){for(let s=e;s<a.length;s++){let[i,o,l]=[...a[s]];if(M(i,o,t)&&l.match(/^elseif(.*?)then$/)){let c=l.match(/^elseif(.*?)then$/)[1].trim();a[s]=[!0,t,`elif ${c}:`]}else if(M(i,o,t)&&(l=="else"||l=="else:"))a[s]=[!0,t,"else:"];else if(M(i,o,t)&&l==="endif"){a[s]=[!0,t,"REMOVED"];break}}let r=a[e][2];const n=/^if\s+(.*?)\s*(?:then)?:?$/;n.test(r)&&(r=`if ${n.exec(r)[1]}:`,a[e]=[!0,t,r])}function He(t,e){for(let n=e;n<a.length;n++){let[s,i,o]=[...a[n]];if(M(s,i,t)&&/^end(procedure|function)$/.test(o)){a[n]=[!0,t,"REMOVED"];break}}let r=/^(?:procedure|function)\s(.*?)\s*:?$/.exec(a[e][2]);a[e][0]=!0,a[e][2]=`def ${r[1]}:`}function Je(t){a=t;for(let e=0;e<a.length;e++){const[r,n,s]=[...a[e]];!r&&s!=""&&s!="REMOVED"&&(a[e][2]=fe(a[e][2]),a[e][2]=G(a[e][2]),a[e][2]=Ge(a[e][2]),a[e][2]=N(a[e][2]),a[e][2]=C(a[e][2]),a[e][2]=Ce(a[e][2]),a[e][2]=de(a[e][2]),a[e][2]=Me(a[e][2]),/^for(.*?)$/.test(a[e][2])?Ee(n,e):/^while(.*?)$/.test(a[e][2])?Te(n,e):/^do(.*?)$/.test(a[e][2])?Be(n,e):/^if(.*?)$/.test(a[e][2])?Qe(n,e):/^(?:procedure|function)(.*?)$/.test(s)&&He(n,e))}return pe&&(a.unshift([!0,0,""]),a.unshift([!0,0,"from random import randint"])),a}let a=[],pe=!1;String.prototype.isIdentifier=function(){return/^[a-zA-Z_]\w*$/.test(this)};String.prototype.isStringInteger=function(){return Number.isInteger(Number(this))};function Ue(t,e,r){const n=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s*:?$/,s=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?)\s*:?$/;if(s.test(r)){let[i,o,l,c]=s.exec(r).slice(-4);return i.isIdentifier()?!o.isIdentifier()&&!o.isStringInteger()?(V=`Error on line ${e}
    ${o} isn't a valid identifier/number`,!1):!l.isIdentifier()&&!l.isStringInteger()?(V=`Error on line ${e}
    ${l} isn't a valid identifier/number`,!1):!c.isIdentifier()&&!c.isStringInteger()?(V=`Error on line ${e}
    ${c} isn't a valid identifier/number`,!1):!0:(V=`Error on line ${e}
    ${i} isn't a valid identifier`,!1)}else if(n.test(r)){let[i,o,l]=n.exec(r).slice(-3);return i.isIdentifier()?!o.isIdentifier()&&!Number.isInteger(Number(o))?(V=`Error on line ${e}
    ${o} isn't a valid identifier/number`,!1):!l.isIdentifier()&&!Number.isInteger(Number(l))?(V=`Error on line ${e}
    ${l} isn't a valid identifier/number`,!1):!0:(V=`Error on line ${e}
    ${i} isn't a valid identifier`,!1)}else return V=`Error on line ${e}
    ${r}

		Please declare for loops as specified by the OCR guide:
		for i=0 to 9
		...
		next i`,!1}function je(t){K=t;for(let e=0;e<K.length;e++){const[r,n,s]=[...K[e]];if(/^for(.*?)$/.test(K[e][2])&&!Ue(n,e,s))return V}return V}let K=[],V="";function ze(t){let e,r,n,s,i,o,l,c,f,y,d,$;r=new be({}),r.$on("vPPP",t[2]),r.$on("vPG",t[3]),r.$on("cPTP",t[4]),i=new ke({});let v={id:"0"};l=new ae({props:v}),t[5](l);let P={id:"1"};return f=new ae({props:P}),t[6](f),d=new Ve({}),{c(){e=k(),Q(r.$$.fragment),n=k(),s=b("main"),Q(i.$$.fragment),o=k(),Q(l.$$.fragment),c=k(),Q(f.$$.fragment),y=k(),Q(d.$$.fragment),this.h()},l(u){_e("svelte-2mdzcm",document.head).forEach(g),e=O(u),H(r.$$.fragment,u),n=O(u),s=w(u,"MAIN",{class:!0});var m=x(s);H(i.$$.fragment,m),o=O(m),H(l.$$.fragment,m),c=O(m),H(f.$$.fragment,m),y=O(m),H(d.$$.fragment,m),m.forEach(g),this.h()},h(){document.title="Pseudocode to Python Transpiler",h(s,"class","svelte-15oobuy")},m(u,p){R(u,e,p),J(r,u,p),R(u,n,p),R(u,s,p),J(i,s,null),_(s,o),J(l,s,null),_(s,c),J(f,s,null),_(s,y),J(d,s,null),$=!0},p(u,[p]){const m={};l.$set(m);const A={};f.$set(A)},i(u){$||(U(r.$$.fragment,u),U(i.$$.fragment,u),U(l.$$.fragment,u),U(f.$$.fragment,u),U(d.$$.fragment,u),$=!0)},o(u){j(r.$$.fragment,u),j(i.$$.fragment,u),j(l.$$.fragment,u),j(f.$$.fragment,u),j(d.$$.fragment,u),$=!1},d(u){u&&g(e),z(r,u),u&&g(n),u&&g(s),z(i),t[5](null),z(l),t[6](null),z(f),z(d)}}}function Ye(t,e,r){let n;L(t,ve,d=>r(7,n=d));let s,i;function o(){s.set(n)}function l(){Z.update(d=>d=!d)}function c(){const d=s.get().split(`
`).map(v=>[!1,v.search(/\S|$/),v.trim()]),$=je(d);if($==""){i.mode("python");const v=Je(d).filter(P=>P[2]!="REMOVED").map(P=>" ".repeat(P[1])+P[2]).join(`
`);i.set(v)}else i.mode("text"),i.set($)}function f(d){se[d?"unshift":"push"](()=>{s=d,r(0,s)})}function y(d){se[d?"unshift":"push"](()=>{i=d,r(1,i)})}return[s,i,o,l,c,f,y]}class Le extends Y{constructor(e){super(),q(this,e,Ye,ze,F,{})}}export{Le as default};
