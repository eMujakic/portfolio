import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { DayInterface, WeatherInterface } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getGradientColors = (temperature: number, isFahrenheit: boolean) => {
  if (!isFahrenheit) {
    temperature = convertToFahrenheit(temperature);
  }
  if (temperature < 50) return ["#22b4ff", "#2451B7"];
  if (temperature < 90) return ["#ff7c00", "#ffaa00"];
  return ["#ff0000", "#ff7f00"]; // Hot colors
};

export const getTempColor = (temperature: number, isFahrenheit: boolean) => {
  if (!isFahrenheit) {
    temperature = convertToFahrenheit(temperature);
  }
  if (temperature < 50) return "cold";
  if (temperature < 90) return "warm";
  return "hot";
};

export const averageTemperature = (data: WeatherInterface[]) => {
  const totalTemperature = data.reduce(
    (sum, entry) => sum + entry.temperature,
    0
  );
  return totalTemperature / data.length;
};

export const convertToCelsius = (temp: number) => {
  return Math.floor(((temp - 32) * 5) / 9);
};

export const convertToFahrenheit  = (temp: number) => {
  return ((temp * (9 / 5)) + 32);
};

export const celsiusArray = (tempData: WeatherInterface[]): WeatherInterface[] => {
  return tempData.map((data) => ({
    ...data,
    temperature: convertToCelsius(data.temperature)
  }))
};

export const celsiusDayArray = (tempData: DayInterface[]): DayInterface[] => {
  return tempData.map((data) => ({
    ...data,
    high: convertToCelsius(data.high),
    low: convertToCelsius(data.low),
  }))
};

export const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 }
  },
};

export function getDayAbbreviation(day: number): string {

  let abbreviation = "";

  switch (day) {
    case 0:
      abbreviation = "Sun";
      break;
    case 1:
      abbreviation = "Mon";
      break;
    case 2:
      abbreviation = "Tue";
      break;
    case 3:
      abbreviation = "Wed";
      break;
    case 4:
      abbreviation = "Thu";
      break;
    case 5:
      abbreviation = "Fri";
      break;
    case 6:
      abbreviation = "Sat";
      break;
  }

  return abbreviation;
}

export const runAtNextHour = () => {
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
  return nextHour.getTime() + 120000 - now.getTime();
};

export const runAtNextDay = () => {
  const now = new Date();
  const nextHour = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    now.getHours(),
    0,
    0,
    0
  );
  return nextHour.getTime() + 300000 - now.getTime();
};

export function twelveHrFormat(hour: number): string {
  let period = 'AM';
  let convertedHour = hour;

  if (hour === 0) {
      convertedHour = 12;
  } else if (hour === 12) {
      period = 'PM';
  } else if (hour > 12) {
      convertedHour = hour - 12;
      period = 'PM';
  }

  return `${convertedHour}${period}`;
}