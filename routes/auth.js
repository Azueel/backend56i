const express = require('express');
const { crearUsuario, loginUsuario } = require('../controllers/auth.controllers');

//va a ser el nombre del router que definamos
const routerAuth = express.Router();

//peticion get       Req = solicitud, va a estar esperando datos del FrontEnd
routerAuth.post('/crearUsuario', crearUsuario);

routerAuth.post('/login', loginUsuario);

// //peticion post           //Res = enviar, vamos a enviar una respuesta al front
// routerAuth.post('/post', (req, res) => {
// 	res.send('peticion post enviada');
// });

// //peticion put
// routerAuth.put('/actualizar', (req, res) => {
// 	res.send('peticion put actualizada');
// });

// // peticion delete
// routerAuth.delete('/', (req, res) => {
// 	res.send('peticion eliminada');
// });

//module.exports es como vamos a exportar nuestros archivos
module.exports = routerAuth;
