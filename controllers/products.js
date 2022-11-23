const Product = require('../models/productmodel');

exports.getaddproduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
};

exports.contactus = (req, res, next) => {
  res.render('contactus');
};

exports.success = (req, res, next) => {
  res.send('<p>form successfully filled</p>');
};

exports.postaddproduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    // products.push({ title: req.body.title });
    res.redirect('/');
};

exports.getproducts = (req, res, next) => {
    // const products = Product.fetchall();
    // res.render('shop', {
    //   prods: products,
    //   pageTitle: 'Shop',
    //   path: '/',
    //   hasProducts: products.length > 0,
    //   activeShop: true,
    //   productCSS: true
    // });
    Product.fetchall(products => {
      res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    });
};

exports.errorpage = (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
};