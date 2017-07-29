
function mealOptions () {
  return {
    restrict: 'E',
    replace: false,
    transclude: true,
    scope: {
      dishOptions: '=',
      optionCount: '=',
      peopleQty: '=',
      bonusThresh: '='
    },
    templateUrl: 'js/directives/combo/mealOptions.directive.html',
    link: function (scope, element, attrs) {

      scope.maxSelection = false;
      scope.selection = [];
      scope.maxSelection = 2;

      scope.dishSelected = function (option, index) {
        scope.maxSelection = scope.selection.filter(Boolean).length === Number(scope.maxSelection);
      }

      scope.disabled = function () {
        if (scope.bonusThresh) {
          scope.maxSelection = scope.peopleQty > scope.bonusThresh ? scope.bonusThresh + 1 : scope.bonusThresh
        }
        return scope.selection.filter(Boolean).length === Number(scope.maxSelection);
      }


    }
  };
}

angular
  .module('MastersApp')
  .directive('mealOptions', mealOptions);
