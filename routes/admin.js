

const express = require('express');
const router = express.Router();

const adminController = require('../controller/admin')



// /admin/add-product => GET
router.get('/add-product', adminController.getProduct);

// for only incoming get/post request
// /admin/add-product => POST
router.post('/add-product', adminController.postProduct);

module.exports = router;
