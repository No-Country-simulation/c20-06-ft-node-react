import express from "express";
import {
  createServiceHandler,
  getAllServicesHandler,
  getServiceByIdHandler,
  updateServiceHandler,
  deleteServiceHandler,
  generateServices
} from "../handlers/servicesHandlers.js";
import { VerifyToken } from "../middleware/jwtMiddleware.js";


const servicesRouter = express.Router();

servicesRouter.post("/", VerifyToken,createServiceHandler);
servicesRouter.post("/generateServices",generateServices); // crea los primeros servicios.
servicesRouter.get("/", VerifyToken,getAllServicesHandler);
servicesRouter.get("/:id",VerifyToken ,getServiceByIdHandler);
servicesRouter.put("/:id",VerifyToken ,updateServiceHandler);
servicesRouter.delete("/:id",VerifyToken ,deleteServiceHandler);

export default servicesRouter;
