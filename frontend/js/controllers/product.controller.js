function ProductController(ProductFactory, $stateParams) {
  var controller = this;

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
}

ProductController.$inject = ['ProductFactory', '$stateParams'];

angular
  .module('MastersApp')
  .controller('ProductController', ProductController);
