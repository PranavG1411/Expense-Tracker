const {
  addExpense,
  getExpense,
  deleteExpense,
} = require("../controllers/expense");
const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/income");

const router = require("express").Router();

router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expense", getExpense)
  .delete("/delete-expense/:id", deleteExpense);

module.exports = router;

/* This is a router module that defines the routes for the server to handle incoming HTTP requests. It imports several functions from two different controller modules: expense.js and income.js.*/