<script lang="ts">
  import {onMount} from 'svelte';
  import {goto} from '$app/navigation';

  function go_github() { goto('https://github.com/berkay-yalin') }

  // const url = "http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=berkay-yalin&theme=github_dark";

  onMount(() => {
    let svg: any = document.getElementById('profile-details');
    svg.addEventListener('load', function() {
      svg = svg.contentDocument.firstChild;
      let rect = svg.querySelector('rect');
      rect.removeAttribute("stroke");
      rect.setAttribute('fill', '#21252B');
      rect.style.fill = '#21252B';
      rect.style.height = '100%';
      rect.style.width = '100%';
      svg.querySelector('text').style.fill = 'rgb(88, 166, 255)';
    });
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<div id="profile-wrapper">
  <div id="profile-anchor" on:click={go_github}></div>
  <object id="profile-details" type="image/svg+xml" data="profile-details.svg" title="profile details"></object>
</div>

<style lang="scss">
  #profile-wrapper {
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
  }

  #profile-wrapper > div {
    height: 100%;
    width: 100%;
    position: absolute;
    cursor: pointer;
  }

  #profile-wrapper > object {
    width: 100%;
    border-radius: 0.5rem;
    box-sizing: border-box;
  }
</style>
