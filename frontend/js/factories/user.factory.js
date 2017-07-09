function UserFactory($http) {
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
      });
    },
    addAddress: function (newAddress) {
      return $http({
        method: 'POST',
        url: `/users/add-address`,
        data: { newAddress: newAddress }
      });
    }
  };
}

UserFactory.$inject = ['$http'];

angular
  .module('MastersApp')
  .factory('UserFactory', UserFactory);
