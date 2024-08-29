import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export async function loginUser(username, email, password) {
  const whereCondition = username ? { username } : { email };
  const user = await User.findOne({ where: whereCondition });

  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error("Incorrect password");
  return user;
}
