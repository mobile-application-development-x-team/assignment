var mongoose = require('mongoose');
const _ = require('lodash');

var ProductSchema = new mongoose.Schema({
    name: {
        type: String
    },
    id_type: {
        type: Number
    },
    price: {
        type: String
    },
    color: {
        type: String
    },
    material: {
        type: String
    },
    description: {
        type: String
    },
    new: {
        type: Number
    },
    inCollection: {
        type: Number
    },
    images: [{
        link: {
            type: String
        }
    }]
});

ProductSchema.methods.toJSON = function(){
    var product = this;
    var productObject = product.toObject();

    return _.pick(productObject, ['_id', 'name', 'id_type', 'price', 'color', 'material', 'description', 'new', 'inCollection', 'images']);
}

var Product = mongoose.model('products', ProductSchema);

module.exports = Product;