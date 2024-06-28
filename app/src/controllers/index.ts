import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import response from "../utils/response.utils";
import { generateCaptcha, generateRandomText } from "../utils";

const homecontroller: RequestHandler = (req: Request, res: Response): void => {
  const { text, type }: { text?: string; type?: string } = req.query;

  if (text && text.length > 5) {
    return response(
      res,
      StatusCodes.BAD_REQUEST,
      false,
      {
        captcha: text,
        image: null,
      },
      "Text is tool long !"
    );
  }

  const randomText = text ?? generateRandomText(true, 5, true);

  const canvas = generateCaptcha(randomText);

  if (type === "base64")
    return response(
      res,
      StatusCodes.BAD_REQUEST,
      false,
      {
        captcha: randomText,
        image: generateCaptcha(randomText, "base64"),
      },
      "Success !"
    );
  else {
    res.setHeader("Content-Type", "image/png");
    return canvas.createPNGStream().pipe(res);
  }
};

export default homecontroller;
