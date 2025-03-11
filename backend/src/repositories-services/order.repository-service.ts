import { log } from "console";
import Order from "../models/orders.model";
import { ReturnModelType, getModelForClass } from "@typegoose/typegoose";

const OrderRepositoy: ReturnModelType<typeof Order, any> =
  getModelForClass(Order);

class OrderRepositoryService {
  async getOrderByDateRange(
    startingDate: Date,
    endingDate: Date
  ): Promise<Order[]> {
    const query: any = {
      createdAt: { $gte: startingDate, $lt: endingDate },
    };
    const ordersList: Order[] = await OrderRepositoy.find(query);

    return ordersList;
  }
}

// Make service singleton
const orderRepositoryService: OrderRepositoryService =
  new OrderRepositoryService();

export default orderRepositoryService;
