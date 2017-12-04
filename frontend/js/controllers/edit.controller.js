function EditController(EditFactory, $window) {
  var controller = this;

  controller.createProduct = function() {
    var product = controller.product;
    EditFactory.createProduct(product).then(
      function(success) {
        console.log('successfully created product', success);
        $window.history.back();
      },
      function(err) {
        console.warn(err);
      }
    );
  };

  controller.updateProduct = function(updatedItem) {
    EditFactory.updateProduct(updatedItem).then(
      function(success) {
        console.log('successfully updated product', success);
        $window.history.back();
      },
      function (err) {
        console.warn(err);
      }
    );
  };

  controller.deleteProduct = function(productId) {
    EditFactory.deleteProduct(productId).then(
      function(success) {
        console.log('successfully delete product', success);
        $window.history.back();
      },
      function (err) {
        console.warn(err);
      }
    );
  };
}

EditController.$inject = ['EditFactory', '$window'];

angular
  .module('MastersApp')
  .controller('EditController', EditController);
