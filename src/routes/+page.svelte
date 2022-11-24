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

<script lang="ts">
  import {onMount} from 'svelte';

  import Navigation from './Navigation.svelte';
  import Title from './Title.svelte';
  import Profile from './left_Profile.svelte';
  import Devicons from './left_Devicons.svelte';
  import Repositories from './left_Repositories.svelte';
  import Projects from './right_Project.svelte';

  onMount(() => {
    // @ts-ignore
    document.getElementById('main').style.visibility = 'visible';
  });

  let innerWidth: number = 0;
  let innerHeight: number = 0;
</script>

<svelte:window bind:innerWidth bind:innerHeight/>

<Navigation/>

<main id="main">
  <section id="left">
    <Profile style="margin-bottom: 2rem"/>
    <Devicons style="margin-bottom: 2rem"/>
    <Title text="Repositories & Contributions"/>
    <Repositories/>
  </section>

  <section id="right">
    <Title text="Projects"/>
    <Projects/>
  </section>
</main>

<style lang="scss">
  :global(html) { background-color: $bc }
  :global(body) { margin: 0 !important }

  @mixin column-flex {
    display: flex;
    flex-direction: column;
  }

  main {
    visibility: hidden;
    margin-top: 5vh;
    padding: 1rem;
    box-sizing: border-box;
    > section { @include column-flex }
  }

  @media (min-width: 1000px) {
    main {
      height: 95vh;
      overflow-y: scroll;
      display: grid;
      grid-template-columns: calc(50% - 0.5rem) calc(50% - 0.5rem);
      grid-template-rows: auto;
      gap: 1rem;
    }
  } // width > 1000px

  @media (max-width: 1000px) {
    main { @include column-flex }
    #right { margin-top: 1rem }
  } // width < 1000px
</style>
