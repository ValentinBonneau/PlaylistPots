'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Playlist,{
        foreignKey:{
          allowNull: false
        }})
      this.hasMany(models.TagToVideo)
    }
  }
  Video.init({
    url: DataTypes.STRING,
    thumbnails: DataTypes.STRING,
    title: DataTypes.STRING,
    position: DataTypes.INTEGER,
    idPlaylist: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Video',
  });
  return Video;
};