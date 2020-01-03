'user strict'

var sql = require('../db.js');

var User = function(user){
    this.name = name;
    this.email = email;
    this.passord = password;
};

User.verify = function(email, password, result){
    sql.query("Select * from Usuarios where correo = ? and contraseña = ?", [this.email, this.password], function(err, res){
        if(err){
            console.log("Error", err);
        }else{
            result(null, res);
        }
    });

    
};