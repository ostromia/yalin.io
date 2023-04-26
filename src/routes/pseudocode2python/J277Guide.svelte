<script>
	import { VPG_s } from '$zygon/stores';
</script>

{#if $VPG_s}
	<div>
		{#each [...Array(7).keys()] as i}
			<img alt="" src="assets/pseudocode2python/Pseudocode-Guide-J277/0{i}.jpg">
		{/each}
	</div>
{/if}

<style>
	div {
		grid-column: 2;
		grid-row: 2;
		z-index: 99;
		display: flex;
		flex-direction: column;
		overflow: auto;
	}
</style>
