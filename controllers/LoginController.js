module.exports = function(app) {

  var controller = {};

  controller.get = function(req, res) {
    res.render('user/login.jade');
  }

  return controller;

}
