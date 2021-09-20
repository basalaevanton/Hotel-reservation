export interface GuestState {
  adult: number;
  children: number;
  baby: number;
}

export interface DatetState {
  arrival: Date;
  departure: Date;
}

export interface PriceState {
  minPrice: number;
  maxPrice: number;
}

export interface RulesState {
  smoke: boolean;
  pets: boolean;
  bigCompany: boolean;
}

export interface AccessabilityState {
  wideCorridor: boolean;
  helperForDisabled: boolean;
}

export interface RoomState {
  bedrooms: number;
  beds: number;
  bathrooms: number;
}

export interface AmenitiesState {
  brekfast: boolean;
  desk: boolean;
  feefingChair: boolean;
  crib: boolean;
  tv: boolean;
  shampoo: boolean;
}

export interface SearchForm {
  date: DatetState;
  guests: GuestState;
  price: PriceState;
  rules: RulesState;
  accessability: AccessabilityState;
  room: RoomState;
  amenities: AmenitiesState;
}
