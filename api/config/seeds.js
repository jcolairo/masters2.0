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
          'title': 'Selection of Mini Pastries',
          'price': '1.30',
          'category': 'breakfast',
          'sub_category': 'pastries',
          'description': 'Please select one pastries',
          'options': [
            'Served on Platters',
            'Plain Croissant',
            'Pain au Chocolat',
            'Pain au Raisin',
            'Almond Croissant',
            'Fruit Danish'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Platter of Brick Lane Bagels',
          'price': '3.50',
          'category': 'breakfast',
          'sub_category': 'bagel',
          'description': 'Please select one bagel',
          'options': [
            'Smoked Salmon & Cream Cheese',
            'Ham & Cheese',
            'Cream Cheese & Cucumber'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Fried Egg Roll',
          'price': '2.00',
          'category': 'breakfast',
          'sub_category': 'roll',
          'description': 'free-range',
          'img_path': '../some_location'
        },
        {
          'title': 'Bacon Roll',
          'price': '2.50',
          'category': 'breakfast',
          'sub_category': 'roll',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Sausage Roll',
          'price': '2.50',
          'category': 'breakfast',
          'sub_category': 'roll',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Egg & Bacon Roll',
          'price': '3.00',
          'category': 'breakfast',
          'sub_category': 'roll',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Sausage & Egg Roll',
          'price': '3.00',
          'category': 'breakfast',
          'sub_category': 'roll',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Sausage & Bacon Roll',
          'price': '3.00',
          'category': 'breakfast',
          'sub_category': 'roll',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Double Fried Egg Sandwich',
          'price': '3.00',
          'category': 'breakfast',
          'sub_category': 'sandwich',
          'description': 'free-range',
          'img_path': '../some_location'
        },
        {
          'title': 'Bacon Sandwich',
          'price': '3.50',
          'category': 'breakfast',
          'sub_category': 'sandwich',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Sausage Sandwich',
          'price': '3.50',
          'category': 'breakfast',
          'sub_category': 'sandwich',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Egg & Bacon Sandwich',
          'price': '4.00',
          'category': 'breakfast',
          'sub_category': 'sandwich',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Sausage & Egg Sandwich',
          'price': '4.00',
          'category': 'breakfast',
          'sub_category': 'sandwich',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Sausage & Bacon Sandwich',
          'price': '4.00',
          'category': 'breakfast',
          'sub_category': 'sandwich',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Double Fried Egg Baguette',
          'price': '3.50',
          'category': 'breakfast',
          'sub_category': 'baguette',
          'description': 'free-range',
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
          'title': 'Sausage Baguette',
          'price': '4.00',
          'category': 'breakfast',
          'sub_category': 'baguette',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Egg & Bacon Baguette',
          'price': '4.50',
          'category': 'breakfast',
          'sub_category': 'baguette',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Sausage & Egg Baguette',
          'price': '4.50',
          'category': 'breakfast',
          'sub_category': 'baguette',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Sausage & Bacon Baguette',
          'price': '4.50',
          'category': 'breakfast',
          'sub_category': 'baguette',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Individual Yoghurt Pot',
          'price': '3.00',
          'category': 'breakfast',
          'sub_category': 'healthy',
          'description': [
            'Natural Yoghurt',
            'Granola',
            'Fresh Mixed Berries',
            'Honey'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Sharing Breakfast Bowls',
          'price': '4.00',
          'category': 'breakfast',
          'sub_category': 'healthy',
          'description': [
            'Natural Yoghurt',
            'Granola',
            'Fresh Mixed Berries',
            'Honey'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Fresh Fruit Platter',
          'price': '2.00',
          'category': 'breakfast',
          'sub_category': 'healthy',
          'description': 'Slices of seasonal fresh fruit',
          'img_path': '../some_location'
        },
        {
          'title': 'Fresh Fruit Kebab',
          'price': '1.70',
          'category': 'breakfast',
          'sub_category': 'healthy',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Selection of Tea/Coffee',
          'price': '3.50',
          'category': 'breakfast',
          'sub_category': 'breakfastDrinks',
          'description': 'Served in Flasks with a Selection of Biscuits',
          'img_path': '../some_location'
        },
        {
          'title': 'Freshly Squeezed Orange Juice',
          'price': '7.50',
          'category': 'breakfast',
          'sub_category': 'breakfastDrinks',
          'description': '2.2 litres',
          'img_path': '../some_location'
        },
        {
          'title': 'Bottled Water Still',
          'price': '2.20',
          'category': 'breakfast',
          'sub_category': 'breakfastDrinks',
          'description': '750ml',
          'img_path': '../some_location'
        },
        {
          'title': 'Bottled Water Sparkling',
          'price': '2.20',
          'category': 'breakfast',
          'sub_category': 'breakfastDrinks',
          'description': '750ml',
          'img_path': '../some_location'
        },
        {
          'title': 'Pure Orange Juice Carton',
          'price': '2.20',
          'category': 'breakfast',
          'sub_category': 'breakfastDrinks',
          'description': '1 litre',
          'img_path': '../some_location'
        },
        {
          'title': 'Pure Apple Juice Carton',
          'price': '2.20',
          'category': 'breakfast',
          'sub_category': 'breakfastDrinks',
          'description': '1 litre',
          'img_path': '../some_location'
        },
        {
          'title': 'Freshly Pressed Orange, Ginger, Carrot & Apple Juice',
          'price': '7.00',
          'category': 'breakfast',
          'sub_category': 'breakfastDrinks',
          'description': '1 litre',
          'img_path': '../some_location'
        },
        {
          'title': 'Freshly Pressed Mango, Pineapple & Passion Fruit Juice',
          'price': '7.00',
          'category': 'breakfast',
          'sub_category': 'breakfastDrinks',
          'description': '1 litre',
          'img_path': '../some_location'
        },
        {
          'title': 'Freshly Pressed Mixed Berries Juice',
          'price': '7.00',
          'category': 'breakfast',
          'sub_category': 'breakfastDrinks',
          'description': '1 litre',
          'img_path': '../some_location'
        },
        {
          'title': 'Menu 1',
          'price': '5.50',
          'category': 'breakfast',
          'sub_category': 'setBreakfast',
          'description': [
            'Selection of Mini Pastries',
            'Fresh Fruit Kebab',
            'Granola Pots with Berries and Honey'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Menu 2',
          'price': '5.80',
          'category': 'breakfast',
          'sub_category': 'setBreakfast',
          'description': [
            'Selection of Bagels (Smoked Salmon & Cream Cheese, Ham & Cheese, Cream Cheese & Cucumber)',
            'Selection of Mini Pastries',
            'Fresh Fruit Kebab'
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
            'Crudités with dips',
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
          'price': '10.00',
          'category': 'lunch',
          'sub_category': 'setLunch',
          'description': [
            'Tortilla (Potato)',
            'Small filled rolls',
            'Chicken Skewer',
            'Humus & Crudités',
            'Mozzarella, Cherry Tomato & Basil Stick',
            'Fruit Kebab',
            'Cake'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Menu 7',
          'price': '12.00',
          'category': 'lunch',
          'sub_category': 'setLunch',
          'description': [
            'Chicken Skewer',
            'Tortilla (Chorizo)',
            'Hot Buffet Selection (Spring Rolls, Tempura Prawns, Falafel)',
            'Filled finger Sandwiches',
            'Mozzarella, Cherry Tomato & Basil Stick',
            'Vegetarian Quiche',
            'Fruit Kebab',
            'Cake'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Menu 8',
          'price': '12.50',
          'category': 'lunch',
          'sub_category': 'setLunch',
          'description': [
            'Vegetarian Quiche',
            'Chicken Skewer & Poached Salmon Skewer',
            'Greed Salad',
            'Caesar Salad',
            'Hot Buffet Selection (Spring Rolls, Tempura Prawns, Falafel)',
            'Humus, Crudités & bread',
            'Fruit Kebab',
            'Cake'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Gluten Free Menu',
          'price': '14.00',
          'category': 'lunch',
          'sub_category': 'setLunch',
          'description': [
            'Griddles Chicken Fillets',
            'Poached Salmon',
            'Butternut Squash with Chickpeas',
            'Greek Salad',
            'Humus, dips & Crudités',
            'Fruit Kebab',
            'Gluten Free Cake'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Menu A',
          'price': '11.50',
          'category': 'lunch',
          'sub_category': 'coldForkBuffet',
          'description': [
            'Assorted Sandwiches/Assorted wraps/Assorted Rolls',
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
          'sub_category': 'coldForkBuffet',
          'description': [
            'Assorted Sandwiches/Assorted wraps/Assorted Rolls',
            'Lemon Chicken Skewers with mixed herbs',
            'Marinated Tiger Prawns on Skewers',
            'Vegetarian Quiche',
            'Fresh Fruit Kebabs',
            'Patisserie Cake'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Mains',
          'price': '18.50',
          'category': 'lunch',
          'type': 'combo',
          'sub_category': 'coldFork',
          'description': "Please select 2 ...",
          'options': [
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
          'type': 'combo',
          'sub_category': 'coldFork',
          'description': "Please select 3 ...",
          'options': [
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
          'type': 'combo',
          'sub_category': 'coldFork',
          'description': "Please select 2 ...",
          'meta': {
            'combo_dish_count': 2
          },
          'options': [
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
          'title': 'Selection of Sandwiches',
          'price': '3.30',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': 'Please select one sandwich',
          'options': [
            'Meat',
            'Fish',
            'Veg',
            '1 Sandwich'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Selection of Wraps',
          'price': '3.30',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': 'Please select one wrap',
          'options': [
            'Meat',
            'Fish',
            'Veg',
            '1 Wrap'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Selection of Mini Rolls',
          'price': '2.50',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': 'Please select one mini roll',
          'options': [
            'Meat',
            'Fish',
            'Veg',
            '1 Roll'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Selection of Baguettes',
          'price': '4.00',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': 'Please select one baguette',
          'options': [
            '1 Baguette of Meat, Fish or Veg'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Platter of Chacuterie with Ciabatta',
          'price': '7.50',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': [
            'Milano Salami',
            'Spanish Chorizo',
            'Parma Ham and Olives'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Platter of Mozzarella Balls, Sundried Tomatoes, Marinated Artichokes, Sweet Bell Peppers, Olives and Rockett',
          'price': '6.00',
          'category': 'lunch',
          'sub_category': 'platter',
          'description': [],
          'img_path': '../some_location'
        },
        {
          'title': 'Menu 1',
          'price': '5.00',
          'category': 'lunch',
          'sub_category': 'packedLunch',
          'description': [
            'Sandwich',
            'Crisps',
            'Water'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Menu 2',
          'price': '6.00',
          'category': 'lunch',
          'sub_category': 'packedLunch',
          'description': [
            'Sandwich',
            'Cake',
            'Fruit Salad'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Menu 3',
          'price': '5.20',
          'category': 'lunch',
          'sub_category': 'packedLunch',
          'description': [
            'Wrap',
            'Crisps',
            'Fruit Salad'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Menu 4',
          'price': '7.50',
          'category': 'lunch',
          'sub_category': 'packedLunch',
          'description': [
            'Baguette',
            'Cake',
            'Fruit Salad'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Bottled Water still/sparkling',
          'price': '2.20',
          'category': 'lunch',
          'sub_category': 'lunchDrinks',
          'description': '750ml',
          'img_path': '../some_location'
        },
        {
          'title': 'Tropicana Fresh Orange Juice',
          'price': '1.60',
          'category': 'lunch',
          'sub_category': 'lunchDrinks',
          'description': '300ml',
          'img_path': '../some_location'
        },
        {
          'title': 'Freshly Squeezed Orange Juice',
          'price': '7.50',
          'category': 'lunch',
          'sub_category': 'lunchDrinks',
          'description': '2.2 litres',
          'img_path': '../some_location'
        },
        {
          'title': 'Just Juice Organce/Apple',
          'price': '2.20',
          'category': 'lunch',
          'sub_category': 'lunchDrinks',
          'description': '1 litre',
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
          'title': 'Greek Style Platter',
          'price': '99.00',
          'category': 'lunch',
          'sub_category': 'specialPlatter',
          'description': [
            'Greek Salad',
            'Lentil Tabbouleh',
            'Humum, Tzatziki & Crudités',
            'Pitta Bread',
            'Olives',
            'Spanakopita',
            'Baklava?'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Italian Style Platter',
          'price': '99.00',
          'category': 'lunch',
          'sub_category': 'specialPlatter',
          'description': [
            'Homemade Vegetarian Quiche',
            'Italian style Pasta Salad',
            'Mozzrella, Basil & Cherry Tomato Sticks',
            'Salami, Cheese & Italian Ham',
            'Antisan Bread',
            'Herb Chicken Breast Sticks',
            'Marinated Tiger Prawns on Skewers',
            'Cannoli'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Cold Meats Platter',
          'price': '99.00',
          'category': 'lunch',
          'sub_category': 'specialPlatter',
          'description': [
            'Salami',
            'Ham',
            'Olives',
            'Artichokes',
            'Cheese',
            'Artisan Bread'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Cheese Board',
          'price': '4.00',
          'category': 'lunch',
          'sub_category': 'specialPlatter',
          'description': 'selection of British, French & Italian cheeses',
          'img_path': '../some_location'
        },
        {
          'title': 'Afternoon Tea',
          'price': '15.00',
          'category': 'afternoonTea',
          'sub_category': 'afternoonTeaDrinks',
          'description': [
            'Selection of Tea/Coffee',
            'Selection of Finger Sandwiches',
            'Selection of Patisserie Cakes',
            'Scones with Clotted Cream & Jam'
          ],
          'img_path': '../some_location'
        },
        {
          'title': 'Char grilled Carrot and Zucchini Tower with Tapenade and Pepper Salsa',
          'price': '1.90',
          'category': 'canapes',
          'sub_category': 'veg',
          'img_path': '../some_location'
        },
        {
          'title': 'French Goat Cheese with Chives & Provencal Peppers on Shortbread',
          'price': '1.90',
          'category': 'canapes',
          'sub_category': 'veg',
          'img_path': '../some_location'
        },
        {
          'title': 'Duck Parfait with Rhubarb Vanilla Essence on Fresh',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'meat',
          'img_path': '../some_location'
        },
        {
          'title': 'Tartlet of Mature Stilton Apple Gelee',
          'price': '1.90',
          'category': 'canapes',
          'sub_category': 'veg',
          'img_path': '../some_location'
        },
        {
          'title': 'Roast Beef Horseradish on Yorkshire Pudding',
          'price': '2.40',
          'category': 'canapes',
          'sub_category': 'meat',
          'img_path': '../some_location'
        },
        {
          'title': 'Quail Egg Nicoise with Olive Tapenade and Anchovy',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'fish',
          'img_path': '../some_location'
        },
        {
          'title': 'Smoked Salmon with Salmon Mousse and Lemon Zest on Brown Bread',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'fish',
          'img_path': '../some_location'
        },
        {
          'title': 'Soft Quail Egg on Petit-Pain with Béarnaise, Shallots and Lolo Rosso',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'veg',
          'img_path': '../some_location'
        },
        {
          'title': 'Crostini of Mozzrella Tomato and Pesto',
          'price': '1.90',
          'category': 'canapes',
          'sub_category': 'veg',
          'img_path': '../some_location'
        },
        {
          'title': 'Thai Asparagus Sushi Nigiri with Wasabi & Soy Dip',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'veg',
          'img_path': '../some_location'
        },
        {
          'title': 'Steak Tartare Quail Egg on Toast',
          'price': '2.50',
          'category': 'canapes',
          'sub_category': 'meat',
          'img_path': '../some_location'
        },
        {
          'title': 'Mini Bagel with Cream Cheese and Smoked Salmon Tartar',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'fish',
          'img_path': '../some_location'
        },
        {
          'title': 'Mille Feuille of Poisson',
          'price': '2.40',
          'category': 'canapes',
          'sub_category': 'fish',
          'img_path': '../some_location'
        },
        {
          'title': 'Baby Vegetable with Sunblushed Tomato Mousseline in Tortilla Cup',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'veg',
          'img_path': '../some_location'
        },
        {
          'title': 'Beef Carpaccio on Crostini with Truffle Oil and Parmesan Shavings',
          'price': '2.40',
          'category': 'canapes',
          'sub_category': 'meat',
          'img_path': '../some_location'
        },
        {
          'title': 'Open Prawn with Tomato Mousseline on Pain de Mie',
          'price': '2.40',
          'category': 'canapes',
          'sub_category': 'fish',
          'img_path': '../some_location'
        },
        {
          'title': 'Honeyed Fresh Salmon with Avocado and Lemon on French Bread',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'fish',
          'img_path': '../some_location'
        },
        {
          'title': 'Fresh Asparagus on Petit-Pain with Sundried Tomato and Black Olive',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'veg',
          'img_path': '../some_location'
        },
        {
          'title': 'Mixed Roasted Peppers with Red Pepper Pesto on Ficelle',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'veg',
          'img_path': '../some_location'
        },
        {
          'title': 'Tuna Hosomaki Sushi',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'fish',
          'img_path': '../some_location'
        },
        {
          'title': 'Salmon Hosomaki Sushi',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'fish',
          'img_path': '../some_location'
        },
        {
          'title': 'Vegetarian Hosomaki Sushi',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'veg',
          'img_path': '../some_location'
        },
        {
          'title': 'Quails Egg Sun blushed tomato Crostini with Thai Asparagus',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'veg',
          'img_path': '../some_location'
        },
        {
          'title': 'Char grilled Zucchini with Red Peppers and Goats Cheese',
          'price': '2.20',
          'category': 'canapes',
          'sub_category': 'veg',
          'img_path': '../some_location'
        },
        {
          'title': 'Salmon Tartar Pattie with Avruga on Arctic Bread',
          'price': '2.40',
          'category': 'canapes',
          'sub_category': 'fish',
          'img_path': '../some_location'
        },
        {
          'title': 'Mini Prawns on Anchovy Butter with Lemon Zest and Chives',
          'price': '2.30',
          'category': 'canapes',
          'sub_category': 'fish',
          'img_path': '../some_location'
        },
        {
          'title': 'Log of Smoked Duck with Compote and Chervil',
          'price': '2.30',
          'category': 'canapes',
          'sub_category': 'meat',
          'img_path': '../some_location'
        },
        {
          'title': 'Home made Savoury Crepe with Smoked Duck and Compote',
          'price': '2.30',
          'category': 'canapes',
          'sub_category': 'meat',
          'img_path': '../some_location'
        },
        {
          'title': 'Salmon Roulade with Saffron Butter on Feuillete',
          'price': '2.30',
          'category': 'canapes',
          'sub_category': 'fish',
          'img_path': '../some_location'
        },
        {
          'title': 'Egg Soufflé with Tapenade and Chorizo',
          'price': '2.30',
          'category': 'canapes',
          'sub_category': 'meat',
          'img_path': '../some_location'
        }
      ]
    }
  ];
}
