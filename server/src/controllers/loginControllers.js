import { ServiceProvider } from "../models/ServiceProviders.js";
import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export async function loginUser(email, password) {
  let {dataValues} = await User.findOne({ where: {email : email} });
  let user = dataValues;
  if (!user) throw new Error(`Usuario no encontrado ${email} incorrecto`);
  const passwordMath = await bcrypt.compare(password, user.password);
  if (!passwordMath) throw new Error("Incorrect password");
  if(user.role == 'service_provider') {
    const serviceProvider = await ServiceProvider.findOne({where : {userId : user.id}})
    console.log(serviceProvider.dataValues);
    user = {... user, serviceProviderId : serviceProvider.dataValues.id}
  }
  
  return user;
}
