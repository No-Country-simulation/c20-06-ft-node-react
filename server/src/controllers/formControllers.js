import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export async function formUser(username, email, password) {
  const user = await User.findOne({ where: { username, email } });
  if (user)
    throw new Error(
      `El usuario ${username} || ${email} || ${password} ya existe`
    );

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  return newUser;
}
