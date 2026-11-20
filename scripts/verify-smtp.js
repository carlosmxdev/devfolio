import { transporter } from "../server/config/mailer.js";

try {
  await transporter.verify();

  console.log("Conexión con Gmail SMTP establecida correctamente.");
} catch (error) {
  console.error("No se pudo establecer la conexión con Gmail SMTP.");
  console.error(error.message);

  process.exitCode = 1;
}
