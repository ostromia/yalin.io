<script lang="ts">
  import {goto} from '$app/navigation';

  function go_p2p() { goto('/pseudocode2python') }
  function go_pi()  { goto('/pythonInterpreter') }

  const repositoryIcon: string = "M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z";

  let data: any = {};
  data.html_url = `https://github.com/berkay-yalin/berkay-yalin.io`
  data.name = "berkay-yalin.io";
  data.description = "personal portfolio website";
  data.language = "JavaScript";
</script>

<div id="project-container">
  <div>
    <div id="title">
      <svg height="16" width="16" viewBox="0 0 16 16" version="1.1">
        <path fill-rule="evenodd" d={repositoryIcon}></path>
      </svg>
      <a href="{data.html_url}">{data.name}</a>
    </div>

    <div id="languages">
      <span class="language-span-icon" id="html5-span-icon"></span>
      <span class="language-span-text">HTML</span>

      <span class="language-span-icon" id="svelte-span-icon"></span>
      <span class="language-span-text">Svelte</span>

      <span class="language-span-icon" id="javascript-span-icon"></span>
      <span class="language-span-text">JavaScript</span>

      <span class="language-span-icon" id="typescript-span-icon"></span>
      <span class="language-span-text">TypeScript</span>

      <span class="language-span-icon" id="css3-span-icon"></span>
      <span class="language-span-text">CSS</span>

      <span class="language-span-icon" id="sass-span-icon"></span>
      <span class="language-span-text">Sass</span>
    </div>

    <div id="image_container">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img alt="" on:click={go_p2p} id="image_p2p" src="Web capture_17-10-2022_05026_berkay-yalin.github.io.jpeg">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img alt="" id="image_pi" on:click={go_pi} src="Web capture_17-10-2022_05345_berkay-yalin.github.io.jpeg">
    </div>
  </div>
</div>

<style lang="scss">
  $background-color: rgb(33, 37, 43);
  $color: rgb(139, 148, 158);
  $link-color: rgb(88, 166, 255);

  #project-container {
    width: 100%;

    > div {
      padding: 1rem;
      border-radius: 0.5rem;
      box-sizing: border-box;

      background-color: $background-color;

      font-size: 16px;
      font-family: Segoe UI;
      color: $color;
      text-decoration: none;
    }
  }

  #title {
    height: 2rem;

    display: flex;
    align-items: center;

    > svg {fill: $color }

    > a {
      color: $link-color;
      text-decoration: none;
     }
  }

  #languages {
    height: 2rem;

    display: flex;
    align-items: center;
  }

  .language-span-icon {
    height: 12px;
    width: 12px;
    border-radius: 100%;
  }

  #javascript-span-icon { background-color: #f1e05a }
  #html5-span-icon      { background-color: #e34c26 }
  #css3-span-icon       { background-color: #563d7c }
  #svelte-span-icon     { background-color: #ff3e00 }
  #sass-span-icon       { background-color: #a53b70 }
  #typescript-span-icon { background-color: #3178c6 }

  #image_container {
    display: flex;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    border: 2px solid white;
    cursor: pointer;
  }

  // MANUAL POSITIONING
  #title > a { margin: 0 0 3px 5px }

  .language-span-text { margin: -5px 0 0 5px }

  .language-span-icon { margin-left: 15px }
  #html5-span-icon { margin-left: 0 !important }

  img { margin-top: 1rem }
</style>
