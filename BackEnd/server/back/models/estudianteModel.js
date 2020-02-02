'user strict';
var sql = require('../db');

var Estudiante = function(estudiante){
    this.doc = estudiante.doc;
    this.nombre = estudiante.nombre;
    this.apellido = estudiante.apellido;
    this.codigo = estudiante.codigo;
    this.contrasena = estudiante.contrasena;
};

Estudiante.createEstudiante = function createEstudiante(estudiante, result) {
    sql.query("INSERT INTO ESTUDIANTE set ?", estudiante, function(err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.estudiante);
            result(null, res.estudiante);
        }
    });
};

Estudiante.getEstudiantes = function getEstudiantes(result) {
    sql.query("SELECT * FROM ESTUDIANTE", (err, res) => {
        if (err){
            console.log("error:", err);
            result(null, err);
        }
        else{
            console.log("Estudiantes: ", res);
            result(null, res);
        }
    })
};

Estudiante.getAEstudiante = function getAEstudiante(doc, result) {
    sql.query("SELECT * FROM ESTUDIANTE WHERE DOC = ? ", doc ,(err, res) => {
        if (err){
            console.log("error: ", err);
            result(err, null);
        }
        else
            result(null, res);
    })
};

Estudiante.editEstudiante = function editEstudiante(doc, estudiante, result) {
    sql.query("UPDATE ESTUDIANTE SET nombre = ?, apellido = ?, codigo = ?, contrasena = ? where doc = ?" ,
    [estudiante.nombre, estudiante.apellido, estudiante.codigo, estudiante.contrasena, doc],
    function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Estudiante.remove = function(doc, result) {
    sql.query("DELETE FROM ESTUDIANTE WHERE doc = ?",
    [doc], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Estudiante;