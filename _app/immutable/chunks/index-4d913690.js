function w(){}function R(t,e){for(const n in e)t[n]=e[n];return t}function P(t){return t()}function C(){return Object.create(null)}function y(t){t.forEach(P)}function q(t){return typeof t=="function"}function lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function st(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function G(t){return Object.keys(t).length===0}function I(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ft(t,e,n){t.$$.on_destroy.push(I(e,n))}function at(t,e,n,i){if(t){const r=B(t,e,n,i);return t[0](r)}}function B(t,e,n,i){return t[1]&&i?R(n.ctx.slice(),t[1](i(e))):n.ctx}function dt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let l=0;l<c;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function _t(t,e,n,i,r,u){if(r){const c=B(e,n,i,u);t.p(c,r)}}function ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let E=!1;function J(){E=!0}function K(){E=!1}function Q(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let s=0;s<e.length;s++){const a=e[s];a.claim_order!==void 0&&o.push(a)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const s=e[o].claim_order,a=(r>0&&e[n[r]].claim_order<=s?r+1:Q(1,r,g=>e[n[g]].claim_order,s))-1;i[o]=n[a]+1;const f=a+1;n[f]=o,r=Math.max(f,r)}const u=[],c=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);l>=o;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);u.reverse(),c.sort((o,s)=>o.claim_order-s.claim_order);for(let o=0,s=0;o<c.length;o++){for(;s<u.length&&c[o].claim_order>=u[s].claim_order;)s++;const a=s<u.length?u[s]:null;t.insertBefore(c[o],a)}}function V(t,e){if(E){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function mt(t,e,n){E&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function W(t){t.parentNode&&t.parentNode.removeChild(t)}function pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function yt(){return S(" ")}function gt(){return S("")}function bt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,e,n,i,r=!1){tt(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const o=n(l);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const o=n(l);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function L(t,e,n,i){return H(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];n[l.name]||u.push(l.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function $t(t,e,n){return L(t,e,n,X)}function wt(t,e,n){return L(t,e,n,Y)}function et(t,e){return H(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function Et(t){return et(t," ")}function vt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Nt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function At(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function St(t,e){return new t(e)}let p;function m(t){p=t}function j(){if(!p)throw new Error("Function called outside component initialization");return p}function jt(t){j().$$.on_mount.push(t)}function kt(t){j().$$.after_update.push(t)}function Tt(){const t=j();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const u=nt(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,u)}),!u.defaultPrevented}return!0}}const h=[],D=[],x=[],M=[],O=Promise.resolve();let N=!1;function z(){N||(N=!0,O.then(F))}function Ct(){return z(),O}function A(t){x.push(t)}const v=new Set;let _=0;function F(){if(_!==0)return;const t=p;do{try{for(;_<h.length;){const e=h[_];_++,m(e),it(e.$$)}}catch(e){throw h.length=0,_=0,e}for(m(null),h.length=0,_=0;D.length;)D.pop()();for(let e=0;e<x.length;e+=1){const n=x[e];v.has(n)||(v.add(n),n())}x.length=0}while(h.length);for(;M.length;)M.pop()();N=!1,v.clear(),m(t)}function it(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const $=new Set;let d;function Dt(){d={r:0,c:[],p:d}}function Mt(){d.r||y(d.c),d=d.p}function rt(t,e){t&&t.i&&($.delete(t),t.i(e))}function Pt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const qt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Bt(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],l=e[u];if(l){for(const o in c)o in l||(i[o]=1);for(const o in l)r[o]||(n[o]=l[o],r[o]=1);t[u]=l}else for(const o in c)r[o]=1}for(const c in i)c in n||(n[c]=void 0);return n}function Ht(t){return typeof t=="object"&&t!==null?t:{}}function Lt(t){t&&t.c()}function Ot(t,e){t&&t.l(e)}function ct(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||A(()=>{const c=t.$$.on_mount.map(P).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...c):y(c),t.$$.on_mount=[]}),u.forEach(A)}function ot(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function zt(t,e,n,i,r,u,c,l=[-1]){const o=p;m(t);const s=t.$$={fragment:null,ctx:[],props:u,update:w,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:C(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};c&&c(s.root);let a=!1;if(s.ctx=n?n(t,e.props||{},(f,g,...k)=>{const T=k.length?k[0]:g;return s.ctx&&r(s.ctx[f],s.ctx[f]=T)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](T),a&&ut(t,f)),g}):[],s.update(),a=!0,y(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){J();const f=Z(e.target);s.fragment&&s.fragment.l(f),f.forEach(W)}else s.fragment&&s.fragment.c();e.intro&&rt(t.$$.fragment),ct(t,e.target,e.anchor,e.customElement),K(),F()}m(o)}class Ft{$destroy(){ot(this,1),this.$destroy=w}$on(e,n){if(!q(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ct as A,w as B,at as C,_t as D,ht as E,dt as F,V as G,ft as H,st as I,At as J,A as K,bt as L,pt as M,Y as N,wt as O,R as P,Bt as Q,Ht as R,Ft as S,y as T,Tt as U,qt as V,yt as a,mt as b,Et as c,Mt as d,gt as e,rt as f,Dt as g,W as h,zt as i,kt as j,X as k,$t as l,Z as m,xt as n,jt as o,Nt as p,S as q,et as r,lt as s,Pt as t,vt as u,St as v,Lt as w,Ot as x,ct as y,ot as z};
