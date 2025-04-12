"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hourFilePath = exports.dayFilePath = exports.hourMaxLength = exports.dayMaxLength = exports.maxTemp = exports.minTemp = void 0;
const path_1 = __importDefault(require("path"));
exports.minTemp = -20;
exports.maxTemp = 150;
exports.dayMaxLength = 5;
exports.hourMaxLength = 5;
exports.dayFilePath = path_1.default.join(__dirname, "../data/DayData.json");
exports.hourFilePath = path_1.default.join(__dirname, "../data/HourData.json");
