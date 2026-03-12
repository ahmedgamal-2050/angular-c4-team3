import { Product } from '../home/home.model';
import { ApiListResponse } from '../../../../core/models/general.model';

export interface ProductListResponse extends ApiListResponse {
  products: Product[];
}

export interface ProductDetailsResponse {
  message: string;
  product: Product;
}