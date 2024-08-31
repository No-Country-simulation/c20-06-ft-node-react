import { DataTypes } from "sequelize";
import sequelize from "../../db.js";
import { User } from "./User.js";
import { ServiceProvider } from "./ServiceProviders.js";



export const Comment = sequelize.define(
    "Comment",
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
      }
    },
    {
      modelName : 'Comment',
      timestamps: true,
      // freezeTableName: true,
    }
  );

User.hasMany(Comment, {
  foreignKey: 'userId',
});
Comment.belongsTo(User, {
  foreignKey: 'userId',
});

ServiceProvider.hasMany(Comment, {
    foreignKey: 'providerId',
    onDelete: 'CASCADE',
  });
Comment.belongsTo(ServiceProvider, {
    foreignKey: 'providerId',
});