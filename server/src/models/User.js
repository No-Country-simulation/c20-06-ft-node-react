import { DataTypes } from "sequelize";
import {Location} from "./Locations.js"
import { Comment } from "./Comments.js";
import sequelize from "../../db.js";
import { ServiceProvider } from "./ServiceProviders.js";
import { Report } from "./Reports.js";
import { Favorite } from "./Favortite.js";




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
    phone_number : {
      type : DataTypes.BIGINT,
      allowNull : false
    },

    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    last_name: {
      type : DataTypes.STRING,
      allowNull : false
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
    // locationId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //       model: Location,
    //       key: 'id',
    //   },
    //   allowNull: true,
    // }
  },
  {
    modelName : 'Users',
    timestamps: false,
    freezeTableName: true,
  }
);


User.belongsToMany(Location, { through: 'UserLocations', as: 'locations', foreignKey: 'userId' });
Location.belongsToMany(User, { through: 'UserLocations', as: 'users', foreignKey: 'locationId' });

User.hasOne(ServiceProvider, { foreignKey: 'userId', onDelete: 'CASCADE' });
ServiceProvider.belongsTo(User, { foreignKey: 'userId'});

User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId'});

User.hasMany(Report, {foreignKey: 'userId' });
Report.belongsTo(User, { foreignKey: 'userId', });

User.hasMany(Favorite, {foreignKey: 'userId', onDelete: 'CASCADE' });
Favorite.belongsTo(User, {foreignKey: 'userId'});