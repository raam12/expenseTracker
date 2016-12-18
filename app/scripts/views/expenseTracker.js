/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/add-expense.html'
], function ($, _, Backbone, tplTest) {
  'use strict';

  var ExpenseTrackerView = Backbone.View.extend({
    template: _.template(tplTest),

    events: {
      'click .testClick': 'alertFunc'
    },

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    alertFunc() {
      console.log(this);
    }

    render: function () {
      this.$el.html(this.template());
    }
  });

  return ExpenseTrackerView;
});
