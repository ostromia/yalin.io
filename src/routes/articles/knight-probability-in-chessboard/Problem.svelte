<script lang="ts">
	import "@fontsource/albert-sans";
	import KnightImage from "$r/articles/knight-probability-in-chessboard/knight.png"
</script>

<div id="problem">
	<a id="leetCodeLink" href="https://leetcode.com/problems/knight-probability-in-chessboard/">
		Leet Code 688.
	</a>

	<div class="text">
		On an <code>n x n</code> chessboard, a knight starts at the cell <code>(row, column)</code> and attempts to make exactly <code>k</code> moves.
		The rows and columns are 0-indexed, so the top-left cell is <code>(0, 0)</code>, and the bottom-right cell is <code>(n - 1, n - 1)</code>.
		<br>
		A chess knight has eight possible moves it can make, as illustrated below.
		Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.
	</div>

	<img id="knightImage" src={KnightImage}>

	<div class="text">
		Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.
		<br>
		The knight continues moving until it has made exactly k moves or has moved off the chessboard.
		<br>
		Return the probability that the knight remains on the board after it has stopped moving.
	</div>
</div>

<style lang="scss">
	#problem {
		background-color: $fc;
		border-radius: 1rem;

		display: flex;
		flex-direction: column;
		padding: 1rem;
		box-sizing: border-box;

		min-width: min-content;
	}

	#leetCodeLink {
		font-family: "Albert Sans";
		text-decoration: none;
		padding: 0.5rem;
		box-sizing: border-box;
	}


	.text {
		color: white;
		font-family: "Albert Sans";
		font-size: 1rem;
		line-height: 2rem;
		font-style: italic;
	}

	code {
		font-size: 0.8rem;
		color: white;
		background-color: grey;
		padding: 0.2rem;
		border-radius: 0.2rem;
	}

	#knightImage {
		height: 20rem;
		width: 20rem;
		align-self: center;

		padding: 1rem;
		box-sizing: border-box;
	}
</style>
