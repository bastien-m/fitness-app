module.exports = function(app) {

  app.models = {};

  app.models.UserModel = require('UserModel.js')(app);

}
