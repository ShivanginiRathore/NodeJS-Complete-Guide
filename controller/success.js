const path = require('path');

const rootDir = require('../util/path');

exports.successPage = (req, res, next) => {
    res.sendFile(path.join(rootDir,'view','success.html'));
}