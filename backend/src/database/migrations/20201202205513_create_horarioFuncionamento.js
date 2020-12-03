exports.up = function (knex) {
  return knex.schema.createTable("horarioFuncionamento", function (table) {
    table.increments();
    table.string("horario");
    table.string("idModalidade");
    table.foreign("idModalidade").references("id").inTable("modalidade");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("horarioFuncionamento");
};
