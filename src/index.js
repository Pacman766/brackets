module.exports = function check(str, bracketsConfig) {
  let opened = '';
  let closed = '';

  const brackets = bracketsConfig.reduce((acc, currBracket) => {
    acc[currBracket[1]] = currBracket[0];
    opened += currBracket[0];
    closed += currBracket[1];
    return acc;
  }, {});

  const stack = {
    _stack: [],
    isEmpty() {
      return !Boolean(this._stack.length);
    },
    pop() {
      return this._stack.pop();
    },
    push(bracket) {
      return this._stack.push(bracket);
    },
    size() {
      return this._stack.length;
    },
    top() {
      return this._stack[this._stack.length - 1];
    },
  };

  let check = false;
  for (let i = 0; i < str.length; i++) {
    let bracket = str[i];

    if (opened.includes(bracket) && closed.includes(bracket)) {
      if (!check) {
        stack.push(bracket);
        check = true;
      } else {
        if (stack.top() === brackets[bracket]) {
          stack.pop();
          check = false;
        }
      }
    } else {
      if (opened.includes(bracket)) {
        stack.push(bracket);
      }
      if (closed.includes(bracket)) {
        if (stack.top() === brackets[bracket]) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return stack.isEmpty() ? true : false;
}
