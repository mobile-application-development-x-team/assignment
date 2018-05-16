var mongoose = require('mongoose');

var ProductTypeSchema = new mongoose.Schema({
    id_type: {
        type: Number
    },
    name: {
        type: String
    },
    url_image: {
        type: String
    }
});

var ProductType = mongoose.model('product_types', ProductTypeSchema);

module.exports = ProductType;