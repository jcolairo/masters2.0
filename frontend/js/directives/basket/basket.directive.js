
function orderDirective (UserFactory) {
  return {
    restrict: 'E',
    replace: false,
    transclude: true,
    scope: {
      basket: '=',
      addresses: '='
    },
    templateUrl: 'js/directives/basket/basket.directive.html',
    link: function (scope, element, attrs) {
      scope.showNotes = false;
      scope.showNewAddress = false;
      scope.newAddress = {};
      scope.placeOrder = function () {
        scope.showNotes = true;
      }

      scope.toggleNewAddressForm = function () {
        scope.showNewAddress = !scope.showNewAddress;
      }

      scope.addAddress = function (event) {
        angular.element(event.target).addClass('hide');

        UserFactory.addAddress(scope.newAddress)
          .then(function (res) {
            scope.showNewAddress = false;
            scope.addresses = res.data.address;
          })
          .catch(function (err) {
            console.error(err);
          });
      }

    }
  };
}

orderDirective.$inject = ['UserFactory']

angular
  .module('MastersApp')
  .directive('basket', orderDirective);
