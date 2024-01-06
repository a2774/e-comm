const Product = require('../products/product.module');


module.exports.addproduct = async(req, res)=>{
    const {name,  description, price, category, brand, stock, imageUrl, createdAt, updatedAt}=req.body;

    try {
        const product = new Product({name,  description, price, category, brand, stock, imageUrl, createdAt, updatedAt});
        const newproduct = await product.save();
        res.status(200).json({message:"product add secusssfully", newproduct});

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"sever error"});
    }
}