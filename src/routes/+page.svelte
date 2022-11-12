<script lang="ts">
  import {onMount} from 'svelte';

  import Navigation from './Navigation.svelte';
  import Title from './Title.svelte';
  import Profile from './left_Profile.svelte';
  import Devicons from './left_Devicons.svelte';
  import Repositories from './left_Repositories.svelte';
  import Projects from './right_Project.svelte';

  onMount(() => {
    let main: any = document.getElementById('m');
    main.style.visibility = 'visible';
  });

  let innerWidth: number = 0;
  let innerHeight: number = 0;
</script>

<svelte:head>
  <title>berkay-yalin.io</title>
  <style>
    @font-face {
      font-family: 'cabin';
      src: url("./Cabin-VariableFont_wdth,wght.ttf");
    }
    @font-face {
      font-family: 'segoe';
      src: url("./Segoe-UI.ttf");
    }

    ::-webkit-scrollbar             { width: 0.5vw                   }
    ::-webkit-scrollbar-track       { background: rgb(206, 206, 206) }
    ::-webkit-scrollbar-thumb       { background: rgb(136, 136, 136) }
    ::-webkit-scrollbar-thumb:hover { background: rgb(85, 85, 85)    }
  </style>
</svelte:head>

<svelte:window bind:innerWidth bind:innerHeight />

<Navigation/>
<div style="height: 5vh"></div>

<main id="m">
  {#if innerWidth > 1000}
    <section id="left">
      <Profile/>
      <div style="height: 2rem"></div>
      <Devicons/>
      <div style="height: 2rem"></div>
      <Title text="Repositories & Contributions"/>
      <div style="height: 1rem"></div>
      <Repositories/>
    </section>

    <section id="right">
      <Title text="Projects"/>
      <div style="height: 1rem"></div>
      <Projects/>
    </section>
  {/if}

  {#if innerWidth < 1000}
    <section id="singular">
      <Profile/>
      <div style="height: 1rem"></div>
      <Devicons/>
      <div style="height: 1rem"></div>
      <Title text="Projects"/>
      <Projects/>
      <div style="height: 1rem"></div>
      <Title text="Repositories & Contributions"/>
      <Repositories/>
    </section>
{/if}
</main>

<style lang="scss">
  :global(html) { background-color: $bc }

  :global(body) { margin: 0 !important }

  main {
    height: 95vh;
    padding: 1rem;
    box-sizing: border-box;
    overflow-y: scroll;
    visibility: hidden;
  }

  @media (min-width:1000px) {
    main {
      display: grid;
      grid-template-columns: calc(50% - 0.5rem) calc(50% - 0.5rem);
      grid-template-rows: auto;
      gap: 1rem;
    }

    #left, #right {
      display: flex;
      flex-direction: column;
    }
  } //screen size bigger than 1000px

  @media (max-width:1000px) {
    #singular {
      display: flex;
      flex-direction: column;
    }
  } //screen size smaller than 1000px
</style>
