/*
 The operations our stack machine supports will include: "ADD", "SUB"(tract),
"POP", "DUP"(licate), and "INT"(push). The operations are defined as follows:
  1 "ADD": Pop the last 2 values from the stack, add them, and push the resulting sum to the stack
  2 "SUB": Pop the last 2 values from the stack, subtract the second (lower) one from the first (top-most) one, and push the resulting difference to the stack
  3 "POP": Remove a value from the stack and throw it away
  4 "DUP": Duplicate the top value on the stack
  5 "INT": This is the default instruction, which gets performed whenever a plain number appears in the instruction set. To handle a number, simply push it to the stack.
  The "result" of processing a series of stack instructions should be whatever top value is left on the stack after all the instructions have been run.

  For example `process('8 7 +')` results in 15. process('4 7 -') results in 3. process('13 DUP 4 POP 5 DUP + DUP + -') results in 7
*/

function process(statement) {
  let toArray = statement.split(" ");
  let answer = [];
  for (let element in toArray) {
    if (toArray.length === 1) {
      return Number(toArray[element]);
    } else if (!isNaN(Number(toArray[element]))) {
      answer.push(Number(toArray[element]));
    } else if (toArray[element] === "+") {
      answer.push(answer[answer.length - 1] + answer[answer.length - 2]);
      answer.splice((answer.length - 3), 2);
    } else if (toArray[element] === "-") {
      answer.push(Math.abs(answer[answer.length - 1] - answer[answer.length - 2]));
      answer.splice((answer.length - 3), 2);
    } else if (toArray[element] === "POP") {
      answer.pop();
    } else if (toArray[element] === "DUP") {
      answer.push(answer[answer.length - 1]);
    } else if (toArray[element] === "INT") {
      answer.push('a');
      answer.pop();
    } else return("Wrong syntax!!");
  }
  return answer[answer.length - 1];
}

