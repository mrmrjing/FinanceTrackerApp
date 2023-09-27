const { addIncome, getIncome, deleteIncome } = require('../controllers/income');
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');

// getting the router 
const router = require('express').Router();


router.post('/add-income', addIncome); // endpoint for adding income
router.get('/get-income', getIncome); // endpoint for getting income
router.delete('/delete-income/:id', deleteIncome); // endpoint for deleting income

router.post('/add-expense', addExpense); // endpoint for adding expense
router.get('/get-expense', getExpense); // endpoint for getting expense
router.delete('/delete-expense/:id', deleteExpense); // endpoint for deleting expense

module.exports = router