var mongoose      = require('mongoose');
var SpecialSchema = new mongoose.Schema({

  date: { type: Date, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image_path: { type: String }

},{

  timestamps: true,
  versionKey: false

});

module.exports = mongoose.model('Special', SpecialSchema);
