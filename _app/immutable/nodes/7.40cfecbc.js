import{S as Lm,i as Cm,s as jm,k as a,a as p,q as x,l as o,m as s,h as t,c as f,r as I,n as e,b as cm,G as m,H as ym,y as $m,U as B,z as Nm,V as J,A as Um,g as km,d as Om,B as Am}from"../chunks/index.c4f6fd60.js";import"../chunks/paths.115ad674.js";/* empty css                      *//* empty css                                                         *//* empty css                      */function Vm(k){let i,w,r,l,_,G,d,b,g,W,T,n,h,z,$,E,c,M;return{c(){i=a("div"),w=p(),r=a("div"),l=a("div"),_=x("Gamma Function"),G=p(),d=a("ul"),b=a("li"),g=a("a"),W=x("Gamma Function"),T=p(),n=a("li"),h=a("a"),z=x("Incomplete Gamma Functions"),$=p(),E=a("li"),c=a("a"),M=x("Regularized Incomplete Gamma Functions"),this.h()},l(u){i=o(u,"DIV",{id:!0,class:!0}),s(i).forEach(t),w=f(u),r=o(u,"DIV",{style:!0,id:!0,class:!0});var v=s(r);l=o(v,"DIV",{id:!0,class:!0});var N=s(l);_=I(N,"Gamma Function"),N.forEach(t),G=f(v),d=o(v,"UL",{class:!0});var R=s(d);b=o(R,"LI",{class:!0});var O=s(b);g=o(O,"A",{href:!0,class:!0});var y=s(g);W=I(y,"Gamma Function"),y.forEach(t),O.forEach(t),T=f(R),n=o(R,"LI",{class:!0});var S=s(n);h=o(S,"A",{href:!0,class:!0});var A=s(h);z=I(A,"Incomplete Gamma Functions"),A.forEach(t),S.forEach(t),$=f(R),E=o(R,"LI",{class:!0});var V=s(E);c=o(V,"A",{href:!0,class:!0});var U=s(c);M=I(U,"Regularized Incomplete Gamma Functions"),U.forEach(t),V.forEach(t),R.forEach(t),v.forEach(t),this.h()},h(){e(i,"id","gradient"),e(i,"class","svelte-ynjw5u"),e(l,"id","header"),e(l,"class","svelte-ynjw5u"),e(g,"href","#gamma-function"),e(g,"class","svelte-ynjw5u"),e(b,"class","svelte-ynjw5u"),e(h,"href","#incomplete-gamma-function"),e(h,"class","svelte-ynjw5u"),e(n,"class","svelte-ynjw5u"),e(c,"href","#regularized-incomplete-gamma-function"),e(c,"class","svelte-ynjw5u"),e(E,"class","svelte-ynjw5u"),e(d,"class","svelte-ynjw5u"),e(r,"style",k[0]),e(r,"id","wrapper"),e(r,"class","svelte-ynjw5u")},m(u,v){cm(u,i,v),cm(u,w,v),cm(u,r,v),m(r,l),m(l,_),m(r,G),m(r,d),m(d,b),m(b,g),m(g,W),m(d,T),m(d,n),m(n,h),m(h,z),m(d,$),m(d,E),m(E,c),m(c,M)},p(u,[v]){v&1&&e(r,"style",u[0])},i:ym,o:ym,d(u){u&&t(i),u&&t(w),u&&t(r)}}}function Dm(k,i,w){let{style:r=""}=i;return k.$$set=l=>{"style"in l&&w(0,r=l.style)},[r]}class qm extends Lm{constructor(i){super(),Cm(this,i,Dm,Vm,jm,{style:0})}}const Pm=`<math display="block" xmlns="http://www.w3.org/1998/Math/MathML">
	<mrow>
		<mrow>
			<mi mathvariant="normal">Γ</mi>
		</mrow>
		<mo form="prefix" stretchy="false">(</mo>
		<mi>z</mi>
		<mo form="postfix" stretchy="false">)</mo>
		<mo>=</mo>
		<msubsup>
			<mo movablelimits="false">∫</mo>
			<mn>0</mn>
			<mi>∞</mi>
		</msubsup>
		<msup>
			<mi>t</mi>
			<mrow>
				<mi>z</mi>
				<mo>−</mo>
				<mn>1</mn>
			</mrow>
		</msup>
		<msup>
			<mi>e</mi>
			<mrow>
				<mo>−</mo>
				<mi>t</mi>
			</mrow>
		</msup>
		<mi>d</mi>
		<mi>t</mi>
	</mrow>
</math>`,Qm=`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
	<mrow>
		<mrow>
			<mi mathvariant="normal">Γ</mi>
		</mrow>
		<mo form="prefix" stretchy="false">(</mo>
		<mi>s</mi>
		<mo separator="true">,</mo>
		<mi>x</mi>
		<mo form="postfix" stretchy="false">)</mo>
		<mo>=</mo>
		<msubsup>
			<mo movablelimits="false">∫</mo>
			<mi>x</mi>
			<mi>∞</mi>
		</msubsup>
		<msup>
			<mi>t</mi>
			<mrow>
				<mi>s</mi>
				<mo>−</mo>
				<mn>1</mn>
			</mrow>
		</msup>
		<msup>
			<mi>e</mi>
			<mrow>
				<mo>−</mo>
				<mi>t</mi>
			</mrow>
		</msup>
		<mi>d</mi>
		<mi>t</mi>
	</mrow>
</math>`,Bm=`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
	<mrow>
		<mi>γ</mi>
		<mo form="prefix" stretchy="false">(</mo>
		<mi>s</mi>
		<mo separator="true">,</mo>
		<mi>x</mi>
		<mo form="postfix" stretchy="false">)</mo>
		<mo>=</mo>
		<msubsup>
			<mo movablelimits="false">∫</mo>
			<mn>0</mn>
			<mi>x</mi>
		</msubsup>
		<msup>
			<mi>t</mi>
			<mrow>
				<mi>s</mi>
				<mo>−</mo>
				<mn>1</mn>
			</mrow>
		</msup>
		<msup>
			<mi>e</mi>
			<mrow>
				<mo>−</mo>
				<mi>t</mi>
			</mrow>
		</msup>
		<mi>d</mi>
		<mi>t</mi>
	</mrow>
</math>`,Jm=`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mrow>
    <mi>P</mi>
    <mo form="prefix" stretchy="false">(</mo>
    <mi>a</mi>
    <mo separator="true">,</mo>
    <mi>x</mi>
    <mo form="postfix" stretchy="false">)</mo>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mrow>
        <mrow>
          <mi mathvariant="normal">Γ</mi>
        </mrow>
        <mo form="prefix" stretchy="false">(</mo>
        <mi>a</mi>
        <mo form="postfix" stretchy="false">)</mo>
      </mrow>
    </mfrac>
    <msubsup>
      <mo movablelimits="false">∫</mo>
      <mn>0</mn>
      <mi>x</mi>
    </msubsup>
    <msup>
      <mi>t</mi>
      <mrow>
        <mi>a</mi>
        <mo>−</mo>
        <mn>1</mn>
      </mrow>
    </msup>
    <msup>
      <mi>e</mi>
      <mrow>
        <mo>−</mo>
        <mi>t</mi>
      </mrow>
    </msup>
    <mi>d</mi>
    <mi>t</mi>
  </mrow>
</math>`,Km=`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mrow>
    <mi>Q</mi>
    <mo form="prefix" stretchy="false">(</mo>
    <mi>a</mi>
    <mo separator="true">,</mo>
    <mi>x</mi>
    <mo form="postfix" stretchy="false">)</mo>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mrow>
        <mrow>
          <mi mathvariant="normal">Γ</mi>
        </mrow>
        <mo form="prefix" stretchy="false">(</mo>
        <mi>a</mi>
        <mo form="postfix" stretchy="false">)</mo>
      </mrow>
    </mfrac>
    <msubsup>
      <mo movablelimits="false">∫</mo>
      <mi>x</mi>
      <mi>∞</mi>
    </msubsup>
    <msup>
      <mi>t</mi>
      <mrow>
        <mi>a</mi>
        <mo>−</mo>
        <mn>1</mn>
      </mrow>
    </msup>
    <msup>
      <mi>e</mi>
      <mrow>
        <mo>−</mo>
        <mi>t</mi>
      </mrow>
    </msup>
    <mi>d</mi>
    <mi>t</mi>
  </mrow>
</math>`,Wm=`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mrow>
    <mi>Q</mi>
    <mo form="prefix" stretchy="false">(</mo>
    <mi>a</mi>
    <mo separator="true">,</mo>
    <mi>x</mi>
    <mo form="postfix" stretchy="false">)</mo>
    <mo>+</mo>
    <mi>P</mi>
    <mo form="prefix" stretchy="false">(</mo>
    <mi>a</mi>
    <mo separator="true">,</mo>
    <mi>x</mi>
    <mo form="postfix" stretchy="false">)</mo>
    <mo>=</mo>
    <mn>1</mn>
  </mrow>
</math>`,K={gammaFunction:Pm,lowerIncompleteGammaFunction:Bm,upperIncompleteGammaFunction:Qm,regularizedLowerIncompleteGammaFunction:Jm,regularizedUpperIncompleteGammaFunction:Km,qplusp:Wm};function Xm(k){let i,w,r,l,_,G,d,b,g,W=K.gammaFunction+"",T,n,h,z,$,E,c,M,u,v,N,R=K.upperIncompleteGammaFunction+"",O,y,S,A,V,U,Hm=K.lowerIncompleteGammaFunction+"",um,F,L,X,pm,fm,mm,Rm=K.qplusp+"",hm,C,Y,wm,dm,em,Sm=K.regularizedUpperIncompleteGammaFunction+"",vm,j,Z,_m,gm,tm,Tm=K.regularizedLowerIncompleteGammaFunction+"",am;return w=new qm({}),{c(){i=a("main"),$m(w.$$.fragment),r=p(),l=a("article"),_=a("section"),G=a("h1"),d=x("Gamma Function"),b=p(),g=new B(!1),T=p(),n=a("div"),h=a("section"),z=a("h1"),$=x("Incomplete Gamma Function"),E=p(),c=a("section"),M=a("h2"),u=x("Upper Incomplete Gamma Function"),v=p(),N=new B(!1),O=p(),y=a("section"),S=a("h2"),A=x("Lower Incomplete Gamma Function"),V=p(),U=new B(!1),um=p(),F=a("div"),L=a("section"),X=a("h1"),pm=x("Regularized Incomplete Gamma Function"),fm=p(),mm=new B(!1),hm=p(),C=a("section"),Y=a("h2"),wm=x("Regularized Upper Incomplete Gamma Function"),dm=p(),em=new B(!1),vm=p(),j=a("section"),Z=a("h2"),_m=x("Regularized Lower Incomplete Gamma Function"),gm=p(),tm=new B(!1),this.h()},l(H){i=o(H,"MAIN",{class:!0});var D=s(i);Nm(w.$$.fragment,D),r=f(D),l=o(D,"ARTICLE",{class:!0});var q=s(l);_=o(q,"SECTION",{id:!0,class:!0});var om=s(_);G=o(om,"H1",{});var xm=s(G);d=I(xm,"Gamma Function"),xm.forEach(t),b=f(om),g=J(om,!1),om.forEach(t),T=f(q),n=o(q,"DIV",{class:!0});var P=s(n);h=o(P,"SECTION",{id:!0,class:!0});var Im=s(h);z=o(Im,"H1",{});var bm=s(z);$=I(bm,"Incomplete Gamma Function"),bm.forEach(t),Im.forEach(t),E=f(P),c=o(P,"SECTION",{id:!0,class:!0});var sm=s(c);M=o(sm,"H2",{});var Em=s(M);u=I(Em,"Upper Incomplete Gamma Function"),Em.forEach(t),v=f(sm),N=J(sm,!1),sm.forEach(t),O=f(P),y=o(P,"SECTION",{id:!0,class:!0});var im=s(y);S=o(im,"H2",{});var Fm=s(S);A=I(Fm,"Lower Incomplete Gamma Function"),Fm.forEach(t),V=f(im),U=J(im,!1),im.forEach(t),P.forEach(t),um=f(q),F=o(q,"DIV",{class:!0});var Q=s(F);L=o(Q,"SECTION",{id:!0,class:!0});var lm=s(L);X=o(lm,"H1",{});var Gm=s(X);pm=I(Gm,"Regularized Incomplete Gamma Function"),Gm.forEach(t),fm=f(lm),mm=J(lm,!1),lm.forEach(t),hm=f(Q),C=o(Q,"SECTION",{id:!0,class:!0});var rm=s(C);Y=o(rm,"H2",{});var zm=s(Y);wm=I(zm,"Regularized Upper Incomplete Gamma Function"),zm.forEach(t),dm=f(rm),em=J(rm,!1),rm.forEach(t),vm=f(Q),j=o(Q,"SECTION",{id:!0,class:!0});var nm=s(j);Z=o(nm,"H2",{});var Mm=s(Z);_m=I(Mm,"Regularized Lower Incomplete Gamma Function"),Mm.forEach(t),gm=f(nm),tm=J(nm,!1),nm.forEach(t),Q.forEach(t),q.forEach(t),D.forEach(t),this.h()},h(){g.a=null,e(_,"id","gamma-function"),e(_,"class","alpha"),e(h,"id","incomplete-gamma-function"),e(h,"class","parent svelte-wb2pi6"),N.a=null,e(c,"id","upper-incomplete-gamma-function"),e(c,"class","beta svelte-wb2pi6"),U.a=null,e(y,"id","lower-incomplete-gamma-function"),e(y,"class","beta svelte-wb2pi6"),e(n,"class","conference alpha svelte-wb2pi6"),mm.a=null,e(L,"id","regularized-incomplete-gamma-function"),e(L,"class","parent svelte-wb2pi6"),em.a=null,e(C,"id","regularized-upper-incomplete-gamma-function"),e(C,"class","beta svelte-wb2pi6"),tm.a=null,e(j,"id","regularized-lower-incomplete-gamma-function"),e(j,"class","beta svelte-wb2pi6"),e(F,"class","conference alpha svelte-wb2pi6"),e(l,"class","svelte-wb2pi6"),e(i,"class","svelte-wb2pi6")},m(H,D){cm(H,i,D),Um(w,i,null),m(i,r),m(i,l),m(l,_),m(_,G),m(G,d),m(_,b),g.m(W,_),m(l,T),m(l,n),m(n,h),m(h,z),m(z,$),m(n,E),m(n,c),m(c,M),m(M,u),m(c,v),N.m(R,c),m(n,O),m(n,y),m(y,S),m(S,A),m(y,V),U.m(Hm,y),m(l,um),m(l,F),m(F,L),m(L,X),m(X,pm),m(L,fm),mm.m(Rm,L),m(F,hm),m(F,C),m(C,Y),m(Y,wm),m(C,dm),em.m(Sm,C),m(F,vm),m(F,j),m(j,Z),m(Z,_m),m(j,gm),tm.m(Tm,j),am=!0},p:ym,i(H){am||(km(w.$$.fragment,H),am=!0)},o(H){Om(w.$$.fragment,H),am=!1},d(H){H&&t(i),Am(w)}}}class ae extends Lm{constructor(i){super(),Cm(this,i,null,Xm,jm,{})}}export{ae as component};
