import { Router } from "express";
import { generateCategories, getAllCategories } from "../handlers/categoryHandler.js";
import { VerifyToken } from "../middleware/jwtMiddleware.js";
import { verifyRole } from "../middleware/roleMiddleware.js";


export const categoryRouter = Router();

categoryRouter.get("/",getAllCategories);
categoryRouter.post("/generateCategories" ,generateCategories);
