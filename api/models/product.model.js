var mongoose      = require('mongoose');
var ProductSchema = new mongoose.Schema({

  title:        { type: String, required: true },
  price:        { type: Number, required: true },
  type:         { type: String, default: 'static' },
  category:     { type: String, required: true },
  sub_category: { type: String, required: true },
  combo_options: [],
  description:  { type: String },
  options:      [],
  image_path:   { type: String }

},{

  timestamps: true,
  versionKey: false

});

module.exports = mongoose.model('Product', ProductSchema);
