<svelte:head>
  <style>
    @font-face {
      font-family: 'cabin';
      src: url("fonts/Cabin-VariableFont_wdth,wght.ttf");
    }
  </style>
</svelte:head>

<slot></slot>

<style>
::-webkit-scrollbar {
  height: 0.5rem;
  width: 0.5rem;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

:global(body) {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: #2e323b;
}
</style>
