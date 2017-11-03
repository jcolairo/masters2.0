function userInfoService() {
  var vm = this;

  // this service is just to hold the user record so that any other dirctive/controller can use it. 
  vm.user = null;

  return vm;

}

angular
  .module('MastersApp')
  .factory('userInfoService', userInfoService);
