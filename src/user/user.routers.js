const express = require('express');
const router = express.Router();

const userController = require('../user/user.controller');
router.post('/adduser', userController.addUser);
router.post('/login', userController.login);
module.exports = router;