function OrderController(OrderFactory) {
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

  function init() {
    controller.newOrder = {};
  }
  init();
}

OrderController.$inject = ['OrderFactory'];

angular
  .module('MastersApp')
  .controller('OrderController', OrderController);
