<script>
	import Navigation from '$index/Navigation.svelte';
	import Contents from '$r/articles/gamma-functions/Contents.svelte';
	import gamma from '$r/articles/gamma-functions/equations';
</script>

<main>
	<Contents/>
	<article>
		<section id="gamma-function" class="alpha">
			<h1>Gamma Function</h1>
			{@html gamma.gammaFunction}
		</section>

		<div class="conference alpha">
			<section id="incomplete-gamma-function" class="parent">
				<h1>Incomplete Gamma Function</h1>
			</section>

			<section id="upper-incomplete-gamma-function" class="beta">
				<h2>Upper Incomplete Gamma Function</h2>
				{@html gamma.upperIncompleteGammaFunction}
			</section>

			<section id="lower-incomplete-gamma-function" class="beta">
				<h2>Lower Incomplete Gamma Function</h2>
				{@html gamma.lowerIncompleteGammaFunction}
			</section>
		</div>

		<div class="conference alpha">
			<section id="regularized-incomplete-gamma-function" class="parent">
				<h1>Regularized Incomplete Gamma Function</h1>
				{@html gamma.qplusp}
			</section>

			<section id="regularized-upper-incomplete-gamma-function" class="beta">
				<h2>Regularized Upper Incomplete Gamma Function</h2>
				{@html gamma.regularizedUpperIncompleteGammaFunction}
			</section>

			<section id="regularized-lower-incomplete-gamma-function" class="beta">
				<h2>Regularized Lower Incomplete Gamma Function</h2>
				{@html gamma.regularizedLowerIncompleteGammaFunction}
			</section>
		</div>
	</article>
</main>

<style lang="scss">
	$color_background: #242C46;
	$color_contents: #20283F;
	$color_alpha: #2C3656;
	$color_beta: #323D62;

	main {
		display: grid;
		grid-template-columns: 25% 75%;
		grid-template-areas: "left right";
	}

	article {
		padding: 2rem 8rem;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	// article {
	// 	width: 80%;
	// 	margin: auto;
	// 	padding: 2rem;
	// 	box-sizing: border-box;

	// 	display: flex;
	// 	gap: 1rem;
	// 	flex-direction: column;
	// 	justify-content: center;
	// }

	:global(p, h1, h2) {
		margin: 0;
	}

	:global(math) {
		line-height: 1.5rem;
		font-size: 1.5rem;
		math-style: normal;
	}

	:global(h1) {
		line-height: 1.5rem;
		font-size: 1.5rem;
		font-weight: normal;
		padding-bottom: 1rem;
	}
	:global(h2) {
		line-height: 1.25rem;
		font-size: 1.25rem;
		font-weight: normal;
		padding-bottom: 0.5rem;
	}

	:global(p) {
		line-height: 1rem;
		font-size: 1rem;
		overflow-wrap: break-word;
		padding-bottom: 1rem;
	}

	:global(html) {
		background-color: $color_background !important;
	}

	:global(.alpha) {
		padding: 1.5rem;
		box-sizing: border-box;
		border-radius: 0.5rem;
		background-color: $color_alpha;
		color: white;
		box-shadow: rgba(0, 0, 0, 0.15) 4.4px 4.4px 3.3px;
	}

	:global(.beta) {
		padding: 1rem;
		box-sizing: border-box;
		border-radius: 0.5rem;
		background-color: $color_beta;
		color: white;
		box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 1.1px;
	}


	.conference {
		display: grid;
		gap: 2rem;
		padding: 2rem;
		box-sizing: border-box;
		grid-template-columns: repeat(2, auto);
		grid-template-rows: repeat(2, auto);
		grid-template-areas: 'top top' 'left right';
	}

	#incomplete-gamma-function, #regularized-incomplete-gamma-function {
		grid-area: top;
	}
	#lower-incomplete-gamma-function, #regularized-lower-incomplete-gamma-function{
		grid-area: left;
	}
	#upper-incomplete-gamma-function, #regularized-upper-incomplete-gamma-function {
		grid-area: right;
	}
</style>
