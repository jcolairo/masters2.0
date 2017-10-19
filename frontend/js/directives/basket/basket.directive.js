
function basketDirective (UserFactory) {
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
      scope.showDetails = false;
      scope.showNewAddress = false;
      scope.newAddress = {};
      scope.placeOrder = function () {
        scope.showNotes = true;
      };

      scope.toggleDetails = function () {
        scope.showDetails = !scope.showDetails;
      };

      scope.toggleNewAddressForm = function () {
        scope.showNewAddress = !scope.showNewAddress;
      };

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
      };

    }
  };
}

basketDirective.$inject = ['UserFactory'];

angular
  .module('MastersApp')
  .directive('basket', basketDirective);
