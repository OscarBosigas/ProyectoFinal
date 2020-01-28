'user strict';
var sql = require('../db');

var Estudiante = function(estudiante){
    this.doc = estudiante.doc;
    this.nombre = estudiante.nombre;
    this.apellido = estudiante.apellido;
    this.codigo = estudiante.codigo;
    this.contrasena = estudiante.contrasena;
};

Estudiante.createEstudiante = function createUser(estudiante, result) {
    sql.query("INSERT INTO ESTUDIANTE set ?", estudiante, function(err, res){

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
}