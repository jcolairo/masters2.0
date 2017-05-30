var express     = require('express');
var helmet      = require('helmet');
var morgan      = require('morgan');

var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var app         = express();

var PORT        = process.env.PORT || 3000;
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://heroku_0ddgp5fl:60n3aes6tac59i2ijp4l4tnv90@ds149711.mlab.com:49711/heroku_0ddgp5fl';

mongoose.connect(MONGODB_URI, function (err) {
  if (err) {
    console.error('Could not connect to Mongo: err:', err);
    process.exit(1);
  }
  console.log('Connected to database:', mongoose.connection.name);
});

app.use(helmet());
app.use(morgan());


app.use(express.static(require('../env').path + '/frontend'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(require('./config/routes'));

app.listen(PORT, function() {
  console.log('App is running on port', PORT, '...');
});

module.exports = app;
