// Grab everything in this folder and require it.

var fs = require('fs');

exports.index = function(req, res){
    res.render('index');
};
