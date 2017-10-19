exports.index = function (req, res) {
  res.sendFile(require('../../env').path + '/frontend/index.html');
};
