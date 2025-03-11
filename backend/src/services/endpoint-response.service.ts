import {
  NOkEndpointResponse,
  OkEndpointResponse,
} from "../models/endpoint-response.model";
import { Response } from "express";

export default class EndpointResponseService {

  // 200 OK
  sendOk(
    res: Response<any>,
    inputParams: any[],
    data: any,
    msg: string = "",
    beautyMsg?: string
  ): void {
    try {
      const response: OkEndpointResponse = new OkEndpointResponse(
        inputParams,
        data,
        msg,
        beautyMsg
      );

      res.status(200).json(response);
    } catch (e) {
      const response: NOkEndpointResponse = new NOkEndpointResponse(
        inputParams,
        msg,
        beautyMsg
      );

      res.status(404).json(response);
    }
  }

  // 404 Not Found
  sendNOk(
    res: Response<any>,
    inputParams: any[],
    msg: string,
    beautyMsg?: string
  ): void {
    try {
      const response: NOkEndpointResponse = new NOkEndpointResponse(
        inputParams,
        msg,
        beautyMsg
      );

      res.status(404).json(response);
    } catch (e) {
      console.error("Error on send api response => " + e);
    }
  }

}
