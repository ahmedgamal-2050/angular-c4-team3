export interface WishListResponse {
  message: string;
  count: number;
  wishlist: {
    _id: string;
    user: string;
    products: WishListItem[];
    createdAt: string;
    updatedAt: string;
  };
}

export interface WishListItem {
  _id: string;
  id: string;
  title: string;
  imgCover: string;
  price: number;
  priceAfterDiscount: number;
  rateAvg: number;
}
