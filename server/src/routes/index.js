import express from "express";
import formRouters from "./formRouters.js";
import loginRouters from "./loginRouters.js";
import userRouter from "./userRouters.js";
import servicesRouters from "./servicesRouters.js";
import commentsRouter from "./commentsRouter.js";
import { serviceProviderRouter } from "./serviceProviderRoutes.js";
import favoriteRouters from "./favoriteRoutes.js";
import { reportRouter } from "./reportRouters.js";
import { categoryRouter } from "./categoryRouter.js";
import { locationsRouter } from "./locationsRouters.js";

const router = express.Router();
router.use("/register", formRouters);
router.use("/login", loginRouters);
router.use("/services", servicesRouters);
router.use("/service_providers", serviceProviderRouter);
router.use("/users", userRouter);
router.use("/reports", reportRouter)
router.use("/categories", categoryRouter)
router.use("/comments", commentsRouter);
router.use("/favorites", favoriteRouters);
router.use("/locations", locationsRouter);
export default router;
