export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  fullName: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface User {
  _id: string;
  email: string;
  addresses: unknown[];
  firstName: string;
  gender: string;
  lastName: string;
  phone: string;
  photo: string;
  role: string;
  wishlist: unknown[];
  createdAt: string;
}
