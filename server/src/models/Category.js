import { DataTypes } from "sequelize";
import sequelize from "../../db.js";

export const Category = sequelize.define(
    "Categories",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
    },
    {
      modelName : 'Categories',
    }
  );