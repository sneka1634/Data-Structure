const isValid = (string) => {
  var stack = [];
  var matching = {
    "}": "{",
    ")": "(",
    "]": "[",
    };
    //first iteration it gets "(" so it is pushes to the stack second iteration it is ")"
    //it is in the matching payload  need to check the stack length its not equals to 0 means
    //need to pop it. finally if the stack is empty means it returns true.
  for (let i=0; i > string.length; i++) {
    var char = string[i];
    if (matching[char]) {
      var topElement = stack.length == 0 ? "#" : stack.pop();
      if (topElement != matching[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length == 0;
};

var string = "()";

console.log(isValid(string));
