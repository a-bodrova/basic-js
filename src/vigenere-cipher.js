const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction) {
    this.isDirect = direction || true;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.matrix = this.getTable();
  }

  getFullKey(message, key) {
    const repeatCount = Math.floor(message.length / key.length);
    const fullKey = key.repeat(repeatCount);
    const remainder = key.slice(0, (message.length - fullKey.length));
    return fullKey + remainder;
  }

  
  encrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    if (arguments.length !== 2 || typeof arguments[0] !== 'string' || typeof arguments[1] !== 'string') {
      throw new Error('Incorrect arguments!');
    };
    const mess = message.split(' ').join('');
    const fullKey = this.getFullKey(mess, key);
    let encryptedMessage = '';

    for (let i = 0; i < message.length; i++) {
      const column = this.alphabet.indexOf(mess[i]);
      const row = this.alphabet.indexOf(fullKey[i]);

      if (column === -1) {
        encryptedMessage += mess[i];
      } else {
        encryptedMessage += this.matrix[row][column];
      }
    }
    
    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    if (arguments.length !== 2 || typeof arguments[0] !== 'string' || typeof arguments[1] !== 'string') {
      throw new Error('Incorrect arguments!');
    }

    const fullKey = this.getFullKey(message, key);

  }

  getTable() {
    const matrix = [...Array(this.alphabet.length)].map(item => Array(this.alphabet.length).fill(''));
    for (let i = 0; i < this.alphabet.length; i++) {
      matrix[i] = this.alphabet.split('');
      const remainder = matrix[i].splice(0, i);
      matrix[i] = [...matrix[i], ...remainder];
    }

    return matrix;
  }
}

module.exports = {
  VigenereCipheringMachine
};
