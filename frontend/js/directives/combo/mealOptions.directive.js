
function mealOptions () {
  return {
    restrict: 'E',
    replace: false,
    transclude: true,
    scope: {
      dishOptions: '=',
      meta: '=',
      peopleQty: '=',
    },
    templateUrl: 'js/directives/combo/mealOptions.directive.html',
    link: function (scope, element, attrs) {
      console.log(scope)
      scope.selection = [];

      scope.disabled = function () {
        var dishesSelected = scope.selection.filter(Boolean).length;
        scope.permittedDishes = scope.meta.bouns_dish && Number(scope.peopleQty) > 10 ? scope.meta.combo_dish_count + 1 : scope.meta.combo_dish_count
        return scope.permittedDishes == dishesSelected;
      }

      scope.dishSelected = function (option, index) {

      }

    }
  };
}

angular
  .module('MastersApp')
  .directive('mealOptions', mealOptions);
