function SpecialController(SpecialFactory, $stateParams, $window) {
  var controller = this;

  controller.getAllSpecials = function() {
    SpecialFactory.getAllSpecials().then(
      function success(success) {
        console.log('success getting all specials');
        controller.specials = success.data;
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
        $window.history.back();
      },
      function error(error) {
        console.warn('Error creating order:', error);
      }
    );
  };

  controller.updateSpecial = function(updatedItem) {
    SpecialFactory.updateSpecial(updatedItem).then(
      function(success) {
        console.log('successfully updated special', success);
        $window.history.back();
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
        $window.history.back();
      },
      function (err) {
        console.warn(err);
      }
    );
  };

  function init() {
    controller.specials;
  }
  init();
}

SpecialController.$inject = ['SpecialFactory', '$stateParams', '$window'];

angular
  .module('MastersApp')
  .controller('SpecialController', SpecialController);
