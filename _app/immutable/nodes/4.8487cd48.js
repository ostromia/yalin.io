import{S as R,i as G,s as T,k as v,q as J,l as y,m as b,r as K,h,n as _,b as z,G as m,H as w,J as O,a as k,c as x,p as V,K as Q,P as j,L as U,g as E,v as F,f as X,d as I,Q as Y,y as P,z as S,A as q,R as Z,T as ee,B as C,U as te}from"../chunks/index.ae98790d.js";/* empty css                      */import{p as se}from"../chunks/python.ac23f5ac.js";import{R as ae}from"../chunks/RepositoryCard.95e02321.js";function le(o){let e,s;return{c(){e=v("div"),s=J("berkay-yalin.io"),this.h()},l(l){e=y(l,"DIV",{class:!0});var t=b(e);s=K(t,"berkay-yalin.io"),t.forEach(h),this.h()},h(){_(e,"class","svelte-1qccnpa")},m(l,t){z(l,e,t),m(e,s)},p:w,i:w,o:w,d(l){l&&h(e)}}}class ie extends R{constructor(e){super(),G(this,e,null,le,T,{})}}const ne="/berkay-yalin.io/_app/immutable/assets/c.3d11262e.svg",re="/berkay-yalin.io/_app/immutable/assets/css3.fabb13ca.svg",oe="/berkay-yalin.io/_app/immutable/assets/flask.1a13c32f.svg",ce="/berkay-yalin.io/_app/immutable/assets/html5.50134a92.svg",ue="/berkay-yalin.io/_app/immutable/assets/javascript.2e76034d.svg",pe="/berkay-yalin.io/_app/immutable/assets/lua.00b83c2e.svg",he="/berkay-yalin.io/_app/immutable/assets/sass.11678ab2.svg",fe="/berkay-yalin.io/_app/immutable/assets/sqlite.92d65a8a.svg",de="/berkay-yalin.io/_app/immutable/assets/svelte.9ac587c3.svg",me="/berkay-yalin.io/_app/immutable/assets/typescript.43524f61.svg";function L(o,e,s){const l=o.slice();return l[3]=e[s],l}function A(o,e,s){const l=o.slice();return l[6]=e[s],l}function M(o){let e,s,l;return{c(){e=v("div"),s=v("img"),this.h()},l(t){e=y(t,"DIV",{class:!0});var a=b(e);s=y(a,"IMG",{alt:!0,class:!0,src:!0}),a.forEach(h),this.h()},h(){_(s,"alt",""),_(s,"class","devicon svelte-vbnnz9"),U(s.src,l=o[6])||_(s,"src",l),_(e,"class","devicon-div svelte-vbnnz9")},m(t,a){z(t,e,a),m(e,s)},p:w,d(t){t&&h(e)}}}function N(o){let e,s,l=o[1],t=[];for(let a=0;a<l.length;a+=1)t[a]=M(A(o,l,a));return{c(){e=v("div");for(let a=0;a<t.length;a+=1)t[a].c();s=k(),this.h()},l(a){e=y(a,"DIV",{class:!0});var n=b(e);for(let i=0;i<t.length;i+=1)t[i].l(n);s=x(n),n.forEach(h),this.h()},h(){_(e,"class","devicon-strip svelte-vbnnz9")},m(a,n){z(a,e,n);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(e,null);m(e,s)},p(a,n){if(n&2){l=a[1];let i;for(i=0;i<l.length;i+=1){const r=A(a,l,i);t[i]?t[i].p(r,n):(t[i]=M(r),t[i].c(),t[i].m(e,s))}for(;i<t.length;i+=1)t[i].d(1);t.length=l.length}},d(a){a&&h(e),j(t,a)}}}function _e(o){let e,s,l,t,a,n,i;O(o[2]);let r=[0,0],p=[];for(let u=0;u<2;u+=1)p[u]=N(L(o,r,u));return{c(){e=v("div"),s=v("div"),l=k(),t=v("div"),a=k();for(let u=0;u<2;u+=1)p[u].c();this.h()},l(u){e=y(u,"DIV",{id:!0,style:!0,class:!0});var f=b(e);s=y(f,"DIV",{id:!0,class:!0}),b(s).forEach(h),l=x(f),t=y(f,"DIV",{id:!0,class:!0}),b(t).forEach(h),a=x(f);for(let c=0;c<2;c+=1)p[c].l(f);f.forEach(h),this.h()},h(){_(s,"id","gradient-to-left"),_(s,"class","svelte-vbnnz9"),_(t,"id","gradient-to-right"),_(t,"class","svelte-vbnnz9"),_(e,"id","devicon-container"),V(e,"--inner-width",o[0]+"px"),_(e,"class","svelte-vbnnz9")},m(u,f){z(u,e,f),m(e,s),m(e,l),m(e,t),m(e,a);for(let c=0;c<2;c+=1)p[c]&&p[c].m(e,null);n||(i=Q(window,"resize",o[2]),n=!0)},p(u,[f]){if(f&2){r=[0,0];let c;for(c=0;c<2;c+=1){const $=L(u,r,c);p[c]?p[c].p($,f):(p[c]=N($),p[c].c(),p[c].m(e,null))}for(;c<2;c+=1)p[c].d(1)}f&1&&V(e,"--inner-width",u[0]+"px")},i:w,o:w,d(u){u&&h(e),j(p,u),n=!1,i()}}}function ge(o,e,s){const l=[ne,re,oe,ce,ue,pe,se,he,fe,de,me];let t;function a(){s(0,t=window.innerWidth)}return[t,l,a]}class ve extends R{constructor(e){super(),G(this,e,ge,_e,T,{})}}function B(o,e,s){const l=o.slice();return l[1]=e[s],l}function H(o){let e,s;const l=[o[1]];let t={};for(let a=0;a<l.length;a+=1)t=Y(t,l[a]);return e=new ae({props:t}),{c(){P(e.$$.fragment)},l(a){S(e.$$.fragment,a)},m(a,n){q(e,a,n),s=!0},p(a,n){const i=n&1?Z(l,[ee(a[1])]):{};e.$set(i)},i(a){s||(E(e.$$.fragment,a),s=!0)},o(a){I(e.$$.fragment,a),s=!1},d(a){C(e,a)}}}function ye(o){let e,s,l=o[0],t=[];for(let n=0;n<l.length;n+=1)t[n]=H(B(o,l,n));const a=n=>I(t[n],1,1,()=>{t[n]=null});return{c(){e=v("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=y(n,"DIV",{id:!0,class:!0});var i=b(e);for(let r=0;r<t.length;r+=1)t[r].l(i);i.forEach(h),this.h()},h(){_(e,"id","wrapper"),_(e,"class","svelte-1rq3xdq")},m(n,i){z(n,e,i);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null);s=!0},p(n,[i]){if(i&1){l=n[0];let r;for(r=0;r<l.length;r+=1){const p=B(n,l,r);t[r]?(t[r].p(p,i),E(t[r],1)):(t[r]=H(p),t[r].c(),E(t[r],1),t[r].m(e,null))}for(F(),r=l.length;r<t.length;r+=1)a(r);X()}},i(n){if(!s){for(let i=0;i<l.length;i+=1)E(t[i]);s=!0}},o(n){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)I(t[i]);s=!1},d(n){n&&h(e),j(t,n)}}}function be(o){return[[{path:"berkay-yalin/berkay-yalin.io",language:["Svelte"],description:"webpage & stuff",style:"flex: max(200px, 100%/4);"},{path:"berkay-yalin/promethium",description:"Library for calculating statistical distributions, written in pure Python with zero dependencies.",language:["Python"],style:"flex: max(400px, 100%/4);"},{path:"berkay-yalin/dotfiles",description:"trying to figure out how VimScript works",language:["Lua"],style:"flex: max(200px, 100%/4);"},{path:"berkay-yalin/scientific-computing-with-python",description:`My solution links to freeCodeCamp's "Scientific Computing with Python" course.`,language:["Python"],style:"flex: max(500px, 100%/4);"},{path:"berkay-yalin/zygon",description:"Transpile OCR GCSE & A-Level Pseudocode into Python",language:["TypeScript"],style:"flex: max(200px, 100%/4);"},{path:"berkay-yalin/svelte-github-repo-card",description:"Svelte component to showcase a GitHub repository.",language:["JavaScript"],style:"flex: max(300px, 100%/4);"},{path:"mikeroyal/Windows-11-Guide",description:"Windows 11 Guide. Though, most of the Tools, Programs, Resources will also work for Windows 10.",language:["PowerShell"],style:"flex: max(300px, 100%/4);"}]]}class $e extends R{constructor(e){super(),G(this,e,be,ye,T,{})}}function ke(o){let e,s,l,t,a,n,i,r,p,u,f,c,$,D;return l=new ie({}),i=new ve({}),$=new $e({}),{c(){e=k(),s=v("main"),P(l.$$.fragment),t=k(),a=v("div"),n=k(),P(i.$$.fragment),r=k(),p=v("div"),u=k(),f=v("div"),c=k(),P($.$$.fragment),this.h()},l(d){te("svelte-ay75oq",document.head).forEach(h),e=x(d),s=y(d,"MAIN",{class:!0});var g=b(s);S(l.$$.fragment,g),t=x(g),a=y(g,"DIV",{style:!0}),b(a).forEach(h),n=x(g),S(i.$$.fragment,g),r=x(g),p=y(g,"DIV",{style:!0}),b(p).forEach(h),u=x(g),f=y(g,"DIV",{style:!0}),b(f).forEach(h),c=x(g),S($.$$.fragment,g),g.forEach(h),this.h()},h(){document.title="berkay-yalin.io",V(a,"height","1rem"),V(p,"height","10vh"),V(f,"height","1rem"),_(s,"class","svelte-zyj27n")},m(d,W){z(d,e,W),z(d,s,W),q(l,s,null),m(s,t),m(s,a),m(s,n),q(i,s,null),m(s,r),m(s,p),m(s,u),m(s,f),m(s,c),q($,s,null),D=!0},p:w,i(d){D||(E(l.$$.fragment,d),E(i.$$.fragment,d),E($.$$.fragment,d),D=!0)},o(d){I(l.$$.fragment,d),I(i.$$.fragment,d),I($.$$.fragment,d),D=!1},d(d){d&&h(e),d&&h(s),C(l),C(i),C($)}}}class Ie extends R{constructor(e){super(),G(this,e,null,ke,T,{})}}export{Ie as component};
