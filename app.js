const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//allows us to set a global configuration value, that can be read trough app.get
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');

//middleware for parsing bodies from URL. 
app.use(bodyParser.urlencoded({extended: false}));
//allows me to serve static pages for the css
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

//default path of app.use is /
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle:'Page Not Found'});
});

app.listen(3000);
