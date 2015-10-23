var crypto = require('crypto');

module.exports = function(app) {

  app.cryptoModule = {};

  app.cryptoModule.encrypt = function(text) {
        var cipher = crypto.createCipher('aes-256-ctr', app.config.secret);
        var crypted = cipher.update(text, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }

    app.cryptoModule.decrypt = function(text) {
        var decipher = crypto.createDecipher('aes-256-ctr', app.config.secret);
        var dec = decipher.update(text, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    }

}
