<script lang="ts">
  let url: string = "https://berkay-yalin.github.io/berkay-yalin.io/pythonInterpreter_m.html";
</script>

<svelte:head>
  <title>Python Interpreter</title>
</svelte:head>

<iframe title="Python Interpreter" src={url}></iframe>

<style>
  :global(body) {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #2e323b;
  }

iframe {
    height: 100%;
    width: 100%;
    border: 0;
    margin: 0;
    padding: 0;
  }
</style>
