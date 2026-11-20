const allowedOrigins = new Set([
  "https://devfolio-lovat-theta.vercel.app",
  "http://localhost:5173",
]);

export function isAllowedOrigin(req) {
  const origin = req.headers.origin;

  if (typeof origin !== "string") {
    return false;
  }

  return allowedOrigins.has(origin);
}
