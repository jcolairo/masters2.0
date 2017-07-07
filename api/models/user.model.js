var mongoose      = require('mongoose');
var OrderSchema   = require('./order.model');
var findOrCreate  = require('mongoose-findorcreate');


var UserSchema  = new mongoose.Schema({

  uid:      { type: String, required: true, unique: true },
  is_admin: { type: Boolean, default: false},
  email:    { type: String, required: true, unique: true },
  address: [{
    line_one:   { type: String },
    line_two:   { type: String },
    line_three: { type: String },
    post_code:  { type: String }
  }],
  company_name:   { type: String },
  contact_name:   { type: String },
  contact_number: { type: String },
  orders:         [ OrderSchema ]

},{

  timestamps: true,
  versionKey: false

});

UserSchema.plugin(findOrCreate);

// var autoPopulateProducts = function(next) {
//   this.populate('orders.items.product');
//   next();
// };

// UserSchema.
//   pre('findOne', autoPopulateProducts).
//   pre('find', autoPopulateProducts);


module.exports = mongoose.model('user', UserSchema);
