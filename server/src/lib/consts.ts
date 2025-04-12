import path from "path";

export const minTemp = -20;
export const maxTemp = 150;

export const dayMaxLength = 5;
export const hourMaxLength = 5;

export const dayFilePath = path.join(__dirname, "../data/DayData.json");
export const hourFilePath = path.join(__dirname, "../data/HourData.json");