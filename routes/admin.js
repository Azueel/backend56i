const express = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');
const { cargarUsuarios } = require('../controllers/admin.controllers');

//va a ser el nombre del router que definamos
const routerAdmin = express.Router();

routerAdmin.get('/cargarUsuario', cargarUsuarios);

module.exports = routerAdmin;
