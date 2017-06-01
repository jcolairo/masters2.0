var express = require('express');
var router  = express.Router();

var staticController = require('../controllers/static.controller');
var userController   = require('../controllers/user.controller');
var productController   = require('../controllers/product.controller');


// Static Routes 
router.route('/')
  .get(staticController.index);


//User Routes
router.route('/users')
  .get(userController.getAllUsers);

router.route('/users/:uid')
  .get(userController.getUser);
  

// Product Routes
router.route('/products')
  .get(productController.getAll);

router.route('/products/category/:cat')
  .get(productController.getByCategory);

router.route('/products/:id')
  .get(productController.getOne);



module.exports = router; 
