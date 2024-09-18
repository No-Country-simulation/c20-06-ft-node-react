import { Router } from "express";
import { handleCreateComment, handleDeleteComment, handleGetAllComments, handleUpdateComment } from "../handlers/commentsHandlers.js";
import { VerifyToken } from "../middleware/jwtMiddleware.js";
const commentsRouter = Router();


commentsRouter.get("/",VerifyToken ,handleGetAllComments);
commentsRouter.post("/",VerifyToken ,handleCreateComment);
commentsRouter.put("/:id", VerifyToken,handleUpdateComment);
commentsRouter.delete("/:id", VerifyToken,handleDeleteComment);


export default commentsRouter;