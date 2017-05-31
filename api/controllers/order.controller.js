var User    = require('../models/user.model');
var Err     = require('../utilities/badRequestHandler');

// function getUserOrders (req, res) {
//   var uid = req && req.user && req.user.uid;
  
//   var query = { "uid": uid }

//   User.findOrCreate(query, function (err, user, created) {
//     if (err) return Err.recordNotFound(res, err.message);
//     res.json(user);
//   });       

// }

function addProductsToBasket (req, res) {
  var products = req && req.body && req.body.products;

  if (!products.length || !validateProducts(products)) {
    return Err.missingParams(res, ['PRODUCTS']); 
  } 

  var query = { orders: { "uid": req.user.user_id, "isLive": true } }

  User.findOrCreate(query, function (err, order, created) { // breakpoint
    if (err) return Err.recordNotFound(res, err.message);

    res.json(user);
  });
}


function validateProducts (products) {
  for (var i = 0; i < products.length; i++) {

    var current = products[i];
    var isValidId = current.id && typeof current.id === 'string'
    var isValidQty = current.qty && typeof current.qty === 'number'

    if (!isValidQty || !isValidId) return false
  }
  return true
}

module.exports = {
  addProducts: addProductsToBasket
}