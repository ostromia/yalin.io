<script>
  import {VPG_s} from './stores.js';
</script>

{#if $VPG_s}
  <div id="J277Editor">
    {#each [...Array(7).keys()] as i}
      <img alt="" src="pseudocode2python/Pseudocode-Guide-J277/0{i}.jpg">
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
