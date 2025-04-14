"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const WeatherController_1 = require("../controllers/WeatherController");
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const postLimiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 60 * 1000, // 60 minutes
    max: 10, // 100 requests per windowMs
    message: 'Too many requests from this device, please try again later',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
const router = express_1.default.Router();
router.post("/", postLimiter, authMiddleware_1.authMiddleware, WeatherController_1.postWeather);
router.get("/", WeatherController_1.getWeather);
router.get("/day", WeatherController_1.getDayWeather);
exports.default = router;
