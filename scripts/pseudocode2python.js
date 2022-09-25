import {transpiler} from './pseudocode2python_transpiler.js';

// // TOGGLE VIEW PAST PAPER PSEUDOCDE BUTTON // // // // // // // // // // //
document.getElementById('viewPastPaperPseudocode').onclick = () => {
  pseudoEditor.setValue(pastPaperPseudocode, -1);
}

// // TOGGLE PSEUDOCDE GUIDE PANE // // // // // // // // // // // // // // //
document.getElementById('viewPseudocodeGuide').onclick = () => {
  const pythonLogo = document.getElementById('pythonLogo');
  const pythonSpan = document.getElementById('pythonSpan');
  const button = document.getElementById('viewPseudocodeGuide');
  const J277Editor = document.getElementById("J277Editor");
  const state = window.getComputedStyle(J277Editor).getPropertyValue('visibility');

  if (state == 'hidden') {
    J277Editor.style.visibility = 'visible';
    pythonLogo.src = 'resources/ocr logo.svg';
    pythonSpan.innerHTML = 'Pseudocode Guide';
    button.innerHTML = "&nbspClose Pseudocode Guide (J277)&nbsp";
  }
  else {
    J277Editor.style.visibility = 'hidden';
    pythonLogo.src = 'resources/python-original.svg';
    pythonSpan.innerHTML = 'Python';
    button.innerHTML = "&nbspView Pseudocode Guide (J277)&nbsp";
  }
}

// // TRANSPILE PSEUDOCODE INTO PYTHON // // // // // // // // // // // // // //
document.getElementById("convertPseudocodeToPython").onclick = transpileInit;
function transpileInit() {
  const pseudoText = pseudoEditor.getValue();

  const pseudoArray = pseudoText.split('\n').map(i => {
    return ['pseudo', i.search(/\S|$/), i.trim()];
  });

  const pythonArray = transpiler(pseudoArray);

  const pythonText = pythonArray.map(i => {
    let [type, indent, line] = i;
    return `${' '.repeat(indent)}${line}`;
  });

  pythonEditor.setValue(pythonText.join('\n'), -1);
}

// // INITIALIZE ACEJS TEXT EDITORS // // // // // // // // // // // // // // //
const pseudoEditor = ace.edit("pseudoEditor");
const pythonEditor = ace.edit("pythonEditor");

pseudoEditor.setTheme("ace/theme/dracula");
pseudoEditor.session.setTabSize(2);
pseudoEditor.setFontSize(16);
pseudoEditor.resize();

pythonEditor.setTheme("ace/theme/dracula");
pythonEditor.session.setTabSize(2);
pythonEditor.setFontSize(16);
pythonEditor.resize();
pythonEditor.session.setMode("ace/mode/python");

const pastPaperPseudocode = `// 2020 Sample assessment materials J277/02

// Question 2(a)
num1 = input("enter first number")
num2 = input("enter second number")
if num1 > num2 then
  print(num1)
else
  print(num2)
endif

// Question 2(b)
do
  number = input()
  print(number * 2)
until number < 0

// Question 7
radius = 0
area = 0.0
radius = input("Enter radius")
if radius < 1 OR radius > 30 then
  print("Sorry, that radius is invalid")
else
  area = 3.142 * (radius ^ 2)
  print (area)
endif

// Question 8(b)(i)
mins = input("Enter minutes played: ")
if mins < 0 or mins > 300 then
  print ("Invalid input")
endif

// Question 8(c)
print (minsPlayed[0,4])

// Question 8(d)
// e.g.
total = 0
for x = 0 to 4
  total = total + hoursplayed[2, x]
next x
console.writeline(total)

// Question 8(e)
x = 15
y = 0
while x > 0
  y = y + 1
  x = x - y
endwhile
print(y)

// Question 8(f)
valid = false
while(valid == false)
  gameName = input("Enter the game name")
  if (gameName.length > 0) AND (gameName.length < 20)
    gamesPlayed = gameName.upper
    valid = true
    print("Valid game name")
  else
    print("Game name is not valid")
  endif
endwhile

// Question 8(g)(ii)
hours = input("Please enter number of hours played")
minutes = input("Please enter number of minutes played")
finalTotal = totalMins(hours, minutes)
print (finalTotal)
function totalMins(hours, minutes)
  total = (hours * 60) + mins
  return total
endfunction

// Question 8(g)(iii)
minutes = input("Enter minutes played")
if minutes > 120
  print "You played games for too long!"
else
  print "You are under your time limit!"
endif`;
