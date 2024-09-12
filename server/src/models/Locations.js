import sequelize from "../../db.js";
import { DataTypes } from "sequelize";



export const Location = sequelize.define(
    'locations', {
    id: {
            type: DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true,
            allowNull : false,
            unique : true
        },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    postalCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
    }
},{
    timestamps: false,
  });


