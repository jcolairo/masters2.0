/* global firebase */

function AuthRun() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyCMiqufxIQSOD8a-Kw3eyql4hObo4zyB8M',
    authDomain: 'masters-4f1de.firebaseapp.com',
    databaseURL: 'https://masters-4f1de.firebaseio.com',
    projectId: 'masters-4f1de',
    storageBucket: 'masters-4f1de.appspot.com',
    messagingSenderId: '799358887260'
  };
  firebase.initializeApp(config);
}

function AuthFactory($firebaseAuth) {

  var fb = $firebaseAuth();

  // fb.isAdmin = function () {
  //   var user = this.$getAuth()
  //   console.log('isAdmin: ', user)
  // }
  return fb;
}

AuthFactory.$inject = ['$firebaseAuth'];

angular
  .module('MastersApp')
  .run(AuthRun)
  .factory('AuthFactory', AuthFactory);
