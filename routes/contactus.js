const express = require('express');
const router = express.Router();

const productcontroller = require('../controllers/products');

router.use('/contactus',productcontroller.contactus);

router.use('/success',productcontroller.success);

module.exports = router;