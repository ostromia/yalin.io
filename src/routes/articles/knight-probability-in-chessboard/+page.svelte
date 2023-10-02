<script lang="ts">
	import { base } from '$app/paths';

	import "@fontsource/albert-sans";

	import Problem from "$r/articles/knight-probability-in-chessboard/Problem.svelte"
	import Solution from "$r/articles/knight-probability-in-chessboard/Solution.svelte"
</script>

<main>
	<h1>Leet Code 688. Knight Probability in Chessboard</h1>
	<Problem/>
	<Solution/>
</main>

<style lang="scss">
	:global(html) {
		background-color: $bc;
	}
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0rem 7rem;
	}
	h1 {
		margin: 0;
		padding: 1rem;
		box-sizing: border-box;
		font-family: "Albert Sans";
		color: white;
	}
</style>
