export interface HomeResponse {
  message: string;
  products: Product[];
  categories: CategoryElement[];
  bestSeller: Product[];
  occasions: CategoryElement[];
}

export interface Product {
  _id: string;
  title: string;
  slug: string;
  description: string;
  imgCover: string;
  images: string[];
  price: number;
  priceAfterDiscount: number;
  quantity: number;
  category: string;
  occasion: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  isSuperAdmin: boolean;
  sold: number;
  rateAvg: number;
  rateCount: number;
  id: string;
  discount?: number;
  isInWishlist?: boolean;
}

export interface CategoryElement {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  isSuperAdmin: boolean;
}
