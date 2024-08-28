import express from "express";
import { loginHandlers } from "../handlers/loginHandlers.js";

const routerLogin = express.Router();
routerLogin.post("/login", loginHandlers);

export default routerLogin;
