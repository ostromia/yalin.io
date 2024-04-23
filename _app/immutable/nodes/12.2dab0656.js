import{S as Fe,i as He,s as Re,C as ft,k as w,l as E,m as D,h as n,n as h,b as c,D as ct,E as ht,F as mt,g as I,d as T,y as A,a as x,q as m,z as P,c as C,r as u,Q as _e,A as j,G as f,B as L,H as ie}from"../chunks/index.aba53c8a.js";/* empty css                      */import{C as at,p as it}from"../chunks/index.5c81f6a2.js";import{H as ut}from"../chunks/Header.102b2485.js";function $t($){let t,e;const i=$[1].default,o=ft(i,$,$[0],null);return{c(){t=w("div"),o&&o.c(),this.h()},l(s){t=E(s,"DIV",{class:!0});var a=D(t);o&&o.l(a),a.forEach(n),this.h()},h(){h(t,"class","svelte-3l6799")},m(s,a){c(s,t,a),o&&o.m(t,null),e=!0},p(s,[a]){o&&o.p&&(!e||a&1)&&ct(o,i,s,s[0],e?mt(i,s[0],a,null):ht(s[0]),null)},i(s){e||(I(o,s),e=!0)},o(s){T(o,s),e=!1},d(s){s&&n(t),o&&o.d(s)}}}function dt($,t,e){let{$$slots:i={},$$scope:o}=t;return $.$$set=s=>{"$$scope"in s&&e(0,o=s.$$scope)},[o,i]}class S extends Fe{constructor(t){super(),He(this,t,dt,$t,Re,{})}}function pt($){let t,e;const i=$[1].default,o=ft(i,$,$[0],null);return{c(){t=w("div"),o&&o.c(),this.h()},l(s){t=E(s,"DIV",{class:!0});var a=D(t);o&&o.l(a),a.forEach(n),this.h()},h(){h(t,"class","svelte-14dtst")},m(s,a){c(s,t,a),o&&o.m(t,null),e=!0},p(s,[a]){o&&o.p&&(!e||a&1)&&ct(o,i,s,s[0],e?mt(i,s[0],a,null):ht(s[0]),null)},i(s){e||(I(o,s),e=!0)},o(s){T(o,s),e=!1},d(s){s&&n(t),o&&o.d(s)}}}function vt($,t,e){let{$$slots:i={},$$scope:o}=t;return $.$$set=s=>{"$$scope"in s&&e(0,o=s.$$scope)},[o,i]}class rt extends Fe{constructor(t){super(),He(this,t,vt,pt,Re,{})}}const _t="/_app/immutable/assets/knight.7c95888c.png",bt="/_app/immutable/assets/knight_m0.45722dd8.png",gt="/_app/immutable/assets/knight_m1.46e314b8.png",kt="/_app/immutable/assets/knight_m2.ac0a42e2.png",wt="/_app/immutable/assets/knight_m3.77ebe86d.png";function Et($){let t,e,i,o,s,a,d,l,p,y,k,O,F,M,q,R;return{c(){t=m("On an "),e=w("code"),i=m("n x n"),o=m(" chessboard, a knight starts at the cell "),s=w("code"),a=m("(row, column)"),d=m(" and attempts to make exactly "),l=w("code"),p=m("k"),y=m(` moves.
            The rows and columns are 0-indexed, so the top-left cell is `),k=w("code"),O=m("(0, 0)"),F=m(", and the bottom-right cell is "),M=w("code"),q=m("(n - 1, n - 1)"),R=m("."),this.h()},l(_){t=u(_,"On an "),e=E(_,"CODE",{class:!0});var W=D(e);i=u(W,"n x n"),W.forEach(n),o=u(_," chessboard, a knight starts at the cell "),s=E(_,"CODE",{class:!0});var V=D(s);a=u(V,"(row, column)"),V.forEach(n),d=u(_," and attempts to make exactly "),l=E(_,"CODE",{class:!0});var ce=D(l);p=u(ce,"k"),ce.forEach(n),y=u(_,` moves.
            The rows and columns are 0-indexed, so the top-left cell is `),k=E(_,"CODE",{class:!0});var v=D(k);O=u(v,"(0, 0)"),v.forEach(n),F=u(_,", and the bottom-right cell is "),M=E(_,"CODE",{class:!0});var G=D(M);q=u(G,"(n - 1, n - 1)"),G.forEach(n),R=u(_,"."),this.h()},h(){h(e,"class","svelte-1edovk2"),h(s,"class","svelte-1edovk2"),h(l,"class","svelte-1edovk2"),h(k,"class","svelte-1edovk2"),h(M,"class","svelte-1edovk2")},m(_,W){c(_,t,W),c(_,e,W),f(e,i),c(_,o,W),c(_,s,W),f(s,a),c(_,d,W),c(_,l,W),f(l,p),c(_,y,W),c(_,k,W),f(k,O),c(_,F,W),c(_,M,W),f(M,q),c(_,R,W)},p:ie,d(_){_&&n(t),_&&n(e),_&&n(o),_&&n(s),_&&n(d),_&&n(l),_&&n(y),_&&n(k),_&&n(F),_&&n(M),_&&n(R)}}}function yt($){let t;return{c(){t=m(`A chess knight has eight possible moves it can make, as illustrated below.
            Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.`)},l(e){t=u(e,`A chess knight has eight possible moves it can make, as illustrated below.
            Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.`)},m(e,i){c(e,t,i)},d(e){e&&n(t)}}}function xt($){let t;return{c(){t=m("Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.")},l(e){t=u(e,"Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.")},m(e,i){c(e,t,i)},d(e){e&&n(t)}}}function Ct($){let t;return{c(){t=m("The knight continues moving until it has made exactly k moves or has moved off the chessboard.")},l(e){t=u(e,"The knight continues moving until it has made exactly k moves or has moved off the chessboard.")},m(e,i){c(e,t,i)},d(e){e&&n(t)}}}function Dt($){let t;return{c(){t=m("Return the probability that the knight remains on the board after it has stopped moving.")},l(e){t=u(e,"Return the probability that the knight remains on the board after it has stopped moving.")},m(e,i){c(e,t,i)},d(e){e&&n(t)}}}function Ot($){let t,e,i,o,s,a,d;return{c(){t=m(`The first

            `),e=w("a"),i=m("solution"),o=m(`

            presented on LeetCode for this problem is available below, which uses several iterators to store probabilities within differnt arrays.

            We can significantly simplify this solution however through the use of recursion and the

            `),s=w("a"),a=m("Law of Total Probability"),d=m(`

            .`),this.h()},l(l){t=u(l,`The first

            `),e=E(l,"A",{href:!0,class:!0});var p=D(e);i=u(p,"solution"),p.forEach(n),o=u(l,`

            presented on LeetCode for this problem is available below, which uses several iterators to store probabilities within differnt arrays.

            We can significantly simplify this solution however through the use of recursion and the

            `),s=E(l,"A",{href:!0,class:!0});var y=D(s);a=u(y,"Law of Total Probability"),y.forEach(n),d=u(l,`

            .`),this.h()},h(){h(e,"href","https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3322846/688-space-97-74-solution-with-step-by-step-explanation/"),h(e,"class","svelte-1edovk2"),h(s,"href","https://en.wikipedia.org/wiki/Law_of_total_probability"),h(s,"class","svelte-1edovk2")},m(l,p){c(l,t,p),c(l,e,p),f(e,i),c(l,o,p),c(l,s,p),f(s,a),c(l,d,p)},p:ie,d(l){l&&n(t),l&&n(e),l&&n(o),l&&n(s),l&&n(d)}}}function It($){let t;return{c(){t=m("The Law of Total Probability")},l(e){t=u(e,"The Law of Total Probability")},m(e,i){c(e,t,i)},d(e){e&&n(t)}}}function Tt($){let t,e,i,o,s,a,d,l,p,y;return{c(){t=m("Suppose the events "),e=w("code"),i=m("B_1, ..., B_k"),o=m(` are mutally exclusive and exhaustive events in a sample space,
            then for any event `),s=w("code"),a=m("A"),d=m(" in that sample space "),l=w("code"),p=m("P(A) = P(A n B_1) + ... + P(A n B_k)"),y=m("."),this.h()},l(k){t=u(k,"Suppose the events "),e=E(k,"CODE",{class:!0});var O=D(e);i=u(O,"B_1, ..., B_k"),O.forEach(n),o=u(k,` are mutally exclusive and exhaustive events in a sample space,
            then for any event `),s=E(k,"CODE",{class:!0});var F=D(s);a=u(F,"A"),F.forEach(n),d=u(k," in that sample space "),l=E(k,"CODE",{class:!0});var M=D(l);p=u(M,"P(A) = P(A n B_1) + ... + P(A n B_k)"),M.forEach(n),y=u(k,"."),this.h()},h(){h(e,"class","svelte-1edovk2"),h(s,"class","svelte-1edovk2"),h(l,"class","svelte-1edovk2")},m(k,O){c(k,t,O),c(k,e,O),f(e,i),c(k,o,O),c(k,s,O),f(s,a),c(k,d,O),c(k,l,O),f(l,p),c(k,y,O)},p:ie,d(k){k&&n(t),k&&n(e),k&&n(o),k&&n(s),k&&n(d),k&&n(l),k&&n(y)}}}function At($){let t,e,i,o,s,a,d;return{c(){t=m("If we consider the knight starts within a red "),e=w("code"),i=m("4x4"),o=m(" board, and only has "),s=w("code"),a=m("1"),d=m(` move,
            then only will 3 out of the 8 possible moves keep the knight within the board.
            If we consider this first example, we can manually set out the numbers to visualise the problem before writing a general solution.`),this.h()},l(l){t=u(l,"If we consider the knight starts within a red "),e=E(l,"CODE",{class:!0});var p=D(e);i=u(p,"4x4"),p.forEach(n),o=u(l," board, and only has "),s=E(l,"CODE",{class:!0});var y=D(s);a=u(y,"1"),y.forEach(n),d=u(l,` move,
            then only will 3 out of the 8 possible moves keep the knight within the board.
            If we consider this first example, we can manually set out the numbers to visualise the problem before writing a general solution.`),this.h()},h(){h(e,"class","svelte-1edovk2"),h(s,"class","svelte-1edovk2")},m(l,p){c(l,t,p),c(l,e,p),f(e,i),c(l,o,p),c(l,s,p),f(s,a),c(l,d,p)},p:ie,d(l){l&&n(t),l&&n(e),l&&n(o),l&&n(s),l&&n(d)}}}function Pt($){let t,e,i,o,s,a,d;return{c(){t=m("With an array containing the probability of each move occurring, "),e=w("code"),i=m("[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"),o=m(`,
            and another array of the probabilities that the knight stays on the board, `),s=w("code"),a=m("[1, 1, 1, 0, 0, 0, 0, 0]"),d=m(`,
            we can calculate the result through the sum of both arrays.`),this.h()},l(l){t=u(l,"With an array containing the probability of each move occurring, "),e=E(l,"CODE",{class:!0});var p=D(e);i=u(p,"[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]"),p.forEach(n),o=u(l,`,
            and another array of the probabilities that the knight stays on the board, `),s=E(l,"CODE",{class:!0});var y=D(s);a=u(y,"[1, 1, 1, 0, 0, 0, 0, 0]"),y.forEach(n),d=u(l,`,
            we can calculate the result through the sum of both arrays.`),this.h()},h(){h(e,"class","svelte-1edovk2"),h(s,"class","svelte-1edovk2")},m(l,p){c(l,t,p),c(l,e,p),f(e,i),c(l,o,p),c(l,s,p),f(s,a),c(l,d,p)},p:ie,d(l){l&&n(t),l&&n(e),l&&n(o),l&&n(s),l&&n(d)}}}function jt($){let t,e,i,o,s;return{c(){t=m(`The law of total probability sums the conditional probabilities of all cases, multiplied by the probability of each case occurring:
            `),e=w("br"),i=x(),o=w("code"),s=m("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),this.h()},l(a){t=u(a,`The law of total probability sums the conditional probabilities of all cases, multiplied by the probability of each case occurring:
            `),e=E(a,"BR",{}),i=C(a),o=E(a,"CODE",{class:!0});var d=D(o);s=u(d,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),d.forEach(n),this.h()},h(){h(o,"class","svelte-1edovk2")},m(a,d){c(a,t,d),c(a,e,d),c(a,i,d),c(a,o,d),f(o,s)},p:ie,d(a){a&&n(t),a&&n(e),a&&n(i),a&&n(o)}}}function Lt($){let t,e,i,o,s,a,d;return{c(){t=m("We were able to set the probability that the knight would remain on the board as "),e=w("code"),i=m("1"),o=m(` as it was the final move of the knight -
            if the knight ends on a square within the board there is a `),s=w("code"),a=m("100%"),d=m(` chance the knight has remained within the board.
            Things start to get a bit more complicated after one move, as there is no guarantee the knight will remain within the board after the first move.`),this.h()},l(l){t=u(l,"We were able to set the probability that the knight would remain on the board as "),e=E(l,"CODE",{class:!0});var p=D(e);i=u(p,"1"),p.forEach(n),o=u(l,` as it was the final move of the knight -
            if the knight ends on a square within the board there is a `),s=E(l,"CODE",{class:!0});var y=D(s);a=u(y,"100%"),y.forEach(n),d=u(l,` chance the knight has remained within the board.
            Things start to get a bit more complicated after one move, as there is no guarantee the knight will remain within the board after the first move.`),this.h()},h(){h(e,"class","svelte-1edovk2"),h(s,"class","svelte-1edovk2")},m(l,p){c(l,t,p),c(l,e,p),f(e,i),c(l,o,p),c(l,s,p),f(s,a),c(l,d,p)},p:ie,d(l){l&&n(t),l&&n(e),l&&n(o),l&&n(s),l&&n(d)}}}function Wt($){let t;return{c(){t=m(`Let's consider the previous example but where the knight moves twice instead of just once.
            We can work through this problem backwards to understand how the statistics behind the solution works.`)},l(e){t=u(e,`Let's consider the previous example but where the knight moves twice instead of just once.
            We can work through this problem backwards to understand how the statistics behind the solution works.`)},m(e,i){c(e,t,i)},d(e){e&&n(t)}}}function Bt($){let t;return{c(){t=m(`For each of the 3 possibilities the knight can make for it's second move,
            we can calculate the probability that the knight stays within the board like we did in the previous example,
            as it is the final move.`)},l(e){t=u(e,`For each of the 3 possibilities the knight can make for it's second move,
            we can calculate the probability that the knight stays within the board like we did in the previous example,
            as it is the final move.`)},m(e,i){c(e,t,i)},d(e){e&&n(t)}}}function St($){let t,e,i,o,s;return{c(){t=m(`We can plug these results back into the original equation to determine the final probability:
            `),e=w("br"),i=x(),o=w("code"),s=m("(0.125 * 0.375) + (0.125 * 0.5) + (0.125 * 0.375) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.15625"),this.h()},l(a){t=u(a,`We can plug these results back into the original equation to determine the final probability:
            `),e=E(a,"BR",{}),i=C(a),o=E(a,"CODE",{class:!0});var d=D(o);s=u(d,"(0.125 * 0.375) + (0.125 * 0.5) + (0.125 * 0.375) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.15625"),d.forEach(n),this.h()},h(){h(o,"class","svelte-1edovk2")},m(a,d){c(a,t,d),c(a,e,d),c(a,i,d),c(a,o,d),f(o,s)},p:ie,d(a){a&&n(t),a&&n(e),a&&n(i),a&&n(o)}}}function Mt($){let t;return{c(){t=m("Solution")},l(e){t=u(e,"Solution")},m(e,i){c(e,t,i)},d(e){e&&n(t)}}}function qt($){let t;return{c(){t=m("The following solution uses the law of total probability to calculate the final answer")},l(e){t=u(e,"The following solution uses the law of total probability to calculate the final answer")},m(e,i){c(e,t,i)},d(e){e&&n(t)}}}function Vt($){let t,e,i,o,s,a,d,l,p,y,k,O,F,M,q,R,_,W,V,ce,v,G,ge,re,ke,z,we,N,Ee,Q,ye,U,xe,J,Ce,X,ze,De,Y,Oe,Z,Ie,ee,Te,K,te,Ne,Ae,se,Qe,Pe,oe,Ue,je,he,Le,We,me,Be,Se,ue,Me,qe,le,Ve,ne,Ge,ae,Ke,fe,be;return e=new ut({props:{date:"02.10.2023",title:"Leet Code 688. Knight Probability in Chessboard"}}),l=new S({props:{$$slots:{default:[Et]},$$scope:{ctx:$}}}),y=new S({props:{$$slots:{default:[yt]},$$scope:{ctx:$}}}),q=new S({props:{$$slots:{default:[xt]},$$scope:{ctx:$}}}),_=new S({props:{$$slots:{default:[Ct]},$$scope:{ctx:$}}}),V=new S({props:{$$slots:{default:[Dt]},$$scope:{ctx:$}}}),G=new S({props:{$$slots:{default:[Ot]},$$scope:{ctx:$}}}),re=new at({props:{filetype:[it()],readOnly:!0,doc:`class Solution:
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
        return memo[row][column]`}}),z=new rt({props:{$$slots:{default:[It]},$$scope:{ctx:$}}}),N=new S({props:{$$slots:{default:[Tt]},$$scope:{ctx:$}}}),Q=new S({props:{$$slots:{default:[At]},$$scope:{ctx:$}}}),U=new S({props:{$$slots:{default:[Pt]},$$scope:{ctx:$}}}),J=new S({props:{$$slots:{default:[jt]},$$scope:{ctx:$}}}),Y=new S({props:{$$slots:{default:[Lt]},$$scope:{ctx:$}}}),Z=new S({props:{$$slots:{default:[Wt]},$$scope:{ctx:$}}}),ee=new S({props:{$$slots:{default:[Bt]},$$scope:{ctx:$}}}),le=new S({props:{$$slots:{default:[St]},$$scope:{ctx:$}}}),ne=new rt({props:{$$slots:{default:[Mt]},$$scope:{ctx:$}}}),ae=new S({props:{$$slots:{default:[qt]},$$scope:{ctx:$}}}),fe=new at({props:{filetype:[it()],readOnly:!0,doc:`class Solution:
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
        return dp(row, column, k)`}}),{c(){t=w("main"),A(e.$$.fragment),i=x(),o=w("div"),s=w("a"),a=m("Leet Code 688."),d=x(),A(l.$$.fragment),p=x(),A(y.$$.fragment),k=x(),O=w("img"),M=x(),A(q.$$.fragment),R=x(),A(_.$$.fragment),W=x(),A(V.$$.fragment),ce=x(),v=w("div"),A(G.$$.fragment),ge=x(),A(re.$$.fragment),ke=x(),A(z.$$.fragment),we=x(),A(N.$$.fragment),Ee=x(),A(Q.$$.fragment),ye=x(),A(U.$$.fragment),xe=x(),A(J.$$.fragment),Ce=x(),X=w("img"),De=x(),A(Y.$$.fragment),Oe=x(),A(Z.$$.fragment),Ie=x(),A(ee.$$.fragment),Te=x(),K=w("div"),te=w("img"),Ae=x(),se=w("img"),Pe=x(),oe=w("img"),je=x(),he=w("code"),Le=m("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),We=x(),me=w("code"),Be=m("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.5"),Se=x(),ue=w("code"),Me=m("(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),qe=x(),A(le.$$.fragment),Ve=x(),A(ne.$$.fragment),Ge=x(),A(ae.$$.fragment),Ke=x(),A(fe.$$.fragment),this.h()},l(r){t=E(r,"MAIN",{class:!0});var b=D(t);P(e.$$.fragment,b),i=C(b),o=E(b,"DIV",{id:!0,class:!0});var B=D(o);s=E(B,"A",{id:!0,href:!0,class:!0});var $e=D(s);a=u($e,"Leet Code 688."),$e.forEach(n),d=C(B),P(l.$$.fragment,B),p=C(B),P(y.$$.fragment,B),k=C(B),O=E(B,"IMG",{alt:!0,id:!0,src:!0,class:!0}),M=C(B),P(q.$$.fragment,B),R=C(B),P(_.$$.fragment,B),W=C(B),P(V.$$.fragment,B),B.forEach(n),ce=C(b),v=E(b,"DIV",{id:!0,class:!0});var g=D(v);P(G.$$.fragment,g),ge=C(g),P(re.$$.fragment,g),ke=C(g),P(z.$$.fragment,g),we=C(g),P(N.$$.fragment,g),Ee=C(g),P(Q.$$.fragment,g),ye=C(g),P(U.$$.fragment,g),xe=C(g),P(J.$$.fragment,g),Ce=C(g),X=E(g,"IMG",{alt:!0,id:!0,src:!0,class:!0}),De=C(g),P(Y.$$.fragment,g),Oe=C(g),P(Z.$$.fragment,g),Ie=C(g),P(ee.$$.fragment,g),Te=C(g),K=E(g,"DIV",{id:!0,class:!0});var H=D(K);te=E(H,"IMG",{alt:!0,id:!0,src:!0,class:!0}),Ae=C(H),se=E(H,"IMG",{alt:!0,id:!0,src:!0,class:!0}),Pe=C(H),oe=E(H,"IMG",{alt:!0,id:!0,src:!0,class:!0}),H.forEach(n),je=C(g),he=E(g,"CODE",{class:!0});var de=D(he);Le=u(de,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),de.forEach(n),We=C(g),me=E(g,"CODE",{class:!0});var pe=D(me);Be=u(pe,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.5"),pe.forEach(n),Se=C(g),ue=E(g,"CODE",{class:!0});var ve=D(ue);Me=u(ve,"(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375"),ve.forEach(n),qe=C(g),P(le.$$.fragment,g),Ve=C(g),P(ne.$$.fragment,g),Ge=C(g),P(ae.$$.fragment,g),Ke=C(g),P(fe.$$.fragment,g),g.forEach(n),b.forEach(n),this.h()},h(){h(s,"id","leetCodeLink"),h(s,"href","https://leetcode.com/problems/knight-probability-in-chessboard/"),h(s,"class","svelte-1edovk2"),h(O,"alt",""),h(O,"id","knightImage"),_e(O.src,F=_t)||h(O,"src",F),h(O,"class","svelte-1edovk2"),h(o,"id","problem"),h(o,"class","svelte-1edovk2"),h(X,"alt",""),h(X,"id","knight_m0"),_e(X.src,ze=bt)||h(X,"src",ze),h(X,"class","svelte-1edovk2"),h(te,"alt",""),h(te,"id","knight_m1"),_e(te.src,Ne=gt)||h(te,"src",Ne),h(te,"class","svelte-1edovk2"),h(se,"alt",""),h(se,"id","knight_m2"),_e(se.src,Qe=kt)||h(se,"src",Qe),h(se,"class","svelte-1edovk2"),h(oe,"alt",""),h(oe,"id","knight_m3"),_e(oe.src,Ue=wt)||h(oe,"src",Ue),h(oe,"class","svelte-1edovk2"),h(K,"id","knightMovesWrapper"),h(K,"class","svelte-1edovk2"),h(he,"class","svelte-1edovk2"),h(me,"class","svelte-1edovk2"),h(ue,"class","svelte-1edovk2"),h(v,"id","solution"),h(v,"class","svelte-1edovk2"),h(t,"class","svelte-1edovk2")},m(r,b){c(r,t,b),j(e,t,null),f(t,i),f(t,o),f(o,s),f(s,a),f(o,d),j(l,o,null),f(o,p),j(y,o,null),f(o,k),f(o,O),f(o,M),j(q,o,null),f(o,R),j(_,o,null),f(o,W),j(V,o,null),f(t,ce),f(t,v),j(G,v,null),f(v,ge),j(re,v,null),f(v,ke),j(z,v,null),f(v,we),j(N,v,null),f(v,Ee),j(Q,v,null),f(v,ye),j(U,v,null),f(v,xe),j(J,v,null),f(v,Ce),f(v,X),f(v,De),j(Y,v,null),f(v,Oe),j(Z,v,null),f(v,Ie),j(ee,v,null),f(v,Te),f(v,K),f(K,te),f(K,Ae),f(K,se),f(K,Pe),f(K,oe),f(v,je),f(v,he),f(he,Le),f(v,We),f(v,me),f(me,Be),f(v,Se),f(v,ue),f(ue,Me),f(v,qe),j(le,v,null),f(v,Ve),j(ne,v,null),f(v,Ge),j(ae,v,null),f(v,Ke),j(fe,v,null),be=!0},p(r,[b]){const B={};b&1&&(B.$$scope={dirty:b,ctx:r}),l.$set(B);const $e={};b&1&&($e.$$scope={dirty:b,ctx:r}),y.$set($e);const g={};b&1&&(g.$$scope={dirty:b,ctx:r}),q.$set(g);const H={};b&1&&(H.$$scope={dirty:b,ctx:r}),_.$set(H);const de={};b&1&&(de.$$scope={dirty:b,ctx:r}),V.$set(de);const pe={};b&1&&(pe.$$scope={dirty:b,ctx:r}),G.$set(pe);const ve={};b&1&&(ve.$$scope={dirty:b,ctx:r}),z.$set(ve);const Je={};b&1&&(Je.$$scope={dirty:b,ctx:r}),N.$set(Je);const Xe={};b&1&&(Xe.$$scope={dirty:b,ctx:r}),Q.$set(Xe);const Ye={};b&1&&(Ye.$$scope={dirty:b,ctx:r}),U.$set(Ye);const Ze={};b&1&&(Ze.$$scope={dirty:b,ctx:r}),J.$set(Ze);const et={};b&1&&(et.$$scope={dirty:b,ctx:r}),Y.$set(et);const tt={};b&1&&(tt.$$scope={dirty:b,ctx:r}),Z.$set(tt);const st={};b&1&&(st.$$scope={dirty:b,ctx:r}),ee.$set(st);const ot={};b&1&&(ot.$$scope={dirty:b,ctx:r}),le.$set(ot);const lt={};b&1&&(lt.$$scope={dirty:b,ctx:r}),ne.$set(lt);const nt={};b&1&&(nt.$$scope={dirty:b,ctx:r}),ae.$set(nt)},i(r){be||(I(e.$$.fragment,r),I(l.$$.fragment,r),I(y.$$.fragment,r),I(q.$$.fragment,r),I(_.$$.fragment,r),I(V.$$.fragment,r),I(G.$$.fragment,r),I(re.$$.fragment,r),I(z.$$.fragment,r),I(N.$$.fragment,r),I(Q.$$.fragment,r),I(U.$$.fragment,r),I(J.$$.fragment,r),I(Y.$$.fragment,r),I(Z.$$.fragment,r),I(ee.$$.fragment,r),I(le.$$.fragment,r),I(ne.$$.fragment,r),I(ae.$$.fragment,r),I(fe.$$.fragment,r),be=!0)},o(r){T(e.$$.fragment,r),T(l.$$.fragment,r),T(y.$$.fragment,r),T(q.$$.fragment,r),T(_.$$.fragment,r),T(V.$$.fragment,r),T(G.$$.fragment,r),T(re.$$.fragment,r),T(z.$$.fragment,r),T(N.$$.fragment,r),T(Q.$$.fragment,r),T(U.$$.fragment,r),T(J.$$.fragment,r),T(Y.$$.fragment,r),T(Z.$$.fragment,r),T(ee.$$.fragment,r),T(le.$$.fragment,r),T(ne.$$.fragment,r),T(ae.$$.fragment,r),T(fe.$$.fragment,r),be=!1},d(r){r&&n(t),L(e),L(l),L(y),L(q),L(_),L(V),L(G),L(re),L(z),L(N),L(Q),L(U),L(J),L(Y),L(Z),L(ee),L(le),L(ne),L(ae),L(fe)}}}class Rt extends Fe{constructor(t){super(),He(this,t,null,Vt,Re,{})}}export{Rt as component};
