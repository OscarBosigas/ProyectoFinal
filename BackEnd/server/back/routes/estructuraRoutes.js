'use strict';

module.exports = function (app) {
    var todoList = require('../controllers/estructuraController');

    app.route('/estructura')
    .post(todoList.addEstructure);

    app.route('/estructura/:cod_materia/:descripcion')
        .post(todoList.edit)
        .delete(todoList.remove);
    
    app.route('/estructura/:cod_materia')
        .get(todoList.getEstructura);
}
