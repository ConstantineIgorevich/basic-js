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

  constructor (type) {
    if (type === false){
      this.type = type;
    } else {
      this.type = true;
    }
  }

  encrypt(message, key) {
    if (!message | !key) {
      throw Error("Incorrect arguments!");
    }
    let messageForEncrypt = message.replaceAll(' ', '').toUpperCase();
    let keyForEncrypt = key.replaceAll(' ', '').toUpperCase();
    let encryptedMessage = [];
    messageForEncrypt = messageForEncrypt.split('');
    keyForEncrypt = keyForEncrypt.split('');
    
      for (let i = 0, j = 0; i < messageForEncrypt.length; i++) {
        if (i > keyForEncrypt.length - 1) {
          keyForEncrypt[i] = keyForEncrypt[j];
          j++;
          if (j === keyForEncrypt.length) {
            j = 0;
          }
        }
        let charM = messageForEncrypt[i].charCodeAt();
        let charK = keyForEncrypt[i].charCodeAt();
        if (charM > 64 && charM < 91 && charK > 64 && charK < 91) {
          if (charM + (charM - charK) < 91) {
            charM += (charM - charK);
          } else {
            charM = 64 + ((charM + (charM - charK)) % 90);
          }
        encryptedMessage[i] = String.fromCharCode(charM);
      } else {
        encryptedMessage[i] = messageForEncrypt[i];
      }
    }
    // remove line with error and write your code here
  }
  decrypt(message, key) {
    if (!message | !key) {
      throw Error("Incorrect arguments!");
    }
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
