import {
  addFavorite,
  removeFavorite,
  getUserFavorites,
} from "../controllers/favoriteControllers.js";

export async function addFavoriteHandler(req, res) {
  try {
    const { userId, providerId } = req.body;
    const newFavorite = await addFavorite(userId, providerId);
    res.status(201).json(newFavorite);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function removeFavoriteHandler(req, res) {
  try {
    const { id } = req.params;
    await removeFavorite(id);
    res.status(200).json({ message: "Favorito eliminado exitosamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getUserFavoritesHandler(req, res) {
  try {
    const { userId } = req.params;
    const favorites = await getUserFavorites(userId);
    res.status(200).json(favorites);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
