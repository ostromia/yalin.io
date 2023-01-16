var Pe=Object.defineProperty;var be=(t,e,r)=>e in t?Pe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var ne=(t,e,r)=>(be(t,typeof e!="symbol"?e+"":e,r),r);import{_ as we}from"../../../chunks/preload-helper-41c905a7.js";import{S as N,i as ee,s as te,k as _,q as T,a as k,l as v,m as w,r as J,h,c as O,n as d,b as H,G as u,L as I,u as ge,B as q,T as xe,H as Z,U as ke,e as ie,M as Oe,I as Y,w as oe,x as le,y as ae,f as ce,t as ue,z as de,o as Ve}from"../../../chunks/index-28fc0cfa.js";import{w as $e}from"../../../chunks/index-510c38f7.js";import{p as fe}from"../../../chunks/python-bb061e14.js";const L=$e(!1),Re=$e(`// 2020 Sample assessment materials J277/02

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
endif`);function Se(t){let e,r,s,n,i,o,l,c,y=(t[0]==!1?"Show":"Hide")+" Pseudocode Guide (J277)",p,b,m,A,E,P,R,G,j;return{c(){e=_("nav"),r=_("span"),s=T("Online OCR Pseudocode to Python Transpiler"),n=k(),i=_("button"),o=T("View Past Paper Pseudocode"),l=k(),c=_("button"),p=T(y),b=k(),m=_("button"),A=T("Convert Pseudocode to Python"),E=k(),P=_("button"),R=T("Execute Python Code"),this.h()},l(x){e=v(x,"NAV",{class:!0});var g=w(e);r=v(g,"SPAN",{class:!0});var M=w(r);s=J(M,"Online OCR Pseudocode to Python Transpiler"),M.forEach(h),n=O(g),i=v(g,"BUTTON",{id:!0,class:!0});var z=w(i);o=J(z,"View Past Paper Pseudocode"),z.forEach(h),l=O(g),c=v(g,"BUTTON",{id:!0,class:!0});var V=w(c);p=J(V,y),V.forEach(h),b=O(g),m=v(g,"BUTTON",{id:!0,class:!0});var S=w(m);A=J(S,"Convert Pseudocode to Python"),S.forEach(h),E=O(g),P=v(g,"BUTTON",{id:!0,class:!0});var f=w(P);R=J(f,"Execute Python Code"),f.forEach(h),g.forEach(h),this.h()},h(){d(r,"class","svelte-13xpehd"),d(i,"id","viewPastPaperPseudocode"),d(i,"class","svelte-13xpehd"),d(c,"id","viewPseudocodeGuide"),d(c,"class","svelte-13xpehd"),d(m,"id","convertPseudocodeToPython"),d(m,"class","svelte-13xpehd"),d(P,"id","executePythonCode"),P.disabled=!0,d(P,"class","svelte-13xpehd"),d(e,"class","svelte-13xpehd")},m(x,g){H(x,e,g),u(e,r),u(r,s),u(e,n),u(e,i),u(i,o),u(e,l),u(e,c),u(c,p),u(e,b),u(e,m),u(m,A),u(e,E),u(e,P),u(P,R),G||(j=[I(i,"click",t[2]),I(c,"click",t[3]),I(m,"click",t[4])],G=!0)},p(x,[g]){g&1&&y!==(y=(x[0]==!1?"Show":"Hide")+" Pseudocode Guide (J277)")&&ge(p,y)},i:q,o:q,d(x){x&&h(e),G=!1,xe(j)}}}function Ce(t,e,r){let s;Z(t,L,c=>r(0,s=c));const n=ke();return[s,n,()=>n("vPPP"),()=>n("vPG"),()=>n("cPTP")]}class Ae extends N{constructor(e){super(),ee(this,e,Ce,Se,te,{})}}function pe(t,e,r){const s=t.slice();return s[1]=e[r],s}function he(t){let e,r=[...Array(7).keys()],s=[];for(let n=0;n<r.length;n+=1)s[n]=me(pe(t,r,n));return{c(){e=_("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=v(n,"DIV",{id:!0,class:!0});var i=w(e);for(let o=0;o<s.length;o+=1)s[o].l(i);i.forEach(h),this.h()},h(){d(e,"id","J277Editor"),d(e,"class","svelte-153712z")},m(n,i){H(n,e,i);for(let o=0;o<s.length;o+=1)s[o].m(e,null)},p(n,i){if(i&0){r=[...Array(7).keys()];let o;for(o=0;o<r.length;o+=1){const l=pe(n,r,o);s[o]?s[o].p(l,i):(s[o]=me(l),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=r.length}},d(n){n&&h(e),Oe(s,n)}}}function me(t){let e,r;return{c(){e=_("img"),this.h()},l(s){e=v(s,"IMG",{alt:!0,src:!0}),this.h()},h(){d(e,"alt",""),Y(e.src,r="Pseudocode-Guide-J277/0"+t[1]+".jpg")||d(e,"src",r)},m(s,n){H(s,e,n)},p:q,d(s){s&&h(e)}}}function Ge(t){let e,r=t[0]&&he(t);return{c(){r&&r.c(),e=ie()},l(s){r&&r.l(s),e=ie()},m(s,n){r&&r.m(s,n),H(s,e,n)},p(s,[n]){s[0]?r?r.p(s,n):(r=he(s),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:q,o:q,d(s){r&&r.d(s),s&&h(e)}}}function Me(t,e,r){let s;return Z(t,L,n=>r(0,s=n)),[s]}class Ee extends N{constructor(e){super(),ee(this,e,Me,Ge,te,{})}}const D=""+new URL("../../../assets/ocr-logo-3617e3b0.svg",import.meta.url).href;String.prototype.replaceBetween=function(t,e,r){const s=this.slice(0,t),n=this.slice(e+1,this.length);return`${s}${r}${n}`};String.prototype.blockify=function(t,e){let r=[],s=[];for(let n=0;n<this.length;n++)t.test(this[n])?r.push(n):e.test(this[n]);for(let n=0;n<r.length;n++){let i=0;for(let o=r[n]+1;o<this.length;o++)if(t.test(this[o]))i+=1;else if(e.test(this[o])&&i!=0)i-=1;else if(e.test(this[o])&&i==0){let l=r[n],c=o;s.push([l,c,this.slice(l+1,c)]);break}}return s};function B(t){return t.includes("AND")?B(t.replace("AND","and")):t.includes("OR")?B(t.replace("OR","or")):t.includes("NOT")?B(t.replace("NOT","not")):t.includes("^")?B(t.replace("^","**")):t.includes("MOD")?B(t.replace("MOD","%")):t.includes("DIV")?B(t.replace("DIV","//")):t}function _e(t){return t.includes("//")?_e(t.replace("//","#")):t}function Be(t){const e=/^(?:const|let|var)\s(.*?)$/;return e.test(t)?t.match(e)[1]:t}function X(t){if(t=t.replaceAll("real(","float("),/bool\s*\((.*?)\)/.test(t)){const e=/bool\s*\((.*?)\)/.exec(t),r=e[1].replace(/'|"/g,"").trim();if(["True","true"].includes(r))return X(t.replaceAll(e[0],"True"));if(["False","false"].includes(r))return X(t.replaceAll(e[0],"False"))}return t}function Q(t){if(/\)\.length/.test(t)){let s=0,n=t.indexOf(").length"),i=t.blockify(/\(/,/\)/);for(let l=0;l<i.length;l++)if(i[l][1]==n){s=i[l][0];break}let o=null;for(let l=s-1;l>=0&&/\w/.test(t[l]);l--)o=l;if(o!=null){const l=[o,n+7],c=/(.*?)\((.*?)\)\.length/.exec(t.slice(l[0],l[1]+1)),y=`len(${c[1]}(${c[2]}))`;return Q(t.replaceBetween(...l,y))}else{const l=[s,n+7],y=`len(${/\((.*?)\)\.length/.exec(t.slice(l[0],l[1]+1))[1]})`;return Q(t.replaceBetween(...l,y))}}else if(/\.length/.test(t)){const s=/([\w'"]+)\.length/.exec(t),n=[s.index,s.index-1+s[0].length],i=`len(${s[1]})`;return Q(t.replaceBetween(...n,i))}else if(/\.substring\((.*?),(.*?)\)/.test(t)){const s=/\.substring\((.*?),(.*?)\)/.exec(t),n=[s.index,s.index-1+s[0].length],i=`[${s[1]},${s[2]}]`;return Q(t.replaceBetween(...n,i))}else if(/\.left/.test(t)){const s=/\.left\((.*?)\)/.exec(t),n=[s.index,s.index-1+s[0].length],i=`[:${s[1]}]`;return Q(t.replaceBetween(...n,i))}else if(/\.right/.test(t)){const s=/\.right\((.*?)\)/.exec(t),n=[s.index,s.index-1+s[0].length],i=`[-${s[1]}:]`;return Q(t.replaceBetween(...n,i))}const e=[".upper",".lower","ASC","CHR"],r=[".upper()",".lower()","ord","chr"];for(let s=0;s<e.length;s++)t=t.replaceAll(e[s],r[s]);return t}function Qe(t){if(/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.test(t)){const e=/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.exec(t),r=`${e[1]} = [[0 for i in range(${e[2]})] for j in range(${e[3]})]`;return t.replace(e[0],r)}else if(/^array\s*(\w+)\[(.*?)\](?!=)/.test(t)){const e=/^array\s*(\w+)\[(.*?)\](?!=)/.exec(t),r=`${e[1]} = [0 for i in range(${e[2]})]`;return t.replace(e[0],r)}else if(/(\w+)\[(.*?),(.*?)\]/.test(t)){const e=/(\w+)\[(.*?),(.*?)\]/.exec(t),r=`${e[1]}[${e[2].trim()}][${e[3].trim()}]`;return t.replace(e[0],r)}return t}function ve(t){if(/random\((.*?),(.*?)\)/.test(t)){ye=!0;const e=t.match(/random\((.*?),(.*?)\)/),r=`randint(${e[1].trim()}, ${e[2].trim()})`;return ve(t.replace(e[0],r))}return t}function Te(t){return t.includes("console.writeline")?t.replaceAll("console.writeline","print"):t.includes("console.log")?t.replaceAll("console.log","print"):/^print\s*\((.*?)\)$/.test(t)?`print(${/^print\s*\((.*?)\)$/.exec(t)[1]})`:t}function U(t,e,r){return!t&&e==r}function Je(t,e){for(let i=e;i<a.length;i++){let[o,l,c]=[...a[i]];if(U(o,l,t)&&c.includes("next")){a[i]=[!0,t,"REMOVED"];break}}const r=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s*:?$/,s=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?)\s*:?$/;let n=a[e][2];if(s.test(n)){let[i,o,l,c]=s.exec(n).slice(-4);n=`for ${i} in range(${o}, ${l}, ${c}):`}else if(r.test(n)){let[i,o,l]=r.exec(n).slice(-3);n=`for ${i} in range(${o}, ${l}):`}a[e]=[!0,t,n]}function Ue(t,e){for(let n=e;n<a.length;n++){let[i,o,l]=[...a[n]];if(U(i,o,t)&&l=="endwhile"){a[n]=[!0,t,"REMOVED"];break}}let s=a[e][2].match(/^while(.*?):?$/)[1].trim();a[e]=[!0,t,`while ${s}:`]}function je(t,e){for(let r=e;r<a.length;r++){let[s,n,i]=[...a[r]];if(U(s,n,t)&&/^until(.*?)$/.test(i)){a[r]=[!0,t,"REMOVED"],a[e]=[!0,t,"while True:"];let o=i.match(/^until(.*?)$/)[1].trim();a.splice(r,0,[!0,t+4,"break"]),a.splice(r,0,[!0,t+2,`if ${o}:`]),a.splice(r,0,[!0,t+2,""]);break}}}function ze(t,e){for(let n=e;n<a.length;n++){let[i,o,l]=[...a[n]];if(U(i,o,t)&&l.match(/^elseif(.*?)then$/)){let c=l.match(/^elseif(.*?)then$/)[1].trim();a[n]=[!0,t,`elif ${c}:`]}else if(U(i,o,t)&&(l=="else"||l=="else:"))a[n]=[!0,t,"else:"];else if(U(i,o,t)&&l==="endif"){a[n]=[!0,t,"REMOVED"];break}}let r=a[e][2];const s=/^if\s+(.*?)\s*(?:then)?\:?$/;s.test(r)&&(r=`if ${s.exec(r)[1]}:`,a[e]=[!0,t,r])}function He(t,e){for(let s=e;s<a.length;s++){let[n,i,o]=[...a[s]];if(U(n,i,t)&&/^end(procedure|function)$/.test(o)){a[s]=[!0,t,"REMOVED"];break}}let r=/^(?:procedure|function)\s(.*?)\s*:?$/.exec(a[e][2]);a[e][0]=!0,a[e][2]=`def ${r[1]}:`}function qe(t){a=t;for(let e=0;e<a.length;e++){const[r,s,n]=[...a[e]];!r&&n!=""&&n!="REMOVED"&&(a[e][2]=_e(a[e][2]),a[e][2]=B(a[e][2]),a[e][2]=Be(a[e][2]),a[e][2]=X(a[e][2]),a[e][2]=Q(a[e][2]),a[e][2]=Qe(a[e][2]),a[e][2]=ve(a[e][2]),a[e][2]=Te(a[e][2]),/^for(.*?)$/.test(a[e][2])?Je(s,e):/^while(.*?)$/.test(a[e][2])?Ue(s,e):/^do(.*?)$/.test(a[e][2])?je(s,e):/^if(.*?)$/.test(a[e][2])?ze(s,e):/^(?:procedure|function)(.*?)$/.test(n)&&He(s,e))}return ye&&(a.unshift([!0,0,""]),a.unshift([!0,0,"from random import randint"])),a.filter(e=>e[2]!="REMOVED")}let a=[],ye=!1;String.prototype.isIdentifier=function(){return/^[a-zA-Z_]\w*$/.test(this)};String.prototype.isStringInteger=function(){return Number.isInteger(Number(this))};function Fe(t,e,r){const s=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s*:?$/,n=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?)\s*:?$/;if(n.test(r)){let[i,o,l,c]=n.exec(r).slice(-4);return i.isIdentifier()?!o.isIdentifier()&&!o.isStringInteger()?(C=`Error on line ${e}
    ${o} isn't a valid identifier/number`,!1):!l.isIdentifier()&&!l.isStringInteger()?(C=`Error on line ${e}
    ${l} isn't a valid identifier/number`,!1):!c.isIdentifier()&&!c.isStringInteger()?(C=`Error on line ${e}
    ${c} isn't a valid identifier/number`,!1):!0:(C=`Error on line ${e}
    ${i} isn't a valid identifier`,!1)}else if(s.test(r)){let[i,o,l]=s.exec(r).slice(-3);return i.isIdentifier()?!o.isIdentifier()&&!Number.isInteger(Number(o))?(C=`Error on line ${e}
    ${o} isn't a valid identifier/number`,!1):!l.isIdentifier()&&!Number.isInteger(Number(l))?(C=`Error on line ${e}
    ${l} isn't a valid identifier/number`,!1):!0:(C=`Error on line ${e}
    ${i} isn't a valid identifier`,!1)}else return C=`Error on line ${e}
    ${r}

		Please declare for loops as specified by the OCR guide:
		for i=0 to 9
		...
		next i`,!1}function Ke(t){W=t;for(let e=0;e<W.length;e++){const[r,s,n]=[...W[e]];if(/^for(.*?)$/.test(W[e][2])&&!Fe(s,e,n))return C}return!0}let W=[],C="";class We{constructor(e){ne(this,"pseudocode");this.input=e,this.pseudocode=e.split(`
`).map(r=>[!1,r.search(/\S|$/),r.trim()])}validate(){let e=Ke(this.pseudocode);return e===!0?"":e}transpile(){return qe(this.pseudocode).map(r=>`${" ".repeat(r[1])}${r[2]}`)}}function Ye(t){let e,r,s,n,i,o,l,c,y,p,b,m,A,E,P,R=t[0]?"Pseudocode Guide":"Python",G,j,x,g,M,z,V,S;return e=new Ae({}),e.$on("vPPP",t[1]),e.$on("vPG",t[2]),e.$on("cPTP",t[3]),V=new Ee({}),{c(){oe(e.$$.fragment),r=k(),s=_("main"),n=_("div"),i=_("img"),l=k(),c=_("span"),y=T("Pseudocode"),p=k(),b=_("div"),m=_("img"),E=k(),P=_("span"),G=T(R),j=k(),x=_("div"),g=k(),M=_("div"),z=k(),oe(V.$$.fragment),this.h()},l(f){le(e.$$.fragment,f),r=O(f),s=v(f,"MAIN",{class:!0});var $=w(s);n=v($,"DIV",{class:!0});var F=w(n);i=v(F,"IMG",{alt:!0,class:!0,src:!0}),l=O(F),c=v(F,"SPAN",{class:!0});var se=w(c);y=J(se,"Pseudocode"),se.forEach(h),F.forEach(h),p=O($),b=v($,"DIV",{class:!0});var K=w(b);m=v(K,"IMG",{alt:!0,class:!0,src:!0}),E=O(K),P=v(K,"SPAN",{class:!0});var re=w(P);G=J(re,R),re.forEach(h),K.forEach(h),j=O($),x=v($,"DIV",{id:!0}),w(x).forEach(h),g=O($),M=v($,"DIV",{id:!0}),w(M).forEach(h),z=O($),le(V.$$.fragment,$),$.forEach(h),this.h()},h(){d(i,"alt",""),d(i,"class","logo svelte-18k5w2"),Y(i.src,o=D)||d(i,"src",o),d(c,"class","text svelte-18k5w2"),d(n,"class","heading-wrapper svelte-18k5w2"),d(m,"alt",""),d(m,"class","logo svelte-18k5w2"),Y(m.src,A=t[0]?D:fe)||d(m,"src",A),d(P,"class","text svelte-18k5w2"),d(b,"class","heading-wrapper svelte-18k5w2"),d(x,"id","pseudoEditor"),d(M,"id","pythonEditor"),d(s,"class","svelte-18k5w2")},m(f,$){ae(e,f,$),H(f,r,$),H(f,s,$),u(s,n),u(n,i),u(n,l),u(n,c),u(c,y),u(s,p),u(s,b),u(b,m),u(b,E),u(b,P),u(P,G),u(s,j),u(s,x),u(s,g),u(s,M),u(s,z),ae(V,s,null),S=!0},p(f,[$]){(!S||$&1&&!Y(m.src,A=f[0]?D:fe))&&d(m,"src",A),(!S||$&1)&&R!==(R=f[0]?"Pseudocode Guide":"Python")&&ge(G,R)},i(f){S||(ce(e.$$.fragment,f),ce(V.$$.fragment,f),S=!0)},o(f){ue(e.$$.fragment,f),ue(V.$$.fragment,f),S=!1},d(f){de(e,f),f&&h(r),f&&h(s),de(V)}}}function Ze(t,e,r){let s,n;Z(t,Re,p=>r(6,s=p)),Z(t,L,p=>r(0,n=p));let i,o;Ve(async()=>{const p=await we(()=>import("../../../chunks/ace-0d18d595.js").then(b=>b.a),[],import.meta.url);i=p.edit("pseudoEditor"),i.resize(),o=p.edit("pythonEditor"),o.resize()});function l(){i.setValue(s,1)}function c(){L.update(p=>p=!p)}function y(){const p=new We(i.getValue());p.validate()===""?(o.session.setMode("ace/mode/python"),o.setValue(p.transpile().join(`
`)+`
`,1)):(o.session.setMode("ace/mode/text"),o.setValue(p.transpile()+`
`,1))}return[n,l,c,y]}class et extends N{constructor(e){super(),ee(this,e,Ze,Ye,te,{})}}export{et as default};
