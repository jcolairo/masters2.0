var User    = require('../controllers/user.controller');
var Err     = require('../utilities/badRequestHandler');

// function getUserOrders (req, res) {
//   var uid = req && req.user && req.user.uid;
  
//   var query = { "uid": uid }

//   User.findOrCreate(query, function (err, user, created) {
//     if (err) return Err.recordNotFound(res, err.message);
//     res.json(user);
//   });       

// }

function addProductToBasket (req, res) {
  var user      = req && req.user && req.user.uid;
  var productId = req && req.body && req.body.productId;

  var query = { "uid": uid, "isLive": true }

  User.findOrCreate(query, function (err, user, created) {
    if (err) return Err.recordNotFound(res, err.message);
    res.json(user);
  });
}


module.exports = {
  getUser: getSingleUser,
  getAllUsers: getAllUsers
}