function UserFactory($http, userInfoService) {
  var updateUserRecord = function (user) {
    console.log(user.data);
    userInfoService.user = user.data;
    return user;
  };
  return {
    getAllUsers: function() {
      return $http({
        method: 'GET',
        url: '/users'
      });
    },
    getSingleUser: function(uid) {
      return $http({
        method: 'GET',
        url: `/users/${uid}`,
        data: uid
      }).then(updateUserRecord);
    },
    addAddress: function (newAddress) {
      return $http({
        method: 'POST',
        url: `/users/add-address`,
        data: { newAddress: newAddress }
      });
    },
    getDeliveryDate: function (date) {
      return $http({
        method: 'POST',
        url: `/users/delivery`,
        data: date
      });
    }
  };
}

UserFactory.$inject = ['$http', 'userInfoService'];

angular
  .module('MastersApp')
  .factory('UserFactory', UserFactory);
