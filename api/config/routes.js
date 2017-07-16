var express = require('express');
var router  = express.Router();

var staticController    = require('../controllers/static.controller');
var userController      = require('../controllers/user.controller');
var productController   = require('../controllers/product.controller');
var orderController     = require('../controllers/order.controller');


// Static Routes
router.route('/')
  .get(staticController.index);


//User Routes
router.route('/users')
  .get(userController.getAllUsers);

router.route('/users/add-address')
  .post(userController.addNewAddres);

router.route('/users/:uid')
  .get(userController.getUser);


// Product Routes
router.route('/products')
  .get(productController.getAll);

router.route('/products/category/:cat')
  .get(productController.getByCategory);

router.route('/products/category/:cat/:subCat')
  .get(productController.getBySubCategory);

router.route('/products/:id')
  .get(productController.getOne);


//Order Routes
router.route('/orders/add')
  .post(orderController.addProducts);

router.route('/orders/delete')
  .post(orderController.removeProduct);

router.route('/orders/edit')
  .put(orderController.editOrder);

router.route('/orders/submit')
  .post(orderController.submitOrder);

router.route('/sendgrid/mail')
  .post(orderController.submitOrder);

module.exports = router;
