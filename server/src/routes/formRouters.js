import { Router } from "express";
import { deleteFormHandler } from "../handlers/formHandlers.js";
import { createUser } from "../handlers/userHandlers.js";
import { createServiceProvider } from "../handlers/serviceProviderHandler.js";
import { VerifyToken } from "../middleware/jwtMiddleware.js";
// import { createNewServiceProvider } from "../controllers/serviceProvidersController.js";

const routerForm = Router();
routerForm.post("/client", createUser);
routerForm.post("/service_provider", createServiceProvider)
routerForm.delete("/:id", VerifyToken ,deleteFormHandler);

export default routerForm;
