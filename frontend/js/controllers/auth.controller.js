function AuthController($state, AuthFactory, $rootScope) {
  var controller = this;

  controller.createUser = function () {
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

  function init() {
    controller.user = null;
    controller.error = null;
    controller.email = '';
    controller.password = '';
    AuthFactory.$onAuthStateChanged(function (user) {
      if (user) {
        controller.user = user;
      } else {
        $rootScope.token = ''
      }
    });
  }

  init();


}

AuthController.$inject = ['$state', 'AuthFactory', '$rootScope'];

angular
  .module('MastersApp')
  .controller('AuthController', AuthController);
