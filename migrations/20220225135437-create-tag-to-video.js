'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TagToVideos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idVideo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Videos',
          key: 'id'
        }
      },
      idTag: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Tags',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TagToVideos');
  }
};