
var urlProductType = '/types';

module.exports = function(app){
    var productTypeController = require('../controllers/ProductTypeController');

    app.get(urlProductType, productTypeController.getListProductType);
    app.post(urlProductType + '/type', productTypeController.createProductType);
}