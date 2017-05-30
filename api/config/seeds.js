var seeder = require('mongoose-seed');
var prompt = require('prompt');

confirm();
function  seed () {

  seeder.connect(require('../../env').db_url, function () {

    seeder.loadModels(['../product.model.js']);

    seeder.clearModels(['product'], function () {
      seeder.populateModels(data);
    });
  });

  var data = [
    { 
      'model': 'Product',
      'documents': [
        {
          'title': 'Bangers and Math',
          'price': '1.67',
          'category': 'Lunch',
          'description': 'A bit plate of bangers and mash',
          'img_path': '../some_location'
        }
      ]
    }
  ];

}

function confirm () {
  console.log('***************** Warning! *****************');
  console.log();
  console.log('This is a destructive action and with truncate the following collections: ["Product"]');
  console.log('Do you want to continue? (Y/N)');

  prompt.start();
  prompt.get(['confirm'], function (err, result) {
    if (result.confirm.toLowerCase() === 'y') {
      console.log('Running Seed...')
    } else {
      console.error('Aborting Seed...');
      process.exit();
      seed();
    }
  
  });

}