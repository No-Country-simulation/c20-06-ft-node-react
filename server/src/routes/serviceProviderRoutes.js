import { Router } from "express";
import { getAll, createServiceProvider, getById, updatedServiceProvider, updatedActive, updatedRating, addService, removeService} from "../handlers/serviceProviderHandler.js";
import { VerifyToken } from "../middleware/jwtMiddleware.js";

export const serviceProviderRouter = Router();

serviceProviderRouter.get("/",getAll);
serviceProviderRouter.post("/", createServiceProvider);
serviceProviderRouter.get("/:id", VerifyToken,getById );

serviceProviderRouter.put("/:id", VerifyToken ,updatedServiceProvider );
serviceProviderRouter.put("/:id/active", VerifyToken ,updatedActive);
serviceProviderRouter.put("/:id/rating", VerifyToken ,updatedRating);

serviceProviderRouter.put("/:id/addService/:idService",VerifyToken ,addService);
serviceProviderRouter.put("/:id/removeService/:idService", VerifyToken,removeService);