import { Router } from "express";
import { generateCategories, getAllCategories } from "../handlers/categoryHandler.js";


export const categoryRouter = Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.post("/generateCategories", generateCategories);
