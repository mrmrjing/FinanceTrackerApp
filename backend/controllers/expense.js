
const ExpenseSchema = require('../models/ExpenseModel');
exports.addExpense = async (req, res) => {
        const { title, amount, type, date, category, description } = req.body;

        const newExpense = new ExpenseSchema({
            title,
            amount,
            type,
            date,
            category,
            description,
        });

        // Validation 
        try{
            if (!title || !type || !date || !category || !description) {
                return res.status(400).json({ message: 'Please enter all fields' })
            }
            if (amount <= 0 || isNaN(amount)){
                return res.status(400).json({ message: 'Please enter a valid amount' })
            }
            await newExpense.save() // save the new expense to the database
            res.status(200).json({ message: 'Expense added successfully' })
        } catch (error) {
            return res.status(500).json({ message: "Server Error" });
        }
};

exports.getExpense = async (req, res) => {
    try {
        const expense = await ExpenseSchema.find().sort({ createdAt: -1}) // sort the income by date in descending order
        res.status(200).json({ expense })
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });
    }
}

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    ExpenseSchema.findByIdAndDelete(id).then((expense) => {
        res.status(200).json({ message: 'Expense deleted successfully' })
    })
    .catch((err) => {
        return res.status(500).json({ message: "Server Error" });
    })
}
