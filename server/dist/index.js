"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const weatherRoutes_1 = __importDefault(require("./routes/weatherRoutes"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
// initializes middleware
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
//home endpoint
app.get('/', (req, res) => {
    res.send('home');
});
app.use("/api/weather", weatherRoutes_1.default);
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
