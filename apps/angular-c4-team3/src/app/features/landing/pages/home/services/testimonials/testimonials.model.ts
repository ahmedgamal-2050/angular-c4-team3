export interface ITestimonialUser {
  _id: string;
  firstName: string;
  lastName: string;
  photo: string;
}

export interface ITestimonial {
  _id: string;
  user: ITestimonialUser;
  rating: number;
  content: string;
  status: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ITestimonialsMetadata {
  currentPage: number;
  totalPages: number;
  limit: number;
  totalItems: number;
}

export interface ITestimonialsResponse {
  message: string;
  metadata: ITestimonialsMetadata;
  testimonials: ITestimonial[];
}