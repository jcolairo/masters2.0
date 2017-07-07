function UserFactory($http, $rootScope) {
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
    getCurrentUser: function () {
      return $http({
        method: 'GET',
        url: `/users/current`
      });
    }
  };
}

UserFactory.$inject = ['$http', '$rootScope'];

angular
  .module('MastersApp')
  .factory('UserFactory', UserFactory);
