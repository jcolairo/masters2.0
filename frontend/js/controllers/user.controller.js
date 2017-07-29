function UserController(UserFactory, OrderFactory, $stateParams) {
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

  controller.processOrder = function (userUid, orderId) {
    console.log(userUid)
    console.log(orderId)
    OrderFactory.processOrder(userUid, orderId).then(
      function (success) {
        console.log('success processing order');
        controller.getAllUsers();
      },
      function (error) {
        console.warn('Could not process:', error);
      }
    )
  }

}

UserController.$inject = ['UserFactory', 'OrderFactory', '$stateParams'];

angular
  .module('MastersApp')
  .controller('UserController', UserController);
