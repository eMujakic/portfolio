import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import { WeatherInterface } from "./types";

export const getGradientColors = (temperature: number) => {
  if (temperature < 50) return ["#22b4ff", "#2451B7"];
  if (temperature < 80) return ["#ff7c00", "#ffaa00"];
  return ["#ff0000", "#ff7f00"]; // Hot colors
};

export const averageTemperature = (data: WeatherInterface[]) => {
  const totalTemperature = data.reduce(
    (sum, entry) => sum + entry.temperature,
    0
  );
  return totalTemperature / data.length;
};

export const convertToCelsius = (temp: number) => {
  return ((temp - 32) * 5) / 9;
};

export const convertToFahrenheit  = (temp: number) => {
  return ((temp * (9 / 5)) + 32);
};

export const celsiusFormat = (temp: number): String => {
  return (((temp - 32) * 5) / 9).toFixed(0);
};

export const celsiusArray = (tempData: WeatherInterface[]): WeatherInterface[] => {
  return tempData.map((data) => ({
    ...data,
    temperature: convertToCelsius(data.temperature)
  }))
};

export const fahrenheitArray = (tempData: WeatherInterface[]): WeatherInterface[] => {
  return tempData.map((data) => ({
    ...data,
    temperature: convertToFahrenheit (data.temperature)
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

function getDayAbbreviation(day: number): 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | undefined {
  const days: { [key: number]: 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' } = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
  };

  return days[day];
}