var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

module.exports = function(app) {

  passport.use(new LocalStrategy(
    function(login, password, done) {
      app.models.UserModel.authenticate(login, password, function(userFound) {
        if (userFound && userFound.length === 1) {
          return done(null, userFound);
        }
        return done(null, false, { message : 'Identifiants incorrectes'});
      })
    }
  ));

  app.use(passport.initialize());
  app.passport = passport;
  //app.authenticate = {};
  //app.authenticate.isAuthenticated = passport.authenticate('local');
}
