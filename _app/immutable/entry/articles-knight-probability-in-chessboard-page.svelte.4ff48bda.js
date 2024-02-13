import{S as mt,i as ut,s as vt,k as i,q as o,a as m,l,m as r,r as a,h as n,c as u,n as s,L as Oe,b as ft,G as e,H as ae,p as Ut,y as zt,z as Ft,A as Ht,g as Nt,d as Jt,B as Qt}from"../chunks/index.babde2ef.js";import"../chunks/paths.f5626ac6.js";/* empty css                      */const Xt=""+new URL("../assets/knight.7c95888c.png",import.meta.url).href;function Yt(De){let t,d,I,k,h,O,f,C,b,p,D,ie,P,U,T,$,z,w,B,j,F,H,N,J,E,le,Q,_,X,Y,v,Z,A;return{c(){t=i("div"),d=i("a"),I=o("Leet Code 688."),k=m(),h=i("div"),O=o("On an "),f=i("code"),C=o("n x n"),b=o(" chessboard, a knight starts at the cell "),p=i("code"),D=o("(row, column)"),ie=o(" and attempts to make exactly "),P=i("code"),U=o("k"),T=o(` moves.
		The rows and columns are 0-indexed, so the top-left cell is `),$=i("code"),z=o("(0, 0)"),w=o(", and the bottom-right cell is "),B=i("code"),j=o("(n - 1, n - 1)"),F=o(`.
		`),H=i("br"),N=o(`
		A chess knight has eight possible moves it can make, as illustrated below.
		Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.`),J=m(),E=i("img"),Q=m(),_=i("div"),X=o(`Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.
		`),Y=i("br"),v=o(`
		The knight continues moving until it has made exactly k moves or has moved off the chessboard.
		`),Z=i("br"),A=o(`
		Return the probability that the knight remains on the board after it has stopped moving.`),this.h()},l(S){t=l(S,"DIV",{id:!0,class:!0});var x=r(t);d=l(x,"A",{id:!0,href:!0,class:!0});var W=r(d);I=a(W,"Leet Code 688."),W.forEach(n),k=u(x),h=l(x,"DIV",{class:!0});var g=r(h);O=a(g,"On an "),f=l(g,"CODE",{class:!0});var ne=r(f);C=a(ne,"n x n"),ne.forEach(n),b=a(g," chessboard, a knight starts at the cell "),p=l(g,"CODE",{class:!0});var M=r(p);D=a(M,"(row, column)"),M.forEach(n),ie=a(g," and attempts to make exactly "),P=l(g,"CODE",{class:!0});var re=r(P);U=a(re,"k"),re.forEach(n),T=a(g,` moves.
		The rows and columns are 0-indexed, so the top-left cell is `),$=l(g,"CODE",{class:!0});var ce=r($);z=a(ce,"(0, 0)"),ce.forEach(n),w=a(g,", and the bottom-right cell is "),B=l(g,"CODE",{class:!0});var q=r(B);j=a(q,"(n - 1, n - 1)"),q.forEach(n),F=a(g,`.
		`),H=l(g,"BR",{}),N=a(g,`
		A chess knight has eight possible moves it can make, as illustrated below.
		Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.`),g.forEach(n),J=u(x),E=l(x,"IMG",{id:!0,src:!0,class:!0}),Q=u(x),_=l(x,"DIV",{class:!0});var R=r(_);X=a(R,`Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.
		`),Y=l(R,"BR",{}),v=a(R,`
		The knight continues moving until it has made exactly k moves or has moved off the chessboard.
		`),Z=l(R,"BR",{}),A=a(R,`
		Return the probability that the knight remains on the board after it has stopped moving.`),R.forEach(n),x.forEach(n),this.h()},h(){s(d,"id","leetCodeLink"),s(d,"href","https://leetcode.com/problems/knight-probability-in-chessboard/"),s(d,"class","svelte-1ww9dfn"),s(f,"class","svelte-1ww9dfn"),s(p,"class","svelte-1ww9dfn"),s(P,"class","svelte-1ww9dfn"),s($,"class","svelte-1ww9dfn"),s(B,"class","svelte-1ww9dfn"),s(h,"class","text svelte-1ww9dfn"),s(E,"id","knightImage"),Oe(E.src,le=Xt)||s(E,"src",le),s(E,"class","svelte-1ww9dfn"),s(_,"class","text svelte-1ww9dfn"),s(t,"id","problem"),s(t,"class","svelte-1ww9dfn")},m(S,x){ft(S,t,x),e(t,d),e(d,I),e(t,k),e(t,h),e(h,O),e(h,f),e(f,C),e(h,b),e(h,p),e(p,D),e(h,ie),e(h,P),e(P,U),e(h,T),e(h,$),e($,z),e(h,w),e(h,B),e(B,j),e(h,F),e(h,H),e(h,N),e(t,J),e(t,E),e(t,Q),e(t,_),e(_,X),e(_,Y),e(_,v),e(_,Z),e(_,A)},p:ae,i:ae,o:ae,d(S){S&&n(t)}}}class Zt extends mt{constructor(t){super(),ut(this,t,null,Yt,vt,{})}}const es=""+new URL("../assets/knight_m0.45722dd8.png",import.meta.url).href,ts=""+new URL("../assets/knight_m1.46e314b8.png",import.meta.url).href,ss=""+new URL("../assets/knight_m2.ac0a42e2.png",import.meta.url).href,os=""+new URL("../assets/knight_m3.77ebe86d.png",import.meta.url).href;function as(De){let t,d,I,k,h,O,f,C,b,p,D,ie=`class Solution:
    def knightProbability(self, n: int, k: int, row: int, column: int) -> float:
        # Possible moves of knight in (row, col) directions
        moves = [(2, 1), (2, -1), (-2, 1), (-2, -1), (1, 2), (1, -2), (-1, 2), (-1, -2)]
        # Create a 2D memo table to store the probabilities for the current move and the previous move
        # We only need to keep track of the probabilities for the current and previous moves
        memo = [[0] * n for _ in range(n)]
        # Initialize the memo table for the first move with all probabilities set to 1
        for i in range(n):
            for j in range(n):
                memo[i][j] = 1

        # For each move from 1 to k
        for m in range(1, k+1):
            # Create a new 2D memo table to store the probabilities for the current move
            new_memo = [[0] * n for _ in range(n)]
            # For each cell on the board
            for i in range(n):
                for j in range(n):
                    prob = 0
                    # Iterate over all possible moves from the previous cell
                    for move in moves:
                        new_i = i + move[0]
                        new_j = j + move[1]
                        # If the move is still on the board
                        if 0 <= new_i < n and 0 <= new_j < n:
                            prob += memo[new_i][new_j]
                    # Update the probability of the current cell for current moves
                    new_memo[i][j] = prob / 8
            # Set the memo table for the previous move to the memo table for the current move
            memo = new_memo

        # Return the probability of the starting cell for k moves
        return memo[row][column]`,P,U,T,$,z,w,B,j,F,H,N,J,E,le,Q,_,X,Y,v,Z,A,S,x,W,g,ne,M,re,ce,q,R,Le,Pe,Te,$e,Be,he,je,Ae,ee,bt,Re,V,Ve,de,Se,We,me,Me,qe,Ke,ue,Ge,Ue,ve,ze,Fe,fe,He,Ne,L,te,pt,Je,se,gt,Qe,oe,wt,Xe,be,Ye,Ze,pe,et,tt,ge,st,ot,K,at,it,lt,we,nt,rt,_e,ct,ht,ke,_t=`class Solution:
    def knightProbability(n: int, k: int, row: int, column: int) -> float:
        MOVES = [(2, 1), (2, -1), (-2, 1), (-2, -1), (1, 2), (1, -2), (-1, 2), (-1, -2)]

        def dp(i, j, k):
            # check knight within board
            if not (0 <= i < n and 0 <= j < n):
                return 0

            # check moves left remaining
            if k == 0:
                return 1

            return sum(1/8 * dp(i + x, j + y, k - 1) for x, y in MOVES)
        return dp(row, column, k)`,dt;return{c(){t=i("div"),d=i("div"),I=o(`The first
        `),k=i("a"),h=o("solution"),O=o(`
        presented on LeetCode for this problem is available below, which uses several iterators to store probabilities within differnt arrays.
        We can significantly simplify this solution however through the use of recursion and the
        `),f=i("a"),C=o("Law of Total Probability"),b=o(`
        .`),p=m(),D=i("code"),P=o(ie),U=m(),T=i("h2"),$=o("The Law of Total Probability"),z=m(),w=i("div"),B=o("Suppose the events "),j=i("code"),F=o("B_1, ..., B_k"),H=o(` are mutally exclusive and exhaustive events in a sample space.
        `),N=i("br"),J=o(`
        Then for any event `),E=i("code"),le=o("A"),Q=o(` in that sample space:
        `),_=i("code"),X=o("P(A) = P(A n B_1) + ... + P(A n B_k)"),Y=m(),v=i("div"),Z=o("If we consider the knight starts within a red "),A=i("code"),S=o("4x4"),x=o(" board, and only has "),W=i("code"),g=o("1"),ne=o(` move, then only will 3 out of the 8 possible moves keep the knight within the board.
        If we consider this first example, we can manually set out the numbers to visualise the problem before writing a general solution.

        With an array containing the probability of each move occurring,
        `),M=i("code"),re=o("[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"),ce=o(`
        , and another array of the probabilities that the knight stays on the board,
        `),q=i("code"),R=o("[1, 1, 1, 0, 0, 0, 0, 0]"),Le=o(`
        , we can calculate the result through the sum of both arrays.
        `),Pe=i("br"),Te=o(`
        The law of total probability sums the conditional probabilities of all cases, multiplied by the probability of each case occurring:
        `),$e=i("br"),Be=m(),he=i("code"),je=o("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),Ae=m(),ee=i("img"),Re=m(),V=i("div"),Ve=o("We were able to set the probability that the knight would remain on the board as "),de=i("code"),Se=o("1"),We=o(` as it was the final move of the knight -
        if the knight ends on a square within the board there is a `),me=i("code"),Me=o("100%"),qe=o(` chance the knight has remained within the board.
        Things start to get a bit more complicated after one move, as there is no guarantee the knight will remain within the board after the first move.`),Ke=m(),ue=i("div"),Ge=o("Let's consider the previous example but where the knight moves twice instead of just once."),Ue=m(),ve=i("div"),ze=o("We can work through this problem backwards to understand how the statistics behind the solution works."),Fe=m(),fe=i("div"),He=o(`For each of the 3 possibilities the knight can make for it's second move,
        we can calculate the probability that the knight stays within the board like we did in the previous example,
        as it is the final move.`),Ne=m(),L=i("div"),te=i("img"),Je=m(),se=i("img"),Qe=m(),oe=i("img"),Xe=m(),be=i("code"),Ye=o("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),Ze=m(),pe=i("code"),et=o("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.5"),tt=m(),ge=i("code"),st=o("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),ot=m(),K=i("div"),at=o(`We can plug these results back into the original equation to determine the final probability:
        `),it=i("br"),lt=m(),we=i("code"),nt=o("(0.125 * 0.375) + (0.125 * 0.5) + (0.125 * 0.375) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.15625"),rt=m(),_e=i("h2"),ct=o("Solution"),ht=m(),ke=i("code"),dt=o(_t),this.h()},l(Ce){t=l(Ce,"DIV",{id:!0,class:!0});var c=r(t);d=l(c,"DIV",{class:!0});var ye=r(d);I=a(ye,`The first
        `),k=l(ye,"A",{style:!0,href:!0});var kt=r(k);h=a(kt,"solution"),kt.forEach(n),O=a(ye,`
        presented on LeetCode for this problem is available below, which uses several iterators to store probabilities within differnt arrays.
        We can significantly simplify this solution however through the use of recursion and the
        `),f=l(ye,"A",{style:!0,href:!0});var yt=r(f);C=a(yt,"Law of Total Probability"),yt.forEach(n),b=a(ye,`
        .`),ye.forEach(n),p=u(c),D=l(c,"CODE",{class:!0});var Et=r(D);P=a(Et,ie),Et.forEach(n),U=u(c),T=l(c,"H2",{class:!0});var xt=r(T);$=a(xt,"The Law of Total Probability"),xt.forEach(n),z=u(c),w=l(c,"DIV",{class:!0});var G=r(w);B=a(G,"Suppose the events "),j=l(G,"CODE",{class:!0});var Dt=r(j);F=a(Dt,"B_1, ..., B_k"),Dt.forEach(n),H=a(G,` are mutally exclusive and exhaustive events in a sample space.
        `),N=l(G,"BR",{}),J=a(G,`
        Then for any event `),E=l(G,"CODE",{class:!0});var Ct=r(E);le=a(Ct,"A"),Ct.forEach(n),Q=a(G,` in that sample space:
        `),_=l(G,"CODE",{class:!0});var It=r(_);X=a(It,"P(A) = P(A n B_1) + ... + P(A n B_k)"),It.forEach(n),G.forEach(n),Y=u(c),v=l(c,"DIV",{class:!0});var y=r(v);Z=a(y,"If we consider the knight starts within a red "),A=l(y,"CODE",{class:!0});var Ot=r(A);S=a(Ot,"4x4"),Ot.forEach(n),x=a(y," board, and only has "),W=l(y,"CODE",{class:!0});var Lt=r(W);g=a(Lt,"1"),Lt.forEach(n),ne=a(y,` move, then only will 3 out of the 8 possible moves keep the knight within the board.
        If we consider this first example, we can manually set out the numbers to visualise the problem before writing a general solution.

        With an array containing the probability of each move occurring,
        `),M=l(y,"CODE",{class:!0});var Pt=r(M);re=a(Pt,"[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"),Pt.forEach(n),ce=a(y,`
        , and another array of the probabilities that the knight stays on the board,
        `),q=l(y,"CODE",{class:!0});var Tt=r(q);R=a(Tt,"[1, 1, 1, 0, 0, 0, 0, 0]"),Tt.forEach(n),Le=a(y,`
        , we can calculate the result through the sum of both arrays.
        `),Pe=l(y,"BR",{}),Te=a(y,`
        The law of total probability sums the conditional probabilities of all cases, multiplied by the probability of each case occurring:
        `),$e=l(y,"BR",{}),Be=u(y),he=l(y,"CODE",{class:!0});var $t=r(he);je=a($t,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),$t.forEach(n),y.forEach(n),Ae=u(c),ee=l(c,"IMG",{id:!0,src:!0,class:!0}),Re=u(c),V=l(c,"DIV",{class:!0});var Ee=r(V);Ve=a(Ee,"We were able to set the probability that the knight would remain on the board as "),de=l(Ee,"CODE",{class:!0});var Bt=r(de);Se=a(Bt,"1"),Bt.forEach(n),We=a(Ee,` as it was the final move of the knight -
        if the knight ends on a square within the board there is a `),me=l(Ee,"CODE",{class:!0});var jt=r(me);Me=a(jt,"100%"),jt.forEach(n),qe=a(Ee,` chance the knight has remained within the board.
        Things start to get a bit more complicated after one move, as there is no guarantee the knight will remain within the board after the first move.`),Ee.forEach(n),Ke=u(c),ue=l(c,"DIV",{class:!0});var At=r(ue);Ge=a(At,"Let's consider the previous example but where the knight moves twice instead of just once."),At.forEach(n),Ue=u(c),ve=l(c,"DIV",{class:!0});var Rt=r(ve);ze=a(Rt,"We can work through this problem backwards to understand how the statistics behind the solution works."),Rt.forEach(n),Fe=u(c),fe=l(c,"DIV",{class:!0});var Vt=r(fe);He=a(Vt,`For each of the 3 possibilities the knight can make for it's second move,
        we can calculate the probability that the knight stays within the board like we did in the previous example,
        as it is the final move.`),Vt.forEach(n),Ne=u(c),L=l(c,"DIV",{id:!0,class:!0});var xe=r(L);te=l(xe,"IMG",{id:!0,src:!0,class:!0}),Je=u(xe),se=l(xe,"IMG",{id:!0,src:!0,class:!0}),Qe=u(xe),oe=l(xe,"IMG",{id:!0,src:!0,class:!0}),xe.forEach(n),Xe=u(c),be=l(c,"CODE",{class:!0});var St=r(be);Ye=a(St,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),St.forEach(n),Ze=u(c),pe=l(c,"CODE",{class:!0});var Wt=r(pe);et=a(Wt,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.5"),Wt.forEach(n),tt=u(c),ge=l(c,"CODE",{class:!0});var Mt=r(ge);st=a(Mt,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),Mt.forEach(n),ot=u(c),K=l(c,"DIV",{class:!0});var Ie=r(K);at=a(Ie,`We can plug these results back into the original equation to determine the final probability:
        `),it=l(Ie,"BR",{}),lt=u(Ie),we=l(Ie,"CODE",{class:!0});var qt=r(we);nt=a(qt,"(0.125 * 0.375) + (0.125 * 0.5) + (0.125 * 0.375) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.15625"),qt.forEach(n),Ie.forEach(n),rt=u(c),_e=l(c,"H2",{class:!0});var Kt=r(_e);ct=a(Kt,"Solution"),Kt.forEach(n),ht=u(c),ke=l(c,"CODE",{class:!0});var Gt=r(ke);dt=a(Gt,_t),Gt.forEach(n),c.forEach(n),this.h()},h(){Ut(k,"color","white"),s(k,"href","https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3322846/688-space-97-74-solution-with-step-by-step-explanation/"),Ut(f,"color","white"),s(f,"href","https://en.wikipedia.org/wiki/Law_of_total_probability"),s(d,"class","text svelte-cp80tt"),s(D,"class","svelte-cp80tt"),s(T,"class","svelte-cp80tt"),s(j,"class","svelte-cp80tt"),s(E,"class","svelte-cp80tt"),s(_,"class","svelte-cp80tt"),s(w,"class","text svelte-cp80tt"),s(A,"class","svelte-cp80tt"),s(W,"class","svelte-cp80tt"),s(M,"class","svelte-cp80tt"),s(q,"class","svelte-cp80tt"),s(he,"class","svelte-cp80tt"),s(v,"class","text svelte-cp80tt"),s(ee,"id","knight_m0"),Oe(ee.src,bt=es)||s(ee,"src",bt),s(ee,"class","svelte-cp80tt"),s(de,"class","svelte-cp80tt"),s(me,"class","svelte-cp80tt"),s(V,"class","text svelte-cp80tt"),s(ue,"class","text svelte-cp80tt"),s(ve,"class","text svelte-cp80tt"),s(fe,"class","text svelte-cp80tt"),s(te,"id","knight_m1"),Oe(te.src,pt=ts)||s(te,"src",pt),s(te,"class","svelte-cp80tt"),s(se,"id","knight_m2"),Oe(se.src,gt=ss)||s(se,"src",gt),s(se,"class","svelte-cp80tt"),s(oe,"id","knight_m3"),Oe(oe.src,wt=os)||s(oe,"src",wt),s(oe,"class","svelte-cp80tt"),s(L,"id","knightMovesWrapper"),s(L,"class","svelte-cp80tt"),s(be,"class","svelte-cp80tt"),s(pe,"class","svelte-cp80tt"),s(ge,"class","svelte-cp80tt"),s(we,"class","svelte-cp80tt"),s(K,"class","text svelte-cp80tt"),s(_e,"class","svelte-cp80tt"),s(ke,"class","svelte-cp80tt"),s(t,"id","solution"),s(t,"class","svelte-cp80tt")},m(Ce,c){ft(Ce,t,c),e(t,d),e(d,I),e(d,k),e(k,h),e(d,O),e(d,f),e(f,C),e(d,b),e(t,p),e(t,D),e(D,P),e(t,U),e(t,T),e(T,$),e(t,z),e(t,w),e(w,B),e(w,j),e(j,F),e(w,H),e(w,N),e(w,J),e(w,E),e(E,le),e(w,Q),e(w,_),e(_,X),e(t,Y),e(t,v),e(v,Z),e(v,A),e(A,S),e(v,x),e(v,W),e(W,g),e(v,ne),e(v,M),e(M,re),e(v,ce),e(v,q),e(q,R),e(v,Le),e(v,Pe),e(v,Te),e(v,$e),e(v,Be),e(v,he),e(he,je),e(t,Ae),e(t,ee),e(t,Re),e(t,V),e(V,Ve),e(V,de),e(de,Se),e(V,We),e(V,me),e(me,Me),e(V,qe),e(t,Ke),e(t,ue),e(ue,Ge),e(t,Ue),e(t,ve),e(ve,ze),e(t,Fe),e(t,fe),e(fe,He),e(t,Ne),e(t,L),e(L,te),e(L,Je),e(L,se),e(L,Qe),e(L,oe),e(t,Xe),e(t,be),e(be,Ye),e(t,Ze),e(t,pe),e(pe,et),e(t,tt),e(t,ge),e(ge,st),e(t,ot),e(t,K),e(K,at),e(K,it),e(K,lt),e(K,we),e(we,nt),e(t,rt),e(t,_e),e(_e,ct),e(t,ht),e(t,ke),e(ke,dt)},p:ae,i:ae,o:ae,d(Ce){Ce&&n(t)}}}class is extends mt{constructor(t){super(),ut(this,t,null,as,vt,{})}}function ls(De){let t,d,I,k,h,O,f,C;return h=new Zt({}),f=new is({}),{c(){t=i("main"),d=i("h1"),I=o("Leet Code 688. Knight Probability in Chessboard"),k=m(),zt(h.$$.fragment),O=m(),zt(f.$$.fragment),this.h()},l(b){t=l(b,"MAIN",{class:!0});var p=r(t);d=l(p,"H1",{class:!0});var D=r(d);I=a(D,"Leet Code 688. Knight Probability in Chessboard"),D.forEach(n),k=u(p),Ft(h.$$.fragment,p),O=u(p),Ft(f.$$.fragment,p),p.forEach(n),this.h()},h(){s(d,"class","svelte-ijzgxc"),s(t,"class","svelte-ijzgxc")},m(b,p){ft(b,t,p),e(t,d),e(d,I),e(t,k),Ht(h,t,null),e(t,O),Ht(f,t,null),C=!0},p:ae,i(b){C||(Nt(h.$$.fragment,b),Nt(f.$$.fragment,b),C=!0)},o(b){Jt(h.$$.fragment,b),Jt(f.$$.fragment,b),C=!1},d(b){b&&n(t),Qt(h),Qt(f)}}}class hs extends mt{constructor(t){super(),ut(this,t,null,ls,vt,{})}}export{hs as default};
