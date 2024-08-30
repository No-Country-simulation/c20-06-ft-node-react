import express from "express";
import formRouters from "./formRouters.js";
import loginRouters from "./loginRouters.js";
import userRouter from "./userRouters.js";
import servicesRouters from "./servicesRouters.js";
import commentsRouter from "./commentsRouter.js";
import { serviceProviderRouter } from "./serviceProviderRoutes.js";

const router = express.Router();
router.use("/", formRouters);
router.use("/", loginRouters);
router.use("/", servicesRouters);
router.use("/service_providers", serviceProviderRouter);
router.use("/users", userRouter);
router.use("/comments", commentsRouter);
export default router;
