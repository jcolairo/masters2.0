exports.missingParams = function (res, params) {
  res.status(400).send('Bad Request. Missing params: ', params.join(', '));
}

exports.recordNotFound = function (message) {
  res.status(404).send(message)
}