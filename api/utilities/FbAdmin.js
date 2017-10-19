var FB      = require('firebase-admin');

FB.initializeApp({
  credential: FB.credential.cert(require('../config/serviceAccount.json'))
});


module.exports = FB;