<script lang="ts">
  import {goto} from '$app/navigation';
  export let style: string = '';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div style={style} id="profile-wrapper" on:click={()=>{ goto('https://github.com/berkay-yalin') }}>
  <img alt="" src="profile-details.svg"/>
</div>

<style lang="scss">
  #profile-wrapper {
    display: flex;
    background-color: $fc;
    cursor: pointer;
    border-radius: 0.5rem;
    box-sizing: border-box;
  }

  #profile-wrapper > img { width: 100% }
</style>
