import { DataTypes } from "sequelize";
import sequelize from "../../db.js";



export const User = sequelize.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey: true,
      allowNull : false,
      unique : true
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role : {
      type : DataTypes.ENUM("admin", "client", "service_provider"),
      allowNull : false,
      defaultValue : 'client'
    }
  },
  {
    modelName : 'Users',
    timestamps: false,
    freezeTableName: true,
  }
);


