<script lang="ts">
  import {viewPseudocodeGuideState} from './stores.js';
  const to7 = Array.from({length:7},(v,k)=>k+1);
</script>

{#if $viewPseudocodeGuideState}
  <div id="J277Editor">
    {#each to7 as i}
      <img alt="" src="Pseudocode-Guide-J277/0{i}.jpg">
    {/each}
  </div>
{/if}

<style>
  #J277Editor {
    grid-column: 2;
    grid-row: 2;
    z-index: 99;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
</style>
