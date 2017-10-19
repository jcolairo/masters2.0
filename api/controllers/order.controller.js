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
      for (var j = 0; j < user.basket.items.length; j++) {
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

  User
    .findOne(query)
    .populate('orders.items.product basket.items.product')
    .exec(function (err, user) {
    if (err || !user) return Err.recordNotFound(res, err);
      var a = req && req.body && req.body.deliveryAddress
      var notes = req && req.body && req.body.notes
      var timeSlot = req && req.body && req.body.timeSlot;

      if (a) {
        user.basket.delivery_address = `${a.line_one || ''}, ${a.line_two || ''}, ${a.line_three || ''}, ${a.post_code || ''}`
      }
      if (notes) {
        user.basket.customer_notes = notes
      }
      if (timeSlot) {
        user.basket.time_slot = timeSlot;
      }

      user.basket.has_been_submitted = true;
      var orderInfo = user.toObject();
      orderInfo.basket.total = user.basket.total;

      user.submitOrder(function (err) {
        if (err) {
          return Err.miscError(res, err.message);
        } else {
          emailManager.sendOrderConfirmation(orderInfo);
          res.json(user);
        }
      })
  });
}

function processOrder (req, res) {
  var userUid = req && req.body && req.body.userUid;
  var orderId = req && req.body && req.body.orderId;

  if (!userUid || !orderId) {
    return Err.missingParams(res, ['userUid', 'orderId']);
  }
  User
    .findOne({ uid: userUid })
    .populate('orders.items.product')
    .exec(function (err, user) {

      var orderToProcess = user.orders.id(orderId);
      orderToProcess.has_been_processed = true;

      user.save(function(error){
        if (error) {
          return Err.missingParams(res, ['PRODUCTS']);
        } else {
          res.json(user);
        }
      });

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



module.exports = {
  addProducts: addProductsToBasket,
  editOrder: editOrder,
  removeProduct: removeProductFromBasket,
  submitOrder: submitOrder,
  processOrder: processOrder
};
