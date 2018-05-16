
var urlBill = '/bills';

module.exports = function(app){
    var billController = require('../controllers/BillController');
    app.get(urlBill + '/bill/:id', billController.findBill);
    app.post(urlBill + '/bill', billController.saveBill);
};