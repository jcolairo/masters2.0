var express = require('express');
var router  = express.Router();

var staticController = require('../controllers/static.controller');
var userController   = require('../controllers/user.controller');
// Static Routes 

// Render Index
router.route('/')
  .get(staticController.index);


//User Routes

router.route('/users')
  .get(userController.getAllUsers);

router.route('/users/:uid')
  .get(userController.getUser);
  


module.exports = router; 