'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER, //integer = numero inteiro
        allowNull: false, //não permite valores nulo
        autoIncrement: true, //o sequelize incrementa sozinho, id 1 .. 2 ... 3 
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false, 
      },

    });

  },

  async down(queryInterface) {
    await queryInterface.dropTable('products');

  }
}

