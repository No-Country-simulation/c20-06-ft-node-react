import express from "express";
import {
  addFavoriteHandler,
  removeFavoriteHandler,
  getUserFavoritesHandler,
} from "../handlers/favoriteHandlers.js";

const favoriteRouters = express.Router();

favoriteRouters.post("/favorites", addFavoriteHandler);
favoriteRouters.delete("/favorites/:id", removeFavoriteHandler);
favoriteRouters.get("/users/:userId/favorites", getUserFavoritesHandler);

export default favoriteRouters;
