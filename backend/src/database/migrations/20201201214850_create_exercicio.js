exports.up = function (knex) {
  return knex.schema.createTable("exercicio", function (table) {
    table.increments();
    table.string("idTreino");
    table.foreign("idTreino").references("id").inTable("treino");
    table.string("repeticoes");
    table.string("aparelho");
    table.string("tempo");
    table.string("intervalo");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("exercicio");
};
