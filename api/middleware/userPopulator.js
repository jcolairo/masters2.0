var FBAdmin     = require('../utilities/FbAdmin');
var User        = require('../models/user.model');

module.exports  = function (req, res, next) {

  var createUser = function (user) {
    User.create({
      uid: user.uid,
      email: user.email
    }, next);
  };
  var getUser = function (uid) {
    return new Promise(function (resolve, reject) {
      User.getOne({ uid: uid }, function(err, user) {
        if (!err && user) resolve(user);
        else reject(err);
      });
    });
  };
  var ensureUserExists = function (user) {

    getUser(user.uid).then(function () {
      next();
    }).catch(function () {
      createUser(user);
    });
  };

  var idToken = req &&
  req.headers &&
  req.headers.auth &&
  req.headers.auth.trim();
  console.log(idToken);
  idToken = idToken || '';
  if (!idToken) return next();

  FBAdmin.auth().verifyIdToken(idToken).then(function (decodedUser) {
    req.user = decodedUser;

    console.log(decodedUser);
    ensureUserExists(decodedUser);
  }).catch(next);

};
