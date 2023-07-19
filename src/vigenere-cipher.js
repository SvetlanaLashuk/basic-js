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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!(message && key)) {
      throw new Error('Incorrect arguments!');
    }

    const arrayAlphabet = this.alphabet.split('');
    const keyArray = key.toUpperCase().split('');
    const messageArray = message.toUpperCase().split('');
    let keyIndex = 0;
    let result = [];

    for (let i = 0; i < messageArray.length; i++) {
      if (arrayAlphabet.indexOf(messageArray[i]) !== -1) {
        if (keyIndex > keyArray.length - 1) {
          keyIndex = 0;
        }
        result.push(arrayAlphabet[(arrayAlphabet.indexOf(messageArray[i]) + arrayAlphabet.indexOf(keyArray[keyIndex % keyArray.length])) % 26]);
        keyIndex++;
      } else {
        result.push(messageArray[i]);
      }
    }
    return this.isDirect ? result.join('') : result.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!(encryptedMessage && key)) {
      throw new Error('Incorrect arguments!');
    }
    
    const arrayAlphabet = this.alphabet.split('');
    const keyArray = key.toUpperCase().split('');
    const messageArray = encryptedMessage.toUpperCase().split('');
    let keyIndex = 0;
    let result = [];

    for (let i = 0; i < messageArray.length; i++) {
      if (arrayAlphabet.indexOf(messageArray[i]) !== -1) {
        if (keyIndex > keyArray.length - 1) {
          keyIndex = 0;
        }
        result.push(arrayAlphabet[(arrayAlphabet.indexOf(messageArray[i]) - arrayAlphabet.indexOf(keyArray[keyIndex % keyArray.length]) + 26) % 26]);
        keyIndex++;
      } else {
        result.push(messageArray[i]);
      }
    }
    return this.isDirect ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
