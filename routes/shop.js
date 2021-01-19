const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
  //depreciated by using EJS
  //create path for any OS (that's why I dont use a complete path) from the folder its called
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
