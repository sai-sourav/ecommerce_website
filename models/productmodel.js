const products = [];
const rootdir = require('../util/path');
const path = require('path');
const p = path.join(rootdir,'data','products');
const fs = require('fs');

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
};

module.exports = class Product{
    constructor(title){
        this.id = Math.random().toString();
        this.title = title;
    }
    save(){
        getProductsFromFile(products =>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                if (err) {
                    console.log(err)
                }
            })
        })
    }

    static fetchall(cb){
        // return products;
        getProductsFromFile(cb);
    }
}