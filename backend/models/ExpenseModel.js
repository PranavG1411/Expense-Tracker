const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    amount: {
      type: Number,
      required: true,
      maxlength: 20,
      trim: true,
    },
    type: {
      type: String,
      default: "expense",
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      maxlength: 20,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 20,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", ExpenseSchema);

// { timestamps: true } is an option object that can be passed to Mongoose schema definition to automatically add two fields to the documents stored in the corresponding MongoDB collection:

// createdAt: a timestamp that stores the creation time of the document
// updatedAt: a timestamp that stores the last modification time of the document
// When timestamps option is set to true, Mongoose will automatically manage the values of these two fields when saving or updating a document, without needing to manually set them in the code.
