<script lang="ts">
  import Heading from './Heading.svelte';
  import {viewPseudocodeGuideState} from './stores.js';
</script>

<Heading style="grid-column: 1; grid-row: 1" text="Pseudocode" src="ocr-logo.svg"/>

{#if $viewPseudocodeGuideState}
  <Heading style="grid-column: 2; grid-row: 1" text="Pseudocode Guide" src="ocr-logo.svg"/>
{:else}
  <Heading style="grid-column: 2; grid-row: 1" text="Python" src="devicon/python-original.svg"/>
{/if}
