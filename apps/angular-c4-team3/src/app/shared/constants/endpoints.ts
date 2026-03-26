export const BASE_URL = 'https://flower.elevateegy.com/api/v1';

export const ENDPOINTS = {
  HOME: `${BASE_URL}/home`,
  REVIEWS: `${BASE_URL}/reviews`,
  GET_ALL_PRODUCTS: `${BASE_URL}/products`,
  GET_PRODUCT_BY_ID: `${BASE_URL}/products/{productId}`,
  GET_REVIEW_BY_ID: `${BASE_URL}/products/{productId}/reviews`,
  CATEGORY_PRODUCT: `${BASE_URL}/related/category`,
  Get_All_Testimonials: `${BASE_URL}/testimonials`,
  WISHLIST:`${BASE_URL}/wishlist`,
  ADD_TO_CART: `${BASE_URL}/cart`,
  GET_CART: `${BASE_URL}/cart`,
  UPDATE_CART: `${BASE_URL}/cart/{cartItemId}`,
  DELETE_CART: `${BASE_URL}/cart/{cartItemId}`,
  CLEAR_CART: `${BASE_URL}/cart`,
  GET_RELATED_PRODUCTS_BY_USER_ID: `${BASE_URL}/related/recommendations/{userId}`,
  GET_ALL_CATEGORIES: `${BASE_URL}/categories`,
  GET_ALL_OCCASIONS: `${BASE_URL}/occasions`

} as const;