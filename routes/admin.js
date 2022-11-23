const express = require('express');

const router = express.Router();

const productscontroller = require('../controllers/products')
// /admin/add-product => GET
router.get('/add-product', productscontroller.getaddproduct);

// /admin/add-product => POST
router.post('/add-product', productscontroller.postaddproduct);

module.exports = router;
