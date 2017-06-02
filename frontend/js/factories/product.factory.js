function ProductFactory($http) {
  return {
    getAllProducts: function() {
      return $http({
        method: 'GET',
        url: '/products'
      });
    },
    getProductByCategory: function(cat) {
      return $http({
        method: 'GET',
        url: `/products/category/${cat}`,
        data: cat
      });
    },
    getOneProduct: function(id) {
      return $http({
        method: 'GET',
        url: `/products/${id}`,
        data: id
      });
    }
  };
}

ProductFactory.$inject = ['$http'];

angular
  .module('MastersApp')
  .factory('ProductFactory', ProductFactory);