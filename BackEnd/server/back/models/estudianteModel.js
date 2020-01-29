'use strict';
var sql = require('../db');

var Estudiante = function(estudiante){
    this.doc = estudiante.doc;
    this.nombre = estudiante.nombre;
    this.apellido = estudiante.apellido;
    this.codigo = estudiante.codigo;
    this.contrasena = estudiante.contrasena;
};

Estudiante.getEstudiantes = function getEstudiantes(result) {
    sql.query("SELECT * FROM ESTUDIANTE", (err, rows, fields) => {
        if (!err)
            console.log(rows);
        else
            console.log(err);
    })
};

module.exports = Estudiante;