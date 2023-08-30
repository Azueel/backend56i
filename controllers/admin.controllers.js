const Usuarios = require('../model/usuario-model');

const cargarUsuarios = async (req, res) => {
	try {
		const usuarios = await Usuarios.find();

		res.status(200).json({
			msg: 'usuarios enviados',
			usuarios,
		});
	} catch (error) {
		res.status(500).json({
			msg: 'Hable con el administrador',
		});
	}
};

module.exports = {
	cargarUsuarios,
};
