// Función registro de usuarios
var User  = require('../models/users');
var bcrypt   = require('bcryptjs');
exports.user_create = function(req, res, next) {
    if (req.body) {
        let items = req.body
        User.create(items, function(err, newUsers){
            if(err) return res.json({ error: err });
            // return res.json(newUsers);
            res.redirect("/");
        });
    } else {
        return res.json({status: 'ERROR', message: 'Todos los Campos son OBLIGATORIOS'}); //opcional mandar un mensaje de error
    }
  }

// Función agregar usuarios en la lista
exports.list_user = function(req, res, next) {
    User.find({}, (err, data) => {
        if(err) return res.json({ error:err });
        res.render('index', { title: 'Formulario', list: data });
    });
}