export interface AddressDetailsForm {
  title: string;
  city: string;
  street: string;
  phone: string;
}

export interface NewAddress {
  city: string;
  street: string;
  phone: string;
  lat: string;
  long: string;
  username: string;
}

export interface AddressResponse {
  addresses: AddressItem[];
  message: string;
}

export interface AddressItem {
  _id: string;
  street: string;
  phone: string;
  city: string;
  lat: string;
  long: string;
  username: string;
}
