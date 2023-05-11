const path = require('path');

const rootDir = require('../util/path');


exports.contactUS = (req, res, next) => {
    res.sendFile(path.join(rootDir,'view','contact-us.html'));
}