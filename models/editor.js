'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Editor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User,{foreignKey:{allowNull: false}})
      this.belongsTo(models.Playlist,{foreignKey:{allowNull: false}})
      // define association here
    }
  }
  Editor.init({
    idPlaylist: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    moderateur: DataTypes.BOOLEAN,
    admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Editor',
  });
  return Editor;
};