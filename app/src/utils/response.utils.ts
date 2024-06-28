import { getReasonPhrase } from "http-status-codes";
import { Response } from "express";

interface ResponseStructure {
  res: Response;
  code: number;
  status: boolean;
  data: object | null;
  mesage: string;
}

const response: any = (
  res: Response,
  code: number,
  status: boolean,
  data: object | null,
  mesage: string
) => {
  if (!mesage) mesage = getReasonPhrase(code);
  return res.status(code).json({
    status,
    data,
    mesage,
  });
};

export default response;
