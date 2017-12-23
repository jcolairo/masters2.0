function SpecialController(SpecialFactory, $stateParams, $window, $state, $filter) {
  var controller = this;

  controller.getAllSpecials = function() {
    SpecialFactory.getAllSpecials().then(
      function success(success) {
        console.log('success getting all specials');
        controller.specials = success.data;
        console.log('special', controller.specials);
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

  controller.createSpecial = function (date, title, price, description) {
    var special = [{
      date: date,
      title: title,
      price: price,
      description: description
    }];
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

  controller.todayDate = new Date();

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
