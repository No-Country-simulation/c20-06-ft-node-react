import express from "express";
import {
  addFavoriteHandler,
  removeFavoriteHandler,
  getUserFavoritesHandler,
} from "../handlers/favoriteHandlers.js";

const favoriteRouters = express.Router();

favoriteRouters.post("/", addFavoriteHandler);
favoriteRouters.delete("/:id", removeFavoriteHandler);
favoriteRouters.get("/users/:userId", getUserFavoritesHandler);

export default favoriteRouters;
