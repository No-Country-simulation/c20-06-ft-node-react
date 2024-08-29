import express from "express";
import { loginHandlers } from "../handlers/loginHandlers.js";

const loginRouters = express.Router();
loginRouters.post("/login", loginHandlers);
export default loginRouters;
