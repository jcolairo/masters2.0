var User    = require('../models/user.model');
var Err     = require('../utilities/badRequestHandler');

function getSingleUser (req, res) {
  var uid = req && req.params && req.params.uid;
  if (!uid) return Err.missingParams(res, ['uid']);

  if (!req.user && !req.user.user_id ) {
    return Err.unauthorizedReq(res);
  }
  if (req.user.user_id !== process.env.Masters_Admin){
    if (req.user.user_id !== uid) {
      return Err.unauthorizedReq(res);
    }
  }

  User
    .findOne({ uid: uid })
    .populate('orders.items.product basket.items.product')
    .exec(function (err, user) {
      if (err) return Err.recordNotFound(res, err.message);
      res.json(user);
    });

}

function getAllUsers (req, res) {
  User.find({ is_admin: false })
    .populate('orders.items.product')
    .exec(function (err, users) {
      if (err) return Err.recordNotFound(res, err.message);
      res.json(users);
    });
}

function addNewAddress (req, res) {

  var newAddress = req && req.body && req.body.newAddress;
  if (!newAddress) return Err.missingParams(res, ['newAddress']);

  if (!req.user && !req.user.user_id ) {
    return Err.unauthorizedReq(res);
  }

  var query = { uid: req.user.uid, email: req.user.email};

  User.findOne(query, function (err, user) {
    if (err || !user) return Err.recordNotFound(res, err.message);

    user.address.push(newAddress);

    user.save(function (err) {
      if (err) return Err.recordNotFound(res, err.message);
      res.json(user);
    });
  });
}

module.exports = {
  getUser: getSingleUser,
  getAllUsers: getAllUsers,
  addNewAddres: addNewAddress
};
