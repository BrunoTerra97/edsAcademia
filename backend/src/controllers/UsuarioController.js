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
    const login = request.body.login;

    if (!!login) {
      const exists = await connection("usuario").where("login", login);
      if (exists.length > 0) {
        return response.json({ error: "Login já cadastrado" });
      }
    }

    await connection("usuario").insert({
      id,
      ...request.body,
    });

    return response.json({ id });
  },

  async get(request, response) {
    const { id, idProfessor, login, senha } = request.body;
    let usuario;
    if (!!id) {
      usuario = await connection("usuario").where("id", id);
    } else if (!!idProfessor) {
      usuario = await connection("usuario").where("idProfessor", idProfessor);
    } else if (!!login && !!senha) {
      usuario = await connection("usuario")
        .where("login", login)
        .where("senha", senha);
    }

    console.log("usuario:", usuario);

    if (!!usuario && !!usuario.length) {
      let newUsers = [];
      for (const [Key, user] of usuario.entries()) {
        const treinos = await connection("treino")
          .where("idUsuario", user.id)
          .innerJoin("exercicio", "treino.id", "exercicio.idTreino")
          .select("*");
        console.log("treinos:", treinos);
        newUsers.push({ ...user, treinos });
      }
      console.log("newUsers:", newUsers);
      if (!!newUsers.length) usuario = newUsers;
    }

    return response.json({ usuario });
  },
};
