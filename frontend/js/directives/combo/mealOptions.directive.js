
function mealOptions () {
  return {
    restrict: 'E',
    replace: false,
    transclude: true,
    scope: {
      dishOptions: '=',
      meta: '=',
      peopleQty: '=',
      order: '=',
      selectionComplete: '='
    },
    templateUrl: 'js/directives/combo/mealOptions.directive.html',
    link: function (scope, element, attrs) {
      scope.selection = [];

      scope.disabled = function () {
        var dishesSelected = scope.selection.filter(Boolean).length;
        scope.permittedDishes = scope.meta.bouns_dish && Number(scope.peopleQty) >= 15 ? scope.meta.combo_dish_count + 1 : scope.meta.combo_dish_count
        scope.selectionComplete = scope.permittedDishes == dishesSelected;
        return scope.permittedDishes == dishesSelected;
      }

      scope.dishSelected = function (option, index) {
        scope.order = scope.dishOptions.filter(function (element, i) {
          if (scope.selection[i]) return true;
        })

      }
    }
  };
}

angular
  .module('MastersApp')
  .directive('mealOptions', mealOptions);
