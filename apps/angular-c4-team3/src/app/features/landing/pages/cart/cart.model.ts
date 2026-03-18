import { Product } from '../home/home.model';

export interface CartResponse {
  message: string;
  numOfCartItems: number;
  cart: {
    user?: string;
    _id?: string;
    cartItems: CartItem[];
    discount?: number;
    totalPrice: number;
    totalPriceAfterDiscount?: number;
    appliedCoupons?: unknown[];
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
  };
}

export interface CartItem {
  _id: string;
  price: number;
  quantity: number;
  product: Product;
}
