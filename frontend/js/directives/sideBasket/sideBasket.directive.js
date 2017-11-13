
function basketTotal (userInfoService) {
  return {
    restrict: 'E',
    replace: false,
    transclude: true,
    scope: {
    },
    templateUrl: 'js/directives/sideBasket/sideBasket.directive.html',
    link: function (scope) {

      scope.$watch(function(){
        return userInfoService.user;
      }, function(newValue){
        if (newValue) {
          scope.basketLength = userInfoService.user.basket.items.length;
          scope.basketItems = userInfoService.user.basket.items;
          scope.basketTotal = userInfoService.user.basket.total;
          scope.userUid = userInfoService.user.uid;


          console.log('basketItems:', scope.basketItems);
          console.log('basketItems[0].product.title:', scope.basketItems[0].product.title);
          console.log('total', userInfoService.user.basket.total);
          console.log('basketItems[0].qty:', scope.basketItems[0].qty);
          console.log('user:', scope.userUid);
        }
      });

    }
  };
}

basketTotal.$inject = ['userInfoService'];

angular
  .module('MastersApp')
  .directive('basketItems', basketTotal);
