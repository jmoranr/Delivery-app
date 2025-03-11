import { apiClient } from '../clients/server.client';

const ordersApiPath: string = 'orders';

export default class OrdersApiService {
  async getOrdersByDateRange(startingDate: string, endingDate: string): Promise<any> {
    return await apiClient.get(`${ordersApiPath}/${startingDate}/${endingDate}`);
  }
}
