const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.post

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir,'view','add-product.html'));
});

// for only incoming get/post request
// /admin/add-product => POST
router.post('/add-product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
