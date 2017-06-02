var seeder = require('mongoose-seed');
var prompt = require('prompt');

confirm();

function confirm () {
  console.log('***************** Warning! *****************');
  console.log();
  console.log('This is a destructive action and with truncate the following collections: ["Product"]');
  console.log('Do you want to continue? (Y/N)');

  prompt.start();

  prompt.get(['confirm'], function (err, result) {
    if (result.confirm.toLowerCase() === 'y') {
      console.log('Running Seed...');
      seed();

    } else {
      console.error('Aborting Seed...');
      process.exit();
    }
  });
}

function seed () {

  seeder.connect(require('../../env').db_url, function () {
    seeder.loadModels([require('../../env').path + '/api/models/product.model.js']);
    seeder.clearModels(['Product'], function () {
      seeder.populateModels(data, function (err) {
        if (err) console.log(err);
        console.log('DB Seeded. Exiting...');
        process.exit();
      });
    });
  });

  var data = [
    {
      'model': 'Product',
      'documents': [
        {
          'title': 'Mini Croissant',
          'price': '1.40',
          'category': 'breakfast',
          'sub_category': 'croissant',
          'description': [
            'plain'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Mini Croissant',
          'price': '1.45',
          'category': 'breakfast',
          'sub_category': 'croissant',
          'description': [
            'chocolate'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Mini Croissant',
          'price': '1.50',
          'category': 'breakfast',
          'sub_category': 'croissant',
          'description': [
            'almond'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Large Croissant',
          'price': '1.90',
          'category': 'breakfast',
          'sub_category': 'croissant',
          'description': [
            'plain'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Large Croissant',
          'price': '2.10',
          'category': 'breakfast',
          'sub_category': 'croissant',
          'description': [
            'chocolate'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Large Croissant',
          'price': '2.30',
          'category': 'breakfast',
          'sub_category': 'croissant',
          'description': [
            'almond'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Mini Savory Croissant',
          'price': '3.00',
          'category': 'breakfast',
          'sub_category': 'croissant',
          'description': [
            'filled with Ham & Cheese, Cheese & Tomato, Smoked Salmon, Egg & Cress'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Large Savory Croissant',
          'price': '4.00',
          'category': 'breakfast',
          'sub_category': 'croissant',
          'description': [
            'filled with Ham & Cheese, Cheese & Tomato, Smoked Salmon, Egg & Cress'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Mini Muffin',
          'price': '1.50',
          'category': 'breakfast',
          'sub_category': 'muffin',
          'img_path': '../some_location'
        },
        {
          'title': 'Large Muffin',
          'price': '2.20',
          'category': 'breakfast',
          'sub_category': 'muffin',
          'img_path': '../some_location'
        },
        {
          'title': 'Mini fruit Danish',
          'price': '1.40',
          'category': 'breakfast',
          'sub_category': 'danish',
          'img_path': '../some_location'
        },
        {
          'title': 'Large fruit Danish',
          'price': '2.30',
          'category': 'breakfast',
          'sub_category': 'danish',
          'img_path': '../some_location'
        },
        {
          'title': 'Mini Donut',
          'price': '1.40',
          'category': 'breakfast',
          'sub_category': 'donut',
          'img_path': '../some_location'
        },
        {
          'title': 'Large Donut',
          'price': '2.00',
          'category': 'breakfast',
          'sub_category': 'donut',
          'img_path': '../some_location'
        },
        {
          'title': 'Mini breakfast Bagels',
          'price': '3.00',
          'category': 'breakfast',
          'sub_category': 'bagel',
          'description': [
            'filled with Smoked Salmon Cream Cheese, Ham & Cheese, Cheese & Tomato, Tuna Mayo, Egg & Cress'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Mini breakfast filled Rolls',
          'price': '3.00',
          'category': 'breakfast',
          'sub_category': 'roll',
          'description': [
            'filled with Ham & Cheese or Cheese & Tomato, Tuna Mayo, Smoked Salmon, Egg & Cress'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Fried Egg Roll',
          'price': '2.50',
          'category': 'breakfast',
          'sub_category': 'roll',
          'description': [
            '(free-range)'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Bacon Roll',
          'price': '3.00',
          'category': 'breakfast',
          'sub_category': 'roll',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Cumberland Sausage in a Roll',
          'price': '3.00',
          'category': 'breakfast',
          'sub_category': 'roll',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Fried Egg Sandwich',
          'price': '3.20',
          'category': 'breakfast',
          'sub_category': 'sandwich',
          'description': [
            '(2 free-range eggs)'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Bacon Sandwich',
          'price': '3.20',
          'category': 'breakfast',
          'sub_category': 'sandwich',
          'img_path': '../some_location'
        },
        {
          'title': 'Cumberland Sausage Sandwich',
          'price': '3.20',
          'category': 'breakfast',
          'sub_category': 'sandwich',
          'img_path': '../some_location'
        },
        {
          'title': 'Fried Egg & Bacon Sandwich',
          'price': '3.80',
          'category': 'breakfast',
          'sub_category': 'sandwich',
          'img_path': '../some_location'
        },
        {
          'title': 'Sausage & Bacon Sandwich',
          'price': '3.80',
          'category': 'breakfast',
          'sub_category': 'sandwich',
          'img_path': '../some_location'
        },
        {
          'title': 'Fried Free-Egg Sandwich',
          'price': '3.45',
          'category': 'breakfast',
          'sub_category': 'sandwich',
          'description': [
            'on Bloomer Bread',
            '(2 eggs)'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Bacon Sandwich',
          'price': '3.45',
          'category': 'breakfast',
          'sub_category': 'sandwich',
          'description': [
            'on Bloomer Bread'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Cumberland Sausage Sandwich',
          'price': '3.45',
          'category': 'breakfast',
          'sub_category': 'sandwich',
          'description': [
            'on Bloomer Bread'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Fried Egg & Bacon Sandwich',
          'price': '4.05',
          'category': 'breakfast',
          'sub_category': 'sandwich',
          'description': [
            'on Bloomer Bread'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Fried Egg & Sausage Sandwich',
          'price': '4.05',
          'category': 'breakfast',
          'sub_category': 'sandwich',
          'description': [
            'on Bloomer Bread'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Sausage & Bacon Sandwich',
          'price': '4.05',
          'category': 'breakfast',
          'sub_category': 'sandwich',
          'description': [
            'on Bloomer Bread'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Bacon Baguette',
          'price': '4.00',
          'category': 'breakfast',
          'sub_category': 'baguette',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Cumberland Sausage Baguette',
          'price': '4.00',
          'category': 'breakfast',
          'sub_category': 'baguette',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Fried Egg Baguette',
          'price': '4.00',
          'category': 'breakfast',
          'sub_category': 'baguette',
          'description': [
            '(2 free-range eggs)'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Extra Fried Egg Baguette',
          'price': '4.80',
          'category': 'breakfast',
          'sub_category': 'baguette',
          'description': [
            '(3 free-range eggs)'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Fried Egg & Bacon Baguette',
          'price': '4.80',
          'category': 'breakfast',
          'sub_category': 'baguette',
          'description': [
            '(2 eggs)'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Fried Eggs & Sausage Baguette',
          'price': '4.80',
          'category': 'breakfast',
          'sub_category': 'baguette',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Sausage & Bacon Baguette',
          'price': '4.80',
          'category': 'breakfast',
          'sub_category': 'baguette',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Hangover Cure Bap',
          'price': '5.00',
          'category': 'breakfast',
          'sub_category': 'bap',
          'description': [
            '(2 eggs, bacon & sausage)'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Greek/Natural Yoghurt with honey, Granola and fresh mixed berries',
          'price': '3.00',
          'category': 'breakfast',
          'sub_category': 'yoghurt',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Muller Yoghurt',
          'price': '1.00',
          'category': 'breakfast',
          'sub_category': 'yoghurt',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Fresh Fruit Salad',
          'price': '3.00',
          'category': 'breakfast',
          'sub_category': 'fruit',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Fruit Fruit Platter',
          'price': '2.80',
          'category': 'breakfast',
          'sub_category': 'fruit',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Fresh Fruit Kebab',
          'price': '1.70',
          'category': 'breakfast',
          'sub_category': 'fruit',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Tea/Coffee, Herbal Teas or Decaffeinated Coffee served in flasks with house biscuits',
          'price': '3.30',
          'category': 'breakfast',
          'sub_category': 'breakfastDrinks',
          'description': [
            'Per Head'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Tea/Coffee, Herbal Teas or Decaffeinated Coffee served in flasks with Farm House biscuits',
          'price': '3.50',
          'category': 'breakfast',
          'sub_category': 'breakfastDrinks',
          'description': [
            'Per Head'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Freshly Squeezed Orange Juice',
          'price': '7.50',
          'category': 'breakfast',
          'sub_category': 'breakfastDrinks',
          'description': [
            '2.2 litres'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Bottled Water still/sparkling',
          'price': '2.20',
          'category': 'breakfast',
          'sub_category': 'breakfastDrinks',
          'description': [
            '750ml'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Just Juice Orange/Apple',
          'price': '2.20',
          'category': 'breakfast',
          'sub_category': 'breakfastDrinks',
          'description': [
            '1 litre'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Menu 1',
          'price': '7.40',
          'category': 'lunch',
          'sub_category': 'setLunch',
          'description': [
            '1.5 rounds of Sandwiches',
            'Fresh fruit Kebab',
            'Packet of Crisps'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Menu 2',
          'price': '8.20',
          'category': 'lunch',
          'sub_category': 'setLunch',
          'description': [
            '1 Mini Roll',
            'Crudities with dips',
            'Fresh Fruit Kebab',
            'Packet of Crisps'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Menu 3',
          'price': '8.50',
          'category': 'lunch',
          'sub_category': 'setLunch',
          'description': [
            '1 Wrap',
            '1 round of Sandwiches',
            'Fresh Fruit Kebab'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Menu 4',
          'price': '8.70',
          'category': 'lunch',
          'sub_category': 'setLunch',
          'description': [
            '1 Mini Roll',
            '1 Wrap',
            '1 Patisserie Cake',
            'Packet of Crisps'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Menu 5',
          'price': '8.70',
          'category': 'lunch',
          'sub_category': 'setLunch',
          'description': [
            '1 Wrap',
            'Cruidities with dips',
            'Fresh Fruit Kebab',
            'Packet of Crisps'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Menu 6',
          'price': '9.00',
          'category': 'lunch',
          'sub_category': 'setLunch',
          'description': [
            'something',
            'something else',
            'one more thing'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Menu A',
          'price': '11.50',
          'category': 'lunch',
          'sub_category': 'finger',
          'description': [
            'Assorted Sandwiches/Assorted wraps/Assorted Rolls (subject to availability)',
            'Chicken Tikka Skewers',
            'Breaded Torpedo Prawn',
            'Mini Vegetable Spring Roll',
            'Fresh Fruit Kebabs',
            'Patisserie Cake'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Menu B',
          'price': '11.50',
          'category': 'lunch',
          'sub_category': 'finger',
          'description': [
            'Assorted Sandwiches/Assorted wraps/Assorted Rolls (subject to availability)',
            'Mini Chunky Beef & Mushroom Pie',
            'Butterfly Breaded Prawn ',
            'Mini Vegetable Samosas',
            'Platter of Fresh Fruit',
            'Patisserie Cake'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Menu C',
          'price': '11.50',
          'category': 'lunch',
          'sub_category': 'finger',
          'description': [
            'Assorted Sandwiches/Assorted wraps/Assorted Rolls (subject to availability)',
            'Lemon Chicken Skewers with mixed herbs',
            'Marinated Tiger Prawns on Skewers',
            'Vegetarian Quiche',
            'Fresh Fruit Kebabs',
            'Patisserie Cake'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Menu D',
          'price': '11.50',
          'category': 'lunch',
          'sub_category': 'finger',
          'description': [
            'Assorted Sandwiches/Assorted wraps/Assorted Rolls (subject to availability)',
            'Mini Lamb & Mint with Rosemary Pie',
            'Sole Goujons',
            'Vegetarian Kebabs',
            'Fresh Fruit Platter',
            'Patisserie Cake'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Mains',
          'price': '18.50',
          'category': 'lunch',
          'sub_category': 'coldFork',
          'description': [
            'Gammon Ham',
            'Roast Beef',
            'Grilled Breast of Chicken',
            'Roast Turkey',
            'Poached Salmon',
            'Quiche',
            'Goats Cheese and Baked Vegetables in Filo',
            'Ricotta Cheese with Spinach tart'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Salads',
          'price': '18.50',
          'category': 'lunch',
          'sub_category': 'coldFork',
          'description': [
            'Mixed Leaf Salad',
            'Greek Salad',
            'Cherry Tomato & Mozzarella',
            'Coleslaw',
            '3 Bean Salad',
            'Pasta salad with mozzarella balls',
            'New Potatoes with Red Onion and French dressing salad'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Desserts',
          'price': '18.50',
          'category': 'lunch',
          'sub_category': 'coldFork',
          'description': [
            'Apple & Blackberry Pie',
            'Pecan & Treacle Tart',
            'Banoffee Triple Decker Pie',
            'Carrot CakeRed Velvet Gateau'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Mains',
          'price': '19.50',
          'category': 'lunch',
          'sub_category': 'hotFork',
          'description': [
            'Roast Chicken',
            'Roast Beef with Yorkshire Pudding',
            'Meat Lasagna',
            'Shepherd\'s Pie and Baked Beans',
            'Bangers & Mash',
            'Chilli Con Carne with Rice',
            'Chicken KievBeef Bourguignon',
            'Poached SalmonFillets of Seabass',
            'Vegetable Lasagna',
            'Ricotta & Spinach Lasagna',
            'Pasta with Mozzarella basil and Napoli Sauce',
            'Veggie Mince Shepherd\'s pie'
          ],
          'img_path': '../some_location'

        },
        {
          'title': 'Desserts',
          'price': '19.50',
          'category': 'lunch',
          'sub_category': 'hotFork',
          'description': [
            'Apple & Blackberry Pie',
            'Pecan & Treacle Tart',
            'Banoffee Triple Decker Pie',
            'Carrot Cake',
            'Red Velvet Gateau'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Assorted Sandwiches',
          'price': '3.30',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Assorted Rolls',
          'price': '3.00',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Speciality Breads Carrot fine herb bread Sandwiches Walnut Bread Sandwiches Beetroot Bread Sandwiches',
          'price': '3.60',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': [
            'Minimum of 10 rounds'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Crudities with Hummus/Taramaslata',
          'price': '2.60',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Fresh Fruit Platter',
          'price': '2.10',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Fresh Fruit Kebab',
          'price': '1.70',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Mini Patisserie Cakes',
          'price': '1.30',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': '2x Mozzarella Ball with Cherry Tomato on Skewer',
          'price': '2.30',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Cheese Board (selection of British and French cheeses)',
          'price': '4.00',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Platter of Chacuterie with Ciabatta (Milano Salami,Spanish Chorizo, Parma Ham and Olives) ',
          'price': '7.50',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Platter of Mozzarella Balls, Sundried Tomatoes, Marinated Artichokes, Sweet Bell Peppers, Olives and Rockette',
          'price': '6.00',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Platter of Smoked Salmon with Cray Fish and Prawns',
          'price': '8.00',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Chocolate Brownies/Rocky Road/Caramel Shortbread slice',
          'price': '1.80',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': '2x Cocktail Chorizo with Feta cheese and roasted vegetables on skewers',
          'price': '2.30',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Mini Bagels',
          'price': '3.00',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Vegetable Kebabs',
          'price': '1.50',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Large pastry Sausage Roll',
          'price': '1.80',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Greek Yoghurt with Honey, Granola and fresh mixed berries',
          'price': '3.00',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Bottled Water still/sparkling',
          'price': '2.20',
          'category': 'lunch',
          'sub_category': 'lunchDrinks',
          'description': [
            '750ml'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Tropicana Fresh Orange Juice',
          'price': '1.60',
          'category': 'lunch',
          'sub_category': 'lunchDrinks',
          'description': [
            '300ml'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Freshly Squeezed Orange Juice',
          'price': '7.50',
          'category': 'lunch',
          'sub_category': 'lunchDrinks',
          'description': [
            '2.2 litres'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Just Juice Organce/Apple',
          'price': '2.20',
          'category': 'lunch',
          'sub_category': 'lunchDrinks',
          'description': [
            '1 litre'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Assorted Wraps',
          'price': '3.60',
          'category': 'lunch',
          'sub_category': 'lunchDrinks',
          'description': [
            'per wrap'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Mini Bagel',
          'price': '3.00',
          'category': 'lunch',
          'sub_category': 'lunchDrinks',
          'description': [
            'each'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Selection of Fresh Fruit',
          'price': '2.10',
          'category': 'lunch',
          'sub_category': 'lunchDrinks',
          'description': [
            'per person'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Patisserie Cake',
          'price': '1.30',
          'category': 'lunch',
          'sub_category': 'lunchDrinks',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Crudities with Dips',
          'price': '2.60',
          'category': 'lunch',
          'sub_category': 'lunchDrinks',
          'description': [
            'per person'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Chocolate Bar',
          'price': '1.00',
          'category': 'lunch',
          'sub_category': 'lunchDrinks',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Walkers Crisps',
          'price': '0.90',
          'category': 'lunch',
          'sub_category': 'lunchDrinks',
          'description': [
            'each'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Kettles/ Luthers/ Tyrell\'s Crisps',
          'price': '1.00',
          'category': 'lunch',
          'sub_category': 'lunchDrinks',
          'description': [
            'each'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Canned Beverages',
          'price': '1.00',
          'category': 'lunch',
          'sub_category': 'lunchDrinks',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Large Florentine',
          'price': '1.90',
          'category': 'lunch',
          'sub_category': 'lunchDrinks',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Tea/Coffee, Herbal Teas or Decaffeinated Coffee served in flasks with house biscuits',
          'price': '3.30',
          'category': 'afternoonTea',
          'sub_category': 'afternoonTeaDrinks',
          'description': [
            'Per Head'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Tea/Coffee, Herbal Teas or Decaffeinated Coffee served in flasks with Farm House biscuits',
          'price': '3.50',
          'category': 'afternoonTea',
          'sub_category': 'afternoonTeaDrinks',
          'description': [
            'Per Head'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Freshly Squeezed Orange Juice',
          'price': '7.50',
          'category': 'afternoonTea',
          'sub_category': 'afternoonTeaDrinks',
          'description': [
            '2.2 Litres'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Bottled Water still/sparkling',
          'price': '2.50',
          'category': 'afternoonTea',
          'sub_category': 'afternoonTeaDrinks',
          'description': [
            '750ml'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Just Juice Orange/Apple',
          'price': '2.50',
          'category': 'afternoonTea',
          'sub_category': 'afternoonTeaDrinks',
          'description': [
            '1 litre'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Finger Sandwiches',
          'price': '3.50',
          'category': 'afternoonTea',
          'sub_category': 'afternoonTeaDrinks',
          'description': [
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Large Scones with Jam & Cream',
          'price': '2.50',
          'category': 'afternoonTea',
          'sub_category': 'afternoonTeaDrinks',
          'description': [
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Mini Patisserie Cakes',
          'price': '1.30',
          'category': 'afternoonTea',
          'sub_category': 'afternoonTeaDrinks',
          'description': [
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Large Fresh Cream Cakes',
          'price': '2.80',
          'category': 'afternoonTea',
          'sub_category': 'afternoonTeaDrinks',
          'description': [
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Carrot and Walnut Loaf Cake',
          'price': '2.40',
          'category': 'afternoonTea',
          'sub_category': 'afternoonTeaDrinks',
          'description': [
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Ginger Loaf Cake',
          'price': '2.40',
          'category': 'afternoonTea',
          'sub_category': 'afternoonTeaDrinks',
          'description': [
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Chocolate Loaf Cake',
          'price': '2.40',
          'category': 'afternoonTea',
          'sub_category': 'afternoonTeaDrinks',
          'description': [
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Lemon Madeira Cake',
          'price': '2.40',
          'category': 'afternoonTea',
          'sub_category': 'afternoonTeaDrinks',
          'description': [
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Coconut Loaf Cake',
          'price': '2.40',
          'category': 'afternoonTea',
          'sub_category': 'afternoonTeaDrinks',
          'description': [
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Apple and Spice Cake',
          'price': '2.40',
          'category': 'afternoonTea',
          'sub_category': 'afternoonTeaDrinks',
          'description': [
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Mocha cake',
          'price': '2.50',
          'category': 'afternoonTea',
          'sub_category': 'afternoonTeaDrinks',
          'description': [
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Large Florentine',
          'price': '1.90',
          'category': 'afternoonTea',
          'sub_category': 'afternoonTeaDrinks',
          'description': [
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Char grilled Carrot and Zucchini Tower with Tapenade and Pepper Salsa',
          'price': '1.90',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'French Goat Cheese with Chives & Provencal Peppers on Shortbread',
          'price': '1.90',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Duck Parfait with Rhubarb Vanilla Essence on Fresh',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Tartlet of Mature Stilton Apple Gelee',
          'price': '1.90',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Roast Beef Horseradish on Yorkshire Pudding',
          'price': '2.40',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Quail Egg Nicoise with Olive Tapenade and Anchovy',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Smoked Salmon with Salmon Mousse and Lemon Zest on Brown Bread',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Soft Quail Egg on Petit-Pain with Béarnaise, Shallots and Lolo Rosso',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Spicy Naan with Smoked Chicken Mousse Coriander and Mango',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Crostini of Mozzrella Tomato and Pesto',
          'price': '1.90',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Thai Aspargus Sushi Nigiri with Wasabi & Soy Dip',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Steak Tartare Quail Egg on Toast',
          'price': '2.50',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Mini Bagel with Cream Cheese and Smoked Salmon Tartar',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Mille Feuille of Poisson',
          'price': '2.40',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Walnut Bread with Mature Stilton and Figs',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Baby Vegetable with Sunblushed Tomato Mousseline in Tortilla Cup',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Beef Carpaccio on Crostini with Truffle Oil and Parmesan Shavings',
          'price': '2.40',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Open Prawn with Tomato Mousseline on Pain de Mie',
          'price': '2.40',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Honeyed Fresh Salmon with Avocado and Lemon on French Bread',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Fresh Asparagus on Petit-Pain with Sundried Tomato and Black Olive',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Mixed Roasted Peppers with Red Pepper Pesto on Ficelle',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Tuna, Salmon or Vegetarian Hosomaki Sushi',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Quails Eggg Sun blushed tomato Crostini with Thai Asparagus',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Baked Polenta Cured Ham fan and mozzarella pearl',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Char grilled Zucchini with Red Peppers and Goats Cheese',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Salmon Tartar Pattie with Avruga on Arctic Bread',
          'price': '2.40',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Baby Artichoke with Porcini Mousse and Chorizo with a pick',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Mini Prawns on Anchovy Butter with Lemon Zest and Chives',
          'price': '2.30',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Log of Smoked Duck with Compote and Chevril',
          'price': '2.30',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Home made Savoury Crepe with Smoked Duck and Compote',
          'price': '2.30',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Salmon Roulade with Saffron Butter on Feuillete',
          'price': '2.30',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        },
        {
          'title': 'Egg Soufflé with Tapenade and Chorizo',
          'price': '2.30',
          'category': 'canapes',
          'sub_category': 'canapes',
          'img_path': '../some_location'
        }
      ]
    }
  ];
}
