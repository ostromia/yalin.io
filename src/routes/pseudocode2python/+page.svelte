<script lang="ts">
  import {onMount} from 'svelte';

  import {pastPaperPseudocode} from './stores.js';
  import {transpiler} from './transpiler.js';
  import Heading from './Heading.svelte';

  let pseudoEditor: any;
  let pythonEditor: any;

  onMount(() => {
    // @ts-ignore
    pseudoEditor = ace.edit("pseudoEditor");
    pseudoEditor.setTheme("ace/theme/dracula");
    pseudoEditor.session.setTabSize(2);
    pseudoEditor.setFontSize(16);
    pseudoEditor.resize();
    pseudoEditor.setValue('');
    // @ts-ignore
    pythonEditor = ace.edit("pythonEditor");
    pythonEditor.setTheme("ace/theme/dracula");
    pythonEditor.session.setMode("ace/mode/python");
    pythonEditor.session.setTabSize(2);
    pythonEditor.setFontSize(16);
    pythonEditor.resize();
  });

  function viewPastPaperPseudocode() {
    pseudoEditor.setValue($pastPaperPseudocode);
  }

  let viewPseudocodeGuideState: boolean = false;
  function viewPseudocodeGuide() {
    viewPseudocodeGuideState = (viewPseudocodeGuideState == false) ? true : false;
  }

  function convertPseudocodeToPython() {
    const pseudoText: string = pseudoEditor.getValue();

    const pseudoArray: [string, number, string][] = pseudoText.split('\n').map((i: string) => {
      return ['pseudo', i.search(/\S|$/), i.trim()];
    });

    const pythonArray = transpiler(pseudoArray);

    const pythonText = pythonArray.map((i: [any, any, any]) => {
      let indent: number = i[1];
      let line: string = i[2];
      return `${' '.repeat(indent)}${line}`;
    });

    pythonEditor.setValue(pythonText.join('\n'), -1);
  }
</script>

<svelte:head>
  <title>Pseudocode to Python Transpiler</title>
  <style>
    @font-face {
      font-family: 'cabin';
      src: url("./Cabin-VariableFont_wdth,wght.ttf");
    }
    ::-webkit-scrollbar             { height: 0.2rem; width: 0.2rem  }
    ::-webkit-scrollbar-track       { background: rgb(206, 206, 206) }
    ::-webkit-scrollbar-thumb       { background: rgb(136, 136, 136) }
    ::-webkit-scrollbar-thumb:hover { background: rgb(85, 85, 85)    }
  </style>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.12.5/ace.js" integrity="sha512-gLQA+KKlMRzGRNhdvGX+3F5UHojWkIIKvG2lNQk0ZM5QUbdG17/hDobp06zXMthrJrd4U1+boOEACntTGlPjJQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.12.5/theme-dracula.min.js" integrity="sha512-XzFsZJNE1AU2unPycw2UaT32KTSB76GPZDWi/CkO1P3f0ctnnYHop1iFI5aIVFrArykenccug+QI629Gp+vORg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.12.5/mode-python.min.js" integrity="sha512-W1k0SdTb7FU3nxWYkBLQVhTC8b8BU6Je3deBSnLm/dSQ956goMMnL+NYi2SXse1i7k0eUJNMNycTvbEdrJmEFw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</svelte:head>

<nav>
  <span>Online OCR Pseudocode to Python Transpiler</span>

  <button id="viewPastPaperPseudocode"on:click={viewPastPaperPseudocode}>
    View Past Paper Pseudocode
  </button>

  {#if viewPseudocodeGuideState}
    <button id="viewPseudocodeGuide" on:click={viewPseudocodeGuide}>
      Hide Pseudocode Guide (J277)
    </button>
  {:else}
    <button  id="viewPseudocodeGuide" on:click={viewPseudocodeGuide}>
      View Pseudocode Guide (J277)
    </button>
  {/if}

  <button id="convertPseudocodeToPython" on:click={convertPseudocodeToPython}>
    Convert Pseudocode to Python
  </button>

  <button id="executePythonCode" disabled>
    Execute Python Code
  </button>
</nav>

<main>
  <Heading style="grid-column: 1; grid-row: 1" text="Pseudocode" src="ocr-logo.svg"/>

  {#if viewPseudocodeGuideState}
    <Heading style="grid-column: 2; grid-row: 1" text="Pseudocode Guide" src="ocr-logo.svg"/>
  {:else}
    <Heading style="grid-column: 2; grid-row: 1" text="Python" src="../devicon/python-original.svg"/>
  {/if}

  <div id="pseudoEditor"></div>

  <div id="pythonEditor"></div>

  {#if viewPseudocodeGuideState}
    <div id="J277Editor">
      {#each Array.from({length:7},(v,k)=>k+1) as i}
        <img alt="" src="Pseudocode-Guide-J277/0{i}.jpg">
      {/each}
    </div>
  {/if}
</main>

<style lang="scss">
  @import "./src/routes/pseudocode2python/navigation.scss";
  @import "./src/routes/pseudocode2python/editors.scss";

  :global(html) { background-color: $bc }

  :global(body) { margin: 0 !important }

  main {
    height: 95vh;
    width: 100vw;

    padding: 0.5rem;
    box-sizing: border-box;

    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
</style>
