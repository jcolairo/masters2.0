var app = angular.module('MastersApp');

app.filter('price', function () {
  return function (input) {
    return '£ ' + input.toFixed(2);
  };
});

app.filter('currentOrder', function () {
  return function (input) {
    return input.filter((order) => order.is_live)[0];
  };
});
