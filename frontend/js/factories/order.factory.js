function OrderFactory($http) {
  return {
    addToOrder: function(newOrder) {
      return $http({
        method: 'POST',
        url: '/orders/add',
        data: newOrder
      });
    }
  };
}

OrderFactory.$inject = ['$http'];

angular
  .module('MastersApp')
  .factory('OrderFactory', OrderFactory);
