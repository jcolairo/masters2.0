var mongoose      = require('mongoose');
var OrderSchema   = require('./order.model');
var findOrCreate  = require('mongoose-findorcreate');


var UserSchema  = new mongoose.Schema({

  uid: { type: String, required: true, unique: true },
  is_admin: { type: Boolean, default: false },
  email: { type: String, required: true, unique: true },
  address: [{
    line_one: { type: String },
    line_two: { type: String },
    line_three: { type: String },
    post_code: { type: String }
  }],
  company_name: { type: String },
  contact_name: { type: String },
  contact_number: { type: String },
  orders: [ OrderSchema ],
  basket: { type: OrderSchema, default: OrderSchema }

},{

  timestamps: true,
  versionKey: false

});

UserSchema.plugin(findOrCreate);

UserSchema.methods.submitOrder = function (cb) {
  var order = this.basket;
  this.orders.push(order);
  this.basket = null;
  this.basket = OrderSchema;
  return this.save(cb);
};


module.exports = mongoose.model('user', UserSchema);
