var _e=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var W=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)};var Y=(t,e,r)=>(_e(t,e,"access private method"),r);import{_ as L}from"../../../chunks/preload-helper-41c905a7.js";import{S as z,i as U,s as q,k as v,q as E,a as k,l as y,m as x,r as B,h as m,c as V,n as p,b as R,G as h,L as Z,u as fe,B as S,T as ve,H as F,U as ye,I as H,e as oe,M as Pe,w as I,J as be,x as D,y as X,f as N,t as ee,z as te,o as we}from"../../../chunks/index-28fc0cfa.js";import{w as de}from"../../../chunks/index-510c38f7.js";import{p as le}from"../../../chunks/python-bb061e14.js";const K=de(!1),xe=de(`// 2020 Sample assessment materials J277/02

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
endif`);function ke(t){let e,r,s,n,i,o,l,c,u=(t[0]==!1?"Show":"Hide")+" Pseudocode Guide (J277)",g,P,$,f,w,d;return{c(){e=v("nav"),r=v("span"),s=E("Online OCR Pseudocode to Python Transpiler"),n=k(),i=v("button"),o=E("View Past Paper Pseudocode"),l=k(),c=v("button"),g=E(u),P=k(),$=v("button"),f=E("Convert Pseudocode to Python"),this.h()},l(_){e=y(_,"NAV",{class:!0});var b=x(e);r=y(b,"SPAN",{class:!0});var A=x(r);s=B(A,"Online OCR Pseudocode to Python Transpiler"),A.forEach(m),n=V(b),i=y(b,"BUTTON",{id:!0,class:!0});var Q=x(i);o=B(Q,"View Past Paper Pseudocode"),Q.forEach(m),l=V(b),c=y(b,"BUTTON",{id:!0,class:!0});var ne=x(c);g=B(ne,u),ne.forEach(m),P=V(b),$=y(b,"BUTTON",{id:!0,class:!0});var ie=x($);f=B(ie,"Convert Pseudocode to Python"),ie.forEach(m),b.forEach(m),this.h()},h(){p(r,"class","svelte-4u8824"),p(i,"id","viewPastPaperPseudocode"),p(i,"class","svelte-4u8824"),p(c,"id","viewPseudocodeGuide"),p(c,"class","svelte-4u8824"),p($,"id","convertPseudocodeToPython"),p($,"class","svelte-4u8824"),p(e,"class","svelte-4u8824")},m(_,b){R(_,e,b),h(e,r),h(r,s),h(e,n),h(e,i),h(i,o),h(e,l),h(e,c),h(c,g),h(e,P),h(e,$),h($,f),w||(d=[Z(i,"click",t[2]),Z(c,"click",t[3]),Z($,"click",t[4])],w=!0)},p(_,[b]){b&1&&u!==(u=(_[0]==!1?"Show":"Hide")+" Pseudocode Guide (J277)")&&fe(g,u)},i:S,o:S,d(_){_&&m(e),w=!1,ve(d)}}}function Ve(t,e,r){let s;F(t,K,c=>r(0,s=c));const n=ye();return[s,n,()=>n("vPPP"),()=>n("vPG"),()=>n("cPTP")]}class Oe extends z{constructor(e){super(),U(this,e,Ve,ke,q,{})}}const se=""+new URL("../../../assets/ocr-logo-3617e3b0.svg",import.meta.url).href;function Re(t){let e,r,s,n,i,o,l,c,u,g,P,$,f=t[0]?"Pseudocode Guide":"Python",w;return{c(){e=v("div"),r=v("img"),n=k(),i=v("span"),o=E("Pseudocode"),l=k(),c=v("div"),u=v("img"),P=k(),$=v("span"),w=E(f),this.h()},l(d){e=y(d,"DIV",{class:!0});var _=x(e);r=y(_,"IMG",{alt:!0,src:!0,class:!0}),n=V(_),i=y(_,"SPAN",{class:!0});var b=x(i);o=B(b,"Pseudocode"),b.forEach(m),_.forEach(m),l=V(d),c=y(d,"DIV",{class:!0});var A=x(c);u=y(A,"IMG",{alt:!0,src:!0,class:!0}),P=V(A),$=y(A,"SPAN",{class:!0});var Q=x($);w=B(Q,f),Q.forEach(m),A.forEach(m),this.h()},h(){p(r,"alt",""),H(r.src,s=se)||p(r,"src",s),p(r,"class","svelte-1vo54wp"),p(i,"class","svelte-1vo54wp"),p(e,"class","svelte-1vo54wp"),p(u,"alt",""),H(u.src,g=t[0]?se:le)||p(u,"src",g),p(u,"class","svelte-1vo54wp"),p($,"class","svelte-1vo54wp"),p(c,"class","svelte-1vo54wp")},m(d,_){R(d,e,_),h(e,r),h(e,n),h(e,i),h(i,o),R(d,l,_),R(d,c,_),h(c,u),h(c,P),h(c,$),h($,w)},p(d,[_]){_&1&&!H(u.src,g=d[0]?se:le)&&p(u,"src",g),_&1&&f!==(f=d[0]?"Pseudocode Guide":"Python")&&fe(w,f)},i:S,o:S,d(d){d&&m(e),d&&m(l),d&&m(c)}}}function Se(t,e,r){let s;return F(t,K,n=>r(0,s=n)),[s]}class Ae extends z{constructor(e){super(),U(this,e,Se,Re,q,{})}}function ae(t,e,r){const s=t.slice();return s[1]=e[r],s}function ce(t){let e,r=[...Array(7).keys()],s=[];for(let n=0;n<r.length;n+=1)s[n]=ue(ae(t,r,n));return{c(){e=v("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=y(n,"DIV",{class:!0});var i=x(e);for(let o=0;o<s.length;o+=1)s[o].l(i);i.forEach(m),this.h()},h(){p(e,"class","svelte-ia0vks")},m(n,i){R(n,e,i);for(let o=0;o<s.length;o+=1)s[o].m(e,null)},p(n,i){if(i&0){r=[...Array(7).keys()];let o;for(o=0;o<r.length;o+=1){const l=ae(n,r,o);s[o]?s[o].p(l,i):(s[o]=ue(l),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=r.length}},d(n){n&&m(e),Pe(s,n)}}}function ue(t){let e,r;return{c(){e=v("img"),this.h()},l(s){e=y(s,"IMG",{alt:!0,src:!0}),this.h()},h(){p(e,"alt",""),H(e.src,r="Pseudocode-Guide-J277/0"+t[1]+".jpg")||p(e,"src",r)},m(s,n){R(s,e,n)},p:S,d(s){s&&m(e)}}}function Ge(t){let e,r=t[0]&&ce(t);return{c(){r&&r.c(),e=oe()},l(s){r&&r.l(s),e=oe()},m(s,n){r&&r.m(s,n),R(s,e,n)},p(s,[n]){s[0]?r?r.p(s,n):(r=ce(s),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:S,o:S,d(s){r&&r.d(s),s&&m(e)}}}function Me(t,e,r){let s;return F(t,K,n=>r(0,s=n)),[s]}class Ce extends z{constructor(e){super(),U(this,e,Me,Ge,q,{})}}String.prototype.replaceBetween=function(t,e,r){const s=this.slice(0,t),n=this.slice(e+1,this.length);return`${s}${r}${n}`};String.prototype.blockify=function(t,e){let r=[],s=[];for(let n=0;n<this.length;n++)t.test(this[n])?r.push(n):e.test(this[n]);for(let n=0;n<r.length;n++){let i=0;for(let o=r[n]+1;o<this.length;o++)if(t.test(this[o]))i+=1;else if(e.test(this[o])&&i!=0)i-=1;else if(e.test(this[o])&&i==0){let l=r[n],c=o;s.push([l,c,this.slice(l+1,c)]);break}}return s};function G(t){return t.includes("AND")?G(t.replace("AND","and")):t.includes("OR")?G(t.replace("OR","or")):t.includes("NOT")?G(t.replace("NOT","not")):t.includes("^")?G(t.replace("^","**")):t.includes("MOD")?G(t.replace("MOD","%")):t.includes("DIV")?G(t.replace("DIV","//")):t}function pe(t){return t.includes("//")?pe(t.replace("//","#")):t}function Ee(t){const e=/^(?:const|let|var)\s(.*?)$/;return e.test(t)?t.match(e)[1]:t}function re(t){if(t=t.replaceAll("real(","float("),/bool\s*\((.*?)\)/.test(t)){const e=/bool\s*\((.*?)\)/.exec(t),r=e[1].replace(/'|"/g,"").trim();if(["True","true"].includes(r))return re(t.replaceAll(e[0],"True"));if(["False","false"].includes(r))return re(t.replaceAll(e[0],"False"))}return t}function M(t){if(/\)\.length/.test(t)){let s=0,n=t.indexOf(").length"),i=t.blockify(/\(/,/\)/);for(let l=0;l<i.length;l++)if(i[l][1]==n){s=i[l][0];break}let o=null;for(let l=s-1;l>=0&&/\w/.test(t[l]);l--)o=l;if(o!=null){const l=[o,n+7],c=/(.*?)\((.*?)\)\.length/.exec(t.slice(l[0],l[1]+1)),u=`len(${c[1]}(${c[2]}))`;return M(t.replaceBetween(...l,u))}else{const l=[s,n+7],u=`len(${/\((.*?)\)\.length/.exec(t.slice(l[0],l[1]+1))[1]})`;return M(t.replaceBetween(...l,u))}}else if(/\.length/.test(t)){const s=/([\w'"]+)\.length/.exec(t),n=[s.index,s.index-1+s[0].length],i=`len(${s[1]})`;return M(t.replaceBetween(...n,i))}else if(/\.substring\((.*?),(.*?)\)/.test(t)){const s=/\.substring\((.*?),(.*?)\)/.exec(t),n=[s.index,s.index-1+s[0].length],i=`[${s[1]},${s[2]}]`;return M(t.replaceBetween(...n,i))}else if(/\.left/.test(t)){const s=/\.left\((.*?)\)/.exec(t),n=[s.index,s.index-1+s[0].length],i=`[:${s[1]}]`;return M(t.replaceBetween(...n,i))}else if(/\.right/.test(t)){const s=/\.right\((.*?)\)/.exec(t),n=[s.index,s.index-1+s[0].length],i=`[-${s[1]}:]`;return M(t.replaceBetween(...n,i))}const e=[".upper",".lower","ASC","CHR"],r=[".upper()",".lower()","ord","chr"];for(let s=0;s<e.length;s++)t=t.replaceAll(e[s],r[s]);return t}function Be(t){if(/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.test(t)){const e=/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.exec(t),r=`${e[1]} = [[0 for i in range(${e[2]})] for j in range(${e[3]})]`;return t.replace(e[0],r)}else if(/^array\s*(\w+)\[(.*?)\](?!=)/.test(t)){const e=/^array\s*(\w+)\[(.*?)\](?!=)/.exec(t),r=`${e[1]} = [0 for i in range(${e[2]})]`;return t.replace(e[0],r)}else if(/(\w+)\[(.*?),(.*?)\]/.test(t)){const e=/(\w+)\[(.*?),(.*?)\]/.exec(t),r=`${e[1]}[${e[2].trim()}][${e[3].trim()}]`;return t.replace(e[0],r)}return t}function he(t){if(/random\((.*?),(.*?)\)/.test(t)){me=!0;const e=t.match(/random\((.*?),(.*?)\)/),r=`randint(${e[1].trim()}, ${e[2].trim()})`;return he(t.replace(e[0],r))}return t}function Qe(t){return t.includes("console.writeline")?t.replaceAll("console.writeline","print"):t.includes("console.log")?t.replaceAll("console.log","print"):/^print\s*\((.*?)\)$/.test(t)?`print(${/^print\s*\((.*?)\)$/.exec(t)[1]})`:t}function C(t,e,r){return!t&&e==r}function Te(t,e){for(let i=e;i<a.length;i++){let[o,l,c]=[...a[i]];if(C(o,l,t)&&c.includes("next")){a[i]=[!0,t,"REMOVED"];break}}const r=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s*:?$/,s=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?)\s*:?$/;let n=a[e][2];if(s.test(n)){let[i,o,l,c]=s.exec(n).slice(-4);n=`for ${i} in range(${o}, ${l}, ${c}):`}else if(r.test(n)){let[i,o,l]=r.exec(n).slice(-3);n=`for ${i} in range(${o}, ${l}):`}a[e]=[!0,t,n]}function He(t,e){for(let n=e;n<a.length;n++){let[i,o,l]=[...a[n]];if(C(i,o,t)&&l=="endwhile"){a[n]=[!0,t,"REMOVED"];break}}let s=a[e][2].match(/^while(.*?):?$/)[1].trim();a[e]=[!0,t,`while ${s}:`]}function Je(t,e){for(let r=e;r<a.length;r++){let[s,n,i]=[...a[r]];if(C(s,n,t)&&/^until(.*?)$/.test(i)){a[r]=[!0,t,"REMOVED"],a[e]=[!0,t,"while True:"];let o=i.match(/^until(.*?)$/)[1].trim();a.splice(r,0,[!0,t+4,"break"]),a.splice(r,0,[!0,t+2,`if ${o}:`]),a.splice(r,0,[!0,t+2,""]);break}}}function je(t,e){for(let n=e;n<a.length;n++){let[i,o,l]=[...a[n]];if(C(i,o,t)&&l.match(/^elseif(.*?)then$/)){let c=l.match(/^elseif(.*?)then$/)[1].trim();a[n]=[!0,t,`elif ${c}:`]}else if(C(i,o,t)&&(l=="else"||l=="else:"))a[n]=[!0,t,"else:"];else if(C(i,o,t)&&l==="endif"){a[n]=[!0,t,"REMOVED"];break}}let r=a[e][2];const s=/^if\s+(.*?)\s*(?:then)?:?$/;s.test(r)&&(r=`if ${s.exec(r)[1]}:`,a[e]=[!0,t,r])}function ze(t,e){for(let s=e;s<a.length;s++){let[n,i,o]=[...a[s]];if(C(n,i,t)&&/^end(procedure|function)$/.test(o)){a[s]=[!0,t,"REMOVED"];break}}let r=/^(?:procedure|function)\s(.*?)\s*:?$/.exec(a[e][2]);a[e][0]=!0,a[e][2]=`def ${r[1]}:`}function Ue(t){a=t;for(let e=0;e<a.length;e++){const[r,s,n]=[...a[e]];!r&&n!=""&&n!="REMOVED"&&(a[e][2]=pe(a[e][2]),a[e][2]=G(a[e][2]),a[e][2]=Ee(a[e][2]),a[e][2]=re(a[e][2]),a[e][2]=M(a[e][2]),a[e][2]=Be(a[e][2]),a[e][2]=he(a[e][2]),a[e][2]=Qe(a[e][2]),/^for(.*?)$/.test(a[e][2])?Te(s,e):/^while(.*?)$/.test(a[e][2])?He(s,e):/^do(.*?)$/.test(a[e][2])?Je(s,e):/^if(.*?)$/.test(a[e][2])?je(s,e):/^(?:procedure|function)(.*?)$/.test(n)&&ze(s,e))}return me&&(a.unshift([!0,0,""]),a.unshift([!0,0,"from random import randint"])),a}let a=[],me=!1;String.prototype.isIdentifier=function(){return/^[a-zA-Z_]\w*$/.test(this)};String.prototype.isStringInteger=function(){return Number.isInteger(Number(this))};function qe(t,e,r){const s=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s*:?$/,n=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?)\s*:?$/;if(n.test(r)){let[i,o,l,c]=n.exec(r).slice(-4);return i.isIdentifier()?!o.isIdentifier()&&!o.isStringInteger()?(O=`Error on line ${e}
    ${o} isn't a valid identifier/number`,!1):!l.isIdentifier()&&!l.isStringInteger()?(O=`Error on line ${e}
    ${l} isn't a valid identifier/number`,!1):!c.isIdentifier()&&!c.isStringInteger()?(O=`Error on line ${e}
    ${c} isn't a valid identifier/number`,!1):!0:(O=`Error on line ${e}
    ${i} isn't a valid identifier`,!1)}else if(s.test(r)){let[i,o,l]=s.exec(r).slice(-3);return i.isIdentifier()?!o.isIdentifier()&&!Number.isInteger(Number(o))?(O=`Error on line ${e}
    ${o} isn't a valid identifier/number`,!1):!l.isIdentifier()&&!Number.isInteger(Number(l))?(O=`Error on line ${e}
    ${l} isn't a valid identifier/number`,!1):!0:(O=`Error on line ${e}
    ${i} isn't a valid identifier`,!1)}else return O=`Error on line ${e}
    ${r}

		Please declare for loops as specified by the OCR guide:
		for i=0 to 9
		...
		next i`,!1}function Fe(t){T=t;for(let e=0;e<T.length;e++){const[r,s,n]=[...T[e]];if(/^for(.*?)$/.test(T[e][2])&&!qe(s,e,n))return O}return O}let T=[],O="";var J,ge,j,$e;class Ke{constructor(e){W(this,J);W(this,j);this.source,this.error="",Y(this,J,ge).call(this,e),Y(this,j,$e).call(this)}transpile(){return Ue(this.source).filter(e=>e[2]!="REMOVED").map(e=>" ".repeat(e[1])+e[2]).join(`
`)}}J=new WeakSet,ge=function(e){this.source=e.split(`
`).map(r=>[!1,r.search(/\S|$/),r.trim()])},j=new WeakSet,$e=function(){this.error=Fe(this.source)};function We(t){let e,r,s,n,i,o,l,c,u,g,P,$;return r=new Oe({}),r.$on("vPPP",t[0]),r.$on("vPG",t[1]),r.$on("cPTP",t[2]),i=new Ae({}),P=new Ce({}),{c(){e=k(),I(r.$$.fragment),s=k(),n=v("main"),I(i.$$.fragment),o=k(),l=v("div"),c=k(),u=v("div"),g=k(),I(P.$$.fragment),this.h()},l(f){be("svelte-2mdzcm",document.head).forEach(m),e=V(f),D(r.$$.fragment,f),s=V(f),n=y(f,"MAIN",{class:!0});var d=x(n);D(i.$$.fragment,d),o=V(d),l=y(d,"DIV",{id:!0}),x(l).forEach(m),c=V(d),u=y(d,"DIV",{id:!0}),x(u).forEach(m),g=V(d),D(P.$$.fragment,d),d.forEach(m),this.h()},h(){document.title="Pseudocode to Python Transpiler",p(l,"id","pseudoEditor"),p(u,"id","pythonEditor"),p(n,"class","svelte-15oobuy")},m(f,w){R(f,e,w),X(r,f,w),R(f,s,w),R(f,n,w),X(i,n,null),h(n,o),h(n,l),h(n,c),h(n,u),h(n,g),X(P,n,null),$=!0},p:S,i(f){$||(N(r.$$.fragment,f),N(i.$$.fragment,f),N(P.$$.fragment,f),$=!0)},o(f){ee(r.$$.fragment,f),ee(i.$$.fragment,f),ee(P.$$.fragment,f),$=!1},d(f){f&&m(e),te(r,f),f&&m(s),f&&m(n),te(i),te(P)}}}function Ye(t,e,r){let s;F(t,xe,u=>r(5,s=u));let n,i;we(async()=>{const u=await L(()=>import("../../../chunks/ace-0d18d595.js").then(g=>g.a),[],import.meta.url);await L(()=>import("../../../chunks/theme-dracula-56e33506.js").then(g=>g.t),[],import.meta.url),await L(()=>import("../../../chunks/mode-python-33043df3.js").then(g=>g.m),[],import.meta.url),n=u.edit("pseudoEditor"),i=u.edit("pythonEditor"),[n,i].forEach(g=>{g.setTheme("ace/theme/dracula"),g.setFontSize(16),g.resize()})});function o(){n.setValue(s,1)}function l(){K.update(u=>u=!u)}function c(){const u=new Ke(n.getValue());u.error===""?(i.session.setMode("ace/mode/python"),i.setValue(u.transpile(),1)):(i.session.setMode("ace/mode/text"),i.setValue(u.message,1))}return[o,l,c]}class Ne extends z{constructor(e){super(),U(this,e,Ye,We,q,{})}}export{Ne as default};
