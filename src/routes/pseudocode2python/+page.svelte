<script lang="ts">
  import {onMount} from 'svelte';

  import {pastPaperPseudocode} from './stores.js';
  import {transpiler} from './transpiler.js';

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

    ::-webkit-scrollbar             { width: 0.5vw; height: 0.5vh;   }
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

  <button
    type="button" class="textButton" id="viewPastPaperPseudocode"on:click={viewPastPaperPseudocode}>
    View Past Paper Pseudocode
  </button>

  <button type="button" class="textButton" id="viewPseudocodeGuide" on:click={viewPseudocodeGuide}>
    View Pseudocode Guide (J277)
  </button>

  <button type="button" class="textButton" id="convertPseudocodeToPython" on:click={convertPseudocodeToPython}>
    Convert Pseudocode to Python
  </button>

  <button type="button" class="textButton" id="executePythonCode" disabled>
    Execute Python Code
  </button>
</nav>

<main>
  <span id="pseudoSpan">Pseudocode</span>
  <img alt="" id="pseudoLogo" src="ocr-logo.svg">
  <div id="pseudoEditor" style="grid-area: 3 / 2 / 3 / 2"></div>

  {#if viewPseudocodeGuideState}
    <span id="pythonSpan">Pseudocode Guide</span>
    <img alt="" id="pythonLogo" src="ocr-logo.svg">
  {:else}
    <span id="pythonSpan">Python</span>
    <img alt="" id="pythonLogo" src="../devicon/python-original.svg">
  {/if}


  <div style="grid-area: 3 / 3 / 3 / 3" id="pythonEditor"></div>

  {#if viewPseudocodeGuideState}
    <div id="J277Editor">
      <img alt="" id="j227_01" src="Pseudocode-Guide-J277/01.jpg">
      <img alt="" id="j227_02" src="Pseudocode-Guide-J277/02.jpg">
      <img alt="" id="j227_03" src="Pseudocode-Guide-J277/03.jpg">
      <img alt="" id="j227_04" src="Pseudocode-Guide-J277/04.jpg">
      <img alt="" id="j227_05" src="Pseudocode-Guide-J277/05.jpg">
      <img alt="" id="j227_06" src="Pseudocode-Guide-J277/06.jpg">
      <img alt="" id="j227_07" src="Pseudocode-Guide-J277/07.jpg">
    </div>
  {/if}

</main>

<style lang="scss">
  @import "./src/routes/pseudocode2python/navigation.scss";
  @import "./src/routes/pseudocode2python/pseudocode2python.scss";

  :global(html) { background-color: $bc }

  :global(body) { margin: 0 !important }

  main {
    height: 95vh;
    width: 100vw;

    display: grid;
    grid-template-rows: 0 auto 1fr 0;
    grid-template-columns: 0 1fr 1fr 0;
    gap: 10px;
  }
</style>
