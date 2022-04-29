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
function repeater( str, options ) {
  const repeatTimes = options.repeatTimes || '';
  const separator = options.hasOwnProperty('separator') ? options.separator : '+';
  const addition = options.hasOwnProperty('addition') ? `${options.addition}` : '';
  const additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : '';
  const additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';

  const additionString = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  const result = Array(repeatTimes).fill(str + additionString).join(separator);

  return result;
}

module.exports = {
  repeater
};
