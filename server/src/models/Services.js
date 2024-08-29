import { DataTypes } from "sequelize";
import sequelize from "../../db.js";

export const Service = sequelize.define(
  "Service",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Por favor ingrese el título del servicio" },
        len: {
          args: [1, 100],
          msg: "El título no puede tener más de 100 caracteres",
        },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Por favor ingrese la descripción del servicio" },
        len: {
          args: [1, 500],
          msg: "La descripción no puede tener más de 500 caracteres",
        },
      },
    },
    category: {
      type: DataTypes.ENUM("Diseño", "Desarrollo", "Marketing", "Otros"),
      allowNull: false,
    },
  },
  {
    modelName: "Service",
    timestamps: false,
    // freezeTableName: true,
  }
);
