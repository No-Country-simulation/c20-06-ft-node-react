import { DataTypes } from "sequelize";
import sequelize from "../../db.js";
import { Service } from "./Services.js";
import { Report } from "./Reports.js";




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


  
ServiceProvider.belongsToMany(Service, { through: 'ServiceProviderServices', as: 'services', foreignKey: 'serviceProviderId' });
Service.belongsToMany(ServiceProvider, { through: 'ServiceProviderServices', as: 'providers', foreignKey: 'serviceId',});

ServiceProvider.hasMany(Report, {foreignKey: 'providerId',onDelete: 'CASCADE'});
Report.belongsTo(ServiceProvider, { foreignKey: 'providerId' });

