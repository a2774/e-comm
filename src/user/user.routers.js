const express = require('express');
const router = express.Router();

const userController = require('../user/user.controller');
router.post('/adduser', userController.adduser);

module.exports = router;