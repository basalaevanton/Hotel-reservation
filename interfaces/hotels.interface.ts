export interface Description {
  short: string;
}

export interface Image {
  altText?: any;
  height: number;
  width: number;
  url: string;
  isHeroImage: boolean;
}

export interface Address {
  line1: string;
  line2?: any;
  city: string;
  postalCode: string;
  region: string;
  country: string;
  countryName: string;
}

export interface Location {
  longitude: number;
  latitude: number;
}

export interface Amenity {
  code: number;
  formatted: string;
}

export interface CheckIn {
  from: string;
  to: string;
}

export interface CheckOut {
  to: string;
}

export interface Amenity2 {
  code: number;
  formatted: string;
}

export interface Image2 {
  altText?: any;
  height: number;
  width: number;
  url: string;
}

export interface RoomType {
  roomTypeId: string;
  name: string;
  description: string;
  maxOccupancy: number;
  rates: any[];
  amenities: Amenity2[];
  images: Image2[];
}

export interface Datum extends Record<string, unknown> {
  hotelId: string;
  name: string;
  currency: string;
  starRating: number;
  description: Description;
  phoneNumbers: string[];
  emails: string[];
  websiteUrl?: any;
  images: Image[];
  address: Address;
  location: Location;
  amenities: Amenity[];
  roomCount: number;
  checkIn: CheckIn;
  checkOut: CheckOut;
  termsAndConditions: string;
  createdAt: Date;
  updatedAt: Date;
  externalUrls: any[];
  roomTypes: RoomType[];
}

export interface Pagination {
  count: number;
  total: number;
  next: string;
  prev?: any;
}

export interface HotelsRoot extends Record<string, unknown> {
  hotels: Datum[];
  pagination: Pagination;
}

export interface HotelRoot extends Record<string, unknown> {
  hotel: Datum;
  // pagination: Pagination;
}
