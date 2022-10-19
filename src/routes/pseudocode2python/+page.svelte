<script lang="ts">
  let url: string = "https://berkay-yalin.github.io/berkay-yalin.io/pseudocode2python_m.html";
</script>

<svelte:head>
  <title>OCR Pseudocode to Python Transpiler</title>
</svelte:head>

<iframe title="Python Interpreter" src={url}></iframe>

<style lang="scss">
  @mixin full-screen {
    height: 100vh;
    width: 100vw;
    border: 0;
    margin: 0;
    padding: 0;
  }

  :global(body) {
    @include full-screen;
    overflow: hidden;
    background-color: #2e323b;
  }

  iframe { @include full-screen }
</style>
