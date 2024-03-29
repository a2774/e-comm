const Product = require("../products/product.module");

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

  async getProductById(productId) {
    try {
      return await Product.findById(productId);
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(productId, newData) {
    try {
      const product = await Product.findById(productId);
      if (!product) {
        return null; // or throw an error, depending on your preference
      }

      product.set(newData);
      return await product.save();
    } catch (error) {
      throw error;
    }
  }
  async deleteProductById(productId) {
    try {
      return await Product.findByIdAndDelete(productId);
    } catch (error) {
      throw error;
    }
  }

  async getProductById(productId) {
    try {
      return await Product.findById(productId);
    } catch (error) {
      throw error;
    }
  }
  async getAllProducts() {
    try {
      return await Product.find();
    } catch (error) {
      throw error;
    }
  }
  async getProducts({ category, minPrice, maxPrice, sortBy, sortOrder }) {
    try {
      let query = {};

      if (category) {
        query.category = category;
      }

      if (minPrice || maxPrice) {
        query.price = {};
        if (minPrice) query.price.$gte = minPrice;
        if (maxPrice) query.price.$lte = maxPrice;
      }

      let sort = {};
      if (sortBy) {
        sort[sortBy] = sortOrder === "desc" ? -1 : 1;
      }

      return await Product.find(query).sort(sort);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProductRepository();
