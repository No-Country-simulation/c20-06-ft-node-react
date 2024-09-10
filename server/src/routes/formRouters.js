import { Router } from "express";
import { formHandlers, deleteFormHandler } from "../handlers/formHandlers.js";

const routerForm = Router();
routerForm.post("/", formHandlers);
routerForm.delete("/:id", deleteFormHandler);

export default routerForm;
