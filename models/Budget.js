const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const BudgetSchema = new Schema ({
    itemName: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    frequency: {
        type: String,
        required: true
        },
    nextPayment: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dateEntered: {
        type: Date,
        default: Date.now
    }
});
    
module.exports = Budget = mongoose.model('Budget', BudgetSchema);