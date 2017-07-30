
function comboOrderButton () {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      dishOptions: '=',
      peopleQty: '=',
      title: '='
    },
    template: '<button>Click To Order</button>',
    link: function (scope, element, attrs) {
      angular.element(element).on('click', function () {
        console.log(scope.dishOptions);
        console.log(scope.peopleQty);
        console.log(scope.title);
      });
    }
  };
}

angular
  .module('MastersApp')
  .directive('comboOrderButton', comboOrderButton);
