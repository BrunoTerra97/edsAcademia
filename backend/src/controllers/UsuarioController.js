const generateUniqueId = require("../utils/generateUniqueId");
const connection = require("../database/connection");

const modalidades = [
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
  {
    id: 2,
    tipoModalidade: "Natação",
    nome: "Natação",
    plano: [
      {
        periodo: "Mensal",
        frequencia: "2",
        valor: "215,00",
      },
      {
        periodo: "Semestral",
        frequencia: "2",
        valor: "193,00",
      },
      {
        periodo: "Anual",
        frequencia: "2",
        valor: "182,00",
      },
      {
        periodo: "Mensal",
        frequencia: "3",
        valor: "229,00",
      },
      {
        periodo: "Semestral",
        frequencia: "3",
        valor: "206,00",
      },
      {
        periodo: "Anual",
        frequencia: "3",
        valor: "189,00",
      },
    ],
    horarioFuncionamento: [
      { horario: "08:00" },
      { horario: "10:00" },
      { horario: "17:00" },
      { horario: "19:00" },
      { horario: "20:00" },
    ],
  },
  {
    id: 3,
    tipoModalidade: "Musculação",
    nome: "Musculação",
    plano: [
      {
        periodo: "Mensal",
        frequencia: "7",
        valor: "125,00",
      },
      {
        periodo: "Semestral",
        frequencia: "7",
        valor: "112,00",
      },
      {
        periodo: "Anual",
        frequencia: "7",
        valor: "106,00",
      },
    ],
    horarioFuncionamento: [],
  },
  {
    id: 4,
    tipoModalidade: "Ritmos",
    nome: "Ritmos",
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
];

module.exports = {
  async index(request, response) {
    const usuario = await connection("usuario").select("*");

    return response.json(usuario);
  },

  async put(request, response) {
    const { id, ...req } = request.body;

    const [usuarioo] = await connection("usuario").where("id", id);
    const { id: aaa, ...user } = usuarioo;
    const newUser = { ...user, ...req };
    const success = await connection("usuario").update(newUser);

    return response.json({ success });
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
      for (const [userIndex, user] of usuario.entries()) {
        const treinos = await connection("treino")
          .where("idUsuario", user.id)
          .select("*");
        console.log("treinos:", treinos);
        usuario[userIndex]["treinos"] = treinos;
        for (const [treinoIndex, treino] of treinos.entries()) {
          const exercicios = await connection("exercicio")
            .where("idTreino", treino.id)
            .select("*");
          usuario[userIndex]["treinos"][treinoIndex]["exercicios"] = exercicios;
        }
      }
      if (!!newUsers.length) usuario = newUsers;
    }
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    console.log("usuario:", usuario);
    newUsers = usuario.map((u) => {
      console.log("u.idModalidade:", u.idModalidade);
      if (!!u.idModalidade) {
        u.modalidades = modalidades.filter((m) => m.id == u.idModalidade)[0];
      }
      return u;
    });

    return response.json({ usuario: newUsers });
  },
};
