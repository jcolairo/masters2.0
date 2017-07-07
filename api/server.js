var express     = require('express');
var helmet      = require('helmet');
var morgan      = require('morgan');

var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var app         = express();

var PORT        = process.env.PORT || 3000;
var env         = require('../env');

mongoose.connect(env.db_url, function (err) {
  if (err) {
    console.error('Could not connect to Mongo: err:', err);
    process.exit(1);
  }
  console.log('Connected to database:', mongoose.connection.name);
});

app.use(helmet());
app.use(morgan('dev'));

app.use(express.static(env.path + '/frontend'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./middleware/userPopulator'));

app.use(require('./config/routes'));

app.listen(PORT, function() {
  console.log('App is running on port', PORT, '...');
});

module.exports = app;
