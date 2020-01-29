'use strict';

var Estudiante = require('../models/estudianteModel');

exports.list_estudiantes = function (req, res) {
    Estudiante.getAllEstudiantes(function (err, estudiante) {
        console.log('controller');
        if (err)
            res.send(err);
        console.log('res', estudiante);
        res.send(estudiante);
    });
};