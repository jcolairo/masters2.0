
function basketTotal (userInfoService) {
  return {
    restrict: 'E',
    replace: false,
    transclude: true,
    scope: {
    },
    template: '<div ng-if="basketLength" ng-repeat="basketItems in basketLength"> <strong>{{ basketItems.product.title }} {{ item.product.title }}</strong></div>',
    link: function (scope) {
      // watch to see if the variable containing the user's info changed then run function.
      scope.$watch(function(){
        return userInfoService.user;
      }, function(newValue){
        if (newValue) {
          // var basketItems = scope.basketLength;
          scope.basketLength = userInfoService.user.basket.items;

          console.log('************');
          console.log(scope.basketLength);
          console.log(scope.basketLength[0].product.title);
          // for (var i = 0; i < basketItems; i++) {
          //   basketItems[i].product.title;
          //   console.log('******', basketItems[i].product.title);
          // }
        }
      });

    }
  };
}

basketTotal.$inject = ['userInfoService'];

angular
  .module('MastersApp')
  .directive('basketItems', basketTotal);
