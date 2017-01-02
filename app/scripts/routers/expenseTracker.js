/*global define*/

define([
  'jquery',
  'backbone'
], function ($, Backbone) {
  'use strict';

  var ExpenseTrackerRouter = Backbone.Router.extend({
    routes: {
      'automate(/)': 'root',
      'add-expense(/)': 'expenseTracker',
      'reports(/)': 'reports'
    },

    views: {
      'reports': require('views/reports'),
      'add-expense': require('views/expenseTracker')
    },

  });

  return ExpenseTrackerRouter;
});
