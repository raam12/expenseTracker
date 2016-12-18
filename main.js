var express = require('express'),
    bodyParser = require('body-parser'),
    ejs = require('ejs'),
    path = require('path');

var app = express();

var db = require('./server/helper/db'),
    dbUrl = 'mongodb://localhost/expensetracker';

db.connect(dbUrl);

var routes = require("./server/routes/index.js");

app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, './app/')));
app.use('/', routes);
app.set('port', 9000);

//	Server Setup
app.listen(app.get('port'), function() {
	console.log('Server Started & Listening @ ' + app.get('port'))
});
