
function createDirective (EditFactory, $state) {
  return {
    restrict: 'E',
    replace: false,
    transclude: true,
    scope: {
      products: '=',
      showItems: '='
    },
    templateUrl: 'js/directives/createProduct/create.directive.html',
    link: function (scope, element, attrs) {

      scope.typeOptions = ['static', 'combo'];
      scope.defaultType = scope.typeOptions[0];
      scope.categoryOptions = ['breakfast', 'lunch', 'afternoonTea', 'canapes'];
      scope.selectedCategory = scope.categoryOptions[0];

      scope.createProduct = function (title, price, type, category, subCategory, description, options) {
        var product;

        // if (type === 'combo') {
        //
        //   product = {
        //     products: [{
        //       // product: id,
        //       title: title,
        //       price: price,
        //       type: 'combo',
        //       dishOptions: dishOptions,
        //       category: category,
        //       sub_category: subCategory,
        //       description: description
        //     }]
        //   };
        //
        // } else if (type === 'static'){

        product = {
          products: [{
            // product: id,
            title: title,
            price: price,
            type: scope.defaultType,
            category: scope.selectedCategory,
            sub_category: subCategory,
            description: description,
            options: options
          }]
        };

        // }

        executeCreateProduct(product);

      };

      function executeCreateProduct (product) {
        EditFactory.createProduct(product).then(
          function success(success) {
            console.log('Created new product:', success);
            $state.reload();
          },
          function error(error) {
            console.warn('Error creating product:', error);
          }
        );
      }

    }
  };
}

createDirective.$inject = ['EditFactory', '$state'];

angular
  .module('MastersApp')
  .directive('create', createDirective);
