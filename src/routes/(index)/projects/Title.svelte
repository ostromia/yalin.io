<script>
	import "@fontsource/albert-sans";
	export let text;
	export let style = '';
</script>

<div class="title" {style}>
	{text}
</div>

<style lang="scss">
	$lh: 1.5rem;
	.title {
		line-height: $lh;
		font-family: "Albert Sans";
		font-size: $lh;
		color: white;
	}
</style>
