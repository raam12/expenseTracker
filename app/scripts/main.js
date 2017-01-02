/*global require*/
'use strict';

require.config({
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
  },
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    require: '../bower_components/requirejs/require',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/lodash/dist/lodash',
    bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
    text: '../bower_components/requirejs-text/text'  }
});

define(function(require) {
  var $ = require('jquery'),
      Backbone = require('backbone'),
      _ = require('underscore');

  var ApplicationView = require('views/application');

  var appView = null;
  appView = new ApplicationView();
  appView.render();
  appView.setup();
  appView.renderSubViews();

  Backbone.history.start({ pushState: true, root:'/a/' });
});
