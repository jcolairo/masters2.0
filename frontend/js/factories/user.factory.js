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
    }
  };
}

UserFactory.$inject = ['$http', '$rootScope'];

angular
  .module('MastersApp')
  .factory('UserFactory', UserFactory);
