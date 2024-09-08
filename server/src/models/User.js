import { DataTypes } from "sequelize";
import {Location} from "./Locations.js"
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
    },
    role : {
      type : DataTypes.ENUM("admin", "client", "service_provider"),
      allowNull : false,
      defaultValue : 'client'
    },
    locationId: {
      type: DataTypes.INTEGER,
      references: {
          model: Location,
          key: 'id',
      },
      allowNull: true, // Si quieres permitir que un usuario no tenga ubicación
    }
  },
  {
    modelName : 'Users',
    timestamps: false,
    freezeTableName: true,
  }
);


User.belongsTo(Location, { foreignKey: 'locationId' });
Location.hasMany(User, { foreignKey: 'locationId' });


