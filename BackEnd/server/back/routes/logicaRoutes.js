'use strict';

module.exports = function (app) {
    var todoList = require('../controllers/logicaController');

    app.route('/login/:usuario/:contrasena')
        .get(todoList.login);

    app.route('/materia/estudiantes/:cod_materia')
        .get(todoList.getEstudiantesPorMateria);
       
};
