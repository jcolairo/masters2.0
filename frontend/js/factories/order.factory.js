function OrderFactory($http, userInfoService) {

  var updateUserRecord = function (user) {
    userInfoService.user = user.data;
    return user;
  };
  
  return {
    addToOrder: function(newOrder) {
      return $http({
        method: 'POST',
        url: '/orders/add',
        data: newOrder
      }).then(updateUserRecord);
    },
    editOrder: function(qty) {
      return $http({
        method: 'PUT',
        url: '/orders/edit',
        data: qty
      }).then(updateUserRecord);
    },
    removeFromOrder: function(productId) {
      return $http({
        method: 'POST',
        url: `/orders/delete`,
        data: productId
      }).then(updateUserRecord);
    },
    submitOrder: function(notes) {
      return $http({
        method: 'POST',
        url: '/orders/submit',
        data: notes
      });
    },
    processOrder: function (userUid, orderId) {
      return $http({
        method: 'POST',
        url: '/orders/process-order',
        data: {
          userUid: userUid,
          orderId: orderId
        }
      });
    }
  };

}

OrderFactory.$inject = ['$http', 'userInfoService'];

angular
  .module('MastersApp')
  .factory('OrderFactory', OrderFactory);
