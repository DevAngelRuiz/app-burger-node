'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.addColumn('products', 'category_id', {
      type: Sequelize.INTEGER,
      references: {model: 'categories', key: 'id'}, //references => criando relacionamento entre as tabelas categories e products
      onUpdate: 'CASCADE', //Caso atualize a tabela categories vai atualizar a de products, metodo cascada... att 1 att outro
      onDelete: 'SET NULL', //mas se deletar de um, o campo do outro fica NULL
      allowNull:  true
     });
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.removeColumn('products', 'category_id');
     
  }
};
