
function basketTotal (userInfoService) {
  return {
    restrict: 'E',
    replace: false,
    transclude: true,
    scope: {
    },
    template: '<div ng-if="basketLength" class="basket-total-container"> <strong>{{ basketLength }}</strong></div>',
    link: function (scope) {
      // watch to see if the variable containing the user's info changed then run function.
      scope.$watch(function(){
        return userInfoService.user;
      }, function(newValue){
        if (newValue) {
          scope.basketLength = userInfoService.user.basket.items.length;
        }
      });

    }
  };
}

basketTotal.$inject = ['userInfoService'];

angular
  .module('MastersApp')
  .directive('basketQty', basketTotal);
