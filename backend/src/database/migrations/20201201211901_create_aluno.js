exports.up = function (knex) {
  return knex.schema.createTable("usuario", function (table) {
    table.string("id").primary();
    table.string("nomeCompleto");
    table.string("tipoUsuario"); // aluno, professor, medico, secretaria
    table.string("login");
    table.string("senha");
    table.string("cpf");
    table.string("identidade");
    table.string("dataNascimento");
    table.string("cartaoNumero");
    table.string("cartaoBandeira");
    table.string("cartaoProprietario");
    // colunas de Aluno
    table.string("idProfessor");
    table.foreign("idProfessor").references("id").inTable("usuario");
    table.string("idModalidade");
    table.string("fichaPeso");
    table.string("fichaAltura");
    table.string("fichaPressao");
    table.string("fichaPercentualGordura");
    table.string("fichaPercentualMassaMagra");
    table.string("fichaIMC");
    table.string("fichaSituacao");
    // colunas de medico
    table.string("crm");
    //colunas de plano
    table.string("idPlano");
    table.foreign("idPlano").references("id").inTable("plano");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("usuario");
};
