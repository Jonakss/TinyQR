let qr = require('qrcode');

exports = module.exports = {
    getQrData : async (text) => {
       return await qr.toDataURL(text);
    },
    getStringData : async (text) => {
        return await qr.toString(text)
    }
};