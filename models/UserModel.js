var mongoose = require('mongoose');

module.exports = function(app) {

  var userSchema = new mongoose.Schema({
    login : {type: String},
    password: {type: String},
    email: {type: String},
    created_at: {type: Date, default: new Date()},
    updated_at: {type: Date, default: new Date()}
  });

  userSchema.pre('save', function(done) {
    this.password = app.cryptoModule.encrypt(this.password);
    done();
  });

  UserModel = mongoose.model('Users', userSchema);

  UserModel.authenticate = function(login, password) {
    var encryptedPassword = app.cryptoModule.encrypt(password);
    UserModel.find({login: login, password: encryptedPassword}, function(err, userFound) {
      if (err) {
        return null;
      }
      return userFound;
    });
  }

  return UserModel;

}
