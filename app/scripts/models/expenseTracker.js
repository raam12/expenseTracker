/*global define*/

define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  'use strict';

  var ExpenseTrackerModel = Backbone.Model.extend({
    url: '/api/add-expense',

    initialize: function() {
      this.expenseDate = new Date();
    },

    defaults: {
      category: '',
      cost: '',
      notes: '',
      date: ''
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

  return ExpenseTrackerModel;
});
