import { Router } from "express";
import { getAllUsers, createUser, getUser, updateUser, deleteUser } from "../handlers/userHandlers.js";
import { VerifyToken } from "../middleware/jwtMiddleware.js";
import { verifyOwnerAccount, verifyRole } from "../middleware/roleMiddleware.js";

const userRouter = Router();


userRouter.get("/",getAllUsers);
userRouter.get("/:id",VerifyToken,verifyRole(['client', 'service_provider', 'admin']),verifyOwnerAccount,getUser);
// userRouter.post("/", createUser);
userRouter.put("/:id", VerifyToken,verifyRole(['client', 'service_provider', 'admin']),verifyOwnerAccount,updateUser);
userRouter.delete("/:id", VerifyToken,verifyRole(['client', 'service_provider', 'admin']),verifyOwnerAccount ,deleteUser);


export default userRouter;