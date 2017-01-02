define(['backbone', 'underscore', 'text!templates/main-container.html', 'views/expenseTracker', 'jquery'],
  function (Backbone, _, tplMainContainer, ExpenseTrackerView, $) {
    'use strict';

    var mainContainerView = Backbone.View.extend({
      name: 'main-container',

      template: _.template(tplMainContainer),

      el: '#main-container',

      events: {
        'click .add': 'showAddModal'
      },

      initialize: function() {
        _.bindAll(this, "render");
      },

      render: function() {
        this.$el.html(this.template());
      },

      showAddModal: function() {
        var expenseTrackerView = new ExpenseTrackerView({el: this.$el.find('.modal-container')});
        expenseTrackerView.render();
      }

    });
    return mainContainerView;
  })
