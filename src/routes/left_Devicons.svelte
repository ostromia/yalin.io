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

  <ul id="list">
    {#each devicons as path}
      <li class="image"><img alt="" class="devicon" src={path}></li>
    {/each}

    {#each devicons as path}
      <li class="image"><img alt="" class="devicon" src={path}></li>
    {/each}
  </ul>
</div>

<style lang="scss">
  $height: 10vh;
  $width: 100%;

  $transform: translateX(calc(-200px * 5));
  $animation: translate 10s linear infinite;
  @-webkit-keyframes translate { 100% { transform: $transform } }
  @keyframes         translate { 100% { transform: $transform } }

  @mixin gradient-setup {
    height: $height;
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
    height: $height;
    width: $width;

    overflow: hidden;

    position: relative;

    display: flex;
  }

  ul {
    width: calc(200px * 10);
    margin: 0;
    padding: 0;

    display: flex;
  }

  ul > li {
    width: 10vw;

    display: flex;
    justify-content: center;
    align-items: center;

    -webkit-animation: $animation;
    animation: $animation;
  }

  .devicon { height: 7.5vh }
</style>
