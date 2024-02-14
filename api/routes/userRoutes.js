const express = require('express');
const userController = require('./../controllers/userController');
const verifyUser = require('../utils/verifyUser');

const router = express.Router();

router.get('/test', userController.test);
router.post('/update/:id', verifyUser.verifyToken, userController.updateUser);
router.delete('/delete/:id', verifyUser.verifyToken, userController.deleteUser);
router.get('/listings/:id', verifyUser.verifyToken, userController.getUserListings);


module.exports = router;