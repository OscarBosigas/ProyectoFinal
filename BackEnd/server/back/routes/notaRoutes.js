'use strict';

module.exports = function (app) {
    var todoList = require('../controllers/notaController');

    app.route('/nota')
        .post(todoList.calificar);

    app.route('/nota/estudiante/:doc')
        .get(todoList.getNotasCurso);

    app.route('/nota/codigo/:cod_materia/:cod')
        .get(todoList.getNota);

    app.route('/nota/:cod_materia/:doc')
        .post(todoList.edit);
};
