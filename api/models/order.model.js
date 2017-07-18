var mongoose    = require('mongoose');
var OrderSchema = new mongoose.Schema({

  items: [{
    product:    { ref: 'Product', type: mongoose.Schema.ObjectId },
    qty:        { type: Number, default: 1 }
  }],
  has_been_processed: { type: Boolean, default: false },
  has_been_submitted: { type: Boolean, default: false },
  delivery_address:   { type: String },
  customer_notes:     { type: String }
},{

  timestamps: true,
  versionKey: false
});

OrderSchema.virtual("total").get(function () {
  var total = 0;
  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i].product) {
      total += (this.items[i].product.price * this.items[i].qty);
    }
  }
  return total.toFixed(2);
});

OrderSchema.set('toJSON', {virtuals: true});

module.exports = OrderSchema;
