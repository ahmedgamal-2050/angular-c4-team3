export interface AllStatisticsResponse {
  message: string;
  statistics: Statistics;
}

export interface Statistics {
  overall: Overall;
  products: Products;
  orders: Orders;
  categories: Category[];
}

export interface Category {
  _id: string;
  name: string;
  totalProducts: number;
  totalRevenue: number;
}

export interface Orders {
  ordersByStatus: OrdersByStatus[];
  dailyRevenue: LyRevenue[];
  monthlyRevenue: LyRevenue[];
}

export interface LyRevenue {
  _id: string;
  revenue: number;
  count: number;
}

export interface OrdersByStatus {
  _id: string;
  count: number;
}

export interface Overall {
  totalProducts: number;
  totalOrders: number;
  totalCategories: number;
  totalRevenue: number;
}

export interface Products {
  productsByCategory: ProductsByCategory[];
  topSellingProducts: Product[];
  lowStockProducts: Product[];
}

export interface Product {
  _id: string;
  title: string;
  imgCover: string;
  price: number;
  quantity?: number;
  id: string;
  sold?: number;
}

export interface ProductsByCategory {
  _id: string;
  count: number;
  category: string;
  products: ProductElement[];
}

export interface ProductElement {
  title: string;
  price: number;
  imgCover: string;
  quantity: number;
  sold?: number;
}
