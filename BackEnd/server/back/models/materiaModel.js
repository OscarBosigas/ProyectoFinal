'use strict';

var sql = require('../db');

var Materia = function (materia) {
    this.cod_materia = materia.cod_materia;
    this.cod_periodo = materia.cod_periodo;
    this.cod_curso = materia.cod_curso;
    this.cod_docente = materia.cod_docente;
    this.nom_materia = materia.nom_materia;
    this.num_horas = materia.num_horas;
}

Materia.getMateriasDocente = function (doc_docente, result) {
    sql.query("SELECT * FROM MATERIA WHERE DOC_DOCENTE = ?", doc_docente, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
};

Materia.getMateriasCurso = function (cod_curso, result) {
    sql.query("SELECT COD_MATERIA, NOM_MATERIA, NUM_HORAS, NOM_CURSO, COD_PERIODO FROM CURSO c, MATERIA m WHERE c.cod_curso=m.cod_curso AND c.COD_CURSO = ?", cod_curso, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
};

Materia.getMateria = function(cod_materia, result) {
    sql.query("SELECT * FROM MATERIA WHERE COD_MATERIA = ?", cod_materia, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
}; 

module.exports = Materia;