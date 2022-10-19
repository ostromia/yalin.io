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
    ::-webkit-scrollbar {
      /* height: 0.5rem; */
      width: 0.5vw;
    }
    ::-webkit-scrollbar-track {
      background: none;
    }
    ::-webkit-scrollbar-thumb {
      background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  </style>
</svelte:head>

<Navigation/>

<main>
  <div id="left">
    <Profile/>
    <Devicons/>
    <Title text="Repositories & Contributions"/>
    <Repositories/>
  </div>

  <div id="right">
    <Title style="margin-top: 1rem" text="Projects"/>
    <Projects/>
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  main {
    width: 100%;

    margin: 0;
    padding-top: 5vh;

    background-color: #2e323b;

    display: flex;

    overflow-y: auto;
    overflow-x: hidden;
  }

  #left, #right {
    width: 50vw;

    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
  }
</style>
