import { Router } from "express";
import { getAll, createServiceProvider} from "../handlers/serviceProviderHandler.js";

export const serviceProviderRouter = Router();

serviceProviderRouter.get("/", getAll);
serviceProviderRouter.post("/", createServiceProvider);
