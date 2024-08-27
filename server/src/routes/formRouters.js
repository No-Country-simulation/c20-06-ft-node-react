import { Router } from "express";
import { formHandlers } from "../handlers/formHandlers.js";

const routerForm = Router();
routerForm.post("/form", formHandlers);

export default routerForm;
