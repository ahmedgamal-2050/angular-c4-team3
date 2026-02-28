export interface ReviewsResponse {
  message: string;
  metadata: {
    currentPage: number;
    totalPages: number;
    limit: number;
    totalItems: number;
  };
  reviews: Review[];
}

export interface Review {
  _id: string;
  product: ReviewProduct;
  user: ReviewUser;
  rating: number;
  title: string;
  comment: string;
  status: 'approved' | 'pending' | 'rejected';
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ReviewProduct {
  _id: string;
  title: string;
  imgCover: string;
  id: string;
}

export interface ReviewUser {
  _id: string;
  firstName: string;
  lastName: string;
  photo: string;
}
