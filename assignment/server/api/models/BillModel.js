var mongoose = require('mongoose');

var BillSchema = new mongoose.Schema({
    id_user: {
        type: String
    },
    note: {
        type: String,
        default: "Empty"
    },
    total_cost: {
        type: Number,
        default: 0
    },
    status: {
        type: Number,
        default: 0
    },
    order_date: {
        type: Date,
        default: Date.now()
    },
    products: [
        {
            id_product: {
                type: String
            },
            name: {
                type: String
            },
            price: {
                type: Number
            },
            amount: {
                type: Number
            }
        }
    ]
});

var Bill = mongoose.model('bills', BillSchema);
module.exports = Bill;