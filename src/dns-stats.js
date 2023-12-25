const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  let arrOfParts = [];
  for (el of domains){
    const arrOfDomains = el.split('.').reverse();
    arrOfParts.push(arrOfDomains);
  }
  for (domain of arrOfParts){
    let property = ''
    for(i of domain){
        let count = 0;
        for (el of domains){
            const arrOfDomains = el.split('.');
            for (dom of arrOfDomains){
                if (i === dom){
                    count++;
                }
            }

        }
      property += '.' + i;
      result[property] = count;
    }
  }
  return result;
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
