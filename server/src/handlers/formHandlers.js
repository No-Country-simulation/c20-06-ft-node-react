import { formUser } from "../controllers/formControllers.js";

export async function formHandlers(req, res) {
  try {
    const { username, email, password } = req.body;
    const resultForm = await formUser(username, email, password);
    res.status(200).json(resultForm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
