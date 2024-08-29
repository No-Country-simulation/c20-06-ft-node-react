import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export async function loginUser(username, email, password) {
  const whereCondition = username ? { username } : { email };
  const user = await User.findOne({ where: whereCondition });

  if (!user)
    throw new Error(`Usuario no encontrado ${username || email} incorrecto`);

  const passwordMath = await bcrypt.compare(password, user.password);

  if (!passwordMath) throw new Error("Incorrect password");

  return user;
}
