import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import { sendAccountCreationSuccessEmail } from "../services/emailServices.js";

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

  const createAcout = await sendAccountCreationSuccessEmail(email);
  return newUser;
}

export async function deleteUser(id) {
  const deletedUser = await User.destroy({ where: { id } });
  return deletedUser;
}
