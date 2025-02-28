const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)){
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  let resultArr = [];
  let isDiscardNext = false;
  if (!arr.length) {
    return resultArr;
  }
  for (let i = 0; i < arr.length; i++){
    switch (arr[i]){
      case '--discard-next':
        isDiscardNext = true;
        i++;
        break;
      case '--discard-prev':
        if(arr[i-1] & !isDiscardNext) {
          resultArr.pop();
        }
        break;
      case '--double-next':
        if (arr[i +1]) {
          resultArr.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (arr[i - 1] & !isDiscardNext) {
          resultArr.push(arr[i - 1]);
        }
        break;
      default:
        isDiscardNext = false;
        resultArr.push(arr[i]);
    }
  }
  return resultArr;
  // remove line with error and write your code here
}

module.exports = {
  transform
};
