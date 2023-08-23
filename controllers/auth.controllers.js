const Usuarios = require('../model/usuario-model');
const bcrypt = require('bcrypt');

const crearUsuario = async (req, res) => {
	const { name, email, password } = req.body;

	try {
		//validar si el email del usuario existe en la base de datos
		let usuario = await Usuarios.findOne({ email });

		if (usuario) {
			return res.json({
				msg: 'El email que intenta registrase ya existe',
			});
		}

		usuario = new Usuarios(req.body);

		const salt = bcrypt.genSaltSync(10);
		usuario.password = bcrypt.hashSync(password, salt);

		await usuario.save();

		res.json({
			msg: 'Usuario Registrado',
		});
	} catch (error) {
		console.log(error);
	}
};

const loginUsuario = (req, res) => {
	res.send('Usuario Logueado');
};

module.exports = {
	crearUsuario,
	loginUsuario,
};
