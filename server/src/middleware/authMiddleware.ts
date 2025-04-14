import { Request, Response, NextFunction } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const apiKey = req.headers["x-api-key"]; // Expect API key in the header

  if (process.env.API_KEY) {
    // Ensure apiKey is a string and check if it matches the expected API key
    if (typeof apiKey !== "string" || apiKey !== process.env.API_KEY) {
      res.status(403).json({ message: "Forbidden: Invalid API Key" });
      return;
    }
  } else {
    // Handle case where API_KEY is not set
    res
      .status(500)
      .json({ message: "Internal Server Error: API Key not configured." });
      return;
  }

  next();
};
