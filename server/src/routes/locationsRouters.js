import { Router } from "express";
import { addLocationToUser, generateLocations, getAllLocations, getLocationById, getLocationsForUser, removeLocationFromUser} from "../handlers/locationsHandler.js";
import { VerifyToken } from "../middleware/jwtMiddleware.js";
import { verifyRole } from "../middleware/roleMiddleware.js";


export const locationsRouter = Router();

locationsRouter.get("/", VerifyToken,getAllLocations);
locationsRouter.get("/:id",VerifyToken,getLocationById);
locationsRouter.post("/generate_locations", verifyRole(['admin']),generateLocations);



// for users

locationsRouter.post("/add_location", VerifyToken,verifyRole(['admin']),addLocationToUser);
locationsRouter.delete("/remove_location", VerifyToken, verifyRole(['admin']),removeLocationFromUser);
locationsRouter.get('/:id/locations', getLocationsForUser);
