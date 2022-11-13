<script lang="ts">
  const devicons: string[] = [
    "devicon/c-original.svg",
    "devicon/python-original.svg",
    "devicon/javascript-original.svg",
    "devicon/html5-original.svg",
    "devicon/css3-original.svg",
    "devicon/svelte-original.svg",
    "devicon/flask-original.svg",
    "devicon/sqlite-original.svg"
  ];
  let innerWidth: number;
</script>

<svelte:window bind:innerWidth/>

<div id="devicon-container" style="--inner-width: {(innerWidth > 1000) ? innerWidth / 2 : innerWidth}px">
  <div id="gradient-to-left"></div>
  <div id="gradient-to-right"></div>

  <div class="devicon-strip">
    {#each devicons as path}
      <div class="devicon-div">
        <img alt="" class="devicon" src={path}>
      </div>
      <div style="width: 2vw;"></div>
    {/each}
  </div>

  <div class="devicon-strip">
    {#each devicons as path}
      <div class="devicon-div">
        <img alt="" class="devicon" src={path}>
      </div>
      <div style="width: 2vw;"></div>
    {/each}
  </div>
</div>

<style lang="scss">
  $width: calc( var(--inner-width) - 2rem );

  @mixin gradient-setup {
    height: 100%;
    width: calc($width / 2);
    position: absolute;
    z-index: 2;
  }
  #gradient-to-right {
    @include gradient-setup;
    background: linear-gradient(to right, $bc 0%, transparent 50%);
  }
  #gradient-to-left {
    @include gradient-setup;
    left: calc(50%);
    background: linear-gradient(to left, $bc 0%, transparent 50%);
  }

  #devicon-container {
    width: $width;
    position: relative;
    display: flex;
    overflow: hidden;
  }

  @-webkit-keyframes translate { 100% { transform: translateX(calc(-1 * $width)) } }
  @keyframes         translate { 100% { transform: translateX(calc(-1 * $width)) } }

  .devicon-strip {
    min-width: $width;

    display: flex;
    align-items: center;

    animation: translate 10s linear infinite;
  }

  .devicon-div {
    width: calc($width / 8);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .devicon { width: 95% }
</style>
