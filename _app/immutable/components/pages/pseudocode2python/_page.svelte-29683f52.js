var Ve=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var X=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)};var N=(t,e,s)=>(Ve(t,e,"access private method"),s);import{_ as ee}from"../../../chunks/preload-helper-41c905a7.js";import{S as ne,i as ie,s as oe,k as v,q as Q,a as k,l as y,m as w,r as J,h as m,c as O,n as d,b as H,G as u,L as te,u as ye,B as q,T as Re,H as L,U as Se,e as ce,M as Ae,I as Y,w as ue,x as de,y as fe,f as pe,t as he,z as me,o as Ce}from"../../../chunks/index-28fc0cfa.js";import{w as Pe}from"../../../chunks/index-510c38f7.js";import{p as ge}from"../../../chunks/python-bb061e14.js";const Z=Pe(!1),Ee=Pe(`// 2020 Sample assessment materials J277/02

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
endif`);function Ge(t){let e,s,r,n,i,o,l,c,P=(t[0]==!1?"Show":"Hide")+" Pseudocode Guide (J277)",p,h,g,C,M,b,S,E,j;return{c(){e=v("nav"),s=v("span"),r=Q("Online OCR Pseudocode to Python Transpiler"),n=k(),i=v("button"),o=Q("View Past Paper Pseudocode"),l=k(),c=v("button"),p=Q(P),h=k(),g=v("button"),C=Q("Convert Pseudocode to Python"),M=k(),b=v("button"),S=Q("Execute Python Code"),this.h()},l(x){e=y(x,"NAV",{class:!0});var _=w(e);s=y(_,"SPAN",{class:!0});var G=w(s);r=J(G,"Online OCR Pseudocode to Python Transpiler"),G.forEach(m),n=O(_),i=y(_,"BUTTON",{id:!0,class:!0});var z=w(i);o=J(z,"View Past Paper Pseudocode"),z.forEach(m),l=O(_),c=y(_,"BUTTON",{id:!0,class:!0});var V=w(c);p=J(V,P),V.forEach(m),h=O(_),g=y(_,"BUTTON",{id:!0,class:!0});var A=w(g);C=J(A,"Convert Pseudocode to Python"),A.forEach(m),M=O(_),b=y(_,"BUTTON",{id:!0,class:!0});var f=w(b);S=J(f,"Execute Python Code"),f.forEach(m),_.forEach(m),this.h()},h(){d(s,"class","svelte-13xpehd"),d(i,"id","viewPastPaperPseudocode"),d(i,"class","svelte-13xpehd"),d(c,"id","viewPseudocodeGuide"),d(c,"class","svelte-13xpehd"),d(g,"id","convertPseudocodeToPython"),d(g,"class","svelte-13xpehd"),d(b,"id","executePythonCode"),b.disabled=!0,d(b,"class","svelte-13xpehd"),d(e,"class","svelte-13xpehd")},m(x,_){H(x,e,_),u(e,s),u(s,r),u(e,n),u(e,i),u(i,o),u(e,l),u(e,c),u(c,p),u(e,h),u(e,g),u(g,C),u(e,M),u(e,b),u(b,S),E||(j=[te(i,"click",t[2]),te(c,"click",t[3]),te(g,"click",t[4])],E=!0)},p(x,[_]){_&1&&P!==(P=(x[0]==!1?"Show":"Hide")+" Pseudocode Guide (J277)")&&ye(p,P)},i:q,o:q,d(x){x&&m(e),E=!1,Re(j)}}}function Me(t,e,s){let r;L(t,Z,c=>s(0,r=c));const n=Se();return[r,n,()=>n("vPPP"),()=>n("vPG"),()=>n("cPTP")]}class Be extends ne{constructor(e){super(),ie(this,e,Me,Ge,oe,{})}}function _e(t,e,s){const r=t.slice();return r[1]=e[s],r}function $e(t){let e,s=[...Array(7).keys()],r=[];for(let n=0;n<s.length;n+=1)r[n]=ve(_e(t,s,n));return{c(){e=v("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=y(n,"DIV",{id:!0,class:!0});var i=w(e);for(let o=0;o<r.length;o+=1)r[o].l(i);i.forEach(m),this.h()},h(){d(e,"id","J277Editor"),d(e,"class","svelte-153712z")},m(n,i){H(n,e,i);for(let o=0;o<r.length;o+=1)r[o].m(e,null)},p(n,i){if(i&0){s=[...Array(7).keys()];let o;for(o=0;o<s.length;o+=1){const l=_e(n,s,o);r[o]?r[o].p(l,i):(r[o]=ve(l),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=s.length}},d(n){n&&m(e),Ae(r,n)}}}function ve(t){let e,s;return{c(){e=v("img"),this.h()},l(r){e=y(r,"IMG",{alt:!0,src:!0}),this.h()},h(){d(e,"alt",""),Y(e.src,s="Pseudocode-Guide-J277/0"+t[1]+".jpg")||d(e,"src",s)},m(r,n){H(r,e,n)},p:q,d(r){r&&m(e)}}}function Te(t){let e,s=t[0]&&$e(t);return{c(){s&&s.c(),e=ce()},l(r){s&&s.l(r),e=ce()},m(r,n){s&&s.m(r,n),H(r,e,n)},p(r,[n]){r[0]?s?s.p(r,n):(s=$e(r),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},i:q,o:q,d(r){s&&s.d(r),r&&m(e)}}}function Qe(t,e,s){let r;return L(t,Z,n=>s(0,r=n)),[r]}class Je extends ne{constructor(e){super(),ie(this,e,Qe,Te,oe,{})}}const re=""+new URL("../../../assets/ocr-logo-3617e3b0.svg",import.meta.url).href;String.prototype.replaceBetween=function(t,e,s){const r=this.slice(0,t),n=this.slice(e+1,this.length);return`${r}${s}${n}`};String.prototype.blockify=function(t,e){let s=[],r=[];for(let n=0;n<this.length;n++)t.test(this[n])?s.push(n):e.test(this[n]);for(let n=0;n<s.length;n++){let i=0;for(let o=s[n]+1;o<this.length;o++)if(t.test(this[o]))i+=1;else if(e.test(this[o])&&i!=0)i-=1;else if(e.test(this[o])&&i==0){let l=s[n],c=o;r.push([l,c,this.slice(l+1,c)]);break}}return r};function B(t){return t.includes("AND")?B(t.replace("AND","and")):t.includes("OR")?B(t.replace("OR","or")):t.includes("NOT")?B(t.replace("NOT","not")):t.includes("^")?B(t.replace("^","**")):t.includes("MOD")?B(t.replace("MOD","%")):t.includes("DIV")?B(t.replace("DIV","//")):t}function be(t){return t.includes("//")?be(t.replace("//","#")):t}function Ue(t){const e=/^(?:const|let|var)\s(.*?)$/;return e.test(t)?t.match(e)[1]:t}function se(t){if(t=t.replaceAll("real(","float("),/bool\s*\((.*?)\)/.test(t)){const e=/bool\s*\((.*?)\)/.exec(t),s=e[1].replace(/'|"/g,"").trim();if(["True","true"].includes(s))return se(t.replaceAll(e[0],"True"));if(["False","false"].includes(s))return se(t.replaceAll(e[0],"False"))}return t}function T(t){if(/\)\.length/.test(t)){let r=0,n=t.indexOf(").length"),i=t.blockify(/\(/,/\)/);for(let l=0;l<i.length;l++)if(i[l][1]==n){r=i[l][0];break}let o=null;for(let l=r-1;l>=0&&/\w/.test(t[l]);l--)o=l;if(o!=null){const l=[o,n+7],c=/(.*?)\((.*?)\)\.length/.exec(t.slice(l[0],l[1]+1)),P=`len(${c[1]}(${c[2]}))`;return T(t.replaceBetween(...l,P))}else{const l=[r,n+7],P=`len(${/\((.*?)\)\.length/.exec(t.slice(l[0],l[1]+1))[1]})`;return T(t.replaceBetween(...l,P))}}else if(/\.length/.test(t)){const r=/([\w'"]+)\.length/.exec(t),n=[r.index,r.index-1+r[0].length],i=`len(${r[1]})`;return T(t.replaceBetween(...n,i))}else if(/\.substring\((.*?),(.*?)\)/.test(t)){const r=/\.substring\((.*?),(.*?)\)/.exec(t),n=[r.index,r.index-1+r[0].length],i=`[${r[1]},${r[2]}]`;return T(t.replaceBetween(...n,i))}else if(/\.left/.test(t)){const r=/\.left\((.*?)\)/.exec(t),n=[r.index,r.index-1+r[0].length],i=`[:${r[1]}]`;return T(t.replaceBetween(...n,i))}else if(/\.right/.test(t)){const r=/\.right\((.*?)\)/.exec(t),n=[r.index,r.index-1+r[0].length],i=`[-${r[1]}:]`;return T(t.replaceBetween(...n,i))}const e=[".upper",".lower","ASC","CHR"],s=[".upper()",".lower()","ord","chr"];for(let r=0;r<e.length;r++)t=t.replaceAll(e[r],s[r]);return t}function je(t){if(/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.test(t)){const e=/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.exec(t),s=`${e[1]} = [[0 for i in range(${e[2]})] for j in range(${e[3]})]`;return t.replace(e[0],s)}else if(/^array\s*(\w+)\[(.*?)\](?!=)/.test(t)){const e=/^array\s*(\w+)\[(.*?)\](?!=)/.exec(t),s=`${e[1]} = [0 for i in range(${e[2]})]`;return t.replace(e[0],s)}else if(/(\w+)\[(.*?),(.*?)\]/.test(t)){const e=/(\w+)\[(.*?),(.*?)\]/.exec(t),s=`${e[1]}[${e[2].trim()}][${e[3].trim()}]`;return t.replace(e[0],s)}return t}function we(t){if(/random\((.*?),(.*?)\)/.test(t)){xe=!0;const e=t.match(/random\((.*?),(.*?)\)/),s=`randint(${e[1].trim()}, ${e[2].trim()})`;return we(t.replace(e[0],s))}return t}function ze(t){return t.includes("console.writeline")?t.replaceAll("console.writeline","print"):t.includes("console.log")?t.replaceAll("console.log","print"):/^print\s*\((.*?)\)$/.test(t)?`print(${/^print\s*\((.*?)\)$/.exec(t)[1]})`:t}function U(t,e,s){return!t&&e==s}function He(t,e){for(let i=e;i<a.length;i++){let[o,l,c]=[...a[i]];if(U(o,l,t)&&c.includes("next")){a[i]=[!0,t,"REMOVED"];break}}const s=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s*:?$/,r=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?)\s*:?$/;let n=a[e][2];if(r.test(n)){let[i,o,l,c]=r.exec(n).slice(-4);n=`for ${i} in range(${o}, ${l}, ${c}):`}else if(s.test(n)){let[i,o,l]=s.exec(n).slice(-3);n=`for ${i} in range(${o}, ${l}):`}a[e]=[!0,t,n]}function qe(t,e){for(let n=e;n<a.length;n++){let[i,o,l]=[...a[n]];if(U(i,o,t)&&l=="endwhile"){a[n]=[!0,t,"REMOVED"];break}}let r=a[e][2].match(/^while(.*?):?$/)[1].trim();a[e]=[!0,t,`while ${r}:`]}function Fe(t,e){for(let s=e;s<a.length;s++){let[r,n,i]=[...a[s]];if(U(r,n,t)&&/^until(.*?)$/.test(i)){a[s]=[!0,t,"REMOVED"],a[e]=[!0,t,"while True:"];let o=i.match(/^until(.*?)$/)[1].trim();a.splice(s,0,[!0,t+4,"break"]),a.splice(s,0,[!0,t+2,`if ${o}:`]),a.splice(s,0,[!0,t+2,""]);break}}}function Ke(t,e){for(let n=e;n<a.length;n++){let[i,o,l]=[...a[n]];if(U(i,o,t)&&l.match(/^elseif(.*?)then$/)){let c=l.match(/^elseif(.*?)then$/)[1].trim();a[n]=[!0,t,`elif ${c}:`]}else if(U(i,o,t)&&(l=="else"||l=="else:"))a[n]=[!0,t,"else:"];else if(U(i,o,t)&&l==="endif"){a[n]=[!0,t,"REMOVED"];break}}let s=a[e][2];const r=/^if\s+(.*?)\s*(?:then)?:?$/;r.test(s)&&(s=`if ${r.exec(s)[1]}:`,a[e]=[!0,t,s])}function We(t,e){for(let r=e;r<a.length;r++){let[n,i,o]=[...a[r]];if(U(n,i,t)&&/^end(procedure|function)$/.test(o)){a[r]=[!0,t,"REMOVED"];break}}let s=/^(?:procedure|function)\s(.*?)\s*:?$/.exec(a[e][2]);a[e][0]=!0,a[e][2]=`def ${s[1]}:`}function Ye(t){a=t;for(let e=0;e<a.length;e++){const[s,r,n]=[...a[e]];!s&&n!=""&&n!="REMOVED"&&(a[e][2]=be(a[e][2]),a[e][2]=B(a[e][2]),a[e][2]=Ue(a[e][2]),a[e][2]=se(a[e][2]),a[e][2]=T(a[e][2]),a[e][2]=je(a[e][2]),a[e][2]=we(a[e][2]),a[e][2]=ze(a[e][2]),/^for(.*?)$/.test(a[e][2])?He(r,e):/^while(.*?)$/.test(a[e][2])?qe(r,e):/^do(.*?)$/.test(a[e][2])?Fe(r,e):/^if(.*?)$/.test(a[e][2])?Ke(r,e):/^(?:procedure|function)(.*?)$/.test(n)&&We(r,e))}return xe&&(a.unshift([!0,0,""]),a.unshift([!0,0,"from random import randint"])),a}let a=[],xe=!1;String.prototype.isIdentifier=function(){return/^[a-zA-Z_]\w*$/.test(this)};String.prototype.isStringInteger=function(){return Number.isInteger(Number(this))};function Le(t,e,s){const r=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s*:?$/,n=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?)\s*:?$/;if(n.test(s)){let[i,o,l,c]=n.exec(s).slice(-4);return i.isIdentifier()?!o.isIdentifier()&&!o.isStringInteger()?(R=`Error on line ${e}
    ${o} isn't a valid identifier/number`,!1):!l.isIdentifier()&&!l.isStringInteger()?(R=`Error on line ${e}
    ${l} isn't a valid identifier/number`,!1):!c.isIdentifier()&&!c.isStringInteger()?(R=`Error on line ${e}
    ${c} isn't a valid identifier/number`,!1):!0:(R=`Error on line ${e}
    ${i} isn't a valid identifier`,!1)}else if(r.test(s)){let[i,o,l]=r.exec(s).slice(-3);return i.isIdentifier()?!o.isIdentifier()&&!Number.isInteger(Number(o))?(R=`Error on line ${e}
    ${o} isn't a valid identifier/number`,!1):!l.isIdentifier()&&!Number.isInteger(Number(l))?(R=`Error on line ${e}
    ${l} isn't a valid identifier/number`,!1):!0:(R=`Error on line ${e}
    ${i} isn't a valid identifier`,!1)}else return R=`Error on line ${e}
    ${s}

		Please declare for loops as specified by the OCR guide:
		for i=0 to 9
		...
		next i`,!1}function Ze(t){W=t;for(let e=0;e<W.length;e++){const[s,r,n]=[...W[e]];if(/^for(.*?)$/.test(W[e][2])&&!Le(r,e,n))return R}return R}let W=[],R="";var I,ke,D,Oe;class Ie{constructor(e){X(this,I);X(this,D);this.source,this.error="",N(this,I,ke).call(this,e),N(this,D,Oe).call(this)}transpile(){return Ye(this.source).filter(e=>e[2]!="REMOVED").map(e=>" ".repeat(e[1])+e[2]).join(`
`)}}I=new WeakSet,ke=function(e){this.source=e.split(`
`).map(s=>[!1,s.search(/\S|$/),s.trim()])},D=new WeakSet,Oe=function(){this.error=Ze(this.source)};function De(t){let e,s,r,n,i,o,l,c,P,p,h,g,C,M,b,S=t[0]?"Pseudocode Guide":"Python",E,j,x,_,G,z,V,A;return e=new Be({}),e.$on("vPPP",t[1]),e.$on("vPG",t[2]),e.$on("cPTP",t[3]),V=new Je({}),{c(){ue(e.$$.fragment),s=k(),r=v("main"),n=v("div"),i=v("img"),l=k(),c=v("span"),P=Q("Pseudocode"),p=k(),h=v("div"),g=v("img"),M=k(),b=v("span"),E=Q(S),j=k(),x=v("div"),_=k(),G=v("div"),z=k(),ue(V.$$.fragment),this.h()},l(f){de(e.$$.fragment,f),s=O(f),r=y(f,"MAIN",{class:!0});var $=w(r);n=y($,"DIV",{class:!0});var F=w(n);i=y(F,"IMG",{alt:!0,class:!0,src:!0}),l=O(F),c=y(F,"SPAN",{class:!0});var le=w(c);P=J(le,"Pseudocode"),le.forEach(m),F.forEach(m),p=O($),h=y($,"DIV",{class:!0});var K=w(h);g=y(K,"IMG",{alt:!0,class:!0,src:!0}),M=O(K),b=y(K,"SPAN",{class:!0});var ae=w(b);E=J(ae,S),ae.forEach(m),K.forEach(m),j=O($),x=y($,"DIV",{id:!0}),w(x).forEach(m),_=O($),G=y($,"DIV",{id:!0}),w(G).forEach(m),z=O($),de(V.$$.fragment,$),$.forEach(m),this.h()},h(){d(i,"alt",""),d(i,"class","logo svelte-18k5w2"),Y(i.src,o=re)||d(i,"src",o),d(c,"class","text svelte-18k5w2"),d(n,"class","heading-wrapper svelte-18k5w2"),d(g,"alt",""),d(g,"class","logo svelte-18k5w2"),Y(g.src,C=t[0]?re:ge)||d(g,"src",C),d(b,"class","text svelte-18k5w2"),d(h,"class","heading-wrapper svelte-18k5w2"),d(x,"id","pseudoEditor"),d(G,"id","pythonEditor"),d(r,"class","svelte-18k5w2")},m(f,$){fe(e,f,$),H(f,s,$),H(f,r,$),u(r,n),u(n,i),u(n,l),u(n,c),u(c,P),u(r,p),u(r,h),u(h,g),u(h,M),u(h,b),u(b,E),u(r,j),u(r,x),u(r,_),u(r,G),u(r,z),fe(V,r,null),A=!0},p(f,[$]){(!A||$&1&&!Y(g.src,C=f[0]?re:ge))&&d(g,"src",C),(!A||$&1)&&S!==(S=f[0]?"Pseudocode Guide":"Python")&&ye(E,S)},i(f){A||(pe(e.$$.fragment,f),pe(V.$$.fragment,f),A=!0)},o(f){he(e.$$.fragment,f),he(V.$$.fragment,f),A=!1},d(f){me(e,f),f&&m(s),f&&m(r),me(V)}}}function Xe(t,e,s){let r,n;L(t,Ee,p=>s(6,r=p)),L(t,Z,p=>s(0,n=p));let i,o;Ce(async()=>{const p=await ee(()=>import("../../../chunks/ace-0d18d595.js").then(h=>h.a),[],import.meta.url);await ee(()=>import("../../../chunks/theme-dracula-56e33506.js").then(h=>h.t),[],import.meta.url),await ee(()=>import("../../../chunks/mode-python-33043df3.js").then(h=>h.m),[],import.meta.url),i=p.edit("pseudoEditor"),o=p.edit("pythonEditor"),[i,o].forEach(h=>{h.setTheme("ace/theme/dracula"),h.setFontSize(16),h.resize()})});function l(){i.setValue(r,1)}function c(){Z.update(p=>p=!p)}function P(){const p=new Ie(i.getValue());p.error===""?(o.session.setMode("ace/mode/python"),o.setValue(p.transpile(),1)):(o.session.setMode("ace/mode/text"),o.setValue(p.message,1))}return[n,l,c,P]}class nt extends ne{constructor(e){super(),ie(this,e,Xe,De,oe,{})}}export{nt as default};
