const isValid = (string) => {
  var stack = [];
  var matching = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
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
