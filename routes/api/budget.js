const express = require ('express');
const router = express.Router();

// Budget Model

const Budget = require('../../models/Budget');

// @route GET api/budgets
// @descr  Get all budget items

router.get('/', (req, res) => {
    Budget.find()
    .sort({date: -1})
    .then(budgetItems => res.json(budgetItems))
});

// @route POST api/budgets
// @descr  Create a budget item

router.post('/', (req, res) => {
    const newBudget = new Budget ({
        itemName: req.body.itemName,
        amount:  req.body.amount,
        frequency:  req.body.frequency,
        nextPayment:  req.body.nextPayment,
        category:  req.body.category
    })

    newBudget.save().then(budgetItems => res.json(budgetItems));
});

// @route DELETE api/budgets/:id
// @descr  Delete a budget item

router.delete('/:id', (req, res) => {
    Budget.findById(req.params.id)
    .then(budgetItems => budgetItems.remove().then(() => res.json({success: true}))).catch(err => res.status(404).json({success: false}));


});

module.exports = router;