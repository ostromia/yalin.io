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
</script>

<div id="devicon-container">
  <div id="gradient-to-left"></div>
  <div id="gradient-to-right"></div>

  <div class="devicon-strip">
    {#each devicons as path}
      <div class="devicon-wrapper">
        <img alt="" class="devicon" src={path}>
      </div>
    {/each}
  </div>

  <div class="devicon-strip">
    {#each devicons as path}
      <div class="devicon-wrapper">
        <img alt="" class="devicon" src={path}>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  $width: 100%;

  @mixin gradient-setup {
    height: 10vh;
    width: calc($width / 2);
    position: absolute;
    z-index: 99;
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

    overflow: hidden;

    position: relative;

    display: flex;
  }

  @-webkit-keyframes translate { 100% { transform: translateX(calc(-1 * $width)) } }
  @keyframes         translate { 100% { transform: translateX(calc(-1 * $width)) } }

  .devicon-strip {
    min-width: $width;

    display: flex;
    align-items: center;

    animation: translate 10s linear infinite;
  }

  .devicon-wrapper {
    min-width: calc($width / 8);

    display: flex;
    align-items: center;
  }

  @media (min-width:800px) {  .devicon { max-height: 10vh     }  }
  @media (max-width:800px) {  .devicon { width: calc(100 / 8) }  }

  .devicon {
    margin-left: 2vw;
  }

</style>
