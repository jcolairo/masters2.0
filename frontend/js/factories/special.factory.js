function SpecialFactory($http) {
  return {
    getAllSpecials: function() {
      return $http({
        method: 'GET',
        url: '/specials'
      });
    },
    getOneSpecial: function(id) {
      return $http({
        method: 'GET',
        url: `/specials/${id}`,
        data: id
      });
    },
    createSpecial: function(special) {
      return $http({
        method: 'POST',
        url: `/specials/create`,
        data: special
      });
    },
    updateSpecial: function(specialId) {
      return $http({
        method: 'PUT',
        url: `/specials/${specialId._id}`,
        data: specialId
      });
    },
    deleteSpecial: function(specialId) {
      return $http({
        method: 'POST',
        url: `/specials/${specialId}`
      });
    }
  };
}

SpecialFactory.$inject = ['$http'];

angular
  .module('MastersApp')
  .factory('SpecialFactory', SpecialFactory);
