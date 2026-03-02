export const BASE_URL = 'https://flower.elevateegy.com/api/v1';

export const ENDPOINTS = {
    HOME: `${BASE_URL}/home`,
    REVIEWS:`${BASE_URL}/reviews`,
    GETREVIEWID:`${BASE_URL}/products`,
    CATEGORY_PRODUCT:`${BASE_URL}/related/category`,
} as const;
