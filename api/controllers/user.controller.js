var User    = require('../models/user.model');
var Err     = require('../utilities/badRequestHandler');

function getSingleUser (req, res) {
  var uid = req && req.params && req.params.uid;
  if (!uid) return Err.missingParams(res, ['uid']);

  if (req.user.user_id !== uid) {
    return Err.unauthorizedReq(res);
  }

  User
    .findOne({ uid: uid })
    .populate('orders.items.product')
    .exec(function (err, user) {
      if (err) return Err.recordNotFound(res, err.message);
      res.json(user);
    });

}

function getAllUsers (req, res) {
  User.find({}, function (err, users) {
    if (err) return Err.recordNotFound(res, err.message);
    res.json(users);
  });
}


module.exports = {
  getUser: getSingleUser,
  getAllUsers: getAllUsers
};
