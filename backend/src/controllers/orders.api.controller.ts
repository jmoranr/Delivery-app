import { Request, Response } from "express";
import OrdersService from "../services/orders.service";
import EndpointResponseService from "../services/endpoint-response.service";
import Order from "src/models/orders.model";

const endpointResponseService: EndpointResponseService =
  new EndpointResponseService();
const ordersService: OrdersService = new OrdersService();

export async function getOrderByDateRange(
  req: Request,
  res: Response
): Promise<void> {
  const startingDate: string = (req.params.startingDate).trim() ?? undefined;
  const endingDate: string = (req.params.endingDate).trim() ?? undefined;
  if (!startingDate.length || !endingDate.length) {
    const msg: string = `Error on get orders by date range from ${startingDate} to ${endingDate} => Missing date range`;
    endpointResponseService.sendNOk(res, [{ startingDate, endingDate }], msg);
    return;
  }
  if (startingDate > endingDate) {
    const msg: string = `Error on get orders by date range from ${startingDate} to ${endingDate} => Invalid date range`;
    endpointResponseService.sendNOk(res, [{ startingDate, endingDate }], msg);
    return;
  }
  try {
    const formattedStartingDate = new Date(startingDate);
    const formattedEndingDate = new Date(endingDate);
    const ordersList: Order[] = await ordersService.getOrderByDateRange(
      formattedStartingDate,
      formattedEndingDate
    );
    endpointResponseService.sendOk(res, [], ordersList);
  } catch (error) {
    const msg: string = `Error on get orders by date range from ${startingDate} to ${endingDate} => ${error}`;
    endpointResponseService.sendNOk(res, [{ startingDate, endingDate }], msg);
  }
}
