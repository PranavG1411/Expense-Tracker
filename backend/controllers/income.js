const IncomeSchema = require("../models/incomemodule");

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const income = IncomeSchema({
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
    res.status(200).json({ message: "Income Added" });
  } catch (error) {
    // handle the error
    res.status(500).json({ message: "Server Error" });
  }
  console.log(income);
};

exports.getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
// delete by id
exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Income Deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
      console.log(err);
    });
};


/* This is a module that exports three functions related to managing income data.

The first function, addIncome, takes in a request object that includes data such as the income's title, amount, category, description, and date. The function creates a new instance of the IncomeSchema model using this data and attempts to save it to the database. It first checks if all the required fields are present in the request, and if the amount is a positive number. If any of these checks fail, it returns an appropriate error response. If the save operation is successful, it logs the saved income data and sends a success response.

The second function, getIncomes, retrieves all income data from the database and sends it as a response. It first sorts the income data by creation date in descending order, so that the most recent income data appears first in the response.

The third function, deleteIncome, takes in an income ID parameter from the request and attempts to delete the corresponding income data from the database. If the deletion operation is successful, it sends a success response. If it fails, it sends an error response.*/