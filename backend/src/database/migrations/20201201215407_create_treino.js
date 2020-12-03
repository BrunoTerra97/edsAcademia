exports.up = function (knex) {
  return knex.schema.createTable("treino", function (table) {
    table.increments();
    table.string("idUsuario");
    table.string("nome");
    table.foreign("idUsuario").references("id").inTable("usuario");
    table.string("grupoMuscular");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("treino");
};
