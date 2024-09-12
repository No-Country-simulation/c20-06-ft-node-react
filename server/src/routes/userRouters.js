import { Router } from "express";
import { getAllUsers, createUser, getUser, updateUser, deleteUser } from "../handlers/userHandlers.js";
import { VerifyToken } from "../middleware/jwtMiddleware.js";

const userRouter = Router();


userRouter.get("/", VerifyToken,getAllUsers);
userRouter.get("/:id",VerifyToken,getUser);
// userRouter.post("/", createUser);
userRouter.put("/:id", VerifyToken ,updateUser);
userRouter.delete("/:id", VerifyToken, deleteUser);


export default userRouter;