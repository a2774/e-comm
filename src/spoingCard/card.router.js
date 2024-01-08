const express = require('express');
const router = express.Router();
const cardcontroller = require('../spoingCard/card.controller');

router.post('/addcard', cardcontroller.addToCart)
router.get('/viewitem', cardcontroller.viewAllProducts);
router.get('/allviewproduct', cardcontroller.countAllProducts);
router.post('/updateitem/:id', cardcontroller.updateCartItemQuantity);


module.exports = router;

