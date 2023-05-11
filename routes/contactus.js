const express = require('express');

const router = express.Router();

const contactController = require('../controller/contact')

router.get('/contact-us', contactController.contactUS);

module.exports = router;