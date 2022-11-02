<script lang="ts">
  export let route_: string;
</script>

<nav>
  <a href="{route_}/">~/berkay-yalin.io</a>
</nav>

<style lang="scss">
nav {
  height: 5vh;
  width: 100%;

  position: fixed;
  z-index: 99;

  background-color: $fc;

  display: flex;
  align-items: center;
}
nav > a {
  padding-left: 1rem;

  color: white;
  text-decoration: none;

  font-size: 2vh;
  font-family: courier;
  font-weight: bold;
}
</style>
