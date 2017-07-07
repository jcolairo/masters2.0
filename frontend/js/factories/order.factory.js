function OrderFactory($http) {
  return {
    addToOrder: function(newOrder) {
      return $http({
        method: 'POST',
        url: '/orders/add',
        data: newOrder
      });
    },
    editOrder: function(qty) {
      return $http({
        method: 'PUT',
        url: '/orders/edit',
        data: qty
      });
    },
    removeFromOrder: function(productId) {
      return $http({
        method: 'POST',
        url: `/orders/delete`,
        data: productId
      });
    },
    submitOrder: function(submitOrder) {
      return $http({
        method: 'POST',
        url: '/orders/submit',
        data: submitOrder
      });
    }
  };
}

OrderFactory.$inject = ['$http'];

angular
  .module('MastersApp')
  .factory('OrderFactory', OrderFactory);
