const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  //create path for any OS (that's why I dont use a complete path) from the folder its called
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
