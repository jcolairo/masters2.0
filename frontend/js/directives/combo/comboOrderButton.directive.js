
function comboOrderButton (OrderFactory, $state) {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      dishOptions: '=',
      peopleQty: '=',
      productId: '=',
      title: '='
    },
    template: '<button onclick="window.location.reload()">Click To Order</button>',
    link: function (scope, element) {

      angular.element(element).on('click', function () {

        var order = [{
          type: 'combo',
          product: scope.productId,
          qty: scope.peopleQty,
          dishOptions: scope.dishOptions
        }];

        OrderFactory.addToOrder({ products: order })
          .then(function () {
            $state.go('menu');
          })
          .catch(function (err) {
            console.error(err);
          });
      });

    }
  };
}

comboOrderButton.$inject = ['OrderFactory', '$state'];

angular
  .module('MastersApp')
  .directive('comboOrderButton', comboOrderButton);
