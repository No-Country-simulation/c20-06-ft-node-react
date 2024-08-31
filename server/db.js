import { Sequelize } from "sequelize";
import { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } from "./src/config/envs.js";


export const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

export default sequelize;
