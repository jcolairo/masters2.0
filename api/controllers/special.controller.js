var Special = require('../models/special.model');
var Err     = require('../utilities/badRequestHandler');


function getSingleSpecial (req, res) {
  var id = req && req.params && req.params.id;
  if (!id) return Err.missingParams(res, ['id']);

  Special.findById(id , function (err, special) {
    if (err) return Err.recordNotFound(res, err.message);
    res.json(special);
  });
}

function getAllSpecials (req, res) {
  Special.find({}, function (err, special) {
    if (err) return Err.recordNotFound(res, err.message);
    res.json(special);
  });
}

function createSpecial(req, res) {
  var special = req.body;
  console.log('special', special);
  Special
    .create(special)
    .then(
      function () {
        res.json(special);
      },
      function(err) {
        return Err.miscError(res, err.message);
      }
    );
}

function updatedSpecial(req, res) {
  var specialId = req.params.id;
  var special = req.body;
  Special
    .update({_id: specialId}, {
      date: special.date,
      title: special.title,
      price: special.price,
      description: special.description
    })
    .then(
      function (specialObj) {
        res.json(specialObj);
      },
      function (err) {
        return Err.miscError(res, err.message);
      }
    );
}

function deleteSpecial(req, res) {
  var specialId = req.params.id;
  Special
    .remove({_id: specialId})
    .then(
      function() {
        res.sendStatus(200);
      },
      function (err) {
        return Err.miscError(res, err.message);
      }
    );
}
module.exports = {
  getOne: getSingleSpecial,
  getAll: getAllSpecials,
  createOne: createSpecial,
  updateOne: updatedSpecial,
  deleteOne: deleteSpecial
};
