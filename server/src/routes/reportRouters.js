import { Router } from "express";
import { createRerport, getAllReports, getByServiceId, getReportById } from "../handlers/reportHandlers.js";
import { VerifyToken } from "../middleware/jwtMiddleware.js";
import { verifyRole } from "../middleware/roleMiddleware.js";
verifyRole
export const reportRouter = Router();


reportRouter.get("/", VerifyToken, verifyRole(['admin']),getAllReports)
reportRouter.get("/:id", VerifyToken,getReportById)

reportRouter.get("/serviceProvider/:providerId",VerifyToken ,getByServiceId);
reportRouter.post("/:userId/:providerId",VerifyToken ,createRerport)