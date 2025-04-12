import express from "express";
import { getDayWeather, getWeather, postWeather } from "../controllers/WeatherController";
import rateLimit from 'express-rate-limit';

const postLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutes
  max: 10, // 100 requests per windowMs
  message: 'Too many requests from this device, please try again later',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const router = express.Router();

router.post("/", postLimiter, postWeather)
router.get("/", getWeather);
router.get("/day", getDayWeather);

export default router;