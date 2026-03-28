export interface ApplyCouponResponse {
  message: string;
  cart: Cart;
  discountAmount: number;
  totalAfterDiscount: number;
}

export interface Cart {
  _id: string;
  cartItems: CartItem[];
  totalPrice: number;
  discount: number;
  totalPriceAfterDiscount: number;
}

export interface CartItem {
  _id: string;
  product: any;
  price: number;
  quantity: number;
}