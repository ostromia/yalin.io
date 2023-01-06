import{S as V,i as C,s as F,k as g,q as E,a as k,l as v,m as y,r as A,h as u,c as w,n as _,b as p,G as m,B as $,I as U,e as S,J as j,p as L,K as D,C as G,w as H,L as W,x as B,y as J,M as K,D as T,E as Y,F as O,f as q,t as z,z as P}from"../../../chunks/index-4939aa82.js";function M(l,e,n){const i=l.slice();return i[2]=e[n],i}function Q(l){let e,n,i,a;return{c(){e=g("a"),n=g("img"),a=k(),this.h()},l(s){e=v(s,"A",{class:!0,style:!0,href:!0});var t=y(e);n=v(t,"IMG",{alt:!0,src:!0,class:!0}),a=w(t),t.forEach(u),this.h()},h(){_(n,"alt",""),j(n.src,i=l[2].src)||_(n,"src",i),_(n,"class","svelte-n28cs5"),_(e,"class","nav-image svelte-n28cs5"),L(e,"grid-area",l[2].id),_(e,"href",l[2].href)},m(s,t){p(s,e,t),m(e,n),m(e,a)},p:$,d(s){s&&u(e)}}}function X(l){let e,n=l[2].id.charAt(0).toUpperCase()+l[2].id.slice(1)+"",i,a;return{c(){e=g("a"),i=E(n),a=k(),this.h()},l(s){e=v(s,"A",{class:!0,style:!0,href:!0});var t=y(e);i=A(t,n),a=w(t),t.forEach(u),this.h()},h(){_(e,"class","nav-text svelte-n28cs5"),L(e,"grid-area",l[2].id),_(e,"href",l[2].href)},m(s,t){p(s,e,t),m(e,i),m(e,a)},p:$,d(s){s&&u(e)}}}function R(l){let e;function n(s,t){if(s[2].type=="txt")return X;if(s[2].type=="svg")return Q}let i=n(l),a=i&&i(l);return{c(){a&&a.c(),e=S()},l(s){a&&a.l(s),e=S()},m(s,t){a&&a.m(s,t),p(s,e,t)},p(s,t){a&&a.p(s,t)},d(s){a&&a.d(s),s&&u(e)}}}function Z(l){let e,n,i,a,s=l[1],t=[];for(let r=0;r<s.length;r+=1)t[r]=R(M(l,s,r));return{c(){e=g("nav"),n=g("a"),i=E("~/berkay-yalin.io"),a=k();for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=v(r,"NAV",{class:!0});var f=y(e);n=v(f,"A",{class:!0,id:!0,href:!0});var c=y(n);i=A(c,"~/berkay-yalin.io"),c.forEach(u),a=w(f);for(let d=0;d<t.length;d+=1)t[d].l(f);f.forEach(u),this.h()},h(){_(n,"class","nav-text svelte-n28cs5"),_(n,"id","nav-index"),_(n,"href",l[0]+"/"),_(e,"class","svelte-n28cs5")},m(r,f){p(r,e,f),m(e,n),m(n,i),m(e,a);for(let c=0;c<t.length;c+=1)t[c].m(e,null)},p(r,[f]){if(f&2){s=r[1];let c;for(c=0;c<s.length;c+=1){const d=M(r,s,c);t[c]?t[c].p(d,f):(t[c]=R(d),t[c].c(),t[c].m(e,null))}for(;c<t.length;c+=1)t[c].d(1);t.length=s.length}},i:$,o:$,d(r){r&&u(e),U(t,r)}}}function x(l){const e="https://berkay-yalin.github.io/berkay-yalin.io",n=[{type:"txt",id:"projects",href:e+"/projects"},{type:"txt",id:"articles",href:e+"/articles"},{type:"txt",id:"gists",href:"https://gist.github.com/berkay-yalin"},{type:"svg",id:"github",src:"devicon/github-original.svg",href:"https://github.com/berkay-yalin"}];return[e,n]}class ee extends V{constructor(e){super(),C(this,e,x,Z,F,{})}}function te(l){let e,n,i,a,s,t,r,f,c;D(l[4]),a=new ee({});const d=l[3].default,h=G(d,l,l[2],null);return{c(){e=g("style"),n=E(`@font-face {
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
        ::-webkit-scrollbar-thumb:hover { background: rgb(85, 85, 85) }`),i=k(),H(a.$$.fragment),s=k(),t=g("div"),h&&h.c(),this.h()},l(o){const b=W("svelte-1lp6qam",document.head);e=v(b,"STYLE",{});var I=y(e);n=A(I,`@font-face {
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
        ::-webkit-scrollbar-thumb:hover { background: rgb(85, 85, 85) }`),I.forEach(u),b.forEach(u),i=w(o),B(a.$$.fragment,o),s=w(o),t=v(o,"DIV",{id:!0,class:!0});var N=y(t);h&&h.l(N),N.forEach(u),this.h()},h(){_(t,"id","main-wrapper"),_(t,"class","svelte-zk8pfi")},m(o,b){m(document.head,e),m(e,n),p(o,i,b),J(a,o,b),p(o,s,b),p(o,t,b),h&&h.m(t,null),r=!0,f||(c=K(window,"resize",l[4]),f=!0)},p(o,[b]){h&&h.p&&(!r||b&4)&&T(h,d,o,o[2],r?O(d,o[2],b,null):Y(o[2]),null)},i(o){r||(q(a.$$.fragment,o),q(h,o),r=!0)},o(o){z(a.$$.fragment,o),z(h,o),r=!1},d(o){u(e),o&&u(i),P(a,o),o&&u(s),o&&u(t),h&&h.d(o),f=!1,c()}}}function se(l,e,n){let{$$slots:i={},$$scope:a}=e,s=0,t=0;function r(){n(0,s=window.innerWidth),n(1,t=window.innerHeight)}return l.$$set=f=>{"$$scope"in f&&n(2,a=f.$$scope)},[s,t,a,i,r]}class ae extends V{constructor(e){super(),C(this,e,se,te,F,{})}}export{ae as default};
