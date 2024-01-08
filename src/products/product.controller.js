const Product = require("../products/product.module");
const productRepository = require('../products/product.repository');



// module.exports.addproduct = async (req, res) => {
//   const {
//     name,
//     description,
//     price,
//     category,
//     brand,
//     stock,
//     imageUrl,
//     createdAt,
//     updatedAt,
//   } = req.body;

//   try {
//     const product = new Product({
//       name,
//       description,
//       price,
//       category,
//       brand,
//       stock,
//       imageUrl,
//       createdAt,
//       updatedAt,
//     });
//     const newproduct = await product.save();
//     res.status(200).json({ message: "product add secusssfully", newproduct });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "sever error" });
//   }
// };











module.exports.addProduct = async (req, res) => {
    const {
      name,
      description,
      price,
      category,
      brand,
      stock,
      imageUrl,
      createdAt,
      updatedAt,
    } = req.body;
  
    try {
      const productData = {
        name,
        description,
        price,
        category,
        brand,
        stock,
        imageUrl,
        createdAt,
        updatedAt,
      };
  
      const newProduct = await productRepository.addProduct(productData);
  
      res.status(200).json({ message: "Product added successfully", newProduct });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  };







// Update an existing product

// module.exports.update = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ error: "product is not Available" });
//     }
//     product.set(req.body);
//     const newproduct = await product.save();
//     res.json(newproduct);
//   } catch (err) {
//     res.status(500).json("Error" + err);
//   }
// };

// const productRepository = require('../repositories/productRepository');

module.exports.updateProduct = async (req, res) => {
  const productId = req.params.id;
  const newData = req.body;

  try {
    const product = await productRepository.getProductById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product is not available" });
    }

    const updatedProduct = await productRepository.updateProduct(productId, newData);

    if (!updatedProduct) {
      return res.status(500).json({ error: "Failed to update product" });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};


// Delete a product

// module.exports.delete = async(req, res)=>{
//     try {
//         const product = await Product.findByIdAndDelete(req.params.id);
//         if(!product){
//             res.status(401).json({message:"product is Available"})
//         }
//         res.status(200).json({message:"product Deleted", product});
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error:"sever error"});
//     }
// }


module.exports.deleteProduct = async (req, res) => {
    const productId = req.params.id;
  
    try {
      const product = await productRepository.deleteProductById(productId);
  
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
  
      res.status(200).json({ message: "Product deleted successfully", product });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  };

// View details of a specific product


// module.exports.getproduct = async(req, res)=>{
//     try {
//         const product = await Product.findById(req.params.id);
//         if(!product){
//           return  res.status(404).json({message:"product is not Available"});
//         }
//         res.status(200).json({message:"View product", product});
//     } catch (error) {
//         console.log('error');
//         res.status(500).json({error:"sever error"});
//     }
// }


module.exports.getProduct = async (req, res) => {
    const productId = req.params.id;
  
    try {
      const product = await productRepository.getProductById(productId);
  
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json({ message: "View product", product });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  };


// module.exports.getallproduct = async(req, res)=>{
//     try {
//         const product = await Product.find();
//         res.status(200).json({message:"view all product", product});
//     } catch (error) {
//        console.log(error);
//        res.status(500).json({error:"sever error"}); 
//     }
// }

module.exports.getAllProducts = async (req, res) => {
    try {
      const products = await productRepository.getAllProducts();
      res.status(200).json({ message: "View all products", products });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  };
//   Filter and sort products based on different criteria (e.g., category, price) 

  module.exports.getFilteredAndSortedProducts = async (req, res) => {
    const { category, minPrice, maxPrice, sortBy, sortOrder } = req.query;
  
    try {
      const products = await productRepository.getProducts({
        category,
        minPrice,
        maxPrice,
        sortBy,
        sortOrder,
      });
  
      res.status(200).json({ message: "View filtered and sorted products", products });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  };