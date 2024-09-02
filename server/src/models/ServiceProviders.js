import { DataTypes } from "sequelize";
import sequelize from "../../db.js";
import { User } from "./User.js";
import { Service } from "./Services.js";




export const ServiceProvider = sequelize.define(
    "Service_provider",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true,
        allowNull : false,
        unique : true
      },
      profilePicture : {
        type : DataTypes.STRING,
        allowNull : true
      },
      profileDescription: {
        type: DataTypes.TEXT,
        allowNull : false
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      rating : {
        type : DataTypes.FLOAT,
        defaultValue : 5,
        validate: {
          min: 0,
          max: 5,
        },
      },
      amountVotes : {
        type : DataTypes.INTEGER,
        defaultValue : 0
      },
      numberVotes : { 
        type : DataTypes.INTEGER,
        defaultValue : 0
      }
      
    },
    {
      modelName : 'Service_provider',
      timestamps: false,
    }
  );

User.hasOne(ServiceProvider, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});
ServiceProvider.belongsTo(User, {
    foreignKey: 'userId',
});

// Service.hasMany(ServiceProvider, {
//   foreignKey: 'serviceId',
// });

// ServiceProvider.belongsTo(Service, {
//   foreignKey: 'serviceId',
// });

ServiceProvider.belongsToMany(Service, {
  through: 'Service_ProviderServices',  // Nombre de la tabla intermedia
  as: 'services',
  foreignKey: 'serviceProviderId',
});

Service.belongsToMany(ServiceProvider, {
  through: 'Service_ProviderServices',
  as: 'serviceProviders',
  foreignKey: 'serviceId',
});
