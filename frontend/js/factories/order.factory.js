function OrderFactory($http) {
  return {
    addToOrder: function(newOrder) {
      return $http({
        method: 'POST',
        url: '/orders/add',
        data: newOrder
      });
    },
    removeFromOrder: function(productId) {
      return $http({
        method: 'POST',
        url: `/orders/delete`,
        data: productId
      });
    }
  };
}

OrderFactory.$inject = ['$http'];

angular
  .module('MastersApp')
  .factory('OrderFactory', OrderFactory);
