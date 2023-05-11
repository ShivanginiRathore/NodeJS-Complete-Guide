const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactus');
const successRoutes = require('./routes/success');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))


app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'view','404.html'));
});

app.listen(4001);