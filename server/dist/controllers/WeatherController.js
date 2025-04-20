"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDayWeather = exports.getWeather = exports.postWeather = void 0;
const util_1 = require("../lib/util");
const date_fns_tz_1 = require("date-fns-tz");
const consts_1 = require("../lib/consts");
//arrays storing incoming data
let hourData = [];
let dayData = [];
(0, util_1.loadDayData)(dayData, consts_1.dayFilePath);
(0, util_1.loadHourData)(hourData, consts_1.hourFilePath);
const timeZone = "America/Chicago";
// ESP32 POST ENDPOINT
const postWeather = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check Content-Type header
        const contentType = req.headers["content-type"];
        if (contentType && contentType !== "application/json") {
            res.status(415).json({
                message: "Unsupported Media Type. Expected application/json.",
            });
            console.log("Unsupported Media Type. Expected application/json.");
            return;
        }
        const { temperature, humidity } = req.body;
        // validates data types
        if (typeof temperature !== "number" || typeof humidity !== "number") {
            res
                .status(400)
                .json({ message: "Invalid temperature or humidity data type." });
            console.log("Invalid temperature or humidity data type.");
            return;
        }
        // validates data values
        if (temperature > consts_1.maxTemp ||
            temperature < consts_1.minTemp ||
            humidity > 100 ||
            humidity < 0) {
            res
                .status(400)
                .json({ message: "Invalid temperature or humidity value." });
            console.log("Invalid temperature or humidity value.");
            return;
        }
        //get current zoned date
        const now = (0, date_fns_tz_1.toZonedTime)(new Date(), timeZone);
        const hour = now.getHours();
        const day = now.getDay();
        // //prevents duplicate hours
        // if (hourData[hourData.length - 1].hour === hour) {
        //   res.status(409).json({ message: "data already gathered for this hour." });
        //   console.log("data already gathered for this hour.");
        //   return;
        // }
        // assigns incoming data to variable
        const weatherEntry = {
            temperature,
            humidity,
            hour: hour,
        };
        // intializes day entry if midnight
        if (hour === 0) {
            const dayEntry = {
                day: day,
                high: temperature,
                low: temperature,
            };
            //limits array to 5 entries
            if (dayData.length >= consts_1.dayMaxLength)
                dayData.shift();
            dayData.push(dayEntry);
        }
        else {
            const entry = dayData.find((data) => data.day === day); //finds current day
            //updates daily high or low
            if (entry) {
                entry.high = Math.max(entry.high, temperature);
                entry.low = Math.min(entry.low, temperature);
            }
            //creates new entry if doesn't exist
            else {
                if (dayData.length >= consts_1.dayMaxLength)
                    dayData.shift();
                dayData.push({ day, high: temperature, low: temperature });
            }
        }
        //limits weather data to 5 entries
        if (hourData[hourData.length - 1].hour !== hour) {
            if (hourData.length >= consts_1.hourMaxLength)
                hourData.shift();
            hourData.push(weatherEntry);
        }
        else {
            hourData[hourData.length - 1].temperature = weatherEntry.temperature; // Updates current hour data
            hourData[hourData.length - 1].humidity = weatherEntry.humidity;
        }
        yield util_1.fileWriteQueue.enqueue(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, util_1.writeJsonFile)(consts_1.dayFilePath, dayData);
            yield (0, util_1.writeJsonFile)(consts_1.hourFilePath, hourData);
        }));
        console.log(now.getTime(), weatherEntry);
        res.status(200).json(weatherEntry);
    }
    catch (err) {
        console.log(err);
        res
            .status(500)
            .json({ message: `Error posting weather data: ${err.message}` });
    }
});
exports.postWeather = postWeather;
//GET ENDPOINT FOR FRONTEND
const getWeather = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //validates that data exists
        if (!hourData) {
            res.status(404).json({ message: "Weather data not found." });
            return;
        }
        res.status(200).json(hourData);
    }
    catch (err) {
        console.log(err);
        res
            .status(500)
            .json({ message: `Error getting weather data: ${err.message}` });
    }
});
exports.getWeather = getWeather;
//GET DAY ENDPOINT FOR FRONTEND
const getDayWeather = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //validates that data exists
        if (!dayData) {
            res.status(404).json({ message: "Weather data not found." });
            return;
        }
        res.status(200).json(dayData);
    }
    catch (err) {
        console.log(err);
        res
            .status(500)
            .json({ message: `Error getting weather data: ${err.message}` });
    }
});
exports.getDayWeather = getDayWeather;
