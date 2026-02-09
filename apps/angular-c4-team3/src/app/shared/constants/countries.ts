import { Country } from '../models/countries';
export type { Country };

export const COUNTRIES = [
  {
    name: 'Egypt',
    code: 'EG',
    phone: '+20',
    flag: 'https://flagcdn.com/w20/eg.png',
  },
  {
    name: 'United States',
    code: 'US',
    phone: '+1',
    flag: 'https://flagcdn.com/w20/us.png',
  },
  {
    name: 'United Kingdom',
    code: 'UK',
    phone: '+44',
    flag: 'https://flagcdn.com/w20/gb.png',
  },
] as const satisfies Country[];

export type CountryCode = (typeof COUNTRIES)[number]['code'];
