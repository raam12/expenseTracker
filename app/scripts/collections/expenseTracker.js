/*global define*/

define([
  'underscore',
  'backbone',
  'models/expenseTracker'
], function (_, Backbone, ExpenseTrackerModel) {
  'use strict';

  var ExpenseTrackerCollection = Backbone.Collection.extend({
    model: ExpenseTrackerModel
  });

  return ExpenseTrackerCollection;
});
