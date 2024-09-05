import { Sequelize } from "sequelize";
import { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_NAME, POSTGRES_URL } from "./src/config/envs.js";


export const sequelize = new Sequelize(
  `${POSTGRES_URL}://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}/${POSTGRES_NAME}`,
  {
    logging: false,
    native: false,
  }
);

export default sequelize;
