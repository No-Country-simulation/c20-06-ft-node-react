import { DataTypes } from "sequelize";
import sequelize from "../../db.js";
import { User } from "./User.js";
import { Service } from "./Service.js";




export const ServiceProvider = sequelize.define(
    "Service_provier",
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
        allowNull : false
      }
    },
    {
      modelName : 'Service_provider',
      timestamps: false,
      // freezeTableName: true,
    }
  );

User.hasOne(ServiceProvider, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});
ServiceProvider.belongsTo(User, {
    foreignKey: 'userId',
});

Service.hasMany(ServiceProvider, {
  foreignKey: 'serviceId',
});

ServiceProvider.belongsTo(Service, {
  foreignKey: 'serviceId',
});

export default ServiceProvider