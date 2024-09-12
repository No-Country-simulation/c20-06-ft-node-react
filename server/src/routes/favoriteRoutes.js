import express from "express";
import {
  addFavoriteHandler,
  removeFavoriteHandler,
  getUserFavoritesHandler,
} from "../handlers/favoriteHandlers.js";
import { VerifyToken } from "../middleware/jwtMiddleware.js";

const favoriteRouters = express.Router();

favoriteRouters.post("/",VerifyToken ,addFavoriteHandler);
favoriteRouters.delete("/:id",VerifyToken, removeFavoriteHandler);
favoriteRouters.get("/users/:userId", VerifyToken,getUserFavoritesHandler);

export default favoriteRouters;
