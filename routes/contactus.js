const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();



router.get('/contact-us',(req, res, next) => {
    res.sendFile(path.join(rootDir,'view','contact-us.html'));
});

module.exports = router;