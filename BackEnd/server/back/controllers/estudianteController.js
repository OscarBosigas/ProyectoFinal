'use strict';

var Estudiante = require('../models/estudianteModel');

exports.createEstudiante = function(req, res) {
  
    var newEstudiante = new Estudiante(req.body);

    if (!new_estudinate.doc || !new_estudinate.nombre || !new_estudinate.apellido || !new_estudinate.codigo || !new_estudinate.contrasena) {
        res.status(400).send([ error: true, message: 'Please provide al information']);
    } else {
        Estudiante.createEstudiante(new_activiy, function(err, activiy) {
            if(err)
                res.send(err);
            res.json(estudiante);
        });
    }
};