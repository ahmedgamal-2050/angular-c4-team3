export interface AddressDetailsForm {
  title: string;
  city: string;
  street: string;
  phone: string;
}

export interface NewAddress {
  title: string;
  city: string;
  street: string;
  phone: string;
  latitude: number;
  longitude: number;
  isPrimary: boolean;
}
