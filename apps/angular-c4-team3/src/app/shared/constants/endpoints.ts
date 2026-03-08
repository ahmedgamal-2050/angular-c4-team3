export const BASE_URL = 'https://flower.elevateegy.com/api/v1';

export const ENDPOINTS = {
    HOME: `${BASE_URL}/home`,
    REVIEWS:`${BASE_URL}/reviews`,
    GET_ALL_PRODUCTS:`${BASE_URL}/products`,
    GET_REVIEW_BY_ID:`${BASE_URL}/products/{productId}/reviews`,
    CATEGORY_PRODUCT:`${BASE_URL}/related/category`,
} as const;
