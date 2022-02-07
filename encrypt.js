const { convertToAscii, convertIntegerToChar } = require("ask-ascii");
const BinaryConversion = require("./utils");

function ENCRYPT_8BIT(message) {
  let messageCharactersAscii = convertToAscii(message);
  let encryptedMessageCharactersArray = [];

  for (i of messageCharactersAscii) {
    let checkIntegration = new BinaryConversion(i);
    encryptedMessageCharactersArray.push(checkIntegration._8BitConversion());
  }

  return encryptedMessageCharactersArray.join(" ");
}
console.log(ENCRYPT_8BIT("HELLO! I am working. Am not I?"));
