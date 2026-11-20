import { handleContact } from "../server/controllers/contact.controller.js";

export default async function handler(req, res) {
  return handleContact(req, res);
}
