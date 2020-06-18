const CryptoJS = require('crypto-js');
const secretKey = "0123456789123456";

export const decrypt = (_decryptString) => {
    let _key = CryptoJS.enc.Utf8.parse(secretKey);
    let _iv = CryptoJS.enc.Utf8.parse(secretKey);

    var decryptedString = CryptoJS.AES.decrypt(
        _decryptString, _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    return decryptedString;
}
export const encrypt = (_dataToEncrypt) => {
    let _key = CryptoJS.enc.Utf8.parse(secretKey);
    let _iv = CryptoJS.enc.Utf8.parse(secretKey);

    let encrypted = CryptoJS.AES.encrypt(
        _dataToEncrypt, _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
}