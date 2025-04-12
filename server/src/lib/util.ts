import { HourInterface, DayInterface } from "./types";
import * as fs from "fs/promises";

export const writeJsonFile = async (
  filePath: string,
  data: HourInterface[] | DayInterface[]
) => {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
};

export async function readJson(
  filePath: string
): Promise<DayInterface[] | HourInterface[]> {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data) as DayInterface[] | HourInterface[];
  } catch (err) {
    console.error("Error reading data file:", err);
    return [];
  }
}

export async function loadDayData(data: DayInterface[], filepath: string) {
  try {
    const loadedData = (await readJson(filepath)) as DayInterface[];
    data.length = 0;
    data.push(...loadedData);
  } catch (err) {
    console.error("Error loading data:", err);
    data.length = 0;
  }
}

export async function loadHourData(data: HourInterface[], filepath: string) {
  try {
    const loadedData = (await readJson(filepath)) as HourInterface[];
    data.length = 0;
    data.push(...loadedData);
  } catch (err) {
    console.error("Error loading data:", err);
    data.length = 0;
  }
}

class AsyncQueue {
  private queue: (() => Promise<void>)[] = [];
  private processing = false;

  async enqueue(task: () => Promise<void>): Promise<void> {
    this.queue.push(task);
    if (!this.processing) {
      await this.processQueue();
    }
  }

  private async processQueue(): Promise<void> {
    this.processing = true;
    while (this.queue.length > 0) {
      const task = this.queue.shift();
      if (task) {
        try {
          await task();
        } catch (err) {
          console.error("Error in queue task:", err);
        }
      }
    }
    this.processing = false;
  }
}

export const fileWriteQueue = new AsyncQueue();
