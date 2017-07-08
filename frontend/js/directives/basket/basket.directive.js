
angular
  .module('MastersApp')
  .directive('basket', orderDirective);

function orderDirective () {
  return {
    restrict: 'E',
    scope: {
      basket: '='
    },
    templateUrl: 'js/directives/basket/basket.directive.html',
    link: function (scope, element, attrs) {
      console.log(scope)

    }
  };
}
