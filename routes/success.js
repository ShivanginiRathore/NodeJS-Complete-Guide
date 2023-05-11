const express = require('express');

const router = express.Router();

const successController = require('../controller/success');

router.post('/success', successController.successPage);

module.exports = router;