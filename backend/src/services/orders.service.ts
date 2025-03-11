import orderRepositoryService from "../repositories-services/order.repository-service";
import Order from "../models/orders.model";

export default class OrdersService {
  async getOrderByDateRange(
    startingDate: Date,
    endingDate: Date
  ): Promise<Order[]> {
    const ordersList: Order[] =
      await orderRepositoryService.getOrderByDateRange(
        startingDate,
        endingDate
      );
    return ordersList;
  }
}
