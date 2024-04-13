import{S as I,i as L,s as D,J as $e,k as P,q as M,a as R,l as w,m as S,r as E,h as p,c as G,n as $,b as O,G as _,K,u as Y,H as C,N as _e,I as te,V as ye,P as F,e as oe,O as ve,y as B,U as be,z as j,p as Pe,A as Q,g as z,d as H,B as J,w as le}from"../chunks/index.d631ed7d.js";import{C as ae,p as pe}from"../chunks/index.86a5abd7.js";/* empty css                      */import{w as we}from"../chunks/index.8fad4664.js";import{p as ce}from"../chunks/python.735f3628.js";const N=we(!1);function ke(t){let e,r,n="Zygon"+(t[0]>t[3][0]?": Pseudocode to Python Transpiler ":"")+"🦑",s,o,i,l="View Past Paper"+(t[0]>t[3][1]?"Pseudocode":""),u,m,f,y=(t[1]==!1?"Show":"Hide")+(t[0]>t[3][1]?" Pseudocode Guide (J277)":" Guide"),h,k,x,g=t[0]>t[3][1]?"Transpile Pseudocode to Python":"Transpile",c,v,A;return $e(t[4]),{c(){e=P("nav"),r=P("span"),s=M(n),o=R(),i=P("button"),u=M(l),m=R(),f=P("button"),h=M(y),k=R(),x=P("button"),c=M(g),this.h()},l(d){e=w(d,"NAV",{class:!0});var b=S(e);r=w(b,"SPAN",{class:!0});var ne=S(r);s=E(ne,n),ne.forEach(p),o=G(b),i=w(b,"BUTTON",{class:!0});var se=S(i);u=E(se,l),se.forEach(p),m=G(b),f=w(b,"BUTTON",{class:!0});var re=S(f);h=E(re,y),re.forEach(p),k=G(b),x=w(b,"BUTTON",{class:!0});var ie=S(x);c=E(ie,g),ie.forEach(p),b.forEach(p),this.h()},h(){$(r,"class","svelte-1dnuymz"),$(i,"class","svelte-1dnuymz"),$(f,"class","svelte-1dnuymz"),$(x,"class","svelte-1dnuymz"),$(e,"class","svelte-1dnuymz")},m(d,b){O(d,e,b),_(e,r),_(r,s),_(e,o),_(e,i),_(i,u),_(e,m),_(e,f),_(f,h),_(e,k),_(e,x),_(x,c),v||(A=[K(window,"resize",t[4]),K(i,"click",t[5]),K(f,"click",t[6]),K(x,"click",t[7])],v=!0)},p(d,[b]){b&1&&n!==(n="Zygon"+(d[0]>d[3][0]?": Pseudocode to Python Transpiler ":"")+"🦑")&&Y(s,n),b&1&&l!==(l="View Past Paper"+(d[0]>d[3][1]?"Pseudocode":""))&&Y(u,l),b&3&&y!==(y=(d[1]==!1?"Show":"Hide")+(d[0]>d[3][1]?" Pseudocode Guide (J277)":" Guide"))&&Y(h,y),b&1&&g!==(g=d[0]>d[3][1]?"Transpile Pseudocode to Python":"Transpile")&&Y(c,g)},i:C,o:C,d(d){d&&p(e),v=!1,_e(A)}}}function xe(t,e,r){let n;te(t,N,y=>r(1,n=y));const s=ye();let o;const i=[1115,774];function l(){r(0,o=window.innerWidth)}return[o,n,s,i,l,()=>s("vPPP"),()=>s("vPG"),()=>s("cPTP")]}class Ae extends I{constructor(e){super(),L(this,e,xe,ke,D,{})}}function Se(t){let e,r,n,s,o,i,l,u,m,f,y,h,k=t[0]?"Pseudocode Guide":"Python",x;return{c(){e=P("div"),r=P("img"),s=R(),o=P("span"),i=M("Pseudocode"),l=R(),u=P("div"),m=P("img"),y=R(),h=P("span"),x=M(k),this.h()},l(g){e=w(g,"DIV",{class:!0});var c=S(e);r=w(c,"IMG",{alt:!0,src:!0,class:!0}),s=G(c),o=w(c,"SPAN",{class:!0});var v=S(o);i=E(v,"Pseudocode"),v.forEach(p),c.forEach(p),l=G(g),u=w(g,"DIV",{class:!0});var A=S(u);m=w(A,"IMG",{alt:!0,src:!0,class:!0}),y=G(A),h=w(A,"SPAN",{class:!0});var d=S(h);x=E(d,k),d.forEach(p),A.forEach(p),this.h()},h(){$(r,"alt",""),F(r.src,n=X)||$(r,"src",n),$(r,"class","svelte-1j72065"),$(o,"class","svelte-1j72065"),$(e,"class","svelte-1j72065"),$(m,"alt",""),F(m.src,f=t[0]?X:ce)||$(m,"src",f),$(m,"class","svelte-1j72065"),$(h,"class","svelte-1j72065"),$(u,"class","svelte-1j72065")},m(g,c){O(g,e,c),_(e,r),_(e,s),_(e,o),_(o,i),O(g,l,c),O(g,u,c),_(u,m),_(u,y),_(u,h),_(h,x)},p(g,[c]){c&1&&!F(m.src,f=g[0]?X:ce)&&$(m,"src",f),c&1&&k!==(k=g[0]?"Pseudocode Guide":"Python")&&Y(x,k)},i:C,o:C,d(g){g&&p(e),g&&p(l),g&&p(u)}}}const X="assets/pseudocode2python/ocr-logo.svg";function Oe(t,e,r){let n;return te(t,N,s=>r(0,n=s)),[n]}class Re extends I{constructor(e){super(),L(this,e,Oe,Se,D,{})}}function ue(t,e,r){const n=t.slice();return n[1]=e[r],n}function fe(t){let e,r=[...Array(7).keys()],n=[];for(let s=0;s<r.length;s+=1)n[s]=de(ue(t,r,s));return{c(){e=P("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=w(s,"DIV",{class:!0});var o=S(e);for(let i=0;i<n.length;i+=1)n[i].l(o);o.forEach(p),this.h()},h(){$(e,"class","svelte-ia0vks")},m(s,o){O(s,e,o);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(e,null)},p(s,o){if(o&0){r=[...Array(7).keys()];let i;for(i=0;i<r.length;i+=1){const l=ue(s,r,i);n[i]?n[i].p(l,o):(n[i]=de(l),n[i].c(),n[i].m(e,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=r.length}},d(s){s&&p(e),ve(n,s)}}}function de(t){let e,r;return{c(){e=P("img"),this.h()},l(n){e=w(n,"IMG",{alt:!0,src:!0}),this.h()},h(){$(e,"alt",""),F(e.src,r="assets/pseudocode2python/Pseudocode-Guide-J277/0"+t[1]+".jpg")||$(e,"src",r)},m(n,s){O(n,e,s)},p:C,d(n){n&&p(e)}}}function Ge(t){let e,r=t[0]&&fe(t);return{c(){r&&r.c(),e=oe()},l(n){r&&r.l(n),e=oe()},m(n,s){r&&r.m(n,s),O(n,e,s)},p(n,[s]){n[0]?r?r.p(n,s):(r=fe(n),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:C,o:C,d(n){r&&r.d(n),n&&p(e)}}}function Ve(t,e,r){let n;return te(t,N,s=>r(0,n=s)),[n]}class Te extends I{constructor(e){super(),L(this,e,Ve,Ge,D,{})}}function Ce(t){return t.split(/\n/).map(e=>[!1,e.search(/\S|$/),e.trim()])}function Me(t){return t.filter(e=>e[2]!="REMOVED").map(e=>" ".repeat(e[1])+e[2]).join(`
`)}String.prototype.replaceBetween=function(t,e,r){const n=this.slice(0,t),s=this.slice(e+1,this.length);return`${n}${r}${s}`};String.prototype.blockify=function(t,e){let r=[],n=[];for(let s=0;s<this.length;s++)t.test(this[s])?r.push(s):e.test(this[s]);for(let s=0;s<r.length;s++){let o=0;for(let i=r[s]+1;i<this.length;i++)if(t.test(this[i]))o+=1;else if(e.test(this[i])&&o!=0)o-=1;else if(e.test(this[i])&&o==0){let l=r[s],u=i;n.push([l,u,this.slice(l+1,u)]);break}}return n};const Ee=[["AND","and"],["OR","or"],["NOT","not"],["^","**"],["MOD","%"],["DIV","//"]];function Be(t){for(const e of Ee)t=t.replaceAll(e[0],e[1]);return t}function me(t){return t.includes("//")?me(t.replace("//","#")):t}function je(t){const e=/^(?:const|let|var)\s(.*?)$/;return e.test(t)?t.match(e)[1]:t}function ee(t){if(t=t.replaceAll("real(","float("),/bool\s*\((.*?)\)/.test(t)){const e=/bool\s*\((.*?)\)/.exec(t),r=e[1].replace(/'|"/g,"").trim();if(["True","true"].includes(r))return ee(t.replaceAll(e[0],"True"));if(["False","false"].includes(r))return ee(t.replaceAll(e[0],"False"))}return t}function T(t){if(/\)\.length/.test(t)){let n=0,s=t.indexOf(").length"),o=t.blockify(/\(/,/\)/);for(let l=0;l<o.length;l++)if(o[l][1]==s){n=o[l][0];break}let i=null;for(let l=n-1;l>=0&&/\w/.test(t[l]);l--)i=l;if(i!=null){const l=[i,s+7],u=/(.*?)\((.*?)\)\.length/.exec(t.slice(l[0],l[1]+1)),m=`len(${u[1]}(${u[2]}))`;return T(t.replaceBetween(...l,m))}else{const l=[n,s+7],m=`len(${/\((.*?)\)\.length/.exec(t.slice(l[0],l[1]+1))[1]})`;return T(t.replaceBetween(...l,m))}}else if(/\.length/.test(t)){const n=/([\w'"]+)\.length/.exec(t),s=[n.index,n.index-1+n[0].length],o=`len(${n[1]})`;return T(t.replaceBetween(...s,o))}else if(/\.substring\((.*?),(.*?)\)/.test(t)){const n=/\.substring\((.*?),(.*?)\)/.exec(t),s=[n.index,n.index-1+n[0].length],o=`[${n[1]},${n[2]}]`;return T(t.replaceBetween(...s,o))}else if(/\.left/.test(t)){const n=/\.left\((.*?)\)/.exec(t),s=[n.index,n.index-1+n[0].length],o=`[:${n[1]}]`;return T(t.replaceBetween(...s,o))}else if(/\.right/.test(t)){const n=/\.right\((.*?)\)/.exec(t),s=[n.index,n.index-1+n[0].length],o=`[-${n[1]}:]`;return T(t.replaceBetween(...s,o))}const e=[".upper",".lower","ASC","CHR"],r=[".upper()",".lower()","ord","chr"];for(let n=0;n<e.length;n++)t=t.replaceAll(e[n],r[n]);return t}function Qe(t){if(/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.test(t)){const e=/^array\s*(\w+)\[(.*?),(.*?)\](?!=)/.exec(t),r=`${e[1]} = [[0 for i in range(${e[2]})] for j in range(${e[3]})]`;return t.replace(e[0],r)}else if(/^array\s*(\w+)\[(.*?)\](?!=)/.test(t)){const e=/^array\s*(\w+)\[(.*?)\](?!=)/.exec(t),r=`${e[1]} = [0 for i in range(${e[2]})]`;return t.replace(e[0],r)}else if(/(\w+)\[(.*?),(.*?)\]/.test(t)){const e=/(\w+)\[(.*?),(.*?)\]/.exec(t),r=`${e[1]}[${e[2].trim()}][${e[3].trim()}]`;return t.replace(e[0],r)}return t}function he(t){if(/random\((.*?),(.*?)\)/.test(t)){ge=!0;const e=t.match(/random\((.*?),(.*?)\)/),r=`randint(${e[1].trim()}, ${e[2].trim()})`;return he(t.replace(e[0],r))}return t}function ze(t){return t.includes("console.writeline")?t.replaceAll("console.writeline","print"):t.includes("console.log")?t.replaceAll("console.log","print"):/^print\s*\((.*?)\)$/.test(t)?`print(${/^print\s*\((.*?)\)$/.exec(t)[1]})`:t}function Z(t,e,r){return!t&&e==r}function He(t,e){for(let o=e;o<a.length;o++){let[i,l,u]=[...a[o]];if(Z(i,l,t)&&u.includes("next")){a[o]=[!0,t,"REMOVED"];break}}const r=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s*:?$/,n=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?)\s*:?$/;let s=a[e][2];if(n.test(s)){let[o,i,l,u]=n.exec(s).slice(-4);s=`for ${o} in range(${i}, ${l}, ${u}):`}else if(r.test(s)){let[o,i,l]=r.exec(s).slice(-3);s=`for ${o} in range(${i}, ${l}):`}a[e]=[!0,t,s]}function Je(t,e){for(let s=e;s<a.length;s++){let[o,i,l]=[...a[s]];if(Z(o,i,t)&&l=="endwhile"){a[s]=[!0,t,"REMOVED"];break}}let n=a[e][2].match(/^while(.*?):?$/)[1].trim();a[e]=[!0,t,`while ${n}:`]}function qe(t,e){for(let r=e;r<a.length;r++){let[n,s,o]=[...a[r]];if(Z(n,s,t)&&/^until(.*?)$/.test(o)){a[r]=[!0,t,"REMOVED"],a[e]=[!0,t,"while True:"];let i=o.match(/^until(.*?)$/)[1].trim();a.splice(r,0,[!0,t+4,"break"]),a.splice(r,0,[!0,t+2,`if ${i}:`]),a.splice(r,0,[!0,t+2,""]);break}}}const q={selection:{if:/^if\s+(.*?)\s*(?:then)?:?$/,elif:/^(?:else\s*if|elif)\s*(.*?)\s*(?:then)?:?$/,else:/^else:?/,end:/^end\s*if$/}};function Ue(t,e){var n;for(let s=e;s<a.length;s++){const o=a[s][0],i=a[s][1],l=a[s][2];if(Z(o,i,t)){if(q.selection.elif.test(l))a[s][0]=!0,a[s][2]=`elif ${(n=l.match(q.selection.elif))==null?void 0:n[1].trim()}:`;else if(q.selection.else.test(l))a[s][0]=!0,a[s][2]="else:";else if(q.selection.end.test(l)){a[s][0]=!0,a[s][2]="REMOVED";break}}}const r=a[e][2].match(q.selection.if);r!==null&&(a[e][0]=!0,a[e][2]=`if ${r[1].trim()}:`)}function Ye(t,e){for(let n=e;n<a.length;n++){let[s,o,i]=[...a[n]];if(Z(s,o,t)&&/^end(procedure|function)$/.test(i)){a[n]=[!0,t,"REMOVED"];break}}let r=/^(?:procedure|function)\s(.*?)\s*:?$/.exec(a[e][2]);a[e][0]=!0,a[e][2]=`def ${r[1]}:`}function Ze(t){a=t;for(let e=0;e<a.length;e++){const[r,n,s]=[...a[e]];!r&&s!=""&&s!="REMOVED"&&(a[e][2]=me(a[e][2]),a[e][2]=Be(a[e][2]),a[e][2]=je(a[e][2]),a[e][2]=ee(a[e][2]),a[e][2]=T(a[e][2]),a[e][2]=Qe(a[e][2]),a[e][2]=he(a[e][2]),a[e][2]=ze(a[e][2]),/^for(.*?)$/.test(a[e][2])?He(n,e):/^while(.*?)$/.test(a[e][2])?Je(n,e):/^do(.*?)$/.test(a[e][2])?qe(n,e):/^if(.*?)$/.test(a[e][2])?Ue(n,e):/^(?:procedure|function)(.*?)$/.test(s)&&Ye(n,e))}return ge&&(a.unshift([!0,0,""]),a.unshift([!0,0,"from random import randint"])),a}var a=[];let ge=!1;String.prototype.isIdentifier=function(){return/^[a-zA-Z_]\w*$/.test(this)};String.prototype.isStringInteger=function(){return Number.isInteger(Number(this))};function Ke(t,e,r){const n=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s*:?$/,s=/^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?)\s*:?$/;if(s.test(r)){let[o,i,l,u]=s.exec(r).slice(-4);return o.isIdentifier()?!i.isIdentifier()&&!i.isStringInteger()?(V=`Error on line ${e}
    ${i} isn't a valid identifier/number`,!1):!l.isIdentifier()&&!l.isStringInteger()?(V=`Error on line ${e}
    ${l} isn't a valid identifier/number`,!1):!u.isIdentifier()&&!u.isStringInteger()?(V=`Error on line ${e}
    ${u} isn't a valid identifier/number`,!1):!0:(V=`Error on line ${e}
    ${o} isn't a valid identifier`,!1)}else if(n.test(r)){let[o,i,l]=n.exec(r).slice(-3);return o.isIdentifier()?!i.isIdentifier()&&!Number.isInteger(Number(i))?(V=`Error on line ${e}
    ${i} isn't a valid identifier/number`,!1):!l.isIdentifier()&&!Number.isInteger(Number(l))?(V=`Error on line ${e}
    ${l} isn't a valid identifier/number`,!1):!0:(V=`Error on line ${e}
    ${o} isn't a valid identifier`,!1)}else return V=`Error on line ${e}
    ${r}

		Please declare for loops as specified by the OCR guide:
		for i=0 to 9
		...
		next i`,!1}function We(t){W=t;for(let e=0;e<W.length;e++){const[r,n,s]=[...W[e]];if(/^for(.*?)$/.test(W[e][2])&&!Ke(n,e,s))return V}return V}let W=[],V="";const Fe=`// 2020 Sample assessment materials J277/02

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
endif`,U={toArray:Ce,toString:Me,transpiler:Ze,validator:We,pastPaperPseudocode:Fe};function Ie(t){let e,r,n,s,o,i,l,u,m,f,y,h,k;r=new Ae({}),r.$on("vPPP",t[2]),r.$on("vPG",t[3]),r.$on("cPTP",t[4]),o=new Te({}),u=new Re({});let x={};f=new ae({props:x}),t[5](f);let g={filetype:pe()};return h=new ae({props:g}),t[6](h),{c(){e=R(),B(r.$$.fragment),n=R(),s=P("main"),B(o.$$.fragment),i=R(),l=P("main"),B(u.$$.fragment),m=R(),B(f.$$.fragment),y=R(),B(h.$$.fragment),this.h()},l(c){be("svelte-q1q65",document.head).forEach(p),e=G(c),j(r.$$.fragment,c),n=G(c),s=w(c,"MAIN",{style:!0,class:!0});var A=S(s);j(o.$$.fragment,A),A.forEach(p),i=G(c),l=w(c,"MAIN",{class:!0});var d=S(l);j(u.$$.fragment,d),m=G(d),j(f.$$.fragment,d),y=G(d),j(h.$$.fragment,d),d.forEach(p),this.h()},h(){document.title="Zygon",Pe(s,"position","absolute"),$(s,"class","svelte-1rxrw84"),$(l,"class","svelte-1rxrw84")},m(c,v){O(c,e,v),Q(r,c,v),O(c,n,v),O(c,s,v),Q(o,s,null),O(c,i,v),O(c,l,v),Q(u,l,null),_(l,m),Q(f,l,null),_(l,y),Q(h,l,null),k=!0},p(c,[v]){const A={};f.$set(A);const d={};h.$set(d)},i(c){k||(z(r.$$.fragment,c),z(o.$$.fragment,c),z(u.$$.fragment,c),z(f.$$.fragment,c),z(h.$$.fragment,c),k=!0)},o(c){H(r.$$.fragment,c),H(o.$$.fragment,c),H(u.$$.fragment,c),H(f.$$.fragment,c),H(h.$$.fragment,c),k=!1},d(c){c&&p(e),J(r,c),c&&p(n),c&&p(s),J(o),c&&p(i),c&&p(l),J(u),t[5](null),J(f),t[6](null),J(h)}}}function Le(t,e,r){let n,s;function o(){n.setText(U.pastPaperPseudocode)}function i(){N.update(f=>!f)}function l(){const f=U.toArray(n.getText()),y=U.validator(f);if(y===""){s.setSyntax(pe());const h=U.transpiler(f);s.setText(U.toString(h))}else s.setSyntax([]),s.setText(y)}function u(f){le[f?"unshift":"push"](()=>{n=f,r(0,n)})}function m(f){le[f?"unshift":"push"](()=>{s=f,r(1,s)})}return[n,s,o,i,l,u,m]}class nt extends I{constructor(e){super(),L(this,e,Le,Ie,D,{})}}export{nt as component};
