function check(str, bracketsConfig) {
  // your solution
  const arr = Array.from(str);

  // check if all brackets from bc exist in arr
  bracketsConfig.forEach(bracket => bracket.forEach(el => console.log(el)))
}

check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']])

// module.exports = function check(str, bracketsConfig) {
//   // your solution
//   const brackets = '[]{}()||';
//   const stack = [];

//   for(let bracket in str) {
//     let bracketsIndex = brackets.indexOf(bracket);

//     if(bracketsIndex % 2 == 0) {
//       stack.push(bracketsIndex + 1);
//     } else {
//       // do smth
//     }
//   }
//   return true ? true : false;
// }
