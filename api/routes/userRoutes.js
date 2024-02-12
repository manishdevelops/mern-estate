const express = require('express');
const userController = require('./../controllers/userController');
const verifyUser = require('../utils/verifyUser');

const router = express.Router();

router.get('/test', userController.test);
router.post('/update/:id', verifyUser.verifyToken, userController.updateUser);

module.exports = router;