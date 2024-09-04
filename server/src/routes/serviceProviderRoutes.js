import { Router } from "express";
import { getAll, createServiceProvider, getById, updatedServiceProvider, updatedActive, updatedRating, addService, removeService} from "../handlers/serviceProviderHandler.js";

export const serviceProviderRouter = Router();

serviceProviderRouter.get("/", getAll);
serviceProviderRouter.post("/", createServiceProvider);
serviceProviderRouter.get("/:id", getById );

serviceProviderRouter.put("/:id", updatedServiceProvider );
serviceProviderRouter.put("/:id/active", updatedActive);
serviceProviderRouter.put("/:id/rating", updatedRating);

serviceProviderRouter.put("/:id/addService/:idService", addService);
serviceProviderRouter.put("/:id/removeService/:idService", removeService);