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
import { verifyRole } from '../middleware/roleMiddleware.js'

const servicesRouter = express.Router();

servicesRouter.post("/", VerifyToken,verifyRole(['admin']),createServiceHandler);
servicesRouter.post("/generateServices",generateServices); // crea los primeros servicios.

servicesRouter.get("/", VerifyToken ,verifyRole(['client', 'service_provider', 'admin']),getAllServicesHandler);
servicesRouter.get("/:id",VerifyToken ,verifyRole(['admin', "client", "service_provider"]),getServiceByIdHandler);

servicesRouter.put("/:id",VerifyToken,verifyRole(['admin']) ,updateServiceHandler);
servicesRouter.delete("/:id",VerifyToken,verifyRole(['admin']) ,deleteServiceHandler);

export default servicesRouter;
