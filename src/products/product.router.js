const express = require('express');
const router = express.Router();
const productcontroller = require('../products/product.controller');

router.post('/addproduct', productcontroller.addProduct);
router.put('/update/:id', productcontroller.updateProduct);
router.delete('/delete/:id', productcontroller.deleteProduct);
router.get('/getallproduct', productcontroller.getAllProducts);
router.get('/getproduct/:id', productcontroller.getProduct);

module.exports = router;