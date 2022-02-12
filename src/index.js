module.exports = function check(str, bracketsConfig) {
  let opened = ''
  let closed = ''
  const config = bracketsConfig.reduce((acc, brackets) => {
    acc[brackets[1]] = brackets[0]
    opened += brackets[0]
    closed += brackets[1]
    return acc
  }, {})

  let stack = {
    _stack: [],
    isEmpty() {
      return !Boolean(this._stack.length)
    },
    size() {
      return this._stack.length
    },
    push(bracket) {
      return this._stack.push(bracket)
    },
    pop(bracket) {
      return this._stack.pop()
    },
    top() {
      return this._stack[this._stack.length - 1]
    },
    print() {
      return this._stack
    },
  }
  let uno = false
  for (let i = 0; i < str.length; i++) {
    const bracket = str[i]

    if (opened.includes(bracket) && closed.includes(bracket)) {
      if (!uno) {
        stack.push(bracket)
        uno = true
      } else {
        if (stack.top() === config[bracket]) {
          stack.pop()
          uno = false
        }
      }
    } else {
      if (opened.includes(bracket)) {
        stack.push(bracket)
      }

      if (closed.includes(bracket)) {
        if (stack.top() === config[bracket]) {
          stack.pop()
        } else {
          return false
        }
      }
    }
  }

  return stack.isEmpty() ? true : false
}

