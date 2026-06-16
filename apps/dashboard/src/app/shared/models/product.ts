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
  createdAt: string;
  updatedAt: string;
  __v: number;
  isSuperAdmin: boolean;
  sold: number;
  rateAvg: number;
  rateCount: number;
  id: string;
  discount?: number;
  isInWishlist?: boolean;
}

export interface ProductListResponse {
  message: string;
  metadata: {
    currentPage: number;
    limit: number;
    numberOfPages: number;
    nextPage?: number;
  };
  products: Product[];
}

export interface ProductDetailsResponse {
  message: string;
  product: Product;
}

export interface CategoryElement {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  isSuperAdmin: boolean;
}

export interface CategoriesResponse {
  message: string;
  categories: CategoryElement[];
}

export interface OccasionElement {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  isSuperAdmin: boolean;
}

export interface OccasionsResponse {
  message: string;
  occasions: OccasionElement[];
}
