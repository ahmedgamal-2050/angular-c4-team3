export const ADDRESS_MODAL_MODE = {
  ADDRESS_VIEW: 'address_view',
  ADDRESS_DETAILS: 'address_details',
  ADDRESS_LOCATION: 'address_location',
};

export type AddressModalMode =
  (typeof ADDRESS_MODAL_MODE)[keyof typeof ADDRESS_MODAL_MODE];

export const EGYPT_CAIRO_COORDINATES = {
  lat: 30.0442071201964,
  lng: 31.23438835144043,
};
