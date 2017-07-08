
angular
  .module('MastersApp')
  .directive('order', orderDirective);

function orderDirective () {
  return {
    restrict: 'E',
    scope: {
      order: '='
    },
    templateUrl: 'js/directives/order/order.directive.html',
    link: function (scope, element, attrs) {
      console.log(scope)
      console.log('order dir rendered');


    }
  };
}
