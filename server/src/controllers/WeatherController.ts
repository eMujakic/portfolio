import { Request, Response } from "express";
import { DayInterface, HourInterface } from "../lib/types";
import {
  fileWriteQueue,
  loadDayData,
  loadHourData,
  writeJsonFile,
} from "../lib/util";
import { toZonedTime } from "date-fns-tz";
import {
  dayFilePath,
  dayMaxLength,
  hourFilePath,
  hourMaxLength,
  maxTemp,
  minTemp,
} from "../lib/consts";

//arrays storing incoming data
let hourData: HourInterface[] = [];
let dayData: DayInterface[] = [];

loadDayData(dayData, dayFilePath);
loadHourData(hourData, hourFilePath);

const timeZone = "America/Chicago";

// ESP32 POST ENDPOINT
export const postWeather = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Check Content-Type header
    const contentType = req.headers["content-type"];
    if (contentType && contentType !== "application/json") {
      res.status(415).json({
        message: "Unsupported Media Type. Expected application/json.",
      });
      return;
    }

    const { temperature, humidity } = req.body;

    // validates data types
    if (isNaN(temperature) || isNaN(humidity)) {
      res
        .status(400)
        .json({ message: "Invalid temperature or humidity value." });
      return;
    }

    // validates data values
    if (
      temperature > maxTemp ||
      temperature < minTemp ||
      humidity > 100 ||
      humidity < 0
    ) {
      res
        .status(400)
        .json({ message: "Invalid temperature or humidity value." });
      return;
    }

    //get current zoned date
    const now = toZonedTime(new Date(), timeZone);
    const hour = now.getHours();
    const day = now.getDay();

    //prevents duplicate hours
    if (hourData.some((data) => data.hour === hour)) {
      res.status(409).json({ message: "data already gathered for this hour." });
      return;
    }

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
      if (dayData.length >= dayMaxLength) dayData.shift();
      dayData.push(dayEntry);
    } else {
      const entry = dayData.find((data) => data.day === day); //finds current day

      //updates daily high or low
      if (entry) {
        entry.high = Math.max(entry.high, temperature);
        entry.low = Math.min(entry.low, temperature);
      }
      //creates new entry if doesn't exist
      else {
        if (dayData.length >= dayMaxLength) dayData.shift();
        dayData.push({ day, high: temperature, low: temperature });
      }
    }
    //limits weather data to 5 entries
    if (hourData.length >= hourMaxLength) hourData.shift();
    hourData.push(weatherEntry);

    await fileWriteQueue.enqueue(async () => {
      await writeJsonFile(dayFilePath, dayData);
      await writeJsonFile(hourFilePath, hourData);
    });
  } catch (err: any) {
    console.log(err);
    res
      .status(500)
      .json({ message: `Error posting weather data: ${err.message}` });
  }
};

//GET ENDPOINT FOR FRONTEND
export const getWeather = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    //validates that data exists
    if (!hourData) {
      res.status(404).json({ message: "Weather data not found." });
      return;
    }

    res.status(200).json(hourData);
  } catch (err: any) {
    console.log(err);
    res
      .status(500)
      .json({ message: `Error getting weather data: ${err.message}` });
  }
};

//GET DAY ENDPOINT FOR FRONTEND
export const getDayWeather = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    //validates that data exists
    if (!dayData) {
      res.status(404).json({ message: "Weather data not found." });
      return;
    }

    res.status(200).json(dayData);
  } catch (err: any) {
    console.log(err);
    res
      .status(500)
      .json({ message: `Error getting weather data: ${err.message}` });
  }
};
