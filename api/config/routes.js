var express = require('express');
var router  = express.Router();

var staticController    = require('../controllers/static.controller');
var userController      = require('../controllers/user.controller');
var productController   = require('../controllers/product.controller');
var orderController     = require('../controllers/order.controller');
var specialController   = require('../controllers/special.controller');


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

// router.route('/users/delivery')
//   .get(userController.getDeliveryDate);

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

router.route('/orders/process-order')
  .post(orderController.processOrder);

// Special Order Routes
router.route('/specials')
  .get(specialController.getAll);

router.route('/specials/:id')
  .get(specialController.getOne);

router.route('/specials/create')
  .post(specialController.createOne);

router.route('/specials/:id')
  .put(specialController.updateOne);

router.route('/specials/:id')
  .post(specialController.deleteOne);

module.exports = router;
