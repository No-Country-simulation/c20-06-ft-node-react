import { Router } from "express";
import { getUsers, createUser } from "../handlers/userHandlers.js";

export const userRouter = Router();


userRouter.get("/", getUsers )

userRouter.post("/", createUser)