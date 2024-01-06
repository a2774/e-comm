const express = require('express');
const router = express.Router();
const productcontroller = require('../products/product.controller');

router.post('/addproduct', productcontroller.addproduct);
router.put('/update/:id', productcontroller.update);
router.delete('/delete/:id', productcontroller.delete);
router.get('/getallproduct', productcontroller.getallproduct);
router.get('/getproduct/:id', productcontroller.getproduct);

module.exports = router;