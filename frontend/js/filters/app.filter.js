var app = angular.module('MastersApp');

app.filter('price', function () {
  return function (input) {
    return '£ ' + input.toFixed(2);
  };
});
