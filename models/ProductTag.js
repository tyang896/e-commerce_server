//imports
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Initialize ProductTag model
class ProductTag extends Model {}

//Set rules and fields
ProductTag.init(
  {
    // ProductTag contains the following columns: id, product_id, tag_id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
    },
    tag_id: {
      type: DataTypes.INTEGER,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
