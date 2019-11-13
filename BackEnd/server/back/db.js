'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
  host: "remotemysql.com",
  user: "N2zzDc5rSI",
  password: "HcAdCteir0",
  database: "N2zzDc5rSI"
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;