import { DataTypes } from "sequelize";
import sequelize from "../../db.js";
import { User } from "./User.js";
import { ServiceProvider } from "./ServiceProviders.js";



export const Report = sequelize.define(
    "Report",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true,
        allowNull : false,
        unique : true
      },
      comment : {
        type : DataTypes.TEXT,
        allowNull : false,
      },
      date : { 
        type : DataTypes.DATE,
        allowNull : false,
      }
    },
    {
      modelName : 'Report',
      // timestamps: true,
    }
  );


User.hasMany(Report, {
    foreignKey: 'userId',
  });
Report.belongsTo(User, {
    foreignKey: 'userId',
  });
  
ServiceProvider.hasMany(Report, {
    foreignKey: 'providerId',
    onDelete: 'CASCADE',
  });
Report.belongsTo(ServiceProvider, {
    foreignKey: 'providerId',
  });