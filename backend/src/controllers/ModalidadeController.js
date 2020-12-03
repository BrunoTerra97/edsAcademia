const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const modalidades = {
      modalidades: [
        {
          id: 1,
          tipoModalidade: "crossfit",
          nome: "crossfit",
          plano: [
            {
              periodo: "Mensal",
              frequencia: "3",
              valor: "155,00",
            },
            {
              periodo: "Semestral",
              frequencia: "3",
              valor: "139,00",
            },
            {
              periodo: "Anual",
              frequencia: "3",
              valor: "130,00",
            },
          ],
          horarioFuncionamento: [
            { horario: "06:30" },
            { horario: "08:30" },
            { horario: "10:15" },
            { horario: "18:00" },
            { horario: "20:00" },
          ],
        },
      ],
    };

    return response.json(modalidades);
  },

  async create(request, response) {
    const { modalidades } = request.body;

    if (!modalidades)
      return response.json({ error: "modalidades não enviados" });

    for (const [Key, modalidade] of modalidades.entries()) {
      const [idModalidade] = await connection("modalidade").insert({
        tipoModalidade: modalidade.tipoModalidade,
        nome: modalidade.nome,
      });

      for (const [Key, plano] of modalidade.plano.entries()) {
        const [idPlano] = await connection("plano").insert({
          idModalidade,
          periodo: plano.periodo,
          frequencia: plano.frequencia,
          valor: plano.valor,
        });
      }

      for (const [Key, horario] of modalidade.horarioFuncionamento.entries()) {
        const [idHorario] = await connection("horarioFuncionamento").insert({
          idModalidade,
          horario: horario.horario,
        });
      }
    }

    return response.json({ ok: "success" });
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
