import { DataTypes } from "sequelize";
import sequelize from "../../db.js";
import { User } from "./User.js";
import { ServiceProvider } from "./ServiceProviders.js";



export const Favorite = sequelize.define(
    "Favorite",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true,
        allowNull : false,
        unique : true
      },
    },
    {
      modelName : 'Favorite',
      timestamps: true,
    }
);



User.hasMany(Favorite, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
  });
  Favorite.belongsTo(User, {
    foreignKey: 'userId',
  });
  

ServiceProvider.hasMany(Favorite, {
    foreignKey: 'providerId',
    onDelete: 'CASCADE',
  });
  Favorite.belongsTo(ServiceProvider, {
    foreignKey: 'providerId',
  });