(function () {
  var old = console.log;
  var logger = document.getElementById('terminalEditor');
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
  document.getElementById('terminalEditor').value = '';
}


const pythonEditor = ace.edit("pythonEditor");

pythonEditor.setTheme("ace/theme/dracula");
pythonEditor.session.setTabSize(2);
pythonEditor.setFontSize(16);
pythonEditor.resize();
pythonEditor.session.setMode("ace/mode/python");
