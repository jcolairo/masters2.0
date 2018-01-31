function SpecialController(SpecialFactory, $stateParams, $window, $state, $filter) {
  var controller = this;

  controller.getAllSpecials = function() {
    SpecialFactory.getAllSpecials().then(
      function success(success) {
        console.log('success getting all specials');
        controller.specials = success.data;
        console.log('specials', controller.specials);
        console.log('controller.compareDate', controller.compareDate);
      },
      function error(error) {
        console.warn('Could not get all specials:', error);
      }
    );
  };

  controller.getOneSpecial = function() {
    var id = $stateParams.id;
    SpecialFactory.getOneSpecial(id).then(
      function success(success) {
        console.log('success getting one special');
        controller.oneSpecial = success.data;
      },
      function error(error) {
        console.warn('Could not get one special:', error);
      }
    );
  };

  controller.createSpecial = function (date, title, price, desc) {
    var splitSpecials = /[;]+/;
    desc = controller.special.description.split(splitSpecials);
    for (var i = 0; i < desc.length; i++) {
      console.log('***************', desc[i]);
    }
    console.log('***************', desc);
    console.log('spec', controller.special.description);
    console.log('spec', controller.special.desc);

    var special = [{
      date: date,
      title: title,
      price: price,
      description: desc
    }];
    console.log('*!*!*!*!*!*!*!*!*!', controller.special.description);
    SpecialFactory.createSpecial(special).then(
      function success(success) {
        console.log('Created new order:', success);
        $state.reload();
      },
      function error(error) {
        console.warn('Error creating order:', error);
      }
    );
  };

  controller.editSpecial = function(specialId) {
    SpecialFactory.editSpecial(specialId).then(
      function(selectedSpecial) {
        controller.special = selectedSpecial.data;
        console.log('successfulled edited special', controller.special);
      },
      function(err) {
        console.warn(err);
      }
    );
  };

  controller.updateSpecial = function() {
    var special = controller.special;
    SpecialFactory.updateSpecial(special).then(
      function(success) {
        console.log('successfully updated special', success);
        $state.reload();
      },
      function (err) {
        console.warn(err);
      }
    );
  };

  controller.deleteSpecial = function(specialId) {
    SpecialFactory.deleteSpecial(specialId).then(
      function(success) {
        console.log('successfully delete special', success);
        $state.reload();
      },
      function (err) {
        console.warn(err);
      }
    );
  };

  controller.todayDateDate = new Date().getDate();
  controller.todayDateMonth = new Date().getMonth() + 1;
  controller.todayDateYear = new Date().getFullYear();

  controller.todayDate = `${controller.todayDateYear}-${controller.todayDateMonth}-${controller.todayDateDate} `;
  controller.compareDate = `${controller.todayDate == controller.specials}`;

  function init() {
    controller.specials;
    console.log('todayDate',controller.todayDate);
  }
  init();
}

SpecialController.$inject = ['SpecialFactory', '$stateParams', '$window', '$state', '$filter'];

angular
  .module('MastersApp')
  .controller('SpecialController', SpecialController);
