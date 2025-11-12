import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 60 * 1000, 
  max: 1, 
  message: "Terlalu banyak request, coba lagi nanti.",
});
