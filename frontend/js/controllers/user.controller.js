function UserController(UserFactory, $stateParams) {
  var controller = this;

  controller.getAllUsers = function() {
    UserFactory.getAllUsers().then(
      function success(success) {
        console.log('success getting all users');
        controller.users = success.data;
      },
      function error(error) {
        console.warn('Could not get all Users', error);
      }
    );
  };

  controller.getSingleUser = function() {
    var uid = $stateParams.uid;
    UserFactory.getSingleUser(uid).then(
      function success(success) {
        console.log('Success getting single user');
        controller.user = success.data;
      },
      function error(error) {
        console.warn('Could not get single user:', error);
      }
    );
  };
}

UserController.$inject = ['UserFactory', '$stateParams'];

angular
  .module('MastersApp')
  .controller('UserController', UserController);
