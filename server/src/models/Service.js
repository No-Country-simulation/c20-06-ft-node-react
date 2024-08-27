import { DataTypes } from "sequelize";
import sequelize from "../../db.js";


export const Service = sequelize.define(
    "Service",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true,
        allowNull : false,
        unique : true
      },
      name : {
        type : DataTypes.STRING,
        allowNull : false
      }
    },
    {
      modelName : 'Service',
      timestamps: false,
      // freezeTableName: true,
    }
  );


