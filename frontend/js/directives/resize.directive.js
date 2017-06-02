
angular
  .module('MastersApp')
  .directive('resize', resize);

function resize () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      window.onresize = checkScreen;

      checkScreen();

      function  checkScreen () {
        if(window.innerWidth < 780){
          angular.element(element)         .parent().css('display', 'none');

          // angular.element(element).remove();
        }
        if(window.innerWidth > 780){
          angular.element(element)         .parent().css('display', 'block');
        }
      }
    }
  };
}
