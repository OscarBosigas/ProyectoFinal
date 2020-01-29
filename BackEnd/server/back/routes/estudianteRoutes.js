'use strict';

module.exports = function(app){
    var todoList = require('../controllers/estudianteController');

    app.route('/estudiante')
        .get(todoList.list_estudiantes);
};
