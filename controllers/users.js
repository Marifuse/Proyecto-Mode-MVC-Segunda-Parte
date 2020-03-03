var User = require('../models/users');
exports.user_create = function (req, res, next, callback) {
    console.log("entrar al controlador");
    if (req.body) {
        console.log("Datos ingresados correctamente");
        let items = req.body;
        User.create(items, function (err, newUsers) {
            console.log("Se está creando el usuario");
            if (err) return res.json({ error: err });
            console.log("listo");
            res.json(newUsers)
        });
    } else {
        res.json({
            status: 'ERROR', message: 'Todos los Campos son OBLIGATORIOS'}); //mandar mensaje de error
    }
}

// Función agregar usuarios en la lista
exports.list_user = function(req, res, next) {
    User.find({}, (err, data) => {
        if(err) return res.json({ error:err });
        res.render('index', { title: 'Express 2', list: data });
    });
}

// Función cambiar Ñ por doble N
function cambiarLetra(arreglo) {

    arreglo.map(function (arreglo) {

        if (arreglo.name.includes('\u00f1')) {
            let nombre = arreglo.name;
            arreglo.name = nombre.replace(new RegExp("\u00f1", 'gi'), "n");// Poner nn
        }
        if (arreglo.lastname.includes('\u00f1')) {
            let apellido = arreglo.lastname;
            arreglo.lastname = apellido.replace(new RegExp("\u00f1", 'gi'), "n");// Poner nn
        }
    });
    
    return arreglo;  
}