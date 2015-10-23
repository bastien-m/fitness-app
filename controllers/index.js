module.exports = function(app) {
  app.controllers = {};

  app.controllers.UserController = require('./UserController.js')(app);
  app.controllers.LoginController = require('./LoginController.js')(app);
}
