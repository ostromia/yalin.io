<script>
	import { base } from '$app/paths';
	import "@fontsource/jetbrains-mono";
	import github_devicon from '$lib/devicons/github.svg';
</script>

<nav>
	<a class="nav-text" id="nav-index" href="{base}/">
		~/berkay-yalin.io
	</a>

	<a class="nav-text" style="grid-area: projects" href="{base}/projects">
		Projects
	</a>

	<a class="nav-text" style="grid-area: gists" href="https://gist.github.com/berkay-yalin">
		Gists
	</a>

	<a class="nav-image" style="grid-area: github" href="https://github.com/berkay-yalin">
		<img alt="" src={github_devicon}>
	</a>
</nav>

<style lang="scss">
	nav {
		height: 5vh;
		width: 100%;

		font-family: "JetBrains Mono";
		background-color: $fc;

		padding: 0 1rem 0 1rem;
		box-sizing: border-box;

		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(3, min-content) auto min-content;
		grid-template-rows: 1fr;
		grid-template-areas: "index projects gists . github";
	}

	#nav-index {
		grid-area: index;
		padding-right: 1vw;
		font-size: 2vh;
	}

	.nav-text {
		white-space: nowrap;

		color: white;
		text-decoration: none;

		font-size: 1.5vh;
		line-height: 5vh;
		font-weight: 500;
	}

	.nav-image {
		display: flex;
		justify-content: center;
		align-items: center;

		> img {
			height: 3vh;
			width: 3vh;
		}
	}
</style>
