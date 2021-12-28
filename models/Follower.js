const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Follower extends Model {}

  // create fields/columns for User model
Follower.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:"user",
          key: "id"
        }
      },
      follower_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:"user",
          key: "id"
        }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'follower'
    }
  );
  
  module.exports = Follower;