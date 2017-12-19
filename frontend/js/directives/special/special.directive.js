
function specialDirective (OrderFactory, $state) {
  return {
    restrict: 'E',
    replace: false,
    transclude: true,
    scope: {
      order: '=',
      showItems: '='
    },
    templateUrl: 'js/directives/special/special.directive.html',
    link: function (scope) {
      scope.expand = false;

      scope.reOrderToOrder = function (id, qty, dishOptions, type) {
        var order;

        if (type === 'combo') {

          order = {
            products: [{
              type: 'combo',
              product: id,
              qty: qty,
              dishOptions: dishOptions
            }]
          };

        } else if (type === 'static'){

          order = {
            products: [{
              product: id,
              qty: qty
            }]
          };

        }

        executeReOrder(order);

      };

      function executeReOrder (order) {
        OrderFactory.addToOrder(order).then(
          function success(success) {
            console.log('Created new order:', success);
            $state.reload();
          },
          function error(error) {
            console.warn('Error creating order:', error);
          }
        );
      }

    }
  };
}

specialDirective.$inject = ['OrderFactory', '$state'];

angular
  .module('MastersApp')
  .directive('special', specialDirective);
