function OrderController(OrderFactory) {
  var controller = this;

  controller.addToOrder = function () {
    console.log('addToOrder()');
    OrderFactory.addToOrder(controller.newOrder).then(
      function success(success) {
        console.log('Created new duck:', success);
      },
      function error(error) {
        console.warn('Error creating order:', error);
      }
    );
  };

  function init() {
    console.log('init function');
    controller.newOrder = {};
    console.log(controller.addToOrder);
  }
  init();
}

OrderController.$inject = ['OrderFactory'];

angular
  .module('MastersApp')
  .controller('OrderController', OrderController);
