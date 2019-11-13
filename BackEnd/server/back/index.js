var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var path = require('path');
var mysql = require('mysql');
var session = require('express-session');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get('/', function(req, res) {
    res.send('Hello World!');
});

var connection = mysql.createConnection({
  host: "remotemysql.com",
  user: "N2zzDc5rSI",
  password: "HcAdCteir0",
  database: "N2zzDc5rSI"
});

connection.connect();

app.listen(port, function() {
    console.log('API server started on: ' + port);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

