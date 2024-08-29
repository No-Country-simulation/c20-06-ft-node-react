import { Sequelize } from "sequelize";
// import { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } from "./src/config/envs.js";
const DB_USER = 'no_country'
const DB_PASSWORD = 'admin123'
const DB_HOST = 'localhost'
const DB_NAME = "my_store"

export const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

export default sequelize;
