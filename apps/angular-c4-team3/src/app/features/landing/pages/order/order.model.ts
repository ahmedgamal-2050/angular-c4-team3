import { Metadata } from '../products/services/metadata.model';

export interface OrderResponse {
  message: string;
  metadata: Metadata;
  orders: OrderParent[];
}

export interface OrderParent {
  user: string;
  orderItems: OrderItem[];
  totalPrice: number;
  paymentType: string;
  isPaid: boolean;
  isDelivered: boolean;
  state: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  orderNumber: string;
  __v: number;
}

export interface OrderItem {
  product: ProductOrder;
  price: number;
  quantity: number;
  _id: string;
}

export interface ProductOrder {
  _id: string;
  title: string;
  slug: string;
  description: string;
  imgCover: string;
  images: string[];
  price: number;
  priceAfterDiscount: number;
  discount: number;
  rateAvg: number;
  rateCount: number;
  sold: number;
  quantity: number;
  category: string;
  occasion: string;
  isSuperAdmin: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}
