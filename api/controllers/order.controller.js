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
      for (var i = 0; i < products.length; i++) {
        liveOrders[0].items.push(products[i]);
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
  addProducts: addProductsToBasket
};
