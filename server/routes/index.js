var express = require("express"),
    fs = require('fs'),
    _ = require('underscore'),
    async = require("async");

var router = express.Router();

var ExpenseModel = require('../models/expense');

router.get('/', function(req, res) {
  res.render('index');
});

router.post('/add-expense/:expenseId', function(req, res) {
  var expenseModel = new ExpenseModel({
    category: req.body.category,
    cost: req.body.cost,
    notes: req.body.notes,
    date: req.body.date
  });
  expenseModel.save(function(err, expense) {
    if(err) {
      return res.status(500).json({
        'message': 'Could not save expense details'
      });
    } else {
      return res.status(200).json({
        'expense_detail': expense
      });
    }
  });
});

module.exports = router;
