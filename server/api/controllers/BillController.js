
const _  = require('lodash');

Bill = require('../models/BillModel');

// GET a bill via id_User
exports.findBill = function(req, res){
    var id_user = req.params.id_user;

    Bill.find({id_user: id_user}, function(err, bills){
        if(err)
            res.send(err);
        res.send(bills);
        res.end();
    });
};

// SAVE a bill
exports.saveBill = function(req, res){
    var body = _.pick(req.body, ['_id', 'id_user', 'note', 'total_cost', 'status', 'order_date', 'products']);
    Bill.create(body, function(err){
        if(err)
            res.send(err);
        res.send('SAVED BILL');
        res.end();
    });
};
