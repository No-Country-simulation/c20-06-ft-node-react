import dotenv from "dotenv";

dotenv.config();

export const {
  POSTGRES_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  PORT,
  POSTGRES_URL,
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_DATABASE,
  POSTGRES_PASSWORD,
  ACOUNT_GMAIL,
  PASSWORD_GMAIL,
} = process.env;
