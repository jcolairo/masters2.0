function ProductController(ProductFactory, $stateParams) {
  var controller = this;

  controller.breakfastNavShow = false;
  controller.toggleBreakfastNav = function(){
    controller.breakfastNavShow = !controller.breakfastNavShow;
  };

  controller.lunchNavShow = false;
  controller.toggleLunchNav = function() {
    controller.lunchNavShow = !controller.lunchNavShow;
  };

  controller.canapesNavShow = false;
  controller.toggleLunchNav = function() {
    controller.canapesNavShow = !controller.canapesNavShow;
  };

  var modal = document.getElementById('simpleModal');

  // function to open modal
  controller.openModal = function () {
    modal.style.display = 'block';
  };

  // function to close modal
  controller.closeBtn = function() {
    modal.style.display = 'none';
  };

  // function to close modal outside
  controller.outsideClick = function($event) {
    if($event.currentTarget == modal) {
      modal.style.display = 'none';
    }
  };

  controller.getAllProducts = function() {
    ProductFactory.getAllProducts().then(
      function success(success) {
        console.log('success getting all products');
        controller.products = success.data;
      },
      function error(error) {
        console.warn('Could not get all Products:', error);
      }
    );
  };

  controller.getProductByCategory = function(cat) {
    ProductFactory.getProductByCategory(cat).then(
      function success(success) {
        console.log('success getting specific product by category');
        controller.product = success.data;
      },
      function error(error) {
        console.warn('Could not get specific product: ', error);
      }
    );
  };

  controller.getProductBySubCategory = function() {
    var cat = $stateParams.category;
    var subCat = $stateParams.sub_category;
    ProductFactory.getProductBySubCategory(cat, subCat).then(
      function success(success) {
        console.log('success getting specific product by category');
        controller.subCat = success.data;
        controller.comboStatus = new Array(controller.subCat[0].combo_options.length);
      },
      function error(error) {
        console.warn('Could not get specific product: ', error);
      }
    );
  };

  controller.activateComboOrderButton = function (total) {
    return controller.comboStatus ? controller.comboStatus.filter(Boolean).length === controller.subCat[0].combo_options.length : false
  }

  controller.getOneProduct = function() {
    var id = $stateParams.id;
    ProductFactory.getOneProduct(id).then(
      function success(success) {
        console.log('success getting one product');
        controller.oneProduct = success.data;
      },
      function error(error) {
        console.warn('Could not get one product:', error);
      }
    );
  };

  controller.breakfastMenu = [
    'pastries', 'bagel', 'roll', 'sandwich', 'baguette', 'healthy', 'breakfastDrinks', 'setBreakfast'
  ];

  controller.lunchMenu = [
    'platter', 'setLunch', 'finger', 'coldFork', 'coldForkBuffet', 'hotFork', 'lunchDrinks', 'packedLunch', 'specialPlatter'
  ];

  controller.canapesMenu = [
    'meat', 'fish', 'veg'
  ];

}

ProductController.$inject = ['ProductFactory', '$stateParams'];

angular
  .module('MastersApp')
  .controller('ProductController', ProductController);
