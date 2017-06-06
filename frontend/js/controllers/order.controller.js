function OrderController(OrderFactory) {
  var controller = this;

  controller.addToOrder = function (id, qty) {
    console.log('addToOrder()');
    var order = {
      products: [{
        id: id,
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
    console.log('init function');
    controller.newOrder = {};
    // console.log(controller.addToOrder);
  }
  init();
}

OrderController.$inject = ['OrderFactory'];

angular
  .module('MastersApp')
  .controller('OrderController', OrderController);
