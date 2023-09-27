
const IncomeSchema = require('../models/IncomeModel');
exports.addIncome = async (req, res) => {
        const { title, amount, type, date, category, description } = req.body;

        const newIncome = new IncomeSchema({
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
            await newIncome.save() // save the new income to the database
            console.log(newInincome)
            res.status(200).json({ message: 'Income added successfully' })
        } catch (error) {
            return res.status(500).json({ message: "Server Error" });
        }
};

exports.getIncome = async (req, res) => {
    try {
        const income = await IncomeSchema.find().sort({ createdAt: -1}) // sort the income by date in descending order
        res.status(200).json({ income })
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });
    }
}

exports.deleteIncome = async (req, res) => {
    const { id } = req.params;
    console.log(params);
    IncomeSchema.findByIdAndDelete(id).then((income) => {
        res.status(200).json({ message: 'Income deleted successfully' })
    })
    .catch((err) => {
        return res.status(500).json({ message: "Server Error" });
    })
}
