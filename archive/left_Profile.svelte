<script lang="ts">
  import {onMount} from 'svelte';
  import {goto} from '$app/navigation';

  function go_github() { goto('https://github.com/berkay-yalin') }

  // const url = "http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=berkay-yalin&theme=github_dark";

  // onMount(() => {
  //   let svg: any = document.getElementById('profile-details');
  //   svg.addEventListener('load', function() {
  //     svg = svg.contentDocument.firstChild;
  //     let rect = svg.querySelector('rect');
  //     rect.removeAttribute("stroke");
  //     rect.setAttribute('fill', '#21252B');
  //     rect.style.fill = '#21252B';
  //     rect.style.height = '100%';
  //     rect.style.width = '100%';
  //     svg.querySelector('text').style.fill = '#58A8FF';
  //   });
  // });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<div id="profile-wrapper" on:click={go_github}>
  <img alt="" src="profile-details.svg"/>
  <!-- <object id="profile-details" type="image/svg+xml" data="profile-details.svg" title="profile details"></object> -->
</div>

<style lang="scss">
  #profile-wrapper {
    // position: relative;
    border-radius: 0.5rem;
    box-sizing: border-box;
    background-color: $fc;
    cursor: pointer;
    overflow: hidden;

    display: flex;
    justify-content: center;

  }

  #profile-wrapper > img {
    width: 100%;
  }
</style>
