import { loginUser } from "../controllers/loginControllers.js";
import jwt from 'jsonwebtoken';

export async function loginHandlers(req, res) {
  try {
    const { email, password } = req.body;
    const reslutLogin = await loginUser( email, password);
    if(reslutLogin){
      const data = {id : reslutLogin.id, role : reslutLogin.role}
      const token = jwt.sign(data, 'SECRET-WORD', {expiresIn : '24h'});
      res.cookie('token', token);
    }
    delete reslutLogin.password
    res.status(200).json(reslutLogin);
  } catch (error) {
    console.log(error);
    res.status(400).json({ ok : false, error: error.message });
  }
}
