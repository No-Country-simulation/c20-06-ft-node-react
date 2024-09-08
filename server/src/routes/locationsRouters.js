import { Router } from "express";
import { generateLocations, getAllLocations, getLocationById} from "../handlers/locationsHandler.js";


export const locationsRouter = Router();

locationsRouter.get("/", getAllLocations);
locationsRouter.get("/:id",getLocationById);
locationsRouter.post("/generate_locations", generateLocations);
