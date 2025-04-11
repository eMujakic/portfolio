"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { format, toZonedTime } from "date-fns-tz";
import { Moon, Sun } from "lucide-react";
import { DayInterface, WeatherInterface } from "@/lib/types";
import TemperatureGraph from "./TemperatureChart";
import {
  celsiusArray,
  celsiusDayArray,
  celsiusFormat,
  containerVariants,
  convertHourTo12HourFormat,
  convertToCelsius,
  getDayAbbreviation,
  runAtNextDay,
  runAtNextHour,
} from "@/lib/utils";
import WeekChart from "./WeekChart";
import { Separator } from "@/components/ui/separator";
import SunCalc from "suncalc";

//TODO: Test call and post timing
//TODO: Add week historical data

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState<WeatherInterface[]>([]);
  const [dayData, setDayData] = useState<DayInterface[]>([]);
  const timeZone = "America/Chicago";
  const date = new Date();
  const zonedDate = toZonedTime(date, timeZone);
  const time = format(zonedDate, "h:mm a", { timeZone });
  const day = format(zonedDate, "EEEE", { timeZone });

  const sun = SunCalc.getTimes(new Date(), 32, -96);
  const sunrise = sun.sunrise;
  const sunset = sun.sunset;

  const [isFahrenheit, setIsFahrenheit] = useState(true);

  const setFahrenheit = () => {
    setIsFahrenheit(true);
  };

  const setCelsius = () => {
    setIsFahrenheit(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3005/api/weather");
      const newData = result.data.map(
        (data: WeatherInterface): WeatherInterface => ({
          ...data,
          hour: convertHourTo12HourFormat(Number(data.hour)),
        })
      );
      setWeatherData(newData);
    };
    fetchData();
    let interval: NodeJS.Timeout;
    const timeout = setTimeout(() => {
      fetchData();
      interval = setInterval(fetchData, 3600000); // Every hour
    }, runAtNextHour());
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3005/api/weather/day");
      const newData = result.data.map(
        (data: DayInterface): DayInterface => ({
          ...data,
          day: getDayAbbreviation(Number(data.day)),
        })
      );
      setDayData(newData);
    };
    fetchData();
    let interval: NodeJS.Timeout;
    const timeout = setTimeout(() => {
      fetchData();
      interval = setInterval(fetchData, 86400000); // Every day
    }, runAtNextDay());
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={containerVariants}
    >
      <div
        className="relative mt-24 w-4/5 md:w-4/5 lg:w-3/5 xl:w-2/5 max-w-6xl mx-auto
                    p-6 sm:px-8 lg:px-12 xl:px-16 gradient-one
                    rounded-xl border-gray-500 border text-white hover-glow2"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-row items-center p-2 justify-between h-18">
            <div className="mr-2">
              {date >= sunrise && date < sunset ? (
                <Sun size={48} />
              ) : (
                <Moon size={48} />
              )}
            </div>
            <h1 className="text-6xl font-semibold">
              {weatherData.length > 0
                ? isFahrenheit
                  ? weatherData[weatherData.length - 1].temperature.toFixed(0)
                  : celsiusFormat(
                      weatherData[weatherData.length - 1].temperature
                    )
                : "..."}
            </h1>
            <div className="ml-1 block mb-7">
              <div className="">
                <button
                  onClick={setFahrenheit}
                  className={`cursor-pointer ${
                    isFahrenheit ? "font-bold" : "text-gray-400"
                  }`}
                >
                  °F
                </button>
                {` | `}
                <button
                  onClick={setCelsius}
                  className={`cursor-pointer ${
                    !isFahrenheit ? "font-bold" : "text-gray-400"
                  }`}
                >
                  °C
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-2 h-18 md:mt-2">
            <h2 className="font-medium text-3xl text-center">Weather</h2>
            <p className="text-gray-400">
              <span className="text-lg font-medium">{day}</span> {time}
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-lg md:text-md font-light my-1 md:my-0 text-center md:ml-4 md:text-left">
            Humidity:{" "}
            {weatherData.length > 0
              ? weatherData[weatherData.length - 1].humidity
              : "..."}
            %
          </h3>
        </div>
        <div className="mx-auto">
          <TemperatureGraph
            data={isFahrenheit ? weatherData : celsiusArray(weatherData)}
            isFahrenheit={isFahrenheit}
          ></TemperatureGraph>
        </div>
        <Separator className="bg-gray-400/50 mt-4"></Separator>
        <div className="mx-auto mt-2">
          <WeekChart
            data={isFahrenheit ? dayData : celsiusDayArray(dayData)}
            isFahrenheit={isFahrenheit}
          ></WeekChart>
          <h4 className="text-lg md:text-md font-light my-1 md:my-0 text-center md:ml-4">
            Past Week
          </h4>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;
