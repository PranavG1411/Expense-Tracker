const ExpenseSchema = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const income = ExpenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });
  try {
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (amount <= 0 || !amount === "number") {
      return res.status(400).json({ message: "Amount Must be positive!" });
    }
    await income.save();
    console.log(income); // log the saved income data
    res.status(200).json({ message: "Expense Added" });
  } catch (error) {
    // handle the error
    res.status(500).json({ message: "Server Error" });
    console.log(error);
  }
  console.log(income);
};

exports.getExpense = async (req, res) => {
  try {
    const incomes = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
// delete by id
exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  ExpenseSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Expense Deleted" });
      console.log(this.deleteExpense)
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
      console.log(err);
    });
};
