export interface RegisterRequest {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ChangePasswordRequest {
  oldPassword?: string;
  password?: string;
  rePassword?: string;
  newPassword: string | null;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface VerifyOtpRequest {
  resetCode: string;
}

export interface ResetPasswordRequest {
  email: string;
  newPassword: string;
}
