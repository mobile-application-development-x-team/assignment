
var mongoose = require('mongoose');
const _ = require('lodash');

Product = require('../models/ProductModel');

// GET top products
exports.findNew = function (req, res) {
    console.log('GET TOP PRODUCT');
    Product.find({"new": 1}, function (err, products) {
        if (err)
            res.jon(err);
        res.json(products);
        res.end();
    });
};

// GET simple product
exports.findProduct = function (req, res) {
    Product.findById(req.params.proID, function (err, product) {
        if (err)
            res.json(err);
        res.json(product);
        res.end();
    });
};

// GET list products via key_search(color)
exports.searchProducts = function (req, res) {
    var key = req.params.key;
    console.log(key);
    Product.find({"color": new RegExp(key, "i")}, function (err, results) {
        if (err)
            res.json(err);
        console.log(results);
        res.json(results);
        res.end();
    });
};

// GET list products via id_type
exports.findByIdType = function (req, res){
    var id_type = req.params.id_type;
    Product.find({id_type: id_type}, function(err, products){
        if(err)
            res.json(err);
        res.json(products);
        res.end();
    });
};

//GET products in Collection
exports.findInCollection = function(req, res){
    Product.find({"inCollection": 1}, function(err, products){
        if(err)
            res.json(err);
        res.json(products);
        res.end();
    });
}

// CREATE product
exports.createProduct = function (req, res) {
    var body = _.pick(req.body, ['_id', 'name', 'id_type', 'price', 'color', 'material', 'description', 'new', 'inCollection', 'images']);
    Product.create(body, function (err, product) {
        if (err)
            res.json(err);
        res.json({ "MESSAGE": "INSERTED PRODUCT" });
        res.end();
    });
};




