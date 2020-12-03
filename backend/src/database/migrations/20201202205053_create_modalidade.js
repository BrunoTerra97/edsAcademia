exports.up = function (knex) {
  return knex.schema.createTable("modalidade", function (table) {
    table.increments();
    table.string("tipoModalidade");
    table.string("nome");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("modalidade");
};
