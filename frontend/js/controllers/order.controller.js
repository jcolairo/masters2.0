function OrderController(OrderFactory, $state, $window) {
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
        $window.history.back();
        $window.location.reload();
      },
      function error(error) {
        console.warn('Error creating order:', error);
      }
    );
  };

  controller.editOrder = function (updatedItems) {
    OrderFactory.editOrder(updatedItems).then(
      function success(success) {
        console.log('Success editing order:', success);
        $window.location.reload();
      },
      function error(error) {
        console.warn('Error editing order:', error);
      }
    );
  };

  controller.removeProduct = function (id) {
    OrderFactory.removeFromOrder({id: id}).then(
      function success(success) {
        console.log('Removed product from order', success);
        $window.location.reload();
      },
      function error(error) {
        console.warn('Error removing product from order', error);
      }
    );
  };

  controller.submitOrder = function () {
    OrderFactory.submitOrder({ notes: controller.notes, deliveryAddress: controller.deliveryAddress, timeSlot: controller.timeSlot}).then(
      function success(success) {
        controller.notes = '';
        console.log('Submited order', success);
        $state.reload();
      },
      function error(error) {
        console.warn('Error submitting order', error);
      }
    );
  };

  function init() {
    controller.newOrder = {};
    controller.timeSlot = null;
  }
  init();
}

OrderController.$inject = ['OrderFactory', '$state', '$window'];

angular
  .module('MastersApp')
  .controller('OrderController', OrderController);
