function AuthController($state, AuthFactory, $rootScope, UserFactory) {
  var controller = this;

  controller.createUser = function() {
    controller.error = null;
    AuthFactory.$createUserWithEmailAndPassword(controller.email, controller.password).then(
      (firebaseUser) => {
        console.log('firebaseUser:', firebaseUser);
        resetCredentials();
        $state.go('home');
      },
      (error) => {
        controller.error = error;
        console.warn('could not create user with email and password:', error);
        resetCredentials();
      }
    );
  };

  controller.signIn = () => {
    controller.error = null;
    AuthFactory.$signInWithEmailAndPassword(controller.email, controller.password).then(
      () => {
        resetCredentials();
        $state.go('home');
      },
      (error) => {
        controller.error = error;
        console.warn('could not log in user with email and password:', error);
        resetCredentials();
      }
    );
  };


  controller.signOut = () => {
    AuthFactory.$signOut();
    $state.go('home');
  };

  function resetCredentials() {
    controller.email = null;
    controller.password = null;
  }

  function getUserRecordFromDb(uid) {
    UserFactory.getSingleUser(uid).then(user => {
      controller.user = Object.assign({}, controller.user, user.data);
    });
  }


  function assignToken () {
    AuthFactory.$getAuth().getToken(false).then(function (token) {
      $rootScope.token = token;
      getUserRecordFromDb(controller.user.uid);
    });
  }
  function init() {
    controller.user = null;
    controller.error = null;
    controller.email = '';
    controller.password = '';
    AuthFactory.$onAuthStateChanged(function (fbUser) {
      controller.user = fbUser;
      if (fbUser) {
        assignToken();

      } else {
        $rootScope.token = null;
      }
    });

  }

  init();


}

AuthController.$inject = ['$state', 'AuthFactory', '$rootScope', 'UserFactory'];

angular
  .module('MastersApp')
  .controller('AuthController', AuthController);
