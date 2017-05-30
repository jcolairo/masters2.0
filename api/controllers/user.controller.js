var User = require('../controllers/user.controller');
var Err  = require('../utilities/badRequestHandler');

function getSingleUser (req, res) {
  var uid = req && req.params && req.params.uid;
  if (!uid) return Err.missingParams(res, ['uid']);

  User.findOne({ uid: uid }, function (err, user) {
    if (err) return Err.recordNotFound(res, err.message);
    res.json(user);
  });

}

function getAllUsers (req, res) {
  User.find({}, function (err, users) {
    if (err) return Err.recordNotFound(res, err.message);
    res.json(users);
  })
}

module.exports = {
  getUser: getSingleUser
};