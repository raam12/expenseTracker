define(function (require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        $ = require('jquery');

    var tplApplication = require('text!templates/application.html'),
        MainMenu = require('views/menu'),
        mainContainer = require('views/mainContainer');

    var ApplicationView = Backbone.View.extend({

      name: 'application',

      el: '#wrapper',

      template: _.template(tplApplication),

      initialize: function() {
        this.mainMenu = null;
        this.mainContainer = null;
      },

      events:{

      },

      setup: function() {
        var self = this;
        self.mainMenu = new MainMenu();
        self.mainContainer = new mainContainer();
      },

      render: function() {
        this.$el.html(this.template());
      },

      renderSubViews: function() {
        this.mainMenu.render();
        this.mainContainer.render();
      }
    });

    return ApplicationView;
});
