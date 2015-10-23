var express           = require('express'),
    app               = express(),
    errorHandler      = require('errorhandler'),
    bodyParser        = require('body-parser'),
    path              = require('path'),
    app.config        = require(path.join(__dirname, 'config.json')),
    methodOverride    = require('methode-override'),
    mongoose          = require('mongoose'),
    jade              = require('jade'),
    _                 = require('lodash');



mongoose.connect(app.config.dburl);


app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, config.static_dir)));

app.use(bodyParser.urlencoded());
app.use(methodOverride);

require(path.join(__dirname, 'models'))(app);
require(path.join(__dirname, 'controllers'))(app);
require(path.join(__dirname, 'utils.js'))(app);
require(path.join(__dirname, 'Route.js'))(app);

if (app.get('env') === 'development') {
  app.use(errorHandler());
}

app.listen(app.config.port, function() {
  console.log('Fitness server started on port ' + app.config.port);
});
