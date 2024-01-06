const Product  = require('../products/product.module');

// const Product = require('../models/Product'); // Assuming your model is in the 'models' directory

class ProductRepository {
  async addProduct(productData) {
    try {
      const product = new Product(productData);
      const newProduct = await product.save();
      return newProduct;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProductRepository();
