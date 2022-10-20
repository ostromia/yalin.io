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


<div id="gradient-to-left"></div>
<div id="gradient-to-right"></div>

<div id="container">
    <ul id="list">
      {#each devicons as path}
        <li class="image"><img alt="" src={path}></li>
      {/each}

      {#each devicons as path}
        <li class="image"><img alt="" src={path}></li>
      {/each}
    </ul>
  </div>

<style lang="scss">
  $height: calc(10vh - 1rem);
  $width: calc(50vw - 1.5rem);

  $transform: translateX(calc(-200px * 5));
  $animation: translate 10s linear infinite;
  @-webkit-keyframes translate { 100% { transform: $transform } }
  @keyframes         translate { 100% { transform: $transform } }

  @mixin gradient-setup {
    height: $height;
    width: calc($width / 2);

    position: absolute;
    top: calc(5vh + 0.5rem + 30vh + 0.5rem);

    z-index: 99;
  }

  #gradient-to-right {
    @include gradient-setup;
    left: 1rem;
    background: linear-gradient(to right, $bc 0%, transparent 50%);
  }

  #gradient-to-left {
    @include gradient-setup;
    left: calc(1rem + calc($width / 2));
    background: linear-gradient(to left, $bc 0%, transparent 50%);
  }

  #container {
    height: $height;
    width: $width;

    margin-top: 1rem !important; //separate attribute as a reminder
    margin: 0.5rem 0.5rem 0.5rem 1rem;

    overflow: hidden;

    display: flex;
  }

  ul {
    width: calc(200px * 10);

    margin: 0;
    padding: 0;

    display: flex;

    > li {
      width: 10vw;

      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;

      -webkit-animation: $animation;
      animation: $animation;

      > img { height: 7.5vh; }
    }
  }
</style>
