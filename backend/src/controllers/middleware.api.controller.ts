import expressws from "express-ws";
import express, { Request, Response, NextFunction } from "express";
export const MiddlewareRouter: expressws.Router = express.Router();

export async function main(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const endpoint: string = "Middleware";
  const pathname: string = req.baseUrl + req.path;
  const reqQuery: any = req.query;
  const msgPrefix: string =
    "Api request received to " + pathname + "with method" + req.method;
  const baseUrl: string = req.baseUrl;
  const urlPath: string = req.url;

  // Your main middleware funtionalities here.

  return next();
}
