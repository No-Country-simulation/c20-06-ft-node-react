import { Sequelize } from "sequelize";
import { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_NAME, POSTGRES_URL } from "./src/config/envs.js";

export const sequelize = new Sequelize(
  `${POSTGRES_URL}://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}/${POSTGRES_NAME}`,
  {
    logging: false,
    native: false,
  }
);

export default sequelize;

// import { Sequelize } from "sequelize";
// import { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } from "./src/config/envs.js";

// export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
//   host: "localhost",
//   port: 5432,
//   dialect: "postgres",
//   logging: false,
//   native: false,
// });

// export default sequelize;
