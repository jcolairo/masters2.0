
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
    link: function (scope) {

      scope.typeOptions = ['static', 'combo'];
      scope.defaultType = scope.typeOptions[0];
      scope.categoryOptions = ['breakfast', 'lunch', 'afternoonTea', 'canapes'];
      scope.selectedCategory = scope.categoryOptions[0];

      scope.options = [];
      // scope.form = [];

      scope.addNewOption = function() {
        // var newOption = scope.options.length + 1;
        scope.options.push(scope.form);
        // scope.options.push({'id:': 'options' + newOption});
      };

      // scope.form = scope.options.map(function(x) {
      //   return x;
      // });
      // console.log('form map', scope.form);

      scope.form = Object.keys(scope.options).map(function(key) {
        return [scope.options[key]];
      });
      console.log('form map', scope.form);
      console.log('options map', scope.options);


      for (var i = 0; i < scope.form.length; i++) {
        // scope.options.push(scope.form.name[i]);
        scope.form.name = scope.form.name[i];
      }

      scope.removeOption = function() {
        var lastOption = scope.options.length-1;
        scope.options.splice(lastOption);
      };


      scope.createProduct = function (title, price, type, category, subCategory, description) {
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

        // for (var i = 0; i < scope.form.length; i++) {
        //   console.log('form', scope.form.name);
        //   scope.form.name = scope.form.name[i];
        //   console.log('form name', scope.form.name);
        // }
        // console.log('form name', scope.form.name[i]);

        // console.log('form map', scope.form.name);
        //
        // for(var i = 0; i < scope.form.name.length; i++) {
        //   console.log('form for', scope.form.name[i]);
        //   return scope.form.name[i];
        // }


        Object.keys(scope.form.name).forEach(key => {
          console.log('for each name key', scope.form.name[key]);   // the value of the current key.
          return scope.form.name[key];
        });
        // console.log('for each name key', scope.form.name[key]);

        product = {
          products: [{
            // product: id,
            title: title,
            price: price,
            type: scope.defaultType,
            category: scope.selectedCategory,
            sub_category: subCategory,
            description: description,
            // options: [scope.options[i].name]
            options: [scope.form.name]
          }]
        };
        console.log('form', scope.form.name);
        console.log('form', scope.form.name[i]);

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
