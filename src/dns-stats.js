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
function getDNSStats(/* domains */) {
  throw new NotImplementedError('Not implemented');
  const result = {};
  domains.reduce((acc, string) => {
    const array = string
      .split('.')
      .reverse()
      .map(item => '.' + item)
      .reduce((domain, item) => {
        domain.includes(item) ? domain : domain += item;
      }, '')
  }, result);

}

module.exports = {
  getDNSStats
};
