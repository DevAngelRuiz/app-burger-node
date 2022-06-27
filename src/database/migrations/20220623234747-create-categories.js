'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
  await queryInterface.createTable('categories', {
    id: {
      type: Sequelize.INTEGER, //integer = numero inteiro
      allowNull: false, //não permite valores nulo
      autoIncrement: true, //o sequelize incrementa sozinho, id 1 .. 2 ... 3 
      primaryKey: true
    },

    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    created_at:{
      type: Sequelize.DATE,
      allowNull: false,
    
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false, 
    },
  })
},
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');
   
}
};
