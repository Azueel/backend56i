const express = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');
const {
	cargarUsuarios,
	crearProducto,
	cargarProductos,
	eliminarProducto,
	editarProducto,
} = require('../controllers/admin.controllers');

//va a ser el nombre del router que definamos
const routerAdmin = express.Router();

routerAdmin.get('/cargarUsuario', cargarUsuarios);

routerAdmin.post(
	'/new',
	[
		check('name', 'El nombre es obligatorio').not().isEmpty(),
		check('precio', 'Por favor ingrese un valor').not().isEmpty(),
		check('descripcion', 'la descripcion no es valida').isLength({
			min: 10,
		}),

		validarCampos,
	],
	crearProducto
);

routerAdmin.get('/cargarProducto', cargarProductos);

routerAdmin.delete('/eliminar/:id', eliminarProducto);

routerAdmin.put('/editar', editarProducto);

module.exports = routerAdmin;
