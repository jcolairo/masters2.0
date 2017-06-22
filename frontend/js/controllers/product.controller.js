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
      },
      function error(error) {
        console.warn('Could not get specific product: ', error);
      }
    );
  };

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
    'croissant', 'muffin', 'danish', 'donut', 'bagel', 'roll', 'baguette', 'bap', 'yoghurt', 'fruit', 'breakfastDrinks'
  ];

  controller.lunchMenu = [
    'platter', 'setLunch', 'finger', 'coldFork', 'hotFork', 'lunchDrinks'
  ];
  
}

ProductController.$inject = ['ProductFactory', '$stateParams'];

angular
  .module('MastersApp')
  .controller('ProductController', ProductController);
