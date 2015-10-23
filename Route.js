module.exports = function(app) {

  app.get('/logout', app.controllers.LoginController.logout);

  app.route('/login')
    .get(app.controllers.LoginController.get)
    .post(app.controllers.LoginController.login);


  app.route('/user/:id')
    .get(app.passport.authenticate('local'), app.authenticate.isAuthenticated, app.controllers.UserController.get)
    .put(app.passport.authenticate('local'), app.authenticate.isAuthenticated, app.controllers.UserController.update)
    .delete(app.passport.authenticate('local'), app.authenticate.isAuthenticated, app.controllers.UserController.delete);

}
