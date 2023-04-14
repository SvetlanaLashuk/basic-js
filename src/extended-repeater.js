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
  str = String(str);

  let repeatTimes = !options.repeatTimes ? 1 : options.repeatTimes;
  let separator = !options.separator ? '+' : options.separator;
  let addition = options.addition === undefined ? '' : String(options.addition);
  let additionRepeatTimes = !options.additionRepeatTimes ? 1 : options.additionRepeatTimes;
  let additionSeparator = !options.additionSeparator ? '|' : options.additionSeparator;

  let additionStr = str + (addition + additionSeparator).repeat(additionRepeatTimes);
  additionStr = additionStr.slice(0, additionStr.length - additionSeparator.length) + separator;

  let repeatedStr = additionStr.repeat(repeatTimes);
  result = repeatedStr.slice(0, repeatedStr.length - separator.length);

  return result;
}

module.exports = {
  repeater
};
