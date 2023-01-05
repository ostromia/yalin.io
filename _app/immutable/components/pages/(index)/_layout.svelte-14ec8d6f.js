import{S as V,i as C,s as F,k as g,q as E,a as k,l as v,m as y,r as A,h as u,c as w,n as _,b as p,G as m,B as $,I as U,e as S,J as j,p as L,K as D,C as G,w as H,L as W,x as B,y as J,M as K,D as T,E as Y,F as x,f as q,t as z,z as O}from"../../../chunks/index-4939aa82.js";function M(a,e,l){const i=a.slice();return i[1]=e[l],i}function P(a){let e,l,i,n;return{c(){e=g("a"),l=g("img"),n=k(),this.h()},l(s){e=v(s,"A",{class:!0,style:!0,href:!0});var t=y(e);l=v(t,"IMG",{alt:!0,src:!0,class:!0}),n=w(t),t.forEach(u),this.h()},h(){_(l,"alt",""),j(l.src,i=a[1].src)||_(l,"src",i),_(l,"class","svelte-n28cs5"),_(e,"class","nav-image svelte-n28cs5"),L(e,"grid-area",a[1].id),_(e,"href",a[1].href)},m(s,t){p(s,e,t),m(e,l),m(e,n)},p:$,d(s){s&&u(e)}}}function Q(a){let e,l=a[1].id.charAt(0).toUpperCase()+a[1].id.slice(1)+"",i,n;return{c(){e=g("a"),i=E(l),n=k(),this.h()},l(s){e=v(s,"A",{class:!0,style:!0,href:!0});var t=y(e);i=A(t,l),n=w(t),t.forEach(u),this.h()},h(){_(e,"class","nav-text svelte-n28cs5"),L(e,"grid-area",a[1].id),_(e,"href",a[1].href)},m(s,t){p(s,e,t),m(e,i),m(e,n)},p:$,d(s){s&&u(e)}}}function R(a){let e;function l(s,t){if(s[1].type=="txt")return Q;if(s[1].type=="svg")return P}let i=l(a),n=i&&i(a);return{c(){n&&n.c(),e=S()},l(s){n&&n.l(s),e=S()},m(s,t){n&&n.m(s,t),p(s,e,t)},p(s,t){n&&n.p(s,t)},d(s){n&&n.d(s),s&&u(e)}}}function X(a){let e,l,i,n,s=a[0],t=[];for(let r=0;r<s.length;r+=1)t[r]=R(M(a,s,r));return{c(){e=g("nav"),l=g("a"),i=E("~/berkay-yalin.io"),n=k();for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=v(r,"NAV",{class:!0});var f=y(e);l=v(f,"A",{class:!0,id:!0,href:!0});var c=y(l);i=A(c,"~/berkay-yalin.io"),c.forEach(u),n=w(f);for(let d=0;d<t.length;d+=1)t[d].l(f);f.forEach(u),this.h()},h(){_(l,"class","nav-text svelte-n28cs5"),_(l,"id","nav-index"),_(l,"href","/"),_(e,"class","svelte-n28cs5")},m(r,f){p(r,e,f),m(e,l),m(l,i),m(e,n);for(let c=0;c<t.length;c+=1)t[c].m(e,null)},p(r,[f]){if(f&1){s=r[0];let c;for(c=0;c<s.length;c+=1){const d=M(r,s,c);t[c]?t[c].p(d,f):(t[c]=R(d),t[c].c(),t[c].m(e,null))}for(;c<t.length;c+=1)t[c].d(1);t.length=s.length}},i:$,o:$,d(r){r&&u(e),U(t,r)}}}function Z(a){return[[{type:"txt",id:"projects",href:"/projects"},{type:"txt",id:"articles",href:"/articles"},{type:"txt",id:"gists",href:"https://gist.github.com/berkay-yalin"},{type:"svg",id:"github",src:"devicon/github-original.svg",href:"https://github.com/berkay-yalin"}]]}class ee extends V{constructor(e){super(),C(this,e,Z,X,F,{})}}function te(a){let e,l,i,n,s,t,r,f,c;D(a[4]),n=new ee({});const d=a[3].default,h=G(d,a,a[2],null);return{c(){e=g("style"),l=E(`@font-face {
            font-family: "roboto";
            src: url("fonts/RobotoMono-VariableFont_wght.ttf");
        } /* Namespace.svelte */

        @font-face {
            font-family: "segoe";
            src: url("fonts/Segoe-UI.ttf");
        } /* Repositories.svelte */

        ::-webkit-scrollbar { width: 0.5vw }
        ::-webkit-scrollbar-track { background: rgb(206, 206, 206) }
        ::-webkit-scrollbar-thumb { background: rgb(136, 136, 136) }
        ::-webkit-scrollbar-thumb:hover { background: rgb(85, 85, 85) }`),i=k(),H(n.$$.fragment),s=k(),t=g("div"),h&&h.c(),this.h()},l(o){const b=W("svelte-1lp6qam",document.head);e=v(b,"STYLE",{});var I=y(e);l=A(I,`@font-face {
            font-family: "roboto";
            src: url("fonts/RobotoMono-VariableFont_wght.ttf");
        } /* Namespace.svelte */

        @font-face {
            font-family: "segoe";
            src: url("fonts/Segoe-UI.ttf");
        } /* Repositories.svelte */

        ::-webkit-scrollbar { width: 0.5vw }
        ::-webkit-scrollbar-track { background: rgb(206, 206, 206) }
        ::-webkit-scrollbar-thumb { background: rgb(136, 136, 136) }
        ::-webkit-scrollbar-thumb:hover { background: rgb(85, 85, 85) }`),I.forEach(u),b.forEach(u),i=w(o),B(n.$$.fragment,o),s=w(o),t=v(o,"DIV",{id:!0,class:!0});var N=y(t);h&&h.l(N),N.forEach(u),this.h()},h(){_(t,"id","main-wrapper"),_(t,"class","svelte-zk8pfi")},m(o,b){m(document.head,e),m(e,l),p(o,i,b),J(n,o,b),p(o,s,b),p(o,t,b),h&&h.m(t,null),r=!0,f||(c=K(window,"resize",a[4]),f=!0)},p(o,[b]){h&&h.p&&(!r||b&4)&&T(h,d,o,o[2],r?x(d,o[2],b,null):Y(o[2]),null)},i(o){r||(q(n.$$.fragment,o),q(h,o),r=!0)},o(o){z(n.$$.fragment,o),z(h,o),r=!1},d(o){u(e),o&&u(i),O(n,o),o&&u(s),o&&u(t),h&&h.d(o),f=!1,c()}}}function se(a,e,l){let{$$slots:i={},$$scope:n}=e,s=0,t=0;function r(){l(0,s=window.innerWidth),l(1,t=window.innerHeight)}return a.$$set=f=>{"$$scope"in f&&l(2,n=f.$$scope)},[s,t,n,i,r]}class le extends V{constructor(e){super(),C(this,e,se,te,F,{})}}export{le as default};
