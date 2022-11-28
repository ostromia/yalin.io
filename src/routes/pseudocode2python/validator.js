// @ts-nocheck
function IterationCountControlled(INDENT, INDEX, LINE)
{
  let iccRegex1 = /^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?):*$/;
  let iccRegex2 = /^for\s+(.*?)\s*=\s*(.*?)\s+to\s+(.*?)\s+step\s+(.*?):*$/;
  let iccRegex3 = /^for\s+(.*?)\s+in\s+range\s*\((.*?),(.*?)\):*/;

  if (iccRegex1.test(LINE) || iccRegex2.test(LINE) || iccRegex3.test(LINE)) {
    return true;
  }
else {
    message = `Error on line ${INDEX}
    ${LINE}

Please declare for loops as specified by the OCR guide.

Press "View Pseudocode Guide (J277)" to see some examples.

For example:
    for i=0 to 9
      ...
    next i
`;
    return false;
  }
}

export function validator(pseudoArrayInput)
{
  python = pseudoArrayInput;
  for (let i = 0; i < python.length; i++) {
    const [type, indent, line] = [...python[i]];

    if (/^for(.*?)$/.test(python[i][2])) {
      if (!IterationCountControlled(indent, i, line)) {
        return message;
      }
    }
  }
  return true;
}

let python = [];
let message = '';
