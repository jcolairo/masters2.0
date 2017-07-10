var User         = require('../models/user.model');
var Err          = require('../utilities/badRequestHandler');
var emailManager = require('../utilities/emailManager');


function addProductsToBasket (req, res) {

  var products = req && req.body && req.body.products;

  if (!products || !products.length || !validateProducts(products)) {
    return Err.missingParams(res, ['PRODUCTS']);
  }
  var query = {'uid': req.user.uid, 'email': req.user.email };

  User.findOrCreate(query, function (err, user) { // breakpoint
    if (err || !user) return Err.recordNotFound(res, err.message);

    var product = products[0];
    var currentBasketProducts = user.basket.items.map(function (prod) {
      return prod.product;
    }).join('|') || ''

    var productToTest = new RegExp(product.product, 'ig');
    if (productToTest.test(currentBasketProducts)) {
      for (var j = 0; j < liveOrders[0].items.length; j++) {
        if (user.basket.items[j].product == product.product) {
          user.basket.items[j].qty += product.qty;
        }
      }
    } else {
      user.basket.items.push(product);
    }


    user.save(function(error){
      if (error) {
        return Err.missingParams(res, ['PRODUCTS']);
      } else {
        res.json(user);
      }
    });
  });
}

function editOrder (req, res) {

  var updatedItems = req && req.body && req.body;


  if (!updatedItems.length ) {
    return Err.missingParams(res, ['items']);
  }

  var query = {'uid': req.user.uid, 'email': req.user.email};

  User.findOne(query, function(err, user) {
    if (err || !user) return Err.recordNotFound(res, err.message);

    user.basket.items = updatedItems;

    user.save(function(error) {
      if(error) {
        return Err.missingParams(res, ['PRODUCTS']);
      } else {
        res.json(user);
      }
    });
  });
}

function removeProductFromBasket (req, res) {

  var productId = req && req.body && req.body.id;
  if (!productId) {
    return Err.missingParams(res, ['productId']);
  }

  var query = {'uid': req.user.uid, 'email': req.user.email };

  User.findOne(query, function (err, user) {
    if (err || !user) return Err.recordNotFound(res, err.message);

    for (var i  = 0; i < user.basket.items.length; i++) {
      var current = user.basket.items[i];
      if (productId == current.product) {
        user.basket.items.splice(i, 1);
        break;
      }
    }

    user.save(function(error){
      if (error) {
        return Err.missingParams(res, ['PRODUCTS']);
      } else {
        res.json(user);
      }
    });
  });
}

function submitOrder (req, res) {

  var query = {'uid': req.user.uid, 'email': req.user.email };

  User.findOne(query, function (err, user) {
    if (err || !user) return Err.recordNotFound(res, err);

      user.basket.has_been_submitted = true;
      user.basket.customer_notes = req.body.notes

      emailManager.sendOrderConfirmation(user)

      user.submitOrder(function (err) {

        if (err) {
          return Err.miscError(res, error.message);
        } else {
          res.json(user);
        }
      })
  });
}

function validateProducts (products) {
  for (var i = 0; i < products.length; i++) {

    var current = products[i];
    var isValidId = current.product && typeof current.product === 'string';
    var isValidQty = current.qty && typeof current.qty === 'number';

    if (!isValidQty || !isValidId) return false;
  }
  return true;
}


// function sendgridMail (req, res) {
//   var mailmail = req.query.mailmail || '';
//   if (!mailmail.length) {
//     return res.status(500).json({ message: 'please provide a search term' });
//   }
//
//   // using SendGrid's v3 Node.js Library
//   // https://github.com/sendgrid/sendgrid-nodejs
//   var helper = require('sendgrid').mail;
//   var fromEmail = new helper.Email('jamescolairo37@gmail.com');
//   var toEmail = new helper.Email('jcolairo@spartaglobal.co');
//   var subject = 'Sending with SendGrid is Fun';
//   var content = new helper.Content('text/plain', 'and easy to do anywhere, even with Node.js');
//   var mail = new helper.Mail(fromEmail, subject, toEmail, content);
//   mail.setTemplateId('aa1c13f7-cb6a-4f36-b901-47a37505f7be');
//
//   var sg = require('sendgrid')(process.env.MASTERS_SENDGRIB);
//   var request = sg.emptyRequest({
//     method: 'POST',
//     path: '/v3/mail/send',
//     body: mail.toJSON()
//   });
//
//   sg.API(request, function (error, response) {
//     if (error) {
//       console.log('Error response received');
//     }
//     console.log(response.statusCode);
//     console.log(response.body);
//     console.log(response.headers);
//   });
//
//   User.findOne(function (error, response, body, user) {
//     if (error || !user) return Err.recordNotFound(res, error.message);
//     var sendgridJson;
//
//     if (error) {
//       console.warn('could not get mail', error);
//       res.status(500).json({ message: 'could not get mail' });
//       return;
//     }
//     sendgridJson = JSON.parse(body);
//     res.status(200).json(sendgridJson.results);
//   }
// );
// }

module.exports = {
  addProducts: addProductsToBasket,
  editOrder: editOrder,
  removeProduct: removeProductFromBasket,
  submitOrder: submitOrder
  // sendgridMail: sendgridMail
};
