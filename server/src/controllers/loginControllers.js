import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export async function loginUser(email, password) {
  const user = await User.findOne({ where: {email : email} });

  if (!user)
    throw new Error(`Usuario no encontrado ${email} incorrecto`);
  const passwordMath = await bcrypt.compare(password, user.password);
  if (!passwordMath) throw new Error("Incorrect password");
  
  return user;
}
