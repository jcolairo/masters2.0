function MainController(){
  var controller = this;

  controller.selectDate = function () {
    const now = new Date();
    this.myDate = now;
    this.isOpen = false;
  };
}


angular
  .module('MastersApp')
  .controller('MainController', MainController);
