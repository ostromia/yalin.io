<script>
    import "@fontsource/albert-sans";
    import KnightImage_m0 from "$r/articles/knight-probability-in-chessboard/knight_m0.png"
    import KnightImage_m1 from "$r/articles/knight-probability-in-chessboard/knight_m1.png"
    import KnightImage_m2 from "$r/articles/knight-probability-in-chessboard/knight_m2.png"
    import KnightImage_m3 from "$r/articles/knight-probability-in-chessboard/knight_m3.png"
</script>

<div id="solution">
    <div class="text">
        The first
        <a style="color: white" href="https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3322846/688-space-97-74-solution-with-step-by-step-explanation/">
            solution
        </a>
        presented on LeetCode for this problem is available below, which uses several iterators to store probabilities within differnt arrays.
        We can significantly simplify this solution however through the use of recursion and the
        <a style="color: white" href="https://en.wikipedia.org/wiki/Law_of_total_probability">
            Law of Total Probability
        </a>
        .
    </div>

    <code>
{`class Solution:
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
        return memo[row][column]`}
    </code>

    <h2>The Law of Total Probability</h2>

    <div class="text">
        Suppose the events <code>B_1, ..., B_k</code> are mutally exclusive and exhaustive events in a sample space.
        <br>
        Then for any event <code>A</code> in that sample space:
        <code>P(A) = P(A n B_1) + ... + P(A n B_k)</code>
    </div>

    <div class="text">
        If we consider the knight starts within a red <code>4x4</code> board, and only has <code>1</code> move, then only will 3 out of the 8 possible moves keep the knight within the board.
        If we consider this first example, we can manually set out the numbers to visualise the problem before writing a general solution.

        With an array containing the probability of each move occurring,
        <code>
            [0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]
        </code>
        , and another array of the probabilities that the knight stays on the board,
        <code>
            [1, 1, 1, 0, 0, 0, 0, 0]
        </code>
        , we can calculate the result through the sum of both arrays.
        <br>
        The law of total probability sums the conditional probabilities of all cases, multiplied by the probability of each case occurring:
        <br>
        <code>
            (0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375
        </code>
    </div>

    <img id="knight_m0" src={KnightImage_m0}>

    <div class="text">
        We were able to set the probability that the knight would remain on the board as <code>1</code> as it was the final move of the knight -
        if the knight ends on a square within the board there is a <code>100%</code> chance the knight has remained within the board.
        Things start to get a bit more complicated after one move, as there is no guarantee the knight will remain within the board after the first move.
    </div>

    <div class="text">
        Let's consider the previous example but where the knight moves twice instead of just once.
    </div>

    <div class="text">
        We can work through this problem backwards to understand how the statistics behind the solution works.
    </div>

    <div class="text">
        For each of the 3 possibilities the knight can make for it's second move,
        we can calculate the probability that the knight stays within the board like we did in the previous example,
        as it is the final move.
    </div>

    <div id="knightMovesWrapper">
        <img id="knight_m1" src={KnightImage_m1}>
        <img id="knight_m2" src={KnightImage_m2}>
        <img id="knight_m3" src={KnightImage_m3}>
    </div>

    <code>
        (0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375
    </code>

    <code>
        (0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.5
    </code>

    <code>
        (0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375
    </code>

    <div class="text">
        We can plug these results back into the original equation to determine the final probability:
        <br>
        <code>
            (0.125 * 0.375) + (0.125 * 0.5) + (0.125 * 0.375) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.15625
        </code>
    </div>

    <h2>
        Solution
    </h2>

    <!-- <div class="text">
        The following solution uses the law of total probability to calculate the final answer.
        <br>
        T
    </div> -->







    <code>
{`class Solution:
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
        return dp(row, column, k)`}
    </code>
</div>

<style lang="scss">
    #solution {
        display: grid;
        row-gap: 1rem;
        padding: 1rem;
        box-sizing: border-box;
    }

    h2 {
        margin: 0;
        font-family: "Albert Sans";
        color: white;
    }

    .text {
        color: white;
        font-family: 'Albert Sans';
        font-size: 1rem;
        line-height: 1.6rem;
    }

    code {
        font-size: 0.8rem;
        color: white;
        background-color: grey;
        padding: 0.2rem;
        border-radius: 0.2rem;
        white-space: pre-wrap;
    }

    #knight_m0 {
        height: 20rem;
        width: 20rem;
        align-self: center;
        margin: auto;
    }

    #knightMovesWrapper {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;

        img {
            width: 15rem;
            margin: 0.5rem;
        }
    }
</style>
