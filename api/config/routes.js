var express = require('express');
var router  = express.Router();

var staticController = require('../controllers/static.controller');
var userController   = require('../controllers/user.controller');
var productController   = require('../controllers/product.controller');
var orderController   = require('../controllers/order.controller');


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
  .post(orderController.addProducts);
//   // using SendGrid's v3 Node.js Library
//   // https://github.com/sendgrid/sendgrid-nodejs
// var helper = require('sendgrid').mail;
// var fromEmail = new helper.Email('jamescolairo37@gmail.com');
// var toEmail = new helper.Email('jcolairo@spartaglobal.co');
// var subject = 'Sending with SendGrid is Fun';
// var content = new helper.Content('text/plain', 'and easy to do anywhere, even with Node.js');
// var mail = new helper.Mail(fromEmail, subject, toEmail, content);
//
// var sg = require('sendgrid')(process.env.MASTERS_SENDGRIB);
// var request = sg.emptyRequest({
//   method: 'POST',
//   path: '/v3/mail/send',
//   body: mail.toJSON()
// });
//
// sg.API(request, function (error, response) {
//   if (error) {
//     console.log('Error response received');
//   }
//   console.log(response.statusCode);
//   console.log(response.body);
//   console.log(response.headers);
// });

module.exports = router;
