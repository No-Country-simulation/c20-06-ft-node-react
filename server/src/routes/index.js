import express from "express";
import formRouters from "./formRouters.js";
import loginRouters from "./loginRouters.js";
import { userRouter } from "./userRouters.js";

const router = express.Router();
router.use("/", formRouters);
router.use("/", loginRouters);
export default router;
