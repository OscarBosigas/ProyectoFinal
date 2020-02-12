'use strict';

var Admin = require('../models/logicaModel');

exports.login = function (req, res) {
    Admin.login(req.params.usuario, function (err, admin) {
        if (err)
            res.send(err);
        res.send(admin);
    });
};