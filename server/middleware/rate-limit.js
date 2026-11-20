import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "../config/redis.js";

export const contactRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "15 m"),
  prefix: "devfolio:contact",
  analytics: true,
});
