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
        console.log('DB Seeded. Exiting...')
        process.exit();
      });
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
          'description': ['something fun'],
          'img_path': '../some_location'
        }
      ]
    }
  ];

}