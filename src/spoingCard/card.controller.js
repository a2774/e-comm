const CartItem = require('../spoingCard/card.model');
const Product = require('../products/product.module');
module.exports.addToCart = async(req, res)=>{
    const {productId, quantity} = req.body;
    try {
        const addcart = new CartItem({productId, quantity});
        const newaddcart = await addcart.save();
        const productid = await Product.findOne(req.params.id);
        if(!productId){
            return res.status(404).json({message:"require product id"});
        }
        res.status(200).json({Message:"add Item sucessfuly", newaddcart, productId});
    } catch (error) {
        console.log(error);
        res.status(500).json({Error:"Sever is Error"});
    }
}

module.exports.viewAllProducts = async (req, res) => {
    try {
      const allProducts = await Product.find();
      res.status(200).json({ products: allProducts });
    } catch (error) {
      console.log(error);
      res.status(500).json({ Error: "Server error" });
    }
  };

  module.exports.countAllProducts = async (req, res) => {
    try {
      const totalProducts = await Product.countDocuments();
      res.status(200).json({ totalProducts });
    } catch (error) {
      console.log(error);
      res.status(500).json({ Error: "Server error" });
    }
  };

  module.exports.updateCartItemQuantity = async (req, res) => {
  try {
    const updateproduct = await CartItem.findById(req.params.id);
    if(!updateproduct){
     return res.status(404).json({message:"product is not avalble here"});
    };
    updateproduct.set(req.body);
    const newupdateproduct = await updateproduct.save();
    res.status(200).json({message:"product update", newupdateproduct});

  } catch (error) {
    console.log(error);
    res.status(500).json({error:"server is error"});
  }
  };