<script lang="ts">
  import Navigation from './Navigation.svelte';
  import Title from './Title.svelte';
  import Profile from './left_Profile.svelte';
  import Devicons from './left_Devicons.svelte';
  import Repositories from './left_Repositories.svelte';
  import Projects from './right_Project.svelte';
</script>

<svelte:head>
  <title>berkay-yalin.io</title>
  <style>
    @font-face {
      font-family: 'cabin';
      src: url("./Cabin-VariableFont_wdth,wght.ttf");
    }

    ::-webkit-scrollbar             { width: 0.5vw                   }
    ::-webkit-scrollbar-track       { background: rgb(206, 206, 206) }
    ::-webkit-scrollbar-thumb       { background: rgb(136, 136, 136) }
    ::-webkit-scrollbar-thumb:hover { background: rgb(85, 85, 85)    }
  </style>
</svelte:head>

<Navigation/>
<div style="height: 5vh"></div>

<main>
  <section id="left">
    <Profile/>
    <div style="height: 1rem"></div>
    <Devicons/>
    <div style="height: 1rem"></div>
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

  main {
    height: 95vh;

    padding: 1rem;
    box-sizing: border-box;

    overflow-y: scroll;

    display: grid;
    grid-template-columns: calc(50% - 0.5rem) calc(50% - 0.5rem);
    grid-template-rows: auto;
    gap: 1rem;
  }

  #left, #right {
    display: flex;
    flex-direction: column;
  }
</style>
