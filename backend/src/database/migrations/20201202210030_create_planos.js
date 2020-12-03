exports.up = function (knex) {
  return knex.schema.createTable("plano", function (table) {
    table.increments();
    table.string("periodo");
    table.string("frequencia");
    table.string("valor");
    table.string("idModalidade");
    table.foreign("idModalidade").references("id").inTable("modalidade");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("plano");
};
