
function orderDirective (OrderFactory, $state) {
  return {
    restrict: 'E',
    replace: false,
    transclude: true,
    scope: {
      order: '=',
      showItems: '='
    },
    templateUrl: 'js/directives/order/order.directive.html',
    link: function (scope, element, attrs) {
      scope.expand = false;

      scope.toggleExpand = function () {
        scope.expand = !scope.expand;
      };

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

orderDirective.$inject = ['OrderFactory', '$state'];

angular
  .module('MastersApp')
  .directive('order', orderDirective);
