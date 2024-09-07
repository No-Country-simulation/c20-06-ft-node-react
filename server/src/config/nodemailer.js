import nodemailer from "nodemailer";
import { ACOUNT_GMAIL, PASSWORD_GMAIL } from "./envs.js";
const createTransporter = async () => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: ACOUNT_GMAIL, // Reemplaza con tu dirección de correo electrónico de Gmail
      pass: PASSWORD_GMAIL, // Reemplaza con la contraseña de aplicación generada
    },
  });

  return transporter;
};

export default createTransporter;
