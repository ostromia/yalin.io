<script lang="ts">
  import {onMount} from 'svelte';

  import Navigation from '$r/pseudocode2python/Navigation.svelte';
  import J277Guide from '$r/pseudocode2python/J277Guide.svelte';

  import {pastPaperPseudocode} from '$r/pseudocode2python/stores.js';
  import {VPG_s} from '$r/pseudocode2python/stores.js';


  import python_logo from '$lib/devicons/python.svg';
  import ocr_logo from '$lib/ocr-logo.svg';

  import {p2p} from '$r/pseudocode2python/transpiler/p2p';

  let pseudoEditor: any;
  let pythonEditor: any;

  onMount(() => {
    function ace_init(editor: any) {
      editor.setTheme('ace/theme/dracula');
      editor.setFontSize(16);
      editor.resize();
    }
    // @ts-ignore
    pseudoEditor = ace.edit("pseudoEditor");
    ace_init(pseudoEditor);
    // @ts-ignore
    pythonEditor = ace.edit("pythonEditor");
    ace_init(pythonEditor);
    pythonEditor.setReadOnly(true);
  });

  function viewPastPaperPseudocode() {
    pseudoEditor.setValue($pastPaperPseudocode, 1);
  }

  function viewPseudocodeGuide() {
    VPG_s.update(i => i = i ? false : true);
  }

  function convertPseudocodeToPython() {
    const code = new p2p(pseudoEditor.getValue());
    if (code.validate() === '') {
      pythonEditor.session.setMode("ace/mode/python");
      pythonEditor.setValue(code.transpile().join('\n') + '\n', 1);
    }
    else {
      pythonEditor.session.setMode("ace/mode/text");
      pythonEditor.setValue(code.transpile() + '\n', 1);
    }
  }
</script>

<Navigation
  on:vPPP={viewPastPaperPseudocode}
  on:vPG={viewPseudocodeGuide}
  on:cPTP={convertPseudocodeToPython}
/>

<main>
  <div class="heading-wrapper">
    <img alt="" class="logo" src={ocr_logo}>
    <span class="text">Pseudocode</span>
  </div>

  <div class="heading-wrapper">
    <img alt="" class="logo" src={$VPG_s ? ocr_logo : python_logo}>
    <span class="text">{$VPG_s ? 'Pseudocode Guide' : 'Python'}</span>
  </div>

  <div id="pseudoEditor"></div>
  <div id="pythonEditor"></div>
  <J277Guide/>
</main>

<style lang="scss">
  main {
    height: 95vh;
    width: 100vw;

    padding: 0.5rem;
    box-sizing: border-box;

    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "h0 h1" "e0 e1";
    gap: 0.5rem;
  }

  .heading-wrapper {
    width: 100%;

    display: flex;
    align-content: center;

    align-items: center;
  }

  .logo {
    height: 3vh;
  }

  .text {
    font-size: 2vh;
    font-family: 'cabin';
    color: white;
    margin-left: 0.5vw;
  }
</style>
