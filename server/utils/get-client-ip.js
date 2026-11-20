import { isIP } from "node:net";

export function getClientIp(req) {
  const clientIp = req.headers["x-real-ip"];

  if (typeof clientIp !== "string") {
    return null;
  }

  const ip = clientIp.trim();

  return isIP(ip) ? ip : null;
}
