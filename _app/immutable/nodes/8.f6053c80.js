import{S as mt,i as vt,s as ut,k as i,q as o,a as m,l,m as r,r as a,h as n,c as v,n as s,L as Oe,b as ft,G as e,H as ae,p as zt,y as Ft,z as Ht,A as Nt,g as Ut,d as Jt,B as Qt}from"../chunks/index.3de248c4.js";import"../chunks/paths.f7a9c2fa.js";/* empty css                      */const Xt="/berkay-yalin.io/_app/immutable/assets/knight.7c95888c.png";function Yt(De){let t,d,I,k,h,O,f,C,b,p,D,ie,T,z,$,B,F,_,j,A,H,N,U,J,E,le,Q,w,X,Y,u,Z,L;return{c(){t=i("div"),d=i("a"),I=o("Leet Code 688."),k=m(),h=i("div"),O=o("On an "),f=i("code"),C=o("n x n"),b=o(" chessboard, a knight starts at the cell "),p=i("code"),D=o("(row, column)"),ie=o(" and attempts to make exactly "),T=i("code"),z=o("k"),$=o(` moves.
		The rows and columns are 0-indexed, so the top-left cell is `),B=i("code"),F=o("(0, 0)"),_=o(", and the bottom-right cell is "),j=i("code"),A=o("(n - 1, n - 1)"),H=o(`.
		`),N=i("br"),U=o(`
		A chess knight has eight possible moves it can make, as illustrated below.
		Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.`),J=m(),E=i("img"),Q=m(),w=i("div"),X=o(`Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.
		`),Y=i("br"),u=o(`
		The knight continues moving until it has made exactly k moves or has moved off the chessboard.
		`),Z=i("br"),L=o(`
		Return the probability that the knight remains on the board after it has stopped moving.`),this.h()},l(W){t=l(W,"DIV",{id:!0,class:!0});var x=r(t);d=l(x,"A",{id:!0,href:!0,class:!0});var R=r(d);I=a(R,"Leet Code 688."),R.forEach(n),k=v(x),h=l(x,"DIV",{class:!0});var g=r(h);O=a(g,"On an "),f=l(g,"CODE",{class:!0});var ne=r(f);C=a(ne,"n x n"),ne.forEach(n),b=a(g," chessboard, a knight starts at the cell "),p=l(g,"CODE",{class:!0});var M=r(p);D=a(M,"(row, column)"),M.forEach(n),ie=a(g," and attempts to make exactly "),T=l(g,"CODE",{class:!0});var re=r(T);z=a(re,"k"),re.forEach(n),$=a(g,` moves.
		The rows and columns are 0-indexed, so the top-left cell is `),B=l(g,"CODE",{class:!0});var ce=r(B);F=a(ce,"(0, 0)"),ce.forEach(n),_=a(g,", and the bottom-right cell is "),j=l(g,"CODE",{class:!0});var q=r(j);A=a(q,"(n - 1, n - 1)"),q.forEach(n),H=a(g,`.
		`),N=l(g,"BR",{}),U=a(g,`
		A chess knight has eight possible moves it can make, as illustrated below.
		Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.`),g.forEach(n),J=v(x),E=l(x,"IMG",{id:!0,src:!0,class:!0}),Q=v(x),w=l(x,"DIV",{class:!0});var V=r(w);X=a(V,`Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.
		`),Y=l(V,"BR",{}),u=a(V,`
		The knight continues moving until it has made exactly k moves or has moved off the chessboard.
		`),Z=l(V,"BR",{}),L=a(V,`
		Return the probability that the knight remains on the board after it has stopped moving.`),V.forEach(n),x.forEach(n),this.h()},h(){s(d,"id","leetCodeLink"),s(d,"href","https://leetcode.com/problems/knight-probability-in-chessboard/"),s(d,"class","svelte-1ww9dfn"),s(f,"class","svelte-1ww9dfn"),s(p,"class","svelte-1ww9dfn"),s(T,"class","svelte-1ww9dfn"),s(B,"class","svelte-1ww9dfn"),s(j,"class","svelte-1ww9dfn"),s(h,"class","text svelte-1ww9dfn"),s(E,"id","knightImage"),Oe(E.src,le=Xt)||s(E,"src",le),s(E,"class","svelte-1ww9dfn"),s(w,"class","text svelte-1ww9dfn"),s(t,"id","problem"),s(t,"class","svelte-1ww9dfn")},m(W,x){ft(W,t,x),e(t,d),e(d,I),e(t,k),e(t,h),e(h,O),e(h,f),e(f,C),e(h,b),e(h,p),e(p,D),e(h,ie),e(h,T),e(T,z),e(h,$),e(h,B),e(B,F),e(h,_),e(h,j),e(j,A),e(h,H),e(h,N),e(h,U),e(t,J),e(t,E),e(t,Q),e(t,w),e(w,X),e(w,Y),e(w,u),e(w,Z),e(w,L)},p:ae,i:ae,o:ae,d(W){W&&n(t)}}}class Zt extends mt{constructor(t){super(),vt(this,t,null,Yt,ut,{})}}const es="/berkay-yalin.io/_app/immutable/assets/knight_m0.45722dd8.png",ts="/berkay-yalin.io/_app/immutable/assets/knight_m1.46e314b8.png",ss="/berkay-yalin.io/_app/immutable/assets/knight_m2.ac0a42e2.png",os="/berkay-yalin.io/_app/immutable/assets/knight_m3.77ebe86d.png";function as(De){let t,d,I,k,h,O,f,C,b,p,D,ie=`class Solution:
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
        return memo[row][column]`,T,z,$,B,F,_,j,A,H,N,U,J,E,le,Q,w,X,Y,u,Z,L,W,x,R,g,ne,M,re,ce,q,V,Pe,Te,$e,Be,je,he,Ae,Le,ee,bt,Ve,S,Se,de,We,Re,me,Me,qe,Ke,ve,Ge,ze,ue,Fe,He,fe,Ne,Ue,P,te,pt,Je,se,gt,Qe,oe,_t,Xe,be,Ye,Ze,pe,et,tt,ge,st,ot,K,at,it,lt,_e,nt,rt,we,ct,ht,ke,wt=`class Solution:
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
        .`),p=m(),D=i("code"),T=o(ie),z=m(),$=i("h2"),B=o("The Law of Total Probability"),F=m(),_=i("div"),j=o("Suppose the events "),A=i("code"),H=o("B_1, ..., B_k"),N=o(` are mutally exclusive and exhaustive events in a sample space.
        `),U=i("br"),J=o(`
        Then for any event `),E=i("code"),le=o("A"),Q=o(` in that sample space:
        `),w=i("code"),X=o("P(A) = P(A n B_1) + ... + P(A n B_k)"),Y=m(),u=i("div"),Z=o("If we consider the knight starts within a red "),L=i("code"),W=o("4x4"),x=o(" board, and only has "),R=i("code"),g=o("1"),ne=o(` move, then only will 3 out of the 8 possible moves keep the knight within the board.
        If we consider this first example, we can manually set out the numbers to visualise the problem before writing a general solution.

        With an array containing the probability of each move occurring,
        `),M=i("code"),re=o("[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"),ce=o(`
        , and another array of the probabilities that the knight stays on the board,
        `),q=i("code"),V=o("[1, 1, 1, 0, 0, 0, 0, 0]"),Pe=o(`
        , we can calculate the result through the sum of both arrays.
        `),Te=i("br"),$e=o(`
        The law of total probability sums the conditional probabilities of all cases, multiplied by the probability of each case occurring:
        `),Be=i("br"),je=m(),he=i("code"),Ae=o("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),Le=m(),ee=i("img"),Ve=m(),S=i("div"),Se=o("We were able to set the probability that the knight would remain on the board as "),de=i("code"),We=o("1"),Re=o(` as it was the final move of the knight -
        if the knight ends on a square within the board there is a `),me=i("code"),Me=o("100%"),qe=o(` chance the knight has remained within the board.
        Things start to get a bit more complicated after one move, as there is no guarantee the knight will remain within the board after the first move.`),Ke=m(),ve=i("div"),Ge=o("Let's consider the previous example but where the knight moves twice instead of just once."),ze=m(),ue=i("div"),Fe=o("We can work through this problem backwards to understand how the statistics behind the solution works."),He=m(),fe=i("div"),Ne=o(`For each of the 3 possibilities the knight can make for it's second move,
        we can calculate the probability that the knight stays within the board like we did in the previous example,
        as it is the final move.`),Ue=m(),P=i("div"),te=i("img"),Je=m(),se=i("img"),Qe=m(),oe=i("img"),Xe=m(),be=i("code"),Ye=o("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),Ze=m(),pe=i("code"),et=o("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.5"),tt=m(),ge=i("code"),st=o("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),ot=m(),K=i("div"),at=o(`We can plug these results back into the original equation to determine the final probability:
        `),it=i("br"),lt=m(),_e=i("code"),nt=o("(0.125 * 0.375) + (0.125 * 0.5) + (0.125 * 0.375) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.15625"),rt=m(),we=i("h2"),ct=o("Solution"),ht=m(),ke=i("code"),dt=o(wt),this.h()},l(Ce){t=l(Ce,"DIV",{id:!0,class:!0});var c=r(t);d=l(c,"DIV",{class:!0});var ye=r(d);I=a(ye,`The first
        `),k=l(ye,"A",{style:!0,href:!0});var kt=r(k);h=a(kt,"solution"),kt.forEach(n),O=a(ye,`
        presented on LeetCode for this problem is available below, which uses several iterators to store probabilities within differnt arrays.
        We can significantly simplify this solution however through the use of recursion and the
        `),f=l(ye,"A",{style:!0,href:!0});var yt=r(f);C=a(yt,"Law of Total Probability"),yt.forEach(n),b=a(ye,`
        .`),ye.forEach(n),p=v(c),D=l(c,"CODE",{class:!0});var Et=r(D);T=a(Et,ie),Et.forEach(n),z=v(c),$=l(c,"H2",{class:!0});var xt=r($);B=a(xt,"The Law of Total Probability"),xt.forEach(n),F=v(c),_=l(c,"DIV",{class:!0});var G=r(_);j=a(G,"Suppose the events "),A=l(G,"CODE",{class:!0});var Dt=r(A);H=a(Dt,"B_1, ..., B_k"),Dt.forEach(n),N=a(G,` are mutally exclusive and exhaustive events in a sample space.
        `),U=l(G,"BR",{}),J=a(G,`
        Then for any event `),E=l(G,"CODE",{class:!0});var Ct=r(E);le=a(Ct,"A"),Ct.forEach(n),Q=a(G,` in that sample space:
        `),w=l(G,"CODE",{class:!0});var It=r(w);X=a(It,"P(A) = P(A n B_1) + ... + P(A n B_k)"),It.forEach(n),G.forEach(n),Y=v(c),u=l(c,"DIV",{class:!0});var y=r(u);Z=a(y,"If we consider the knight starts within a red "),L=l(y,"CODE",{class:!0});var Ot=r(L);W=a(Ot,"4x4"),Ot.forEach(n),x=a(y," board, and only has "),R=l(y,"CODE",{class:!0});var Pt=r(R);g=a(Pt,"1"),Pt.forEach(n),ne=a(y,` move, then only will 3 out of the 8 possible moves keep the knight within the board.
        If we consider this first example, we can manually set out the numbers to visualise the problem before writing a general solution.

        With an array containing the probability of each move occurring,
        `),M=l(y,"CODE",{class:!0});var Tt=r(M);re=a(Tt,"[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"),Tt.forEach(n),ce=a(y,`
        , and another array of the probabilities that the knight stays on the board,
        `),q=l(y,"CODE",{class:!0});var $t=r(q);V=a($t,"[1, 1, 1, 0, 0, 0, 0, 0]"),$t.forEach(n),Pe=a(y,`
        , we can calculate the result through the sum of both arrays.
        `),Te=l(y,"BR",{}),$e=a(y,`
        The law of total probability sums the conditional probabilities of all cases, multiplied by the probability of each case occurring:
        `),Be=l(y,"BR",{}),je=v(y),he=l(y,"CODE",{class:!0});var Bt=r(he);Ae=a(Bt,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),Bt.forEach(n),y.forEach(n),Le=v(c),ee=l(c,"IMG",{id:!0,src:!0,class:!0}),Ve=v(c),S=l(c,"DIV",{class:!0});var Ee=r(S);Se=a(Ee,"We were able to set the probability that the knight would remain on the board as "),de=l(Ee,"CODE",{class:!0});var jt=r(de);We=a(jt,"1"),jt.forEach(n),Re=a(Ee,` as it was the final move of the knight -
        if the knight ends on a square within the board there is a `),me=l(Ee,"CODE",{class:!0});var At=r(me);Me=a(At,"100%"),At.forEach(n),qe=a(Ee,` chance the knight has remained within the board.
        Things start to get a bit more complicated after one move, as there is no guarantee the knight will remain within the board after the first move.`),Ee.forEach(n),Ke=v(c),ve=l(c,"DIV",{class:!0});var Lt=r(ve);Ge=a(Lt,"Let's consider the previous example but where the knight moves twice instead of just once."),Lt.forEach(n),ze=v(c),ue=l(c,"DIV",{class:!0});var Vt=r(ue);Fe=a(Vt,"We can work through this problem backwards to understand how the statistics behind the solution works."),Vt.forEach(n),He=v(c),fe=l(c,"DIV",{class:!0});var St=r(fe);Ne=a(St,`For each of the 3 possibilities the knight can make for it's second move,
        we can calculate the probability that the knight stays within the board like we did in the previous example,
        as it is the final move.`),St.forEach(n),Ue=v(c),P=l(c,"DIV",{id:!0,class:!0});var xe=r(P);te=l(xe,"IMG",{id:!0,src:!0,class:!0}),Je=v(xe),se=l(xe,"IMG",{id:!0,src:!0,class:!0}),Qe=v(xe),oe=l(xe,"IMG",{id:!0,src:!0,class:!0}),xe.forEach(n),Xe=v(c),be=l(c,"CODE",{class:!0});var Wt=r(be);Ye=a(Wt,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),Wt.forEach(n),Ze=v(c),pe=l(c,"CODE",{class:!0});var Rt=r(pe);et=a(Rt,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.5"),Rt.forEach(n),tt=v(c),ge=l(c,"CODE",{class:!0});var Mt=r(ge);st=a(Mt,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),Mt.forEach(n),ot=v(c),K=l(c,"DIV",{class:!0});var Ie=r(K);at=a(Ie,`We can plug these results back into the original equation to determine the final probability:
        `),it=l(Ie,"BR",{}),lt=v(Ie),_e=l(Ie,"CODE",{class:!0});var qt=r(_e);nt=a(qt,"(0.125 * 0.375) + (0.125 * 0.5) + (0.125 * 0.375) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.15625"),qt.forEach(n),Ie.forEach(n),rt=v(c),we=l(c,"H2",{class:!0});var Kt=r(we);ct=a(Kt,"Solution"),Kt.forEach(n),ht=v(c),ke=l(c,"CODE",{class:!0});var Gt=r(ke);dt=a(Gt,wt),Gt.forEach(n),c.forEach(n),this.h()},h(){zt(k,"color","white"),s(k,"href","https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3322846/688-space-97-74-solution-with-step-by-step-explanation/"),zt(f,"color","white"),s(f,"href","https://en.wikipedia.org/wiki/Law_of_total_probability"),s(d,"class","text svelte-cp80tt"),s(D,"class","svelte-cp80tt"),s($,"class","svelte-cp80tt"),s(A,"class","svelte-cp80tt"),s(E,"class","svelte-cp80tt"),s(w,"class","svelte-cp80tt"),s(_,"class","text svelte-cp80tt"),s(L,"class","svelte-cp80tt"),s(R,"class","svelte-cp80tt"),s(M,"class","svelte-cp80tt"),s(q,"class","svelte-cp80tt"),s(he,"class","svelte-cp80tt"),s(u,"class","text svelte-cp80tt"),s(ee,"id","knight_m0"),Oe(ee.src,bt=es)||s(ee,"src",bt),s(ee,"class","svelte-cp80tt"),s(de,"class","svelte-cp80tt"),s(me,"class","svelte-cp80tt"),s(S,"class","text svelte-cp80tt"),s(ve,"class","text svelte-cp80tt"),s(ue,"class","text svelte-cp80tt"),s(fe,"class","text svelte-cp80tt"),s(te,"id","knight_m1"),Oe(te.src,pt=ts)||s(te,"src",pt),s(te,"class","svelte-cp80tt"),s(se,"id","knight_m2"),Oe(se.src,gt=ss)||s(se,"src",gt),s(se,"class","svelte-cp80tt"),s(oe,"id","knight_m3"),Oe(oe.src,_t=os)||s(oe,"src",_t),s(oe,"class","svelte-cp80tt"),s(P,"id","knightMovesWrapper"),s(P,"class","svelte-cp80tt"),s(be,"class","svelte-cp80tt"),s(pe,"class","svelte-cp80tt"),s(ge,"class","svelte-cp80tt"),s(_e,"class","svelte-cp80tt"),s(K,"class","text svelte-cp80tt"),s(we,"class","svelte-cp80tt"),s(ke,"class","svelte-cp80tt"),s(t,"id","solution"),s(t,"class","svelte-cp80tt")},m(Ce,c){ft(Ce,t,c),e(t,d),e(d,I),e(d,k),e(k,h),e(d,O),e(d,f),e(f,C),e(d,b),e(t,p),e(t,D),e(D,T),e(t,z),e(t,$),e($,B),e(t,F),e(t,_),e(_,j),e(_,A),e(A,H),e(_,N),e(_,U),e(_,J),e(_,E),e(E,le),e(_,Q),e(_,w),e(w,X),e(t,Y),e(t,u),e(u,Z),e(u,L),e(L,W),e(u,x),e(u,R),e(R,g),e(u,ne),e(u,M),e(M,re),e(u,ce),e(u,q),e(q,V),e(u,Pe),e(u,Te),e(u,$e),e(u,Be),e(u,je),e(u,he),e(he,Ae),e(t,Le),e(t,ee),e(t,Ve),e(t,S),e(S,Se),e(S,de),e(de,We),e(S,Re),e(S,me),e(me,Me),e(S,qe),e(t,Ke),e(t,ve),e(ve,Ge),e(t,ze),e(t,ue),e(ue,Fe),e(t,He),e(t,fe),e(fe,Ne),e(t,Ue),e(t,P),e(P,te),e(P,Je),e(P,se),e(P,Qe),e(P,oe),e(t,Xe),e(t,be),e(be,Ye),e(t,Ze),e(t,pe),e(pe,et),e(t,tt),e(t,ge),e(ge,st),e(t,ot),e(t,K),e(K,at),e(K,it),e(K,lt),e(K,_e),e(_e,nt),e(t,rt),e(t,we),e(we,ct),e(t,ht),e(t,ke),e(ke,dt)},p:ae,i:ae,o:ae,d(Ce){Ce&&n(t)}}}class is extends mt{constructor(t){super(),vt(this,t,null,as,ut,{})}}function ls(De){let t,d,I,k,h,O,f,C;return h=new Zt({}),f=new is({}),{c(){t=i("main"),d=i("h1"),I=o("Leet Code 688. Knight Probability in Chessboard"),k=m(),Ft(h.$$.fragment),O=m(),Ft(f.$$.fragment),this.h()},l(b){t=l(b,"MAIN",{class:!0});var p=r(t);d=l(p,"H1",{class:!0});var D=r(d);I=a(D,"Leet Code 688. Knight Probability in Chessboard"),D.forEach(n),k=v(p),Ht(h.$$.fragment,p),O=v(p),Ht(f.$$.fragment,p),p.forEach(n),this.h()},h(){s(d,"class","svelte-ijzgxc"),s(t,"class","svelte-ijzgxc")},m(b,p){ft(b,t,p),e(t,d),e(d,I),e(t,k),Nt(h,t,null),e(t,O),Nt(f,t,null),C=!0},p:ae,i(b){C||(Ut(h.$$.fragment,b),Ut(f.$$.fragment,b),C=!0)},o(b){Jt(h.$$.fragment,b),Jt(f.$$.fragment,b),C=!1},d(b){b&&n(t),Qt(h),Qt(f)}}}class hs extends mt{constructor(t){super(),vt(this,t,null,ls,ut,{})}}export{hs as component};
