define(['backbone', 'underscore', 'text!templates/menu.html', 'jquery'],
  function (Backbone, _, tplMenu, $) {
    'use strict';

    var menuView = Backbone.View.extend({
      name: 'menu',

      template: _.template(tplMenu),

      el: '#main-menu',

      events: {

      },

      initialize: function() {
        _.bindAll(this, "render", "bindToLinks");
      },

      render: function() {
        this.$el.html(this.template());
        //this.bindToLinks();
      },

      bindToLinks: function() {
        var $menuLinks = this.$el.find('a');
        var self = this;
        self.$el.find(el).on('click', function(e) {
          e.preventDefault();
        });
      }

    });
    return menuView;
  })
