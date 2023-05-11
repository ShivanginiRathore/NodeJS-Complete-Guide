const path = require('path');

const rootDir = require('../util/path');


exports.getProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir,'view','add-product.html'));
}

exports.postProduct = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
}