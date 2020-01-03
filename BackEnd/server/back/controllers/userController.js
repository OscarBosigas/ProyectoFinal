'user strict'

var User = require('../models/userModel.js');

exports.verify = function(req, res){
    User.verify(req.params.email, req.params.password, function(err, user){
        console.log('controller');
        if(err)
            res.send(err);
        console.log('res', user);
        res.send();
    });
};

