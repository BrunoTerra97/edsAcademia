const generateUniqueId = require("../utils/generateUniqueId");
const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { exercicio, grupoMuscular, idUsuario } = request.body;

    // const id = generateUniqueId();
    const [idTreino] = await connection("treino").insert({
      grupoMuscular,
      idUsuario,
    });
    console.log("idTreino:", idTreino);
    if (!!idTreino && !!exercicio && !!exercicio.length) {
      for (const [Key, e] of exercicio.entries()) {
        console.log("exercicio:", e);
        const exerciciotab = await connection("exercicio").insert({
          ...e,
          idTreino,
        });
        console.log("exerciciotab:", exerciciotab);
      }
    }

    return response.json({ idTreino });
  },

  async get(request, response) {
    const { idProfessor } = request.body;
    let usuario;
    if (!!idProfessor) {
      usuario = await connection("usuario").where("idProfessor", idProfessor);
    }

    const treino = await connection("treino").where("idUsuario", usuario.id);
    return response.json(usuario);
  },
};
