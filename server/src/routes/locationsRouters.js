import { Router } from "express";
import { addLocationToUser, generateLocations, getAllLocations, getLocationById, getLocationsForUser, removeLocationFromUser} from "../handlers/locationsHandler.js";


export const locationsRouter = Router();

locationsRouter.get("/", getAllLocations);
locationsRouter.get("/:id",getLocationById);
locationsRouter.post("/generate_locations", generateLocations);



// for users

locationsRouter.post("/add_location", addLocationToUser);
locationsRouter.delete("/remove_location", removeLocationFromUser);
locationsRouter.get('/:id/locations', getLocationsForUser);
