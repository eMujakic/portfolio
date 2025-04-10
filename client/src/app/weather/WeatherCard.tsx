"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { format, toZonedTime } from "date-fns-tz";
import { Moon, Sun } from "lucide-react";
import { WeatherInterface } from "@/lib/types";
import TemperatureGraph from "./TemperatureChart";
import { celsiusArray, celsiusFormat, containerVariants, convertToCelsius } from "@/lib/utils";
import WeekChart from "./WeekChart";
import { Separator } from "@/components/ui/separator"

//TODO: Test call and post timing
//TODO: Add week historical data

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState<WeatherInterface[]>([]);
  const timeZone = "America/Chicago";
  const date = new Date();
  const zonedDate = toZonedTime(date, timeZone);
  const time = format(zonedDate, "h:mm a", { timeZone });
  const day = format(zonedDate, "EEEE", { timeZone });

  const [isFahrenheit, setIsFahrenheit] = useState(true);

  const setFahrenheit = () => {
    setIsFahrenheit(true);
  };

  const setCelsius = () => {
    setIsFahrenheit(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3004/api/weather");
      setWeatherData(result.data);
    };

    const runAtNextHour = () => {
      const now = new Date();
      const nextHour = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        now.getHours() + 1,
        0,
        0,
        0
      );
      return nextHour.getTime() + 60000 - now.getTime();
    };

    fetchData();

    let interval: NodeJS.Timeout;

    console.log(new Date().getTime());

    const timeout = setTimeout(() => {
      fetchData();
      interval = setInterval(fetchData, 3600000); // Every hour
    }, runAtNextHour());

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
        className="relative mt-18 w-4/5 md:w-4/5 lg:w-3/5 xl:w-2/5 max-w-6xl mx-auto
                    p-6 sm:px-8 lg:px-12 xl:px-16 gradient-one
                    rounded-xl border-gray-500 border text-white hover-glow2"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-row items-center p-2 justify-between h-18">
            <div className="mr-2">
              {Number(date.getHours()) < 20 && Number(date.getHours()) > 7 ? (
                <Sun size={48} />
              ) : (
                <Moon size={48} />
              )}
            </div>
            <h1 className="text-6xl font-semibold">
              {weatherData.length > 0
                ? isFahrenheit
                ? weatherData[weatherData.length - 1].temperature.toFixed(0)
                : celsiusFormat(weatherData[weatherData.length - 1].temperature)
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
          <TemperatureGraph data={isFahrenheit ? weatherData : celsiusArray(weatherData)} isFahrenheit={isFahrenheit}></TemperatureGraph>
        </div>
        <Separator className="bg-gray-400/50 mt-4"></Separator>
        <div className="mx-auto mt-2">
          <WeekChart ></WeekChart>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;
