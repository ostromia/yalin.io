<script>
	import { base } from '$app/paths';
	import "@fontsource/jetbrains-mono";
	import github_devicon from '$lib/devicons/github.svg';
</script>

<nav>
	<a class="first" href="{base}/">
		~/berkay-yalin.io
	</a>

	<a class="text" href="{base}/projects">
		Projects
	</a>

	<a class="text" href="https://gist.github.com/berkay-yalin">
		Gists
	</a>

	<a class="last" href="https://github.com/berkay-yalin">
		<img alt="" src={github_devicon}>
	</a>
</nav>

<style lang="scss">
	nav {
		height: 2rem;
		background-color: $fc;

		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(3, min-content) auto min-content;
		grid-template-areas: "first a0 a1 . last";
	}

	nav > a {
		font-family: "JetBrains Mono";
		white-space: nowrap;
		color: white;
		text-decoration: none;
		line-height: 2rem;
	}

	.first, .last {
		padding: 0 1rem;
	}

	.text {
		font-size: 0.8rem;
	}

	.last {
		display: flex;
		justify-content: center;
		align-items: center;
		grid-area: last;

		> img {
			height: 1.5rem;
			width: 1.5rem;
		}
	}
</style>
