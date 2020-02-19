'use strict';

module.exports = function (app) {
    var todoList = require('../controllers/materiaController');

    app.route('/materia/docente/:doc_docente')
        .get(todoList.getMateriasDocente);

    app.route('/materia/:cod_curso')
        .get(todoList.getMateriasCurso);

    app.route('/materia/:cod_materia')
        .get(todoList.getMateria);

}