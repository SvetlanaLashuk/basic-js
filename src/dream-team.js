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
  let result;

  if (!Array.isArray(members)) {
    return false;
  } else {
    members = members.filter(member => typeof member === 'string');
    result = members.map(member => member.trim().charAt(0).toUpperCase()).sort().join('');
  }

  return result;
}

module.exports = {
  createDreamTeam
};
