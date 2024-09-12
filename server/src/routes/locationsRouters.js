import { Router } from "express";
import { addLocationToUser, generateLocations, getAllLocations, getLocationById, getLocationsForUser, removeLocationFromUser} from "../handlers/locationsHandler.js";
import { VerifyToken } from "../middleware/jwtMiddleware.js";


export const locationsRouter = Router();

locationsRouter.get("/", VerifyToken,getAllLocations);
locationsRouter.get("/:id",VerifyToken,getLocationById);
locationsRouter.post("/generate_locations", generateLocations);



// for users

locationsRouter.post("/add_location", VerifyToken,addLocationToUser);
locationsRouter.delete("/remove_location",VerifyToken, removeLocationFromUser);
locationsRouter.get('/:id/locations',VerifyToken ,getLocationsForUser);
