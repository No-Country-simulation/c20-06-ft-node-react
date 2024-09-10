import express from "express";
import { loginHandlers } from "../handlers/loginHandlers.js";

const loginRouters = express.Router();
loginRouters.post("/", loginHandlers);
export default loginRouters;
