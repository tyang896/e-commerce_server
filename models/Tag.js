//imports
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

//Initialize Tag Model
class Tag extends Model {}

//Set rules and fiels for Tag Model
Tag.init(
  {
    // Tag Model contains the following columns: id, tag_name
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
