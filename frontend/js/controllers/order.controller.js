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
        $state.reload();
      },
      function error(error) {
        console.warn('Error removing product from order', error);
      }
    );
  };

  controller.submitOrder = function () {
    OrderFactory.submitOrder({ notes: controller.notes }).then(
      function success(success) {
        controller.notes = ''
        console.log('Submited order', success);
        $state.reload();
      },
      function error(error) {
        console.warn('Error submitting order', error);
      }
    );
  };
  
  controller.getOrderTotal = function (items) {

    var total = 0;
    for (var i = 0; i < items.length; i++) {
      total += (items[i].product.price * items[i].qty);
    }
    return total.toFixed(2);
  };

  function init() {
    controller.newOrder = {};
  }
  init();
}

OrderController.$inject = ['OrderFactory', '$state', '$window'];

angular
  .module('MastersApp')
  .controller('OrderController', OrderController);
