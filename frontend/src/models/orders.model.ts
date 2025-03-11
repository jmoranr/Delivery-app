enum OrderStatus {
  PENDING = 'PENDING',
  DELIVERED = 'DELIVERED',
  ON_THE_WAY = 'ON_THE_WAY',
}

export default class Order {
  customerName: string;
  deliveryAddress: string;
  totalPrice: number;
  orderStatus: OrderStatus;
  createdAt: string;

  constructor(opt: Partial<Order> = {}) {
    this.customerName = opt?.customerName ?? '';
    this.deliveryAddress = opt?.deliveryAddress ?? '';
    this.totalPrice = opt?.totalPrice ?? 0;
    this.orderStatus = opt?.orderStatus ?? OrderStatus.PENDING;
    this.createdAt = opt?.createdAt ?? '';
  }
}
