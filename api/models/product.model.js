var mongoose      = require('mongoose');
var ProductSchema = new mongoose.Schema({

  title:        { type: String, required: true },
  price:        { type: Number, required: true },
  category:     { type: String, required: true },
  description:  [],
  image_path:   { type: String }

},{

  timestamps: true,
  versionKey: false

});

module.exports = mongoose.model('Product', ProductSchema);
