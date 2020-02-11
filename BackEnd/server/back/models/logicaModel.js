'use strict';
var sql = require('../db');

var Admin = function(admin){
    this.usuario = admin.usuario;
    this.contrasena = admin.contrasena;
}

Admin.login = function login(usuario, result) {
    sql.query("SELECT * FROM Admin WHERE usuario = ? ", usuario, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else
            result(null, res);
    })
};
module.exports = Admin;