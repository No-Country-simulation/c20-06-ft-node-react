import { Router } from "express";
import { handleCreateComment, handleDeleteComment, handleGetAllComments, handleUpdateComment } from "../handlers/commentsHandlers.js";
const commentsRouter = Router();


commentsRouter.get("/", handleGetAllComments);
commentsRouter.post("/", handleCreateComment);
commentsRouter.put("/:id", handleUpdateComment);
commentsRouter.delete("/:id", handleDeleteComment);


export default commentsRouter;