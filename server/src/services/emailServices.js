import { ACOUNT_GMAIL } from "../config/envs.js";
import createTransporter from "../config/nodemailer.js";
import { verificationCode } from "../utils/verificationCode.js";
// import { htmlVerifyEmail } from "../helpers/htmlVerifyEmail.js";
export async function sendAccountCreationSuccessEmail(email) {
  const transporter = await createTransporter();
  const message = {
    to: email,
    from: ACOUNT_GMAIL, // Utiliza la variable de entorno EMAIL
    subject: "Cuenta creada exitosamente",
    text: `BIENVENIDO: tu cuenta se ha creado con éxito ${email}`,
    html: `<p>BIENVENIDO: tu cuenta se ha creada con éxito <strong>${email}</strong></p>`,
  };

  try {
    const sendEmailExit = await transporter.sendMail(message);
    console.log("Correo electrónico de verificación enviado con éxito");
    return sendEmailExit;
  } catch (error) {
    console.error(
      "Error al enviar el correo electrónico de verificación:",
      error
    );
    throw error;
  }
}

export async function sendAccountLoginCheckEmail(email) {
  const code = verificationCode();
  const EduTech = "https://edusync-ten.vercel.app/";
  const transporter = await createTransporter();
  const message = {
    to: email,
    from: ACOUNT_GMAIL, // Utiliza la variable de entorno EMAIL
    subject: "Verificación de correo electronico",

    // html: htmlVerifyEmail
    //   .replace(`{{code}}`, code)
    //   .replace("{{Ingresar codigo}}", EduTech),
  };

  try {
    const sendEmailExit = await transporter.sendMail(message);
    console.log("Correo electrónico de verificación enviado con éxito");

    return code;
  } catch (error) {
    console.error(
      "Error al enviar el correo electrónico de verificación:",
      error
    );
    throw error;
  }
}
