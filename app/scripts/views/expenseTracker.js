/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/add-expense.html',
  'collections/expenseTracker',
  'models/expenseTracker'
], function ($, _, Backbone, tplAddExpenseModal, expenseTracker, expenseModel) {
  'use strict';

  var expenseTrackerView = Backbone.View.extend({
    template: _.template(tplAddExpenseModal),

    events: {
      'click .js-modal': 'closeModal'
      'click .js-save': 'saveClick'
    },

    initialize: function () {
      //_.bind(this, render);
    },

    render: function () {
      this.$el.html(this.template());
    },

    saveClick: function(event) {
      var self = this;
      event.preventDefault();
      expenseObj = get
    },

    getValues: function() {
      return {
        category: this.$el.find('#category-type option:selected').val();
        cost: this.$el.find('.expense-cost').val();
        notes: this.$el.find('.expense-desc').val();
      }
    },

    closeModal: function() {
      this.remove();
    }
  });

  return expenseTrackerView;
});
