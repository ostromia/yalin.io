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


<script>
  // @ts-nocheck
  import {onMount} from 'svelte';

  import Navigation from './Navigation.svelte';
  import Heading from './Heading.svelte';
  import J277Guide from './J277Guide.svelte';

  import {pastPaperPseudocode} from './stores.js';
  import {viewPseudocodeGuideState} from './stores.js';

  import {transpiler} from './transpiler.js';

  let pseudoEditor, pythonEditor;

  onMount(() => {
    function ace_init(editor) {
      editor.setTheme('ace/theme/dracula');
      editor.setFontSize(16);
      editor.resize();
    }
    pseudoEditor = ace.edit("pseudoEditor");
    ace_init(pseudoEditor);
    pythonEditor = ace.edit("pythonEditor");
    ace_init(pythonEditor);
    pythonEditor.session.setMode("ace/mode/python");
  });

  function viewPastPaperPseudocode() {
    pseudoEditor.setValue($pastPaperPseudocode);
  }

  function viewPseudocodeGuide() {
    viewPseudocodeGuideState.update(i => i = i ? false : true);
  }

  function convertPseudocodeToPython() {
    const pseudoText = pseudoEditor.getValue();

    const pseudoArray = pseudoText.split('\n').map(
      i => ['pseudo', i.search(/\S|$/), i.trim()]
    );

    const pythonArray = transpiler(pseudoArray);

    const pythonText = pythonArray.map(
      i => `${' '.repeat(i[1])}${i[2]}`
    );

    pythonEditor.setValue(pythonText.join('\n'));
  }
</script>

<Navigation on:vPPP={viewPastPaperPseudocode} on:vPG={viewPseudocodeGuide} on:cPTP={convertPseudocodeToPython}/>

<main>
  <Heading style="grid-column: 1; grid-row: 1" text="Pseudocode" src="ocr-logo.svg"/>
  {#if $viewPseudocodeGuideState}
    <Heading style="grid-column: 2; grid-row: 1" text="Pseudocode Guide" src="ocr-logo.svg"/>
  {:else}
    <Heading style="grid-column: 2; grid-row: 1" text="Python" src="devicon/python-original.svg"/>
  {/if}

  <div id="pseudoEditor"></div>
  <div id="pythonEditor"></div>
  <J277Guide/>
</main>

<style lang="scss">
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

  #pseudoEditor { grid-column: 1; grid-row: 2 }
  #pythonEditor { grid-column: 2; grid-row: 2 }
</style>
