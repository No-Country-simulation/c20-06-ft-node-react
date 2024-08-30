import { Router } from "express";
import { createRerport, getAllReports, getByServiceId, getReportById } from "../handlers/reportHandlers.js";

export const reportRouter = Router();


reportRouter.get("/", getAllReports)
reportRouter.get("/:id", getReportById)

reportRouter.get("/serviceProvider/:providerId", getByServiceId);
reportRouter.post("/:userId/:providerId", createRerport)