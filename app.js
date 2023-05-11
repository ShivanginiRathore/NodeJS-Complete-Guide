const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

<<<<<<< HEAD
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactus');
const successRoutes = require('./routes/success');
=======
const loginRoutes = require('./routes/login');
>>>>>>> 557e037fc016afe044fd29d4d7699accad345a52

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))

<<<<<<< HEAD
app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);
=======
app.use(loginRoutes);
>>>>>>> 557e037fc016afe044fd29d4d7699accad345a52

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'view','404.html'));
});

app.listen(4001);