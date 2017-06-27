var User    = require('../models/user.model');
var Err     = require('../utilities/badRequestHandler');


function addProductsToBasket (req, res) {

  var products = req && req.body && req.body.products;

  if (!products || !products.length || !validateProducts(products)) {
    return Err.missingParams(res, ['PRODUCTS']);
  }
  var query = {'uid': req.user.uid, 'email': req.user.email };

  User.findOrCreate(query, function (err, user) { // breakpoint
    if (err || !user) return Err.recordNotFound(res, err.message);

    var liveOrders = user.orders.filter(function(order) {
      return order.is_live === true;
    });

    if (!liveOrders.length) {
      user.orders.push({
        items: products
      });
    } else {

      var product = products[0];
      var currentBasketProducts = liveOrders[0].items.map(function (prod) {
        return prod.product;
      }).join('|');

      var productToTest = new RegExp(product.product, 'ig');
      if (productToTest.test(currentBasketProducts)) {
        for (var j = 0; j < liveOrders[0].items.length; j++) {
          if (liveOrders[0].items[j].product == product.product) {
            liveOrders[0].items[j].qty += product.qty;
          }
        }
      } else {
        liveOrders[0].items.push(product);
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

function editOrder (req, res) {

  var updatedItems = req && req.body && req.body;


  if (!updatedItems.length ) {
    return Err.missingParams(res, ['items']);
  }

  var query = {'uid': req.user.uid, 'email': req.user.email};

  User.findOne(query, function(err, user) {
    if (err || !user) return Err.recordNotFound(res, err.message);

    var liveOrders = user.orders.filter(function(order) {
      return order.is_live === true;
    });

    if (liveOrders.length){
      liveOrders[0].items = updatedItems;
    }





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
    var liveOrders = user.orders.filter(function(order) {
      return order.is_live === true;
    });

    if (!liveOrders.length) {
      return Err.recordNotFound(res, ['User not found']);
    } else {
      for (var i  = 0; i < liveOrders[0].items.length; i++) {
        var current = liveOrders[0].items[i];
        if (productId == current.product) {
          liveOrders[0].items.splice(i, 1);
          break;
        }
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
  removeProduct: removeProductFromBasket
};
