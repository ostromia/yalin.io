(function () {
  let logger = document.getElementById('terminalTextarea');
  console.log = function (message) {
      if (typeof message == 'object') {
          logger.value += (JSON && JSON.stringify ? JSON.stringify(message) : message);
      }
      else {
          logger.value += message;
      }
  }
})();

document.getElementById('clearTerminal').onclick = clearTerminal;
function clearTerminal() {
  let terminal = document.getElementById('terminalTextarea');
  terminal.value = 'Brython 3.10.6 @ brython.js brython_stdlib.js\n';
}

const pythonTextarea = ace.edit("pythonTextarea");
pythonTextarea.setTheme("ace/theme/dracula");
pythonTextarea.session.setTabSize(2);
pythonTextarea.setFontSize(16);
pythonTextarea.resize();
pythonTextarea.session.setMode("ace/mode/python");

clearTerminal();
