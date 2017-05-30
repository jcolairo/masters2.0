var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({

  items: [{
    product:    { ref: 'Product', type: mongoose.Schema.ObjectId },
    qty:        { type: Number, default: 1 }
  }],
  is_live:            { type: Boolean, default: false },
  has_been_processed: { type: Boolean, default: false }

},{

  timestamps: true,
  versionKey: false

});

module.exports = OrderSchema; 
