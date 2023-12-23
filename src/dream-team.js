const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)){return false;}
  let teamName ='';
  for (member of members){
    if (typeof(member) === 'string') {
      for (let i = 0; i < member.length; i++){
        if (member[i] !== ' ') {
          teamName = teamName + member[i].toUpperCase();
          break;
        }
      }
    }
  }
  return teamName.split('').sort().join('');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
