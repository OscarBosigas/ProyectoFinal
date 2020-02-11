'use strict';

module.exports = function (app) {
    var todoList = require('../controllers/logicaController');

    app.route('/login/:usuario')
        .get(todoList.login);
       
};
