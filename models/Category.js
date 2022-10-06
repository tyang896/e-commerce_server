//imports
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

//Creates a new Category model class
class Category extends Model {}

//Set the rules and fields for Category
Category.init(
  {
    // Category columns contain id, and category_name
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
