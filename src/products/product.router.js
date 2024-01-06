const express = require('express');
const router = express.Router();
const productcontroller = require('../products/product.controller');

router.post('/addproduct', productcontroller.addproduct);


module.exports = router;