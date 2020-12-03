const express = require("express");

const UsuarioController = require("./controllers/UsuarioController");
const TreinoController = require("./controllers/TreinoController");
const ModalidadeController = require("./controllers/ModalidadeController");

const routes = express.Router();

routes.post("/modalidades", ModalidadeController.create);
routes.get("/modalidades", ModalidadeController.index);

/**
 * Se passar id no body, retorna o usuario desse id
 * Se passar idProfessor, retorna os usuarios que tem esse idProfessor,
 * Se passar login e senha, retorna os usuários com esse login e senha
 */
routes.post("/usuarioGet", UsuarioController.get);

/**
 * Retorna todos os usuarios
 */
routes.get("/usuarios", UsuarioController.index);

/**
 * Cria um usuario com TODOS os parametros passados no body
 */
routes.post("/usuario", UsuarioController.create);

/**
 * Cria um treino EXEMPLO:
 {
  "idUsuario": "b3dbf86e",
  "grupoMuscular": "perna",
	"exercicio": [
		{
			"repeticoes": "123",
			"aparelho": "supino",
			"tempo": "10segundos",
			"intervalo": "5segundos"
		},
		{
			"repeticoes": "1234",
			"aparelho": "supino",
			"tempo": "10segundos",
			"intervalo": "5segundos"
		},
		{
			"repeticoes": "12345",
			"aparelho": "supino",
			"tempo": "10segundos",
			"intervalo": "5segundos"
		},
		{
			"repeticoes": "123456",
			"aparelho": "supino",
			"tempo": "10segundos",
			"intervalo": "5segundos"
		}
	]
}
 */
routes.post("/treino", TreinoController.create);

module.exports = routes;
