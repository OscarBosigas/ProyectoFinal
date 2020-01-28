'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
  host: "remotemysql.com",
  user: "Dl4apWt3Vb",
  password: "bnFFRSyDOT",
  database: "Dl4apWt3Vb"
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;