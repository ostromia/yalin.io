<script lang="ts">
    import "@fontsource/albert-sans";

    import CodeMirror from '$lib/CodeMirror.svelte';
    import { python as pythonLanguageSupport } from "@codemirror/lang-python";

    import Text from "$articles/components/Text.svelte";
    import Heading2 from "$articles/components/Heading2.svelte";

    import KnightImage from "$articles/knight-probability-in-chessboard/resources/knight.png"
    import KnightImage_m0 from "$articles/knight-probability-in-chessboard/resources/knight_m0.png"
    import KnightImage_m1 from "$articles/knight-probability-in-chessboard/resources/knight_m1.png"
    import KnightImage_m2 from "$articles/knight-probability-in-chessboard/resources/knight_m2.png"
    import KnightImage_m3 from "$articles/knight-probability-in-chessboard/resources/knight_m3.png"
</script>


<div id="problem">
    <a id="leetCodeLink" href="https://leetcode.com/problems/knight-probability-in-chessboard/">
        Leet Code 688.
    </a>

    <Text>
        On an <code>n x n</code> chessboard, a knight starts at the cell <code>(row, column)</code> and attempts to make exactly <code>k</code> moves.
        The rows and columns are 0-indexed, so the top-left cell is <code>(0, 0)</code>, and the bottom-right cell is <code>(n - 1, n - 1)</code>.
    </Text>

    <Text>
        A chess knight has eight possible moves it can make, as illustrated below.
        Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.
    </Text>

    <img alt="" id="knightImage" src={KnightImage}>

    <Text>
        Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.
    </Text>

    <Text>
        The knight continues moving until it has made exactly k moves or has moved off the chessboard.
    </Text>

    <Text>
        Return the probability that the knight remains on the board after it has stopped moving.
    </Text>
</div>

<div id="solution">
    <Text>
        The first

        <a href="https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3322846/688-space-97-74-solution-with-step-by-step-explanation/">
            solution
        </a>

        presented on LeetCode for this problem is available below, which uses several iterators to store probabilities within differnt arrays.

        We can significantly simplify this solution however through the use of recursion and the

        <a href="https://en.wikipedia.org/wiki/Law_of_total_probability">
            Law of Total Probability
        </a>

        .
    </Text>

    <CodeMirror
        filetype={[pythonLanguageSupport()]}
        readOnly={true}
        doc=
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
/>

    <Heading2>The Law of Total Probability</Heading2>

    <Text>
        Suppose the events <code>B_1, ..., B_k</code> are mutally exclusive and exhaustive events in a sample space,
        then for any event <code>A</code> in that sample space <code>P(A) = P(A n B_1) + ... + P(A n B_k)</code>.
    </Text>

    <Text>
        If we consider the knight starts within a red <code>4x4</code> board, and only has <code>1</code> move,
        then only will 3 out of the 8 possible moves keep the knight within the board.
        If we consider this first example, we can manually set out the numbers to visualise the problem before writing a general solution.
    </Text>

    <Text>
        With an array containing the probability of each move occurring, <code>[0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125]</code>,
        and another array of the probabilities that the knight stays on the board, <code>[1, 1, 1, 0, 0, 0, 0, 0]</code>,
        we can calculate the result through the sum of both arrays.
    </Text>

    <Text>
        The law of total probability sums the conditional probabilities of all cases, multiplied by the probability of each case occurring:
        <br>
        <code>(0.125 * 1) + (0.125 * 1) + (0.125 * 1) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.375</code>
    </Text>

    <img alt="" id="knight_m0" src={KnightImage_m0}>

    <Text>
        We were able to set the probability that the knight would remain on the board as <code>1</code> as it was the final move of the knight -
        if the knight ends on a square within the board there is a <code>100%</code> chance the knight has remained within the board.
        Things start to get a bit more complicated after one move, as there is no guarantee the knight will remain within the board after the first move.
    </Text>

    <Text>
        Let's consider the previous example but where the knight moves twice instead of just once.
        We can work through this problem backwards to understand how the statistics behind the solution works.
    </Text>

    <Text>
        For each of the 3 possibilities the knight can make for it's second move,
        we can calculate the probability that the knight stays within the board like we did in the previous example,
        as it is the final move.
    </Text>

    <div id="knightMovesWrapper">
        <img alt="" id="knight_m1" src={KnightImage_m1}>
        <img alt="" id="knight_m2" src={KnightImage_m2}>
        <img alt="" id="knight_m3" src={KnightImage_m3}>
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

    <Text>
        We can plug these results back into the original equation to determine the final probability:
        <br>
        <code>
            (0.125 * 0.375) + (0.125 * 0.5) + (0.125 * 0.375) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) + (0.125 * 0) = 0.15625
        </code>
    </Text>

    <Heading2>Solution</Heading2>

    <Text>
        The following solution uses the law of total probability to calculate the final answer
    </Text>

    <CodeMirror
        filetype={[pythonLanguageSupport()]}
        readOnly={true}
        doc=
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
/>
</div>

<style lang="scss">
    a {
        color: white;
    }

    #problem {
        background-color: #21252B;
        border-radius: 1rem;
    }

    #problem, #solution {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        box-sizing: border-box;
    }

    #leetCodeLink {
        font-family: "Albert Sans";
        text-decoration: none;
        color: lightblue;
        text-decoration: underline;
    }

    #knightImage, #knight_m0 {
        width: 15rem;
        align-self: center;

        padding: 0.5rem;
        box-sizing: border-box;
    }

    #knightMovesWrapper {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        width: 100%;
        justify-content: center;

        img {
            width: 15rem;
            margin: 0.5rem;
        }
    }

    code {
        font-size: 0.8rem;
        color: white;
        background-color: grey;
        padding: 0.1rem 0.2rem;
        border-radius: 0.2rem;
    }
</style>
