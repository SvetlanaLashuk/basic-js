const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let repeatedStr = '';
  str = String(str);

  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  if (!options.separator) {
    options.separator = '+';
  }

  if (options.addition === undefined) {
    options.addition = '';
  } else {
    options.addition = String(options.addition);
  }

  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }

  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }

  let additionStr = str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
  additionStr = additionStr.slice(0, additionStr.length - options.additionSeparator.length) + options.separator;

  for (let i = 0; i < options.repeatTimes; i++) {
    repeatedStr += additionStr;
  }
  
  result = repeatedStr.slice(0, repeatedStr.length - options.separator.length);

  return result;
}

module.exports = {
  repeater
};
