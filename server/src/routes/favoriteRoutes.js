import express from "express";
import {
  addFavoriteHandler,
  removeFavoriteHandler,
  getUserFavoritesHandler,
} from "../handlers/favoriteHandlers.js";
import { VerifyToken } from "../middleware/jwtMiddleware.js";
import { verifyRole } from "../middleware/roleMiddleware.js";

const favoriteRouters = express.Router();

favoriteRouters.post("/",VerifyToken, verifyRole(['admin']),addFavoriteHandler);
favoriteRouters.delete("/:id",VerifyToken,verifyRole(['admin']) ,removeFavoriteHandler);
favoriteRouters.get("/users/:userId", VerifyToken,getUserFavoritesHandler);

export default favoriteRouters;
