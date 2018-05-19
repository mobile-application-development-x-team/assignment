const _ = require('lodash');

var urlProduct = '/products';

module.exports = function(app){
    var productController = require('../controllers/ProductController');

    app.route(urlProduct + '/:proID')
        .get(productController.findProduct);
    
    app.get('/new', productController.findNew);
    app.get('/incollection', productController.findInCollection);
    app.post(urlProduct + '/product', productController.createProduct);
    app.get(urlProduct + '/search/:key', productController.searchProducts);
    app.get(urlProduct + '/type/:id_type', productController.findByIdType);
}