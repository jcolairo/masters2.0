
function createComboDirective (EditFactory, $state) {
  return {
    restrict: 'E',
    replace: false,
    transclude: true,
    scope: {
      products: '=',
      showItems: '='
    },
    templateUrl: 'js/directives/createComboProduct/createCombo.directive.html',
    link: function (scope) {

      scope.typeOptions = ['static', 'combo'];
      scope.defaultType = scope.typeOptions[1];
      scope.categoryOptions = ['breakfast', 'lunch', 'afternoonTea', 'canapes'];
      scope.selectedCategory = scope.categoryOptions[1];

      scope.createProduct = function (title, price, type, category, subCategory, description, comboDishCount, name, dishOptions) {
        var product;

        /*
        'title': 'Cold Meal Deal',
        'price': '18.50',
        'category': 'lunch',
        'type': 'combo',
        'sub_category': 'coldFork',
        'description': 'Please select from the following options ... ',

        'combo_options': [
          {
            'meta': {
              'combo_dish_count': 2
            },
            'name': 'mains',
            'options': [
              'Gammon Ham',
              'Roast Beef',
              'Grilled Breast of Chicken',
              'Roast Turkey',
              'Poached Salmon',
              'Quiche',
              'Goats Cheese and Baked Vegetables in Filo',
              'Ricotta Cheese with Spinach tart'
            ]
          },
         */

        product = {
          products: [{
            title: title,
            price: price,
            type: scope.defaultType,
            category: scope.selectedCategory,
            sub_category: subCategory,
            description: description,
            combo_options: [{
              meta: {
                combo_dish_count: comboDishCount
              },
              name: name,
              dishOptions: dishOptions
            }]
          }]
        };


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

createComboDirective.$inject = ['EditFactory', '$state'];

angular
  .module('MastersApp')
  .directive('createCombo', createComboDirective);
