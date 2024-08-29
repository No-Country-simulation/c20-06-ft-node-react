import { loginUser } from "../controllers/loginControllers.js";
export async function loginHandlers(req, res) {
  try {
    const { username, email, password } = req.body;
    const reslutLogin = await loginUser(username, email, password);
    res.status(200).json(reslutLogin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
