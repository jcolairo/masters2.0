function EditFactory($http) {

  return {
    createProduct: function(product) {
      return $http({
        method: 'POST',
        url: `/api/admin/createProduct`,
        data: product.products
      });
    },
    updateProduct: function(productId) {
      return $http({
        method: 'PUT',
        url: `/api/admin/${productId._id}`,
        data: productId
      });
    },
    deleteProduct: function(productId) {
      return $http({
        method: 'POST',
        url: `/api/admin/${productId}`
      });
    }
  };
}

EditFactory.$inject = ['$http'];

angular
  .module('MastersApp')
  .factory('EditFactory', EditFactory);
