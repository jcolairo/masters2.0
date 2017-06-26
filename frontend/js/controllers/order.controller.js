function OrderController(OrderFactory, $state) {
  var controller = this;

  controller.addToOrder = function (id, qty) {
    var order = {
      products: [{
        product: id,
        qty: qty
      }]
    };
    OrderFactory.addToOrder(order).then(
      function success(success) {
        console.log('Created new order:', success);
      },
      function error(error) {
        console.warn('Error creating order:', error);
      }
    );
  };

  controller.removeProduct = function (id) {
    OrderFactory.removeFromOrder({id: id}).then(
      function success(success) {
        console.log('Removed product from order', success);
        $state.reload();
      },
      function error(error) {
        console.warn('Error removing product from order', error);
      }
    );
  };

  function init() {
    controller.newOrder = {};
  }
  init();
}

OrderController.$inject = ['OrderFactory', '$state'];

angular
  .module('MastersApp')
  .controller('OrderController', OrderController);
