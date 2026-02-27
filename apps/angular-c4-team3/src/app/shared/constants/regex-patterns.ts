export const REGEX_PATTERNS = {
  PHONE: /^\+\d{10,15}$/,
  PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
} as const;
