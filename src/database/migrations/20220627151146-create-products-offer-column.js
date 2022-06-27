'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.addColumn('products', 'offer', {  //primeiro campo: local onde vai ser add a coluna (products), segundo: a coluna. 
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,

       });
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('products', 'offer');
     
  }
};
