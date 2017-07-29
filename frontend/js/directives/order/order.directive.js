
function orderDirective () {
  return {
    restrict: 'E',
    replace: false,
    transclude: true,
    scope: {
      order: '=',
      showItems: '=',
    },
    templateUrl: 'js/directives/order/order.directive.html',
    link: function (scope, element, attrs) {
      scope.expand = false;

      scope.toggleExpand = function () {
        scope.expand = !scope.expand;
      }

    }
  };
}

angular
  .module('MastersApp')
  .directive('order', orderDirective);
