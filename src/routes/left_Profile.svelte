<script>
  // import {onMount} from 'svelte';
  // import {goto} from '$app/navigation';

  // onMount(() => {
  //   document.addEventListener('click', load);
  // });

  // async function load() {
  //     goto("https://github.com/berkay-yalin");

  // }
</script>

<div>
  <a href="https://github.com/berkay-yalin">
    <img alt="" src="profile-details2.png"/>
  </a>
</div>

<style>
  div {
    height: 30vh;
    width: 50vw;

    border: 0;
    margin: 0;
    padding: 1rem 0.5rem 0.5rem 1rem;
    box-sizing: border-box;
  }

  div > a {
    height: 100%;
    width: 100%;

    border: 0;
    margin: 0;
    padding: 0;
    padding: 0 0.5rem 0 0.5rem;
    box-sizing: border-box;

    border-radius: 0.5rem;

    background-color: #21252B;

    display: flex;
    justify-items: center;
  }

  div > a > img {
    width: 100%;
    border: 0; margin: 0; padding: 0;
    cursor: pointer;
  }
</style>
