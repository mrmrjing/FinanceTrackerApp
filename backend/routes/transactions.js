const { addIncome, getIncome, deleteIncome } = require('../controllers/income');

// getting the router 
const router = require('express').Router();


router.post('/add-income', addIncome); // endpoint for adding income
router.get('/get-income', getIncome); // endpoint for getting income
router.delete('/delete-income/:id', deleteIncome); // endpoint for deleting income

module.exports = router