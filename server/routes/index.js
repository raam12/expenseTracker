var express = require("express"),
    fs = require('fs'),
    _ = require('underscore'),
    async = require("async");

var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
