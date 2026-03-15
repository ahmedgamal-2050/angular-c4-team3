export interface CartItem {
  id: string;
  name: string;
  variant?: string;
  price: number;
  quantity: number;
  imageUrl: string;
  rating: number;
  ratingCount: number;
}