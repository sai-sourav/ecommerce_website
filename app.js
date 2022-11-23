const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const productscontroller = require('./controllers/products');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactus');

app.use(bodyParser.urlencoded({ extended: false }));     // to get body of post request
app.use(express.static(path.join(__dirname, 'public'))); // css files to work

app.use('/admin', adminData);
app.use(shopRoutes);
app.use(contactRoutes);

app.use(productscontroller.errorpage);

app.listen(4000);
