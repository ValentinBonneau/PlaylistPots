'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class TagToVideo extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Tag, {
                foreignKey: {
                    allowNull: false
                }
            })
            this.belongsTo(models.Video, {
                foreignKey: {
                    allowNull: false
                }
            })
        }
    }

    TagToVideo.init({
        idVideo: DataTypes.INTEGER,
        idTag: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'TagToVideo',
    });
    return TagToVideo;
};