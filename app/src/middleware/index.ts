import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  return res.status(404).json({
    status: false,
    data: null,
    message: "Not Found",
  });
};
