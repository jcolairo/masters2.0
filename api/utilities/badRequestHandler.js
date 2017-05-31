
exports.missingParams = function (res, params) {
  if (!Array.isArray(params)) return res.status(400).send();
  res.status(400).send('Bad Request. Requires params: ', params.join(', '));
}

exports.recordNotFound = function (res, message) {
  res.status(404).send(message);
}
