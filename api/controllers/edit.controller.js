var Product = require('../models/product.model.js');
var Err     = require('../utilities/badRequestHandler');

function createProduct(req, res) {
  var product = req.body;
  console.log('product', product);
  Product
    .create(product)
    .then(
      function () {
        res.json(product);
      },
      function(err) {
        return Err.miscError(res, err.message);
      }
    );
}

function updatedProduct(req, res) {
  var productId = req.params.id;
  var product = req.body;
  Product
    .update({_id: productId}, {
      title: product.title,
      price: product.price
    })
    .then(
      function (productObj) {
        res.json(productObj);
      },
      function (err) {
        return Err.miscError(res, err.message);
      }
    );
}

function deleteProduct(req, res) {
  var productId = req.params.id;
  Product
    .remove({_id: productId})
    .then(
      function() {
        res.sendStatus(200);
      },
      function (err) {
        return Err.miscError(res, err.message);
      }
    );
}

module.exports = {
  createProduct: createProduct,
  updateProduct: updatedProduct,
  deleteProduct: deleteProduct
};
