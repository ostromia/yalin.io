import{S as ne,i as se,s as ie,k as _,q as Q,a as V,l as y,m as v,r as j,h as d,c as C,n as c,b as A,G as p,J as te,B,R as ve,V as Pe,I as q,u as ke,e as ue,H as oe,L as we,w as L,T as xe,x as D,y as X,t as z,d as Oe,f as K,z as N,o as Se,g as Ve}from"../../../chunks/index-19ed2de5.js";import{w as he}from"../../../chunks/index-82e1ab8a.js";const re=he(!1),Ce=he(`// 2020 Sample assessment materials J277/02

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
endif`);function Ge(r){let e,n,t,s;return{c(){e=_("button"),n=Q("View Pseudocode Guide (J277)"),this.h()},l(i){e=y(i,"BUTTON",{id:!0,class:!0});var o=v(e);n=j(o,"View Pseudocode Guide (J277)"),o.forEach(d),this.h()},h(){c(e,"id","viewPseudocodeGuide"),c(e,"class","svelte-13xpehd")},m(i,o){A(i,e,o),p(e,n),t||(s=te(e,"click",r[4]),t=!0)},p:B,d(i){i&&d(e),t=!1,s()}}}function Re(r){let e,n,t,s;return{c(){e=_("button"),n=Q("Hide Pseudocode Guide (J277)"),this.h()},l(i){e=y(i,"BUTTON",{id:!0,class:!0});var o=v(e);n=j(o,"Hide Pseudocode Guide (J277)"),o.forEach(d),this.h()},h(){c(e,"id","viewPseudocodeGuide"),c(e,"class","svelte-13xpehd")},m(i,o){A(i,e,o),p(e,n),t||(s=te(e,"click",r[3]),t=!0)},p:B,d(i){i&&d(e),t=!1,s()}}}function Te(r){let e,n,t,s,i,o,l,u,g,m,k,f,P,G,x;function O(w,b){return w[0]?Re:Ge}let E=O(r),$=E(r);return{c(){e=_("nav"),n=_("span"),t=Q("Online OCR Pseudocode to Python Transpiler"),s=V(),i=_("button"),o=Q("View Past Paper Pseudocode"),l=V(),$.c(),u=V(),g=_("button"),m=Q("Convert Pseudocode to Python"),k=V(),f=_("button"),P=Q("Execute Python Code"),this.h()},l(w){e=y(w,"NAV",{class:!0});var b=v(e);n=y(b,"SPAN",{class:!0});var Y=v(n);t=j(Y,"Online OCR Pseudocode to Python Transpiler"),Y.forEach(d),s=C(b),i=y(b,"BUTTON",{id:!0,class:!0});var R=v(i);o=j(R,"View Past Paper Pseudocode"),R.forEach(d),l=C(b),$.l(b),u=C(b),g=y(b,"BUTTON",{id:!0,class:!0});var J=v(g);m=j(J,"Convert Pseudocode to Python"),J.forEach(d),k=C(b),f=y(b,"BUTTON",{id:!0,class:!0});var I=v(f);P=j(I,"Execute Python Code"),I.forEach(d),b.forEach(d),this.h()},h(){c(n,"class","svelte-13xpehd"),c(i,"id","viewPastPaperPseudocode"),c(i,"class","svelte-13xpehd"),c(g,"id","convertPseudocodeToPython"),c(g,"class","svelte-13xpehd"),c(f,"id","executePythonCode"),f.disabled=!0,c(f,"class","svelte-13xpehd"),c(e,"class","svelte-13xpehd")},m(w,b){A(w,e,b),p(e,n),p(n,t),p(e,s),p(e,i),p(i,o),p(e,l),$.m(e,null),p(e,u),p(e,g),p(g,m),p(e,k),p(e,f),p(f,P),G||(x=[te(i,"click",r[2]),te(g,"click",r[5])],G=!0)},p(w,[b]){E===(E=O(w))&&$?$.p(w,b):($.d(1),$=E(w),$&&($.c(),$.m(e,u)))},i:B,o:B,d(w){w&&d(e),$.d(),G=!1,ve(x)}}}function Ae(r,e,n){const t=Pe();let s=!1;return re.subscribe(g=>{n(0,s=g)}),[s,t,()=>t("vPPP"),()=>t("vPG"),()=>t("vPG"),()=>t("cPTP")]}class Ee extends ne{constructor(e){super(),se(this,e,Ae,Te,ie,{})}}function Me(r){let e,n,t,s,i,o;return{c(){e=_("div"),n=_("img"),s=V(),i=_("span"),o=Q(r[0]),this.h()},l(l){e=y(l,"DIV",{style:!0,class:!0});var u=v(e);n=y(u,"IMG",{alt:!0,class:!0,src:!0}),s=C(u),i=y(u,"SPAN",{class:!0});var g=v(i);o=j(g,r[0]),g.forEach(d),u.forEach(d),this.h()},h(){c(n,"alt",""),c(n,"class","logo svelte-1kkyt28"),q(n.src,t=r[1])||c(n,"src",t),c(i,"class","text svelte-1kkyt28"),c(e,"style",r[2]),c(e,"class","heading-wrapper svelte-1kkyt28")},m(l,u){A(l,e,u),p(e,n),p(e,s),p(e,i),p(i,o)},p(l,[u]){u&2&&!q(n.src,t=l[1])&&c(n,"src",t),u&1&&ke(o,l[0]),u&4&&c(e,"style",l[2])},i:B,o:B,d(l){l&&d(e)}}}function Be(r,e,n){let{text:t}=e,{src:s}=e,{style:i=""}=e;return r.$$set=o=>{"text"in o&&n(0,t=o.text),"src"in o&&n(1,s=o.src),"style"in o&&n(2,i=o.style)},[t,s,i]}class ae extends ne{constructor(e){super(),se(this,e,Be,Me,ie,{text:0,src:1,style:2})}}function de(r,e,n){const t=r.slice();return t[2]=e[n],t}function fe(r){let e,n=r[1],t=[];for(let s=0;s<n.length;s+=1)t[s]=pe(de(r,n,s));return{c(){e=_("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=y(s,"DIV",{id:!0,class:!0});var i=v(e);for(let o=0;o<t.length;o+=1)t[o].l(i);i.forEach(d),this.h()},h(){c(e,"id","J277Editor"),c(e,"class","svelte-1estv5p")},m(s,i){A(s,e,i);for(let o=0;o<t.length;o+=1)t[o].m(e,null)},p(s,i){if(i&2){n=s[1];let o;for(o=0;o<n.length;o+=1){const l=de(s,n,o);t[o]?t[o].p(l,i):(t[o]=pe(l),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=n.length}},d(s){s&&d(e),we(t,s)}}}function pe(r){let e,n;return{c(){e=_("img"),this.h()},l(t){e=y(t,"IMG",{alt:!0,src:!0}),this.h()},h(){c(e,"alt",""),q(e.src,n="Pseudocode-Guide-J277/0"+r[2]+".jpg")||c(e,"src",n)},m(t,s){A(t,e,s)},p:B,d(t){t&&d(e)}}}function Qe(r){let e,n=r[0]&&fe(r);return{c(){n&&n.c(),e=ue()},l(t){n&&n.l(t),e=ue()},m(t,s){n&&n.m(t,s),A(t,e,s)},p(t,[s]){t[0]?n?n.p(t,s):(n=fe(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:B,o:B,d(t){n&&n.d(t),t&&d(e)}}}function je(r,e,n){let t;oe(r,re,i=>n(0,t=i));const s=Array.from({length:7},(i,o)=>o+1);return[t,s]}class Je extends ne{constructor(e){super(),se(this,e,je,Qe,ie,{})}}String.prototype.replaceBetween=function(r,e,n){const t=this.slice(0,r),s=this.slice(e+1,this.length);return`${t}${n}${s}`};String.prototype.blockify=function(r,e){let n=[],t=[];for(let s=0;s<this.length;s++)r.test(this[s])?n.push(s):e.test(this[s]);for(let s=0;s<n.length;s++){let i=0;for(let o=n[s]+1;o<this.length;o++)if(r.test(this[o]))i+=1;else if(e.test(this[o])&&i!=0)i-=1;else if(e.test(this[o])&&i==0){let l=n[s],u=o;t.push([l,u,this.slice(l+1,u)]);break}}return t};function F(r){return r.includes("AND")?F(r.replace("AND","and")):r.includes("OR")?F(r.replace("OR","or")):r.includes("NOT")?F(r.replace("NOT","not")):r.includes("^")?F(r.replace("^","**")):r.includes("MOD")?F(r.replace("MOD","%")):r.includes("DIV")?F(r.replace("DIV","//")):r}function me(r){return r.includes("//")?me(r.replace("//","#")):r}function Ue(r){const e=/^(?:const|let|var)\s(.*?)$/;return e.test(r)?r.match(e)[1]:r}function le(r){if(r=r.replaceAll("real(","float("),/bool\s*\((.*?)\)/.test(r)){const e=/bool\s*\((.*?)\)/.exec(r),n=e[1].replace(/'|"/g,"").trim();if(["True","true"].includes(n))return le(r.replaceAll(e[0],"True"));if(["False","false"].includes(n))return le(r.replaceAll(e[0],"False"))}return r}function H(r){if(/\)\.length/.test(r)){let t=0,s=r.indexOf(").length"),i=r.blockify(/\(/,/\)/);for(let l=0;l<i.length;l++)if(i[l][1]==s){t=i[l][0];break}let o=null;for(let l=t-1;l>=0&&/\w/.test(r[l]);l--)o=l;if(o!=null){const l=[o,s+7],u=/(.*?)\((.*?)\)\.length/.exec(r.slice(l[0],l[1]+1)),g=`len(${u[1]}(${u[2]}))`;return H(r.replaceBetween(...l,g))}else{const l=[t,s+7],g=`len(${/\((.*?)\)\.length/.exec(r.slice(l[0],l[1]+1))[1]})`;return H(r.replaceBetween(...l,g))}}else if(/\.length/.test(r)){const t=/([\w'"]+)\.length/.exec(r),s=[t.index,t.index-1+t[0].length],i=`len(${t[1]})`;return H(r.replaceBetween(...s,i))}else if(/\.substring\((.*?),(.*?)\)/.test(r)){const t=/\.substring\((.*?),(.*?)\)/.exec(r),s=[t.index,t.index-1+t[0].length],i=`[${t[1]},${t[2]}]`;return H(r.replaceBetween(...s,i))}else if(/\.left/.test(r)){const t=/\.left\((.*?)\)/.exec(r),s=[t.index,t.index-1+t[0].length],i=`[:${t[1]}]`;return H(r.replaceBetween(...s,i))}else if(/\.right/.test(r)){const t=/\.right\((.*?)\)/.exec(r),s=[t.index,t.index-1+t[0].length],i=`[-${t[1]}:]`;return H(r.replaceBetween(...s,i))}const e=[".upper",".lower","ASC","CHR"],n=[".upper()",".lower()","ord","chr"];for(let t=0;t<e.length;t++)r=r.replaceAll(e[t],n[t]);return r}function Fe(r){if(/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.test(r)){const e=/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.exec(r),n=`${e[1]} = [[0 for i in range(${e[2]})] for j in range(${e[3]})]`;return r.replace(e[0],n)}else if(/^array\s*(\w+)\[(.*?)\](?!=)/.test(r)){const e=/^array\s*(\w+)\[(.*?)\](?!=)/.exec(r),n=`${e[1]} = [0 for i in range(${e[2]})]`;return r.replace(e[0],n)}else if(/(\w+)\[(.*?),(.*?)\]/.test(r)){const e=/(\w+)\[(.*?),(.*?)\]/.exec(r),n=`${e[1]}[${e[2].trim()}][${e[3].trim()}]`;return r.replace(e[0],n)}return r}function ge(r){if(/random\((.*?),(.*?)\)/.test(r)){be=!0;const e=r.match(/random\((.*?),(.*?)\)/),n=`randint(${e[1].trim()}, ${e[2].trim()})`;return ge(r.replace(e[0],n))}return r}function He(r){return r.includes("console.writeline")?r.replaceAll("console.writeline","print"):r.includes("console.log")?r.replaceAll("console.log","print"):/^print\s*\((.*?)\)$/.test(r)?`print(${/^print\s*\((.*?)\)$/.exec(r)[1]})`:r}function W(r,e,n){return!r&&e==n}function ze(r,e){for(let i=e;i<a.length;i++){let[o,l,u]=[...a[i]];if(W(o,l,r)&&u.includes("next")){a[i]=[!0,r,"REMOVED"];break}}const n=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s*:?$/,t=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?)\s*:?$/;let s=a[e][2];if(t.test(s)){let[i,o,l,u]=t.exec(s).slice(-4);s=`for ${i} in range(${o}, ${l}, ${u}):`}else if(n.test(s)){let[i,o,l]=n.exec(s).slice(-3);s=`for ${i} in range(${o}, ${l}):`}a[e]=[!0,r,s]}function Ke(r,e){for(let s=e;s<a.length;s++){let[i,o,l]=[...a[s]];if(W(i,o,r)&&l=="endwhile"){a[s]=[!0,r,"REMOVED"];break}}let t=a[e][2].match(/^while(.*?):?$/)[1].trim();a[e]=[!0,r,`while ${t}:`]}function We(r,e){for(let n=e;n<a.length;n++){let[t,s,i]=[...a[n]];if(W(t,s,r)&&/^until(.*?)$/.test(i)){a[n]=[!0,r,"REMOVED"],a[e]=[!0,r,"while True:"];let o=i.match(/^until(.*?)$/)[1].trim();a.splice(n,0,[!0,r+4,"break"]),a.splice(n,0,[!0,r+2,`if ${o}:`]),a.splice(n,0,[!0,r+2,""]);break}}}function Ye(r,e){for(let s=e;s<a.length;s++){let[i,o,l]=[...a[s]];if(W(i,o,r)&&l.match(/^elseif(.*?)then$/)){let u=l.match(/^elseif(.*?)then$/)[1].trim();a[s]=[!0,r,`elif ${u}:`]}else if(W(i,o,r)&&(l=="else"||l=="else:"))a[s]=[!0,r,"else:"];else if(W(i,o,r)&&l==="endif"){a[s]=[!0,r,"REMOVED"];break}}let n=a[e][2];const t=/^if\s+(.*?)\s*(?:then)?\:?$/;t.test(n)&&(n=`if ${t.exec(n)[1]}:`,a[e]=[!0,r,n])}function Ze(r,e){for(let t=e;t<a.length;t++){let[s,i,o]=[...a[t]];if(W(s,i,r)&&/^end(procedure|function)$/.test(o)){a[t]=[!0,r,"REMOVED"];break}}let n=/^(?:procedure|function)\s(.*?)\s*:?$/.exec(a[e][2]);a[e][0]=!0,a[e][2]=`def ${n[1]}:`}function qe(r){a=r;for(let e=0;e<a.length;e++){const[n,t,s]=[...a[e]];!n&&s!=""&&s!="REMOVED"&&(a[e][2]=me(a[e][2]),a[e][2]=F(a[e][2]),a[e][2]=Ue(a[e][2]),a[e][2]=le(a[e][2]),a[e][2]=H(a[e][2]),a[e][2]=Fe(a[e][2]),a[e][2]=ge(a[e][2]),a[e][2]=He(a[e][2]),/^for(.*?)$/.test(a[e][2])?ze(t,e):/^while(.*?)$/.test(a[e][2])?Ke(t,e):/^do(.*?)$/.test(a[e][2])?We(t,e):/^if(.*?)$/.test(a[e][2])?Ye(t,e):/^(?:procedure|function)(.*?)$/.test(s)&&Ze(t,e))}return be&&(a.unshift([!0,0,""]),a.unshift([!0,0,"from random import randint"])),a.filter(e=>e[2]!="REMOVED")}let a=[],be=!1;String.prototype.isIdentifier=function(){return/^[a-zA-Z_]\w*$/.test(this)};String.prototype.isStringInteger=function(){return Number.isInteger(Number(this))};function Ie(r,e,n){const t=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s*:?$/,s=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?)\s*:?$/;if(s.test(n)){let[i,o,l,u]=s.exec(n).slice(-4);return i.isIdentifier()?!o.isIdentifier()&&!o.isStringInteger()?(M=`Error on line ${e}
    ${o} isn't a valid identifier/number`,!1):!l.isIdentifier()&&!l.isStringInteger()?(M=`Error on line ${e}
    ${l} isn't a valid identifier/number`,!1):!u.isIdentifier()&&!u.isStringInteger()?(M=`Error on line ${e}
    ${u} isn't a valid identifier/number`,!1):!0:(M=`Error on line ${e}
    ${i} isn't a valid identifier`,!1)}else if(t.test(n)){let[i,o,l]=t.exec(n).slice(-3);return i.isIdentifier()?!o.isIdentifier()&&!Number.isInteger(Number(o))?(M=`Error on line ${e}
    ${o} isn't a valid identifier/number`,!1):!l.isIdentifier()&&!Number.isInteger(Number(l))?(M=`Error on line ${e}
    ${l} isn't a valid identifier/number`,!1):!0:(M=`Error on line ${e}
    ${i} isn't a valid identifier`,!1)}else return M=`Error on line ${e}
    ${n}

Please declare for loops as specified by the OCR guide:
    for i=0 to 9
      ...
    next i`,!1}function Le(r){ee=r;for(let e=0;e<ee.length;e++){const[n,t,s]=[...ee[e]];if(/^for(.*?)$/.test(ee[e][2])&&!Ie(t,e,s))return M}return!0}let ee=[],M="";function De(r){let e,n;return e=new ae({props:{style:"grid-column: 2; grid-row: 1",text:"Python",src:"devicon/python-original.svg"}}),{c(){L(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,s){X(e,t,s),n=!0},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function Xe(r){let e,n;return e=new ae({props:{style:"grid-column: 2; grid-row: 1",text:"Pseudocode Guide",src:"ocr-logo.svg"}}),{c(){L(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,s){X(e,t,s),n=!0},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){N(e,t)}}}function Ne(r){let e,n,t,s,i,o,l,u,g,m,k,f,P,G,x,O,E,$,w,b,Y,R,J;m=new Ee({}),m.$on("vPPP",r[1]),m.$on("vPG",r[2]),m.$on("cPTP",r[3]),P=new ae({props:{style:"grid-column: 1; grid-row: 1",text:"Pseudocode",src:"ocr-logo.svg"}});const I=[Xe,De],U=[];function ce(h,S){return h[0]?0:1}return x=ce(r),O=U[x]=I[x](r),R=new Je({}),{c(){e=_("style"),n=Q(`@font-face {\r
      font-family: 'cabin';\r
      src: url("./Cabin-VariableFont_wdth,wght.ttf");\r
    }\r
    ::-webkit-scrollbar             { height: 0.2rem; width: 0.2rem  }\r
    ::-webkit-scrollbar-track       { background: rgb(206, 206, 206) }\r
    ::-webkit-scrollbar-thumb       { background: rgb(136, 136, 136) }\r
    ::-webkit-scrollbar-thumb:hover { background: rgb(85, 85, 85)    }\r
  `),t=_("script"),i=_("script"),l=_("script"),g=V(),L(m.$$.fragment),k=V(),f=_("main"),L(P.$$.fragment),G=V(),O.c(),E=V(),$=_("div"),w=V(),b=_("div"),Y=V(),L(R.$$.fragment),this.h()},l(h){const S=xe("svelte-145cd0o",document.head);e=y(S,"STYLE",{});var Z=v(e);n=j(Z,`@font-face {\r
      font-family: 'cabin';\r
      src: url("./Cabin-VariableFont_wdth,wght.ttf");\r
    }\r
    ::-webkit-scrollbar             { height: 0.2rem; width: 0.2rem  }\r
    ::-webkit-scrollbar-track       { background: rgb(206, 206, 206) }\r
    ::-webkit-scrollbar-thumb       { background: rgb(136, 136, 136) }\r
    ::-webkit-scrollbar-thumb:hover { background: rgb(85, 85, 85)    }\r
  `),Z.forEach(d),t=y(S,"SCRIPT",{src:!0,integrity:!0,crossorigin:!0,referrerpolicy:!0});var _e=v(t);_e.forEach(d),i=y(S,"SCRIPT",{src:!0,integrity:!0,crossorigin:!0,referrerpolicy:!0});var ye=v(i);ye.forEach(d),l=y(S,"SCRIPT",{src:!0,integrity:!0,crossorigin:!0,referrerpolicy:!0});var $e=v(l);$e.forEach(d),S.forEach(d),g=C(h),D(m.$$.fragment,h),k=C(h),f=y(h,"MAIN",{class:!0});var T=v(f);D(P.$$.fragment,T),G=C(T),O.l(T),E=C(T),$=y(T,"DIV",{id:!0,class:!0}),v($).forEach(d),w=C(T),b=y(T,"DIV",{id:!0,class:!0}),v(b).forEach(d),Y=C(T),D(R.$$.fragment,T),T.forEach(d),this.h()},h(){document.title="Pseudocode to Python Transpiler",q(t.src,s="https://cdnjs.cloudflare.com/ajax/libs/ace/1.12.5/ace.js")||c(t,"src",s),c(t,"integrity","sha512-gLQA+KKlMRzGRNhdvGX+3F5UHojWkIIKvG2lNQk0ZM5QUbdG17/hDobp06zXMthrJrd4U1+boOEACntTGlPjJQ=="),c(t,"crossorigin","anonymous"),c(t,"referrerpolicy","no-referrer"),q(i.src,o="https://cdnjs.cloudflare.com/ajax/libs/ace/1.12.5/theme-dracula.min.js")||c(i,"src",o),c(i,"integrity","sha512-XzFsZJNE1AU2unPycw2UaT32KTSB76GPZDWi/CkO1P3f0ctnnYHop1iFI5aIVFrArykenccug+QI629Gp+vORg=="),c(i,"crossorigin","anonymous"),c(i,"referrerpolicy","no-referrer"),q(l.src,u="https://cdnjs.cloudflare.com/ajax/libs/ace/1.12.5/mode-python.min.js")||c(l,"src",u),c(l,"integrity","sha512-W1k0SdTb7FU3nxWYkBLQVhTC8b8BU6Je3deBSnLm/dSQ956goMMnL+NYi2SXse1i7k0eUJNMNycTvbEdrJmEFw=="),c(l,"crossorigin","anonymous"),c(l,"referrerpolicy","no-referrer"),c($,"id","pseudoEditor"),c($,"class","svelte-tt2367"),c(b,"id","pythonEditor"),c(b,"class","svelte-tt2367"),c(f,"class","svelte-tt2367")},m(h,S){p(document.head,e),p(e,n),p(document.head,t),p(document.head,i),p(document.head,l),A(h,g,S),X(m,h,S),A(h,k,S),A(h,f,S),X(P,f,null),p(f,G),U[x].m(f,null),p(f,E),p(f,$),p(f,w),p(f,b),p(f,Y),X(R,f,null),J=!0},p(h,[S]){let Z=x;x=ce(h),x!==Z&&(Ve(),z(U[Z],1,1,()=>{U[Z]=null}),Oe(),O=U[x],O||(O=U[x]=I[x](h),O.c()),K(O,1),O.m(f,E))},i(h){J||(K(m.$$.fragment,h),K(P.$$.fragment,h),K(O),K(R.$$.fragment,h),J=!0)},o(h){z(m.$$.fragment,h),z(P.$$.fragment,h),z(O),z(R.$$.fragment,h),J=!1},d(h){d(e),d(t),d(i),d(l),h&&d(g),N(m,h),h&&d(k),h&&d(f),N(P),U[x].d(),N(R)}}}function et(r,e,n){let t,s;oe(r,Ce,m=>n(6,t=m)),oe(r,re,m=>n(0,s=m));let i,o;Se(()=>{function m(k){k.setTheme("ace/theme/dracula"),k.setFontSize(16),k.resize()}i=ace.edit("pseudoEditor"),m(i),o=ace.edit("pythonEditor"),m(o),o.setReadOnly(!0)});function l(){i.setValue(t,1)}function u(){re.update(m=>m=!m)}function g(){const k=i.getValue().split(`
`).map(P=>[!1,P.search(/\S|$/),P.trim()]);let f=Le(k);if(f===!0){f=qe(k);const P=f.map(G=>`${" ".repeat(G[1])}${G[2]}`);o.session.setMode("ace/mode/python"),o.setValue(P.join(`
`)+`
`,1)}else o.session.setMode("ace/mode/text"),o.setValue(f+`
`,1)}return[s,l,u,g]}class nt extends ne{constructor(e){super(),se(this,e,et,Ne,ie,{})}}export{nt as default};
