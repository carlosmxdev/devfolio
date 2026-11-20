import { z } from "zod";

export const contactSchema = z.strictObject({
  name: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres.")
    .max(80, "El nombre no puede superar los 80 caracteres."),

  email: z
    .string()
    .trim()
    .email("Introduce un correo electrónico válido.")
    .max(254, "El correo electrónico es demasiado largo."),

  subject: z
    .string()
    .trim()
    .min(3, "El asunto debe tener al menos 3 caracteres.")
    .max(120, "El asunto no puede superar los 120 caracteres."),

  message: z
    .string()
    .trim()
    .min(10, "El mensaje debe tener al menos 10 caracteres.")
    .max(5000, "El mensaje no puede superar los 5000 caracteres."),

  website: z.string().max(200).optional().default(""),
});
