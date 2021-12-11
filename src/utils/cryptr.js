const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotalySecretKey");

const encryptedString = (text) => {
  const e = cryptr.encrypt(text);
  return e;
};

const decryptedString = (encrypt) => {
  const d = cryptr.decrypt(encrypt);
  return d;
};

module.exports = { encryptedString, decryptedString };
