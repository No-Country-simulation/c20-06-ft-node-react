import express from "express";
import {
  createServiceHandler,
  getAllServicesHandler,
  getServiceByIdHandler,
  updateServiceHandler,
  deleteServiceHandler,
} from "../handlers/servicesHandlers.js";

const servicesRouter = express.Router();

servicesRouter.post("/services", createServiceHandler);
servicesRouter.get("/services", getAllServicesHandler);
servicesRouter.get("/services/:id", getServiceByIdHandler);
servicesRouter.put("/services/:id", updateServiceHandler);
servicesRouter.delete("/services/:id", deleteServiceHandler);

export default servicesRouter;
