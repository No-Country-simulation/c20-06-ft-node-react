import bcrypt from "bcrypt";
import { User } from "../models/User.js";
export async function loginUser(username, email, password) {
  const whereCondition = username ? { username } : { email };
  const user = await User.findOne({ where: whereCondition });
  console.log(user);

  if (!user) throw new Error(`No user found with ${username || email}`);
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("Invalid password");
  return user;
}

// "password":"julito2001"
// {
// 	"username":"julito",
// 	"email":"appwebnotificationes@gmail.com",
// 	"password":"julito2001"
// }
