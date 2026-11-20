import { transporter } from "../config/mailer.js";

export async function sendContactEmail({ name, email, subject, message }) {
  const mailOptions = {
    from: `"Devfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `Nuevo mensaje de contacto: ${subject}`,
    text: `
Nombre: ${name}
Correo: ${email}

Mensaje:
${message}
    `,
  };

  return await transporter.sendMail(mailOptions);
}
