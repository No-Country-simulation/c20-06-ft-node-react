import { Favorite } from "../models/Favortite.js";
import { User } from "../models/User.js";
import { ServiceProvider } from "../models/ServiceProviders.js";

export async function addFavorite(userId, providerId) {
  const user = await User.findByPk(userId);
  if (!user) throw new Error("Usuario no encontrado");

  const provider = await ServiceProvider.findByPk(providerId);
  if (!provider) throw new Error("Proveedor de servicios no encontrado");

  const existingFavorite = await Favorite.findOne({
    where: { userId, providerId },
  });
  if (existingFavorite) throw new Error("Este proveedor ya está en favoritos");

  return await Favorite.create({ userId, providerId });
}

export async function removeFavorite(id) {
  const favorite = await Favorite.findByPk(id);
  if (!favorite) throw new Error("Favorito no encontrado");

  await favorite.destroy();
}

export async function getUserFavorites(userId) {
  const user = await User.findByPk(userId);
  if (!user) throw new Error("Usuario no encontrado");

  return await Favorite.findAll({
    where: { userId },
    include: [
      {
        model: ServiceProvider,
        attributes: ["id", "username", "email"], // Puedes ajustar los atributos que quieres incluir
      },
    ],
  });
}
