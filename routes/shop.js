const productscontroller = require('../controllers/products')
const express = require('express');
const router = express.Router();

router.get('/', productscontroller.getproducts);

module.exports = router;
