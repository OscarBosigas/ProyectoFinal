'user strict';
var sql = require('../db');

var Nota = function(nota){
    this.doc = nota.doc;
    this.cod_materia = nota.cod_materia;
    this.valor = nota.valor;
};


Nota.calificar = function (nota, result) {
    sql.query("INSERT INTO NOTA SET ?", nota, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else
            result(null, res);
    });
};

Nota.editar = function (cod_materia, doc, nota, result) {
    sql.query("UPDATE NOTA SET valor = ? where cod_materia = ? and doc = ?", [nota.valor, cod_materia, doc], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else
            result(null, res);
    });
};

Nota.getNota = function getNota(cod_materia, cod,  result) {
    sql.query("SELECT valor FROM NOTA n, ESTUDIANTE e WHERE n.doc = e.doc AND n.COD_MATERIA = ? AND e.CODIGO = ?",
     [cod_materia, cod], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else
            result(null, res);
    });
};

Nota.getNotasCurso = function(doc, result) {
    sql.query("SELECT valor FROM NOTA n, ESTUDIANTE e WHERE n.doc = e.doc and e.doc = ?", doc, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            }
            else
                result(null, res);
        });
}

module.exports = Nota;