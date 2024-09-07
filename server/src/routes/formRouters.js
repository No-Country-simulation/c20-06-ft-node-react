import { Router } from "express";
import { formHandlers, deleteFormHandler } from "../handlers/formHandlers.js";

const routerForm = Router();
routerForm.post("/form", formHandlers);
routerForm.delete("/form/:id", deleteFormHandler);

export default routerForm;
