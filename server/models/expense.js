var mongoose = require('mongoose');

var expenseSchema = new mongoose.Schema({
  category: { type: String, required: true },
  cost: { type: Number, required: true },
  notes: {type: String},
  date: { type: Date, required: true },
});

var expenseModel = mongoose.model('Expense', dailyExpenseSchema);

module.exports = expenseModel;
