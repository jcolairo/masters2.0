var express = require('express');
var router  = express.Router();

var staticController = require('../controllers/static.controller');

// Static Routes 

// Render Index
router.route('/')
  .get(staticController.index);




module.exports = router; 