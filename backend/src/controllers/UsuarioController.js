const generateUniqueId = require("../utils/generateUniqueId");
const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const usuario = await connection("usuario").select("*");

    return response.json(usuario);
  },

  async create(request, response) {
    // const { nomeCompleto, tipoUsuario, idProfessor } = request.body;

    const id = generateUniqueId();

    await connection("usuario").insert({
      id,
      ...request.body,
    });

    return response.json({ id });
  },

  async get(request, response) {
    const { idProfessor } = request.body;
    let usuario;
    if (!!idProfessor) {
      usuario = await connection("usuario").where("idProfessor", idProfessor);
    }

    return response.json(usuario);
  },
};
