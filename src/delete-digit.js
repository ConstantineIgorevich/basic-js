const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let num = n;
  let arrOfNum = [];
  while (num > 0) {
    arrOfNum.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  if (arrOfNum[0] < arrOfNum[1]){
    arrOfNum.splice(0, 1);
    arrOfNum = arrOfNum.join('');
    return +arrOfNum;
  }
  let min = arrOfNum[0];
  for (el of arrOfNum){
    if (el < min){
      min = el;
    }
  }
  for (let i = 0; i < arrOfNum.length; i++){
    if (arrOfNum[i] === min) {
      arrOfNum.splice(i, 1);
      arrOfNum = arrOfNum.join('');
      return +arrOfNum;
    }
  }
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
