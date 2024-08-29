import { Router } from "express";
import { getAllUsers, createUser, getUser, updateUser, deleteUser } from "../handlers/userHandlers.js";

export const userRouter = Router();


userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUser);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);