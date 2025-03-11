import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose";

enum OrderStatus {
  PENDING = "PENDING",
  DELIVERED = "DELIVERED",
  ON_THE_WAY = "ON_THE_WAY",
}

@modelOptions({ schemaOptions: { collection: "orders" } })
export default class Order {
  @prop({ type: String })
  customerName: string;

  @prop({ type: String })
  deliveryAddress: string;

  @prop({ type: Number })
  totalPrice: number;

  @prop({ type: String })
  orderStatus: OrderStatus;

  @prop({ type: Date })
  createdAt: Date;

  constructor(opt: Partial<Order> = {}) {
    this.customerName = opt.customerName;
    this.deliveryAddress = opt.deliveryAddress;
    this.totalPrice = opt.totalPrice;
    this.orderStatus = opt.orderStatus;
    this.createdAt = opt.createdAt;
  }
}

export const OrdersRepository = getModelForClass(Order);
