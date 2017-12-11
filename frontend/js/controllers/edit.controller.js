function EditController(EditFactory, $window) {
  var controller = this;

  // controller.createProduct = function(title, price, type, category, subCategory, comboOptions, description, options) {
  //   // var product = controller.product;
  //   var products = [{
  //     title: title,
  //     price: price,
  //     type: type,
  //     category: category,
  //     sub_category: subCategory,
  //     combo_options: comboOptions,
  //     description: description,
  //     options: options
  //   }];
  //   // };
  //   EditFactory.createProduct(products).then(
  //     function(success) {
  //       console.log('successfully created product', success);
  //       console.log('success', products);
  //       console.log('title', products.title);
  //       $window.history.back();
  //     },
  //     function(err) {
  //       console.warn(err);
  //       console.log('error', products);
  //       console.log('title', products.title);
  //     }
  //   );
  // };
  //
  // controller.categoryOptions = ['breakfast', 'lunch', 'afternoonTea', 'canapes'];
  //
  // controller.typeOptions = ['static', 'combo'];
  // controller.defaultType = controller.typeOptions[0];

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
