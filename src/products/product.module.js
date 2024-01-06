const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type: String,
    },
    price:{
        type: Number,
    },
    category:{
        type:String,
    },
    brand:{
        type:String,
    },
    stock:{
        type:String,
    },
    imageUrl:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    updatedAt:{
        type:Date,
        default: Date.now,
    },

},{timestamps: true,})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;