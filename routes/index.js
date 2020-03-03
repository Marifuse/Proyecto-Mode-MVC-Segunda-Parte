var express = require('express');
var router = express.Router();
var userController = require('../controllers/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Formulario de Registro' });
  userController.list_user(req, res, next); 
});

module.exports = router;
