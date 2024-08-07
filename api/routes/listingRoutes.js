const express = require('express');
const listingController = require('../controllers/listingController');
const verifyUser = require('../utils/verifyUser');

const router = express.Router();

router.post('/create', verifyUser.verifyToken, listingController.createListing);

router.delete('/delete/:id', verifyUser.verifyToken, listingController.deleteListing);

router.post('/update/:id', verifyUser.verifyToken, listingController.updateListing);

router.get('/get/:id', listingController.getListing);

router.get('/get', listingController.getListings);


module.exports = router;

