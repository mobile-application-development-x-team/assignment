var ProductType = require('../models/ProductTypeModel');
const _ = require('lodash');

// GET list types of product
exports.getListProductType = function(req, res){
    ProductType.find(function(err, types){
        if(err)
            res.send(err);
        res.send(types);
        res.end();
    });
};

// Create product type
exports.createProductType = function(req, res){
    var body = _.pick(req.body, ['_id', 'id_type', 'name', 'url_image']);
    ProductType.create(body, function(err, type){
        if(err)
            res.send(err);
        res.send({"MESSAGE": "INSERTED TYPE"});
        res.end();
    });
};

