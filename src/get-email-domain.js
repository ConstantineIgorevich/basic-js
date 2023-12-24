const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let resultStr = '';
  let j = email.length;
  for (let i = 0; i < email.length; i++){
    if (email[i] === '@') {
      resultStr = '';
      j = i;
    }
    if (i > j){
      resultStr = resultStr + email[i];
    }
  }
  return resultStr;
  // remove line with error and write your code here
}

module.exports = {
  getEmailDomain
};
