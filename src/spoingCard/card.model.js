const mongoose = require('mongoose');
const Product = require('../products/product.module')
const cartItemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, default: 1 },
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;
