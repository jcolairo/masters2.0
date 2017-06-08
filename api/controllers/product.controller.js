var Product = require('../models/product.model');
var Err     = require('../utilities/badRequestHandler');


function getSingleProduct (req, res) {
  var id = req && req.params && req.params.id;
  if (!id) return Err.missingParams(res, ['id']);

  Product.findById(id , function (err, product) {
    if (err) return Err.recordNotFound(res, err.message);
    res.json(product);
  });
}

function getAllProducts (req, res) {
  Product.find({}, function (err, products) {
    if (err) return Err.recordNotFound(res, err.message);
    res.json(products);
  });
}

function getPriductsByCat (req, res) {
  var cat = req && req.params && req.params.cat;
  if (!cat) return Err.missingParams(res, ['cat']);

  Product.find({ category: cat }, function (err, products) {
    if (err) return Err.recordNotFound(res, err.message);
    res.json(products);
  });
}

module.exports = {
  getOne: getSingleProduct,
  getAll: getAllProducts,
  getByCategory: getPriductsByCat
};
