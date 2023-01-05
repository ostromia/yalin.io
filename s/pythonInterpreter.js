console.log = function (message) {
  let logger = document.getElementById('terminal');
  if (typeof message == 'object') {
    logger.value += (JSON && JSON.stringify ? JSON.stringify(message) : message);
  }
  else {
    logger.value += message;
  }
  logger.value += '\n';
}

function clearTerminal() {
  let logger = document.getElementById('terminal');
  logger.value = '>>> pyodide 0.21.3 [python 3.10.2] [Clang 15.0.0]\n';
}

var toggleTerminalState = true;
function toggleTerminal() {
  let terminal = document.getElementById('terminal');
  let python = document.getElementById('python');

  toggleTerminalState = (toggleTerminalState) ? false : true;

  if (toggleTerminalState) {
    terminal.style.display = 'inline';
    python.style.minWidth = 'calc(50vw - 0.5rem)';
  }
  else {
    terminal.style.display = 'none';
    python.style.minWidth = 'calc(100vw - 1rem)';
  }
}

function savePythonCode() {
  const link = document.getElementById('download');
  link.setAttribute(
    'href',
    `data:text/plain;charset=utf-8,${encodeURIComponent(python.getValue())}`
  );
  link.click();
}

function input_fixed(text) {
  let pyprmpt = prompt(text);
  console.log(`${text}${pyprmpt}\n`);
  return pyprmpt;
}

function executePythonCode() {
  clearTerminal();
  pyodide.runPython(`
from js import input_fixed
input = input_fixed
${python.getValue()}`);
}

const python = ace.edit("python");
python.setTheme("ace/theme/dracula");
python.session.setTabSize(2);
python.setFontSize(16);
python.resize();
python.session.setMode("ace/mode/python");

var pyodide;
(async () => {
  pyodide = await loadPyodide();
  clearTerminal();
})();
