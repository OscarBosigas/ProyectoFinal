'use strict';

var Materia = require('../models/materiaModel');

exports.getMateriasDocente = function (req, res) {
    Materia.getMateriasDocente(req.params.doc_docente, function (err, materia) {
        if (err)
            res.send(err);
        res.json(materia);
    });
};

exports.getMateriasCurso = function (req, res) {
    Materia.getMateriasCurso(req.params.doc, req.params.cod_curso, function (err, materia) {
        if (err)
            res.send(err);
        res.json(materia);
    });
};

exports.getMateria = function(req, res) {
    Materia.getMateria(req.params.cod_materia, function (err, materia) {
        if (err)
            res.send(err);
        res.json(materia);
    });
};