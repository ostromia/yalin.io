import{S as q,i as Z,s as I,k as b,q as E,a as C,l as $,m as P,r as B,h as p,c as R,n as d,b as S,G as h,J as X,B as T,R as pe,V as he,I as F,u as me,w as z,e as N,x as H,y as W,g as ge,t as Q,d as ye,f as j,z as K,H as ee,L as _e,T as be,o as $e}from"../../../chunks/index-19ed2de5.js";import{w as ae}from"../../../chunks/index-82e1ab8a.js";const Y=ae(!1),ve=ae(`// 2020 Sample assessment materials J277/02

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
endif`);function Pe(n){let e,r,t,s;return{c(){e=b("button"),r=E("View Pseudocode Guide (J277)"),this.h()},l(i){e=$(i,"BUTTON",{id:!0,class:!0});var o=P(e);r=B(o,"View Pseudocode Guide (J277)"),o.forEach(p),this.h()},h(){d(e,"id","viewPseudocodeGuide"),d(e,"class","svelte-13xpehd")},m(i,o){S(i,e,o),h(e,r),t||(s=X(e,"click",n[4]),t=!0)},p:T,d(i){i&&p(e),t=!1,s()}}}function ke(n){let e,r,t,s;return{c(){e=b("button"),r=E("Hide Pseudocode Guide (J277)"),this.h()},l(i){e=$(i,"BUTTON",{id:!0,class:!0});var o=P(e);r=B(o,"Hide Pseudocode Guide (J277)"),o.forEach(p),this.h()},h(){d(e,"id","viewPseudocodeGuide"),d(e,"class","svelte-13xpehd")},m(i,o){S(i,e,o),h(e,r),t||(s=X(e,"click",n[3]),t=!0)},p:T,d(i){i&&p(e),t=!1,s()}}}function we(n){let e,r,t,s,i,o,a,c,f,u,v,m,w,x,V;function A(_,y){return _[0]?ke:Pe}let G=A(n),k=G(n);return{c(){e=b("nav"),r=b("span"),t=E("Online OCR Pseudocode to Python Transpiler"),s=C(),i=b("button"),o=E("View Past Paper Pseudocode"),a=C(),k.c(),c=C(),f=b("button"),u=E("Convert Pseudocode to Python"),v=C(),m=b("button"),w=E("Execute Python Code"),this.h()},l(_){e=$(_,"NAV",{class:!0});var y=P(e);r=$(y,"SPAN",{class:!0});var g=P(r);t=B(g,"Online OCR Pseudocode to Python Transpiler"),g.forEach(p),s=R(y),i=$(y,"BUTTON",{id:!0,class:!0});var O=P(i);o=B(O,"View Past Paper Pseudocode"),O.forEach(p),a=R(y),k.l(y),c=R(y),f=$(y,"BUTTON",{id:!0,class:!0});var L=P(f);u=B(L,"Convert Pseudocode to Python"),L.forEach(p),v=R(y),m=$(y,"BUTTON",{id:!0,class:!0});var D=P(m);w=B(D,"Execute Python Code"),D.forEach(p),y.forEach(p),this.h()},h(){d(r,"class","svelte-13xpehd"),d(i,"id","viewPastPaperPseudocode"),d(i,"class","svelte-13xpehd"),d(f,"id","convertPseudocodeToPython"),d(f,"class","svelte-13xpehd"),d(m,"id","executePythonCode"),m.disabled=!0,d(m,"class","svelte-13xpehd"),d(e,"class","svelte-13xpehd")},m(_,y){S(_,e,y),h(e,r),h(r,t),h(e,s),h(e,i),h(i,o),h(e,a),k.m(e,null),h(e,c),h(e,f),h(f,u),h(e,v),h(e,m),h(m,w),x||(V=[X(i,"click",n[2]),X(f,"click",n[5])],x=!0)},p(_,[y]){G===(G=A(_))&&k?k.p(_,y):(k.d(1),k=G(_),k&&(k.c(),k.m(e,c)))},i:T,o:T,d(_){_&&p(e),k.d(),x=!1,pe(V)}}}function xe(n,e,r){const t=he();let s=!1;return Y.subscribe(f=>{r(0,s=f)}),[s,t,()=>t("vPPP"),()=>t("vPG"),()=>t("vPG"),()=>t("cPTP")]}class Oe extends q{constructor(e){super(),Z(this,e,xe,we,I,{})}}function Se(n){let e,r,t,s,i,o;return{c(){e=b("div"),r=b("img"),s=C(),i=b("span"),o=E(n[0]),this.h()},l(a){e=$(a,"DIV",{style:!0,class:!0});var c=P(e);r=$(c,"IMG",{alt:!0,class:!0,src:!0}),s=R(c),i=$(c,"SPAN",{class:!0});var f=P(i);o=B(f,n[0]),f.forEach(p),c.forEach(p),this.h()},h(){d(r,"alt",""),d(r,"class","logo svelte-1kkyt28"),F(r.src,t=n[1])||d(r,"src",t),d(i,"class","text svelte-1kkyt28"),d(e,"style",n[2]),d(e,"class","heading-wrapper svelte-1kkyt28")},m(a,c){S(a,e,c),h(e,r),h(e,s),h(e,i),h(i,o)},p(a,[c]){c&2&&!F(r.src,t=a[1])&&d(r,"src",t),c&1&&me(o,a[0]),c&4&&d(e,"style",a[2])},i:T,o:T,d(a){a&&p(e)}}}function Ve(n,e,r){let{text:t}=e,{src:s}=e,{style:i=""}=e;return n.$$set=o=>{"text"in o&&r(0,t=o.text),"src"in o&&r(1,s=o.src),"style"in o&&r(2,i=o.style)},[t,s,i]}class se extends q{constructor(e){super(),Z(this,e,Ve,Se,I,{text:0,src:1,style:2})}}function Ge(n){let e,r;return e=new se({props:{style:"grid-column: 2; grid-row: 1",text:"Python",src:"devicon/python-original.svg"}}),{c(){z(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,s){W(e,t,s),r=!0},i(t){r||(j(e.$$.fragment,t),r=!0)},o(t){Q(e.$$.fragment,t),r=!1},d(t){K(e,t)}}}function Ce(n){let e,r;return e=new se({props:{style:"grid-column: 2; grid-row: 1",text:"Pseudocode Guide",src:"ocr-logo.svg"}}),{c(){z(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,s){W(e,t,s),r=!0},i(t){r||(j(e.$$.fragment,t),r=!0)},o(t){Q(e.$$.fragment,t),r=!1},d(t){K(e,t)}}}function Re(n){let e,r,t,s,i,o;e=new se({props:{style:"grid-column: 1; grid-row: 1",text:"Pseudocode",src:"ocr-logo.svg"}});const a=[Ce,Ge],c=[];function f(u,v){return u[0]?0:1}return t=f(n),s=c[t]=a[t](n),{c(){z(e.$$.fragment),r=C(),s.c(),i=N()},l(u){H(e.$$.fragment,u),r=R(u),s.l(u),i=N()},m(u,v){W(e,u,v),S(u,r,v),c[t].m(u,v),S(u,i,v),o=!0},p(u,[v]){let m=t;t=f(u),t!==m&&(ge(),Q(c[m],1,1,()=>{c[m]=null}),ye(),s=c[t],s||(s=c[t]=a[t](u),s.c()),j(s,1),s.m(i.parentNode,i))},i(u){o||(j(e.$$.fragment,u),j(s),o=!0)},o(u){Q(e.$$.fragment,u),Q(s),o=!1},d(u){K(e,u),u&&p(r),c[t].d(u),u&&p(i)}}}function Te(n,e,r){let t;return ee(n,Y,s=>r(0,t=s)),[t]}class Ae extends q{constructor(e){super(),Z(this,e,Te,Re,I,{})}}function ie(n,e,r){const t=n.slice();return t[2]=e[r],t}function oe(n){let e,r=n[1],t=[];for(let s=0;s<r.length;s+=1)t[s]=le(ie(n,r,s));return{c(){e=b("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=$(s,"DIV",{id:!0,class:!0});var i=P(e);for(let o=0;o<t.length;o+=1)t[o].l(i);i.forEach(p),this.h()},h(){d(e,"id","J277Editor"),d(e,"class","svelte-1estv5p")},m(s,i){S(s,e,i);for(let o=0;o<t.length;o+=1)t[o].m(e,null)},p(s,i){if(i&2){r=s[1];let o;for(o=0;o<r.length;o+=1){const a=ie(s,r,o);t[o]?t[o].p(a,i):(t[o]=le(a),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=r.length}},d(s){s&&p(e),_e(t,s)}}}function le(n){let e,r;return{c(){e=b("img"),this.h()},l(t){e=$(t,"IMG",{alt:!0,src:!0}),this.h()},h(){d(e,"alt",""),F(e.src,r="Pseudocode-Guide-J277/0"+n[2]+".jpg")||d(e,"src",r)},m(t,s){S(t,e,s)},p:T,d(t){t&&p(e)}}}function Me(n){let e,r=n[0]&&oe(n);return{c(){r&&r.c(),e=N()},l(t){r&&r.l(t),e=N()},m(t,s){r&&r.m(t,s),S(t,e,s)},p(t,[s]){t[0]?r?r.p(t,s):(r=oe(t),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:T,o:T,d(t){r&&r.d(t),t&&p(e)}}}function Ee(n,e,r){let t;ee(n,Y,i=>r(0,t=i));const s=Array.from({length:7},(i,o)=>o+1);return[t,s]}class Be extends q{constructor(e){super(),Z(this,e,Ee,Me,I,{})}}String.prototype.replaceBetween=function(n,e,r){const t=this.slice(0,n),s=this.slice(e+1,this.length);return`${t}${r}${s}`};String.prototype.blockify=function(n,e){let r=[],t=[];for(let s=0;s<this.length;s++)n.test(this[s])?r.push(s):e.test(this[s]);for(let s=0;s<r.length;s++){let i=0;for(let o=r[s]+1;o<this.length;o++)if(n.test(this[o]))i+=1;else if(e.test(this[o])&&i!=0)i-=1;else if(e.test(this[o])&&i==0){let a=r[s],c=o;t.push([a,c,this.slice(a+1,c)]);break}}return t};function J(n){return n.includes("AND")?J(n.replace("AND","and")):n.includes("OR")?J(n.replace("OR","or")):n.includes("NOT")?J(n.replace("NOT","not")):n.includes("^")?J(n.replace("^","**")):n.includes("MOD")?J(n.replace("MOD","%")):n.includes("DIV")?J(n.replace("DIV","//")):n}function ce(n){return n.includes("//")?ce(n.replace("//","#")):n}function Qe(n){const e=/^(?:const|let|var)\s(.*?)$/;return e.test(n)?n.match(e)[1]:n}function te(n){if(n=n.replaceAll("real(","float("),/bool\s*\((.*?)\)/.test(n)){const e=/bool\s*\((.*?)\)/.exec(n),r=e[1].replace(/'|"/g,"").trim();if(["True","true"].includes(r))return te(n.replaceAll(e[0],"True"));if(["False","false"].includes(r))return te(n.replaceAll(e[0],"False"))}return n}function U(n){if(/\)\.length/.test(n)){let t=0,s=n.indexOf(").length"),i=n.blockify(/\(/,/\)/);for(let a=0;a<i.length;a++)if(i[a][1]==s){t=i[a][0];break}let o=null;for(let a=t-1;a>=0&&/\w/.test(n[a]);a--)o=a;if(o!=null){const a=[o,s+7],c=/(.*?)\((.*?)\)\.length/.exec(n.slice(a[0],a[1]+1)),f=`len(${c[1]}(${c[2]}))`;return U(n.replaceBetween(...a,f))}else{const a=[t,s+7],f=`len(${/\((.*?)\)\.length/.exec(n.slice(a[0],a[1]+1))[1]})`;return U(n.replaceBetween(...a,f))}}else if(/\.length/.test(n)){const t=/([\w'"]+)\.length/.exec(n),s=[t.index,t.index-1+t[0].length],i=`len(${t[1]})`;return U(n.replaceBetween(...s,i))}else if(/\.substring\((.*?),(.*?)\)/.test(n)){const t=/\.substring\((.*?),(.*?)\)/.exec(n),s=[t.index,t.index-1+t[0].length],i=`[${t[1]},${t[2]}]`;return U(n.replaceBetween(...s,i))}else if(/\.left/.test(n)){const t=/\.left\((.*?)\)/.exec(n),s=[t.index,t.index-1+t[0].length],i=`[:${t[1]}]`;return U(n.replaceBetween(...s,i))}else if(/\.right/.test(n)){const t=/\.right\((.*?)\)/.exec(n),s=[t.index,t.index-1+t[0].length],i=`[-${t[1]}:]`;return U(n.replaceBetween(...s,i))}const e=[".upper",".lower","ASC","CHR"],r=[".upper()",".lower()","ord","chr"];for(let t=0;t<e.length;t++)n=n.replaceAll(e[t],r[t]);return n}function je(n){if(/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.test(n)){const e=/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.exec(n),r=`${e[1]} = [[0 for i in range(${e[2]})] for j in range(${e[3]})]`;return n.replace(e[0],r)}else if(/^array\s*(\w+)\[(.*?)\](?!=)/.test(n)){const e=/^array\s*(\w+)\[(.*?)\](?!=)/.exec(n),r=`${e[1]} = [0 for i in range(${e[2]})]`;return n.replace(e[0],r)}else if(/(\w+)\[(.*?),(.*?)\]/.test(n)){const e=/(\w+)\[(.*?),(.*?)\]/.exec(n),r=`${e[1]}[${e[2].trim()}][${e[3].trim()}]`;return n.replace(e[0],r)}return n}function ue(n){if(/random\((.*?),(.*?)\)/.test(n)){re=!0;const e=n.match(/random\((.*?),(.*?)\)/),r=`randint(${e[1].trim()}, ${e[2].trim()})`;return ue(n.replace(e[0],r))}return n}function Je(n){return n.includes("console.writeline")?n.replaceAll("console.writeline","print"):n.includes("console.log")?n.replaceAll("console.log","print"):/^print\s*\((.*?)\)$/.test(n)?`print(${/^print\s*\((.*?)\)$/.exec(n)[1]})`:n}function Ue(n,e){for(let o=e;o<l.length;o++){let[a,c,f,u]=[l.indexOf(l[o]),...l[o]];if(c=="pseudo"&&f==n&&u.includes("next")){l[a]=["python",n,"REMOVED"];break}}let r=l[e][2],t=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?):*$/,s=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?):*$/,i=/^for\s+(.*?)\s+in\s+range\s*\((.*?),(.*?)\):*/;if(t.test(r)){let[o,a,c]=r.match(t).slice(-3);l[e][0]="python",l[e][2]=`for ${o} in range(${a}, ${c}):`}else if(s.test(r)){let[o,a,c,f]=r.match(s).slice(-4);l[e][0]="python",l[e][2]=`for ${o} in range(${a}, ${c}, ${f}):`}else if(i.test(r)){let[o,a,c]=r.match(i).slice(-3);l[e][2]=`for ${o} in range(${a}, ${c}):`}else{const o=`line: {${e}} code: {${l[e][2]}}
Please declare for loops as specified by the OCR guide:

e.g.,
for i=0 to 9
  ...
next i

for i=2 to 10 step 2
  ...
next i`;alert(o),console.log("hello"),ne=!0}}function Fe(n,e){for(let s=e;s<l.length;s++){let[i,o,a,c]=[l.indexOf(l[s]),...l[s]];if(o=="pseudo"&&a==n&&c=="endwhile"){l[i]=["python",n,"REMOVED"];break}}let r=l[e][2],t=r.match(/^while(.*?)$/)[1].trim();t.endsWith(":")?r=`while ${t}`:r=`while ${t}:`,l[e]=["python",n,r]}function ze(n,e){for(let r=e;r<l.length;r++){let[t,s,i,o]=[l.indexOf(l[r]),...l[r]];if(s=="pseudo"&&i==n&&/^until(.*?)$/.test(o)){l[t]=["python",n,"REMOVED"],l[e]=["python",n,"while True:"];let c=o.match(/^until(.*?)$/)[1].trim();l.splice(t,0,["python",n+4,"break"]),l.splice(t,0,["python",n+2,`if ${c}:`]),l.splice(t,0,["python",n+2,""]);break}}}function He(n,e){for(let t=e;t<l.length;t++){let[s,i,o,a]=[l.indexOf(l[t]),...l[t]];const c=i=="pseudo"&&o==n;if(c&&a.match(/^elseif(.*?)then$/)){let f=a.match(/^elseif(.*?)then$/)[1].trim();l[s]=["python",n,`elif ${f}:`]}else if(c&&(a=="else"||a=="else:"))l[s]=["python",n,"else:"];else if(c&&a==="endif"){l[s]=["python",n,"REMOVED"];break}}let r=l[e][2];if(/^if(.*?)then$/.test(r))r=`if ${r.match(/^if(.*?)then$/)[1].trim()}:`;else if(/^if(.*?)$/.test(r)){let t=r.match(/^if(.*?)$/)[1].trim();t.endsWith(":")?r=`if ${t}`:r=`if ${t}:`}l[e]=["python",n,r]}function We(n,e){for(let t=e;t<l.length;t++){let[s,i,o,a]=[l.indexOf(l[t]),...l[t]];if(i=="pseudo"&&o==n&&a=="endprocedure"){l[s]=["python",n,"REMOVED"];break}}let r=l[e][2].match(/^procedure(.*)$/)[1].trim();l[e]=["python",n,`def ${r}:`]}function Ke(n,e){for(let t=e;t<l.length;t++){let[s,i,o,a]=[l.indexOf(l[t]),...l[t]];if(i=="pseudo"&&o==n&&a=="endfunction"){l[s]=["python",n,"REMOVED"];break}}let r=l[e][2].match(/^function(.*)$/)[1].trim();l[e]=["python",n,`def ${r}:`]}function Le(n){l=n,re=!1,ne=!1;for(let e=0;e<l.length;e++){let[r,t,s,i]=[l.indexOf(l[e]),...l[e]];t=="pseudo"&&i!=""&&i!="REMOVED"&&(l[r][2]=ce(l[r][2]),l[r][2]=J(l[r][2]),l[r][2]=Qe(l[r][2]),l[r][2]=te(l[r][2]),l[r][2]=U(l[r][2]),l[r][2]=je(l[r][2]),l[r][2]=ue(l[r][2]),l[r][2]=Je(l[r][2]),/^for(.*?)$/.test(l[r][2])?Ue(s,r):/^while(.*?)$/.test(l[r][2])?Fe(s,r):/^do(.*?)$/.test(l[r][2])?ze(s,r):/^if(.*?)$/.test(l[r][2])?He(s,r):/^procedure(.*?)$/.test(i)?We(s,r):/^function(.*?)$/.test(i)&&Ke(s,r))}return re==!0&&(l.unshift(["python",0,""]),l.unshift(["python",0,"from random import randint"])),ne==!0?0:l.filter(e=>e[2]!="REMOVED")}let l=null,re=!1,ne=!1;function Ye(n){let e,r,t,s,i,o,a,c,f,u,v,m,w,x,V,A,G,k,_,y;return u=new Oe({}),u.$on("vPPP",n[0]),u.$on("vPG",n[1]),u.$on("cPTP",n[2]),w=new Ae({}),_=new Be({}),{c(){e=b("style"),r=E(`@font-face {\r
      font-family: 'cabin';\r
      src: url("./Cabin-VariableFont_wdth,wght.ttf");\r
    }\r
    ::-webkit-scrollbar             { height: 0.2rem; width: 0.2rem  }\r
    ::-webkit-scrollbar-track       { background: rgb(206, 206, 206) }\r
    ::-webkit-scrollbar-thumb       { background: rgb(136, 136, 136) }\r
    ::-webkit-scrollbar-thumb:hover { background: rgb(85, 85, 85)    }\r
  `),t=b("script"),i=b("script"),a=b("script"),f=C(),z(u.$$.fragment),v=C(),m=b("main"),z(w.$$.fragment),x=C(),V=b("div"),A=C(),G=b("div"),k=C(),z(_.$$.fragment),this.h()},l(g){const O=be("svelte-1hctcm2",document.head);e=$(O,"STYLE",{});var L=P(e);r=B(L,`@font-face {\r
      font-family: 'cabin';\r
      src: url("./Cabin-VariableFont_wdth,wght.ttf");\r
    }\r
    ::-webkit-scrollbar             { height: 0.2rem; width: 0.2rem  }\r
    ::-webkit-scrollbar-track       { background: rgb(206, 206, 206) }\r
    ::-webkit-scrollbar-thumb       { background: rgb(136, 136, 136) }\r
    ::-webkit-scrollbar-thumb:hover { background: rgb(85, 85, 85)    }\r
  `),L.forEach(p),t=$(O,"SCRIPT",{src:!0,integrity:!0,crossorigin:!0,referrerpolicy:!0});var D=P(t);D.forEach(p),i=$(O,"SCRIPT",{src:!0,integrity:!0,crossorigin:!0,referrerpolicy:!0});var de=P(i);de.forEach(p),a=$(O,"SCRIPT",{src:!0,integrity:!0,crossorigin:!0,referrerpolicy:!0});var fe=P(a);fe.forEach(p),O.forEach(p),f=R(g),H(u.$$.fragment,g),v=R(g),m=$(g,"MAIN",{class:!0});var M=P(m);H(w.$$.fragment,M),x=R(M),V=$(M,"DIV",{id:!0,class:!0}),P(V).forEach(p),A=R(M),G=$(M,"DIV",{id:!0,class:!0}),P(G).forEach(p),k=R(M),H(_.$$.fragment,M),M.forEach(p),this.h()},h(){document.title="Pseudocode to Python Transpiler",F(t.src,s="https://cdnjs.cloudflare.com/ajax/libs/ace/1.12.5/ace.js")||d(t,"src",s),d(t,"integrity","sha512-gLQA+KKlMRzGRNhdvGX+3F5UHojWkIIKvG2lNQk0ZM5QUbdG17/hDobp06zXMthrJrd4U1+boOEACntTGlPjJQ=="),d(t,"crossorigin","anonymous"),d(t,"referrerpolicy","no-referrer"),F(i.src,o="https://cdnjs.cloudflare.com/ajax/libs/ace/1.12.5/theme-dracula.min.js")||d(i,"src",o),d(i,"integrity","sha512-XzFsZJNE1AU2unPycw2UaT32KTSB76GPZDWi/CkO1P3f0ctnnYHop1iFI5aIVFrArykenccug+QI629Gp+vORg=="),d(i,"crossorigin","anonymous"),d(i,"referrerpolicy","no-referrer"),F(a.src,c="https://cdnjs.cloudflare.com/ajax/libs/ace/1.12.5/mode-python.min.js")||d(a,"src",c),d(a,"integrity","sha512-W1k0SdTb7FU3nxWYkBLQVhTC8b8BU6Je3deBSnLm/dSQ956goMMnL+NYi2SXse1i7k0eUJNMNycTvbEdrJmEFw=="),d(a,"crossorigin","anonymous"),d(a,"referrerpolicy","no-referrer"),d(V,"id","pseudoEditor"),d(V,"class","svelte-tt2367"),d(G,"id","pythonEditor"),d(G,"class","svelte-tt2367"),d(m,"class","svelte-tt2367")},m(g,O){h(document.head,e),h(e,r),h(document.head,t),h(document.head,i),h(document.head,a),S(g,f,O),W(u,g,O),S(g,v,O),S(g,m,O),W(w,m,null),h(m,x),h(m,V),h(m,A),h(m,G),h(m,k),W(_,m,null),y=!0},p:T,i(g){y||(j(u.$$.fragment,g),j(w.$$.fragment,g),j(_.$$.fragment,g),y=!0)},o(g){Q(u.$$.fragment,g),Q(w.$$.fragment,g),Q(_.$$.fragment,g),y=!1},d(g){p(e),p(t),p(i),p(a),g&&p(f),K(u,g),g&&p(v),g&&p(m),K(w),K(_)}}}function qe(n,e,r){let t,s;ee(n,Y,u=>r(5,t=u)),ee(n,ve,u=>r(6,s=u));let i,o;$e(()=>{i=ace.edit("pseudoEditor"),i.setTheme("ace/theme/dracula"),i.session.setTabSize(2),i.setFontSize(16),i.resize(),i.setValue(""),o=ace.edit("pythonEditor"),o.setTheme("ace/theme/dracula"),o.session.setMode("ace/mode/python"),o.session.setTabSize(2),o.setFontSize(16),o.resize()});function a(){i.setValue(s)}function c(){Y.update(u=>u=u==!1),console.log(t)}function f(){const v=i.getValue().split(`
`).map(x=>["pseudo",x.search(/\S|$/),x.trim()]),w=Le(v).map(x=>{let V=x[1],A=x[2];return`${" ".repeat(V)}${A}`});o.setValue(w.join(`
`),-1)}return[a,c,f]}class De extends q{constructor(e){super(),Z(this,e,qe,Ye,I,{})}}export{De as default};
