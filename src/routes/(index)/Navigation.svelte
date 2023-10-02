<script>
	import { base } from '$app/paths';
	import "@fontsource/jetbrains-mono";
	import github_devicon from '$lib/devicons/github.svg';
</script>

<nav>
	<a href="{base}/">
	    ~/berkay-yalin.io
	</a>

	<a href="{base}/projects">
		Projects
	</a>

	<a href="{base}/articles">
		Articles
	</a>

	<a href="https://gist.github.com/berkay-yalin">
		Gists
	</a>

	<img alt="" src={github_devicon}>
</nav>

<style lang="scss">
	nav {
		height: 2rem;
		background-color: $fc;
        padding: 0 1rem;
        box-sizing: border-box;

		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(3, min-content) auto min-content;
	}

    nav a:first-child {
        padding-right: 1rem;
    }

    a {
        font-family: "JetBrains Mono";
        color: white;
        white-space: nowrap;
        text-decoration: none;
        line-height: 2rem;
    }

	img {
        height: 100%;
        padding: 0.2rem;
        box-sizing: border-box;
		}
</style>
