import { Address } from './address.model';

export const ADDRESSES_DUMMY_DATA: Address[] = [
  {
    id: 1,
    city: 'Giza',
    address: '21 Ahmed Mohamed St., King Faisal St., Giza',
    phone: '+201012346578',
    selected: false,
    name: 'Home',
  },
  {
    id: 2,
    city: 'Cairo',
    address: '14 Omar Ibn Akhatab St., Ramsis St., Cairo',
    phone: '+201112345678',
    selected: true,
    name: 'Work',
  },
  {
    id: 3,
    city: 'Alexandria',
    address: '16 El-Gaish Rd, San Stefano, El-Raml 2, Alexandria',
    phone: '+201512345678',
    selected: false,
    name: 'Family',
  },
];
