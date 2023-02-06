import{_ as Y}from"../../../chunks/preload-helper-41c905a7.js";import{S as z,i as J,s as U,k as y,q as C,a as k,l as P,m as x,r as T,h as $,c as O,n as h,b as R,G as m,L as q,u as le,B as S,T as de,H as j,U as pe,I as H,e as se,M as he,w as K,J as me,x as W,y as L,f as Z,t as I,z as D,o as $e}from"../../../chunks/index-4d913690.js";import{w as ae}from"../../../chunks/index-78ac92dc.js";import{p as ne}from"../../../chunks/python-80229e37.js";const F=ae(!1),ge=ae(`// 2020 Sample assessment materials J277/02

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
endif`);function _e(t){let e,r,s,n,i,o,l,c,u=(t[0]==!1?"Show":"Hide")+" Pseudocode Guide (J277)",g,_,p,f,w,d;return{c(){e=y("nav"),r=y("span"),s=C("Online OCR Pseudocode to Python Transpiler"),n=k(),i=y("button"),o=C("View Past Paper Pseudocode"),l=k(),c=y("button"),g=C(u),_=k(),p=y("button"),f=C("Convert Pseudocode to Python"),this.h()},l(v){e=P(v,"NAV",{class:!0});var b=x(e);r=P(b,"SPAN",{class:!0});var A=x(r);s=T(A,"Online OCR Pseudocode to Python Transpiler"),A.forEach($),n=O(b),i=P(b,"BUTTON",{id:!0,class:!0});var B=x(i);o=T(B,"View Past Paper Pseudocode"),B.forEach($),l=O(b),c=P(b,"BUTTON",{id:!0,class:!0});var ee=x(c);g=T(ee,u),ee.forEach($),_=O(b),p=P(b,"BUTTON",{id:!0,class:!0});var te=x(p);f=T(te,"Convert Pseudocode to Python"),te.forEach($),b.forEach($),this.h()},h(){h(r,"class","svelte-4u8824"),h(i,"id","viewPastPaperPseudocode"),h(i,"class","svelte-4u8824"),h(c,"id","viewPseudocodeGuide"),h(c,"class","svelte-4u8824"),h(p,"id","convertPseudocodeToPython"),h(p,"class","svelte-4u8824"),h(e,"class","svelte-4u8824")},m(v,b){R(v,e,b),m(e,r),m(r,s),m(e,n),m(e,i),m(i,o),m(e,l),m(e,c),m(c,g),m(e,_),m(e,p),m(p,f),w||(d=[q(i,"click",t[2]),q(c,"click",t[3]),q(p,"click",t[4])],w=!0)},p(v,[b]){b&1&&u!==(u=(v[0]==!1?"Show":"Hide")+" Pseudocode Guide (J277)")&&le(g,u)},i:S,o:S,d(v){v&&$(e),w=!1,de(d)}}}function ve(t,e,r){let s;j(t,F,c=>r(0,s=c));const n=pe();return[s,n,()=>n("vPPP"),()=>n("vPG"),()=>n("cPTP")]}class ye extends z{constructor(e){super(),J(this,e,ve,_e,U,{})}}const X=""+new URL("../../../assets/ocr-logo-3617e3b0.svg",import.meta.url).href;function Pe(t){let e,r,s,n,i,o,l,c,u,g,_,p,f=t[0]?"Pseudocode Guide":"Python",w;return{c(){e=y("div"),r=y("img"),n=k(),i=y("span"),o=C("Pseudocode"),l=k(),c=y("div"),u=y("img"),_=k(),p=y("span"),w=C(f),this.h()},l(d){e=P(d,"DIV",{class:!0});var v=x(e);r=P(v,"IMG",{alt:!0,src:!0,class:!0}),n=O(v),i=P(v,"SPAN",{class:!0});var b=x(i);o=T(b,"Pseudocode"),b.forEach($),v.forEach($),l=O(d),c=P(d,"DIV",{class:!0});var A=x(c);u=P(A,"IMG",{alt:!0,src:!0,class:!0}),_=O(A),p=P(A,"SPAN",{class:!0});var B=x(p);w=T(B,f),B.forEach($),A.forEach($),this.h()},h(){h(r,"alt",""),H(r.src,s=X)||h(r,"src",s),h(r,"class","svelte-1vo54wp"),h(i,"class","svelte-1vo54wp"),h(e,"class","svelte-1vo54wp"),h(u,"alt",""),H(u.src,g=t[0]?X:ne)||h(u,"src",g),h(u,"class","svelte-1vo54wp"),h(p,"class","svelte-1vo54wp"),h(c,"class","svelte-1vo54wp")},m(d,v){R(d,e,v),m(e,r),m(e,n),m(e,i),m(i,o),R(d,l,v),R(d,c,v),m(c,u),m(c,_),m(c,p),m(p,w)},p(d,[v]){v&1&&!H(u.src,g=d[0]?X:ne)&&h(u,"src",g),v&1&&f!==(f=d[0]?"Pseudocode Guide":"Python")&&le(w,f)},i:S,o:S,d(d){d&&$(e),d&&$(l),d&&$(c)}}}function be(t,e,r){let s;return j(t,F,n=>r(0,s=n)),[s]}class we extends z{constructor(e){super(),J(this,e,be,Pe,U,{})}}function re(t,e,r){const s=t.slice();return s[1]=e[r],s}function ie(t){let e,r=[...Array(7).keys()],s=[];for(let n=0;n<r.length;n+=1)s[n]=oe(re(t,r,n));return{c(){e=y("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=P(n,"DIV",{class:!0});var i=x(e);for(let o=0;o<s.length;o+=1)s[o].l(i);i.forEach($),this.h()},h(){h(e,"class","svelte-ia0vks")},m(n,i){R(n,e,i);for(let o=0;o<s.length;o+=1)s[o].m(e,null)},p(n,i){if(i&0){r=[...Array(7).keys()];let o;for(o=0;o<r.length;o+=1){const l=re(n,r,o);s[o]?s[o].p(l,i):(s[o]=oe(l),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=r.length}},d(n){n&&$(e),he(s,n)}}}function oe(t){let e,r;return{c(){e=y("img"),this.h()},l(s){e=P(s,"IMG",{alt:!0,src:!0}),this.h()},h(){h(e,"alt",""),H(e.src,r="Pseudocode-Guide-J277/0"+t[1]+".jpg")||h(e,"src",r)},m(s,n){R(s,e,n)},p:S,d(s){s&&$(e)}}}function xe(t){let e,r=t[0]&&ie(t);return{c(){r&&r.c(),e=se()},l(s){r&&r.l(s),e=se()},m(s,n){r&&r.m(s,n),R(s,e,n)},p(s,[n]){s[0]?r?r.p(s,n):(r=ie(s),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:S,o:S,d(s){r&&r.d(s),s&&$(e)}}}function ke(t,e,r){let s;return j(t,F,n=>r(0,s=n)),[s]}class Oe extends z{constructor(e){super(),J(this,e,ke,xe,U,{})}}String.prototype.replaceBetween=function(t,e,r){const s=this.slice(0,t),n=this.slice(e+1,this.length);return`${s}${r}${n}`};String.prototype.blockify=function(t,e){let r=[],s=[];for(let n=0;n<this.length;n++)t.test(this[n])?r.push(n):e.test(this[n]);for(let n=0;n<r.length;n++){let i=0;for(let o=r[n]+1;o<this.length;o++)if(t.test(this[o]))i+=1;else if(e.test(this[o])&&i!=0)i-=1;else if(e.test(this[o])&&i==0){let l=r[n],c=o;s.push([l,c,this.slice(l+1,c)]);break}}return s};function E(t){return t.includes("AND")?E(t.replace("AND","and")):t.includes("OR")?E(t.replace("OR","or")):t.includes("NOT")?E(t.replace("NOT","not")):t.includes("^")?E(t.replace("^","**")):t.includes("MOD")?E(t.replace("MOD","%")):t.includes("DIV")?E(t.replace("DIV","//")):t}function ce(t){return t.includes("//")?ce(t.replace("//","#")):t}function Ve(t){const e=/^(?:const|let|var)\s(.*?)$/;return e.test(t)?t.match(e)[1]:t}function N(t){if(t=t.replaceAll("real(","float("),/bool\s*\((.*?)\)/.test(t)){const e=/bool\s*\((.*?)\)/.exec(t),r=e[1].replace(/'|"/g,"").trim();if(["True","true"].includes(r))return N(t.replaceAll(e[0],"True"));if(["False","false"].includes(r))return N(t.replaceAll(e[0],"False"))}return t}function G(t){if(/\)\.length/.test(t)){let s=0,n=t.indexOf(").length"),i=t.blockify(/\(/,/\)/);for(let l=0;l<i.length;l++)if(i[l][1]==n){s=i[l][0];break}let o=null;for(let l=s-1;l>=0&&/\w/.test(t[l]);l--)o=l;if(o!=null){const l=[o,n+7],c=/(.*?)\((.*?)\)\.length/.exec(t.slice(l[0],l[1]+1)),u=`len(${c[1]}(${c[2]}))`;return G(t.replaceBetween(...l,u))}else{const l=[s,n+7],u=`len(${/\((.*?)\)\.length/.exec(t.slice(l[0],l[1]+1))[1]})`;return G(t.replaceBetween(...l,u))}}else if(/\.length/.test(t)){const s=/([\w'"]+)\.length/.exec(t),n=[s.index,s.index-1+s[0].length],i=`len(${s[1]})`;return G(t.replaceBetween(...n,i))}else if(/\.substring\((.*?),(.*?)\)/.test(t)){const s=/\.substring\((.*?),(.*?)\)/.exec(t),n=[s.index,s.index-1+s[0].length],i=`[${s[1]},${s[2]}]`;return G(t.replaceBetween(...n,i))}else if(/\.left/.test(t)){const s=/\.left\((.*?)\)/.exec(t),n=[s.index,s.index-1+s[0].length],i=`[:${s[1]}]`;return G(t.replaceBetween(...n,i))}else if(/\.right/.test(t)){const s=/\.right\((.*?)\)/.exec(t),n=[s.index,s.index-1+s[0].length],i=`[-${s[1]}:]`;return G(t.replaceBetween(...n,i))}const e=[".upper",".lower","ASC","CHR"],r=[".upper()",".lower()","ord","chr"];for(let s=0;s<e.length;s++)t=t.replaceAll(e[s],r[s]);return t}function Re(t){if(/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.test(t)){const e=/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.exec(t),r=`${e[1]} = [[0 for i in range(${e[2]})] for j in range(${e[3]})]`;return t.replace(e[0],r)}else if(/^array\s*(\w+)\[(.*?)\](?!=)/.test(t)){const e=/^array\s*(\w+)\[(.*?)\](?!=)/.exec(t),r=`${e[1]} = [0 for i in range(${e[2]})]`;return t.replace(e[0],r)}else if(/(\w+)\[(.*?),(.*?)\]/.test(t)){const e=/(\w+)\[(.*?),(.*?)\]/.exec(t),r=`${e[1]}[${e[2].trim()}][${e[3].trim()}]`;return t.replace(e[0],r)}return t}function ue(t){if(/random\((.*?),(.*?)\)/.test(t)){fe=!0;const e=t.match(/random\((.*?),(.*?)\)/),r=`randint(${e[1].trim()}, ${e[2].trim()})`;return ue(t.replace(e[0],r))}return t}function Se(t){return t.includes("console.writeline")?t.replaceAll("console.writeline","print"):t.includes("console.log")?t.replaceAll("console.log","print"):/^print\s*\((.*?)\)$/.test(t)?`print(${/^print\s*\((.*?)\)$/.exec(t)[1]})`:t}function M(t,e,r){return!t&&e==r}function Ae(t,e){for(let i=e;i<a.length;i++){let[o,l,c]=[...a[i]];if(M(o,l,t)&&c.includes("next")){a[i]=[!0,t,"REMOVED"];break}}const r=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s*:?$/,s=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?)\s*:?$/;let n=a[e][2];if(s.test(n)){let[i,o,l,c]=s.exec(n).slice(-4);n=`for ${i} in range(${o}, ${l}, ${c}):`}else if(r.test(n)){let[i,o,l]=r.exec(n).slice(-3);n=`for ${i} in range(${o}, ${l}):`}a[e]=[!0,t,n]}function Ee(t,e){for(let n=e;n<a.length;n++){let[i,o,l]=[...a[n]];if(M(i,o,t)&&l=="endwhile"){a[n]=[!0,t,"REMOVED"];break}}let s=a[e][2].match(/^while(.*?):?$/)[1].trim();a[e]=[!0,t,`while ${s}:`]}function Ge(t,e){for(let r=e;r<a.length;r++){let[s,n,i]=[...a[r]];if(M(s,n,t)&&/^until(.*?)$/.test(i)){a[r]=[!0,t,"REMOVED"],a[e]=[!0,t,"while True:"];let o=i.match(/^until(.*?)$/)[1].trim();a.splice(r,0,[!0,t+4,"break"]),a.splice(r,0,[!0,t+2,`if ${o}:`]),a.splice(r,0,[!0,t+2,""]);break}}}function Me(t,e){for(let n=e;n<a.length;n++){let[i,o,l]=[...a[n]];if(M(i,o,t)&&l.match(/^elseif(.*?)then$/)){let c=l.match(/^elseif(.*?)then$/)[1].trim();a[n]=[!0,t,`elif ${c}:`]}else if(M(i,o,t)&&(l=="else"||l=="else:"))a[n]=[!0,t,"else:"];else if(M(i,o,t)&&l==="endif"){a[n]=[!0,t,"REMOVED"];break}}let r=a[e][2];const s=/^if\s+(.*?)\s*(?:then)?:?$/;s.test(r)&&(r=`if ${s.exec(r)[1]}:`,a[e]=[!0,t,r])}function Ce(t,e){for(let s=e;s<a.length;s++){let[n,i,o]=[...a[s]];if(M(n,i,t)&&/^end(procedure|function)$/.test(o)){a[s]=[!0,t,"REMOVED"];break}}let r=/^(?:procedure|function)\s(.*?)\s*:?$/.exec(a[e][2]);a[e][0]=!0,a[e][2]=`def ${r[1]}:`}function Te(t){a=t;for(let e=0;e<a.length;e++){const[r,s,n]=[...a[e]];!r&&n!=""&&n!="REMOVED"&&(a[e][2]=ce(a[e][2]),a[e][2]=E(a[e][2]),a[e][2]=Ve(a[e][2]),a[e][2]=N(a[e][2]),a[e][2]=G(a[e][2]),a[e][2]=Re(a[e][2]),a[e][2]=ue(a[e][2]),a[e][2]=Se(a[e][2]),/^for(.*?)$/.test(a[e][2])?Ae(s,e):/^while(.*?)$/.test(a[e][2])?Ee(s,e):/^do(.*?)$/.test(a[e][2])?Ge(s,e):/^if(.*?)$/.test(a[e][2])?Me(s,e):/^(?:procedure|function)(.*?)$/.test(n)&&Ce(s,e))}return fe&&(a.unshift([!0,0,""]),a.unshift([!0,0,"from random import randint"])),a}let a=[],fe=!1;String.prototype.isIdentifier=function(){return/^[a-zA-Z_]\w*$/.test(this)};String.prototype.isStringInteger=function(){return Number.isInteger(Number(this))};function Be(t,e,r){const s=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s*:?$/,n=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?)\s*:?$/;if(n.test(r)){let[i,o,l,c]=n.exec(r).slice(-4);return i.isIdentifier()?!o.isIdentifier()&&!o.isStringInteger()?(V=`Error on line ${e}
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
		next i`,!1}function Qe(t){Q=t;for(let e=0;e<Q.length;e++){const[r,s,n]=[...Q[e]];if(/^for(.*?)$/.test(Q[e][2])&&!Be(s,e,n))return V}return V}let Q=[],V="";function He(t){let e,r,s,n,i,o,l,c,u,g,_,p;return r=new ye({}),r.$on("vPPP",t[0]),r.$on("vPG",t[1]),r.$on("cPTP",t[2]),i=new we({}),_=new Oe({}),{c(){e=k(),K(r.$$.fragment),s=k(),n=y("main"),K(i.$$.fragment),o=k(),l=y("div"),c=k(),u=y("div"),g=k(),K(_.$$.fragment),this.h()},l(f){me("svelte-2mdzcm",document.head).forEach($),e=O(f),W(r.$$.fragment,f),s=O(f),n=P(f,"MAIN",{class:!0});var d=x(n);W(i.$$.fragment,d),o=O(d),l=P(d,"DIV",{id:!0}),x(l).forEach($),c=O(d),u=P(d,"DIV",{id:!0}),x(u).forEach($),g=O(d),W(_.$$.fragment,d),d.forEach($),this.h()},h(){document.title="Pseudocode to Python Transpiler",h(l,"id","pseudoEditor"),h(u,"id","pythonEditor"),h(n,"class","svelte-15oobuy")},m(f,w){R(f,e,w),L(r,f,w),R(f,s,w),R(f,n,w),L(i,n,null),m(n,o),m(n,l),m(n,c),m(n,u),m(n,g),L(_,n,null),p=!0},p:S,i(f){p||(Z(r.$$.fragment,f),Z(i.$$.fragment,f),Z(_.$$.fragment,f),p=!0)},o(f){I(r.$$.fragment,f),I(i.$$.fragment,f),I(_.$$.fragment,f),p=!1},d(f){f&&$(e),D(r,f),f&&$(s),f&&$(n),D(i),D(_)}}}function ze(t,e,r){let s;j(t,ge,u=>r(5,s=u));let n,i;$e(async()=>{const u=await Y(()=>import("../../../chunks/ace-c3b2f90e.js").then(g=>g.a),[],import.meta.url);await Y(()=>import("../../../chunks/theme-dracula-56e33506.js").then(g=>g.t),[],import.meta.url),await Y(()=>import("../../../chunks/mode-python-33043df3.js").then(g=>g.m),[],import.meta.url),n=u.edit("pseudoEditor"),i=u.edit("pythonEditor"),n.setTheme("ace/theme/dracula"),i.setTheme("ace/theme/dracula"),n.setFontSize(16),i.setFontSize(16),n.resize(),i.resize()});function o(){n.setValue(s,1)}function l(){F.update(u=>u=!u)}function c(){const u=n.getValue().split(`
`).map(_=>[!1,_.search(/\S|$/),_.trim()]),g=Qe(u);if(g==""){i.session.setMode("ace/mode/python");const _=Te(u).filter(p=>p[2]!="REMOVED").map(p=>" ".repeat(p[1])+p[2]).join(`
`);i.setValue(_,1)}else i.session.setMode("ace/mode/text"),i.setValue(g,1)}return[o,l,c]}class Ye extends z{constructor(e){super(),J(this,e,ze,He,U,{})}}export{Ye as default};
