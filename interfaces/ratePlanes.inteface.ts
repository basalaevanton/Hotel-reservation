export interface LengthOfStay {
  min: number;
}

export interface Restrictions {
  lengthOfStay: LengthOfStay;
}

export interface Component {
  formatted: string;
  type: string;
  includedInRate: boolean;
}

export interface Conditions {
  cancellationPolicy: string;
  cancellationDeadline?: number;
}

export interface Currency {
  code: string;
}

export interface RetailRate {
  amount: number;
  currency: Currency;
}

export interface Rate {
  adults: number;
  roomsSellable: number;
  retailRate: RetailRate;
}

export interface Date {
  date: string;
  closed: boolean;
  rates: Rate[];
}

export interface RoomTypeRate extends Record<string, unknown> {
  roomTypeId?: string;
  name?: string;
  maxOccupancy?: number;
  dates?: Date[];
}

export interface RatePlane extends Record<string, unknown> {
  ratePlanId: number;
  hotelId: string;
  description: string;
  restrictions: Restrictions;
  components: Component[];
  conditions: Conditions;
  roomTypes: RoomTypeRate[];
}

export interface Pagination {
  count: number;
  total: number;
  next?: any;
  prev?: any;
}

export interface RatePlans extends Record<string, unknown> {
  data: RatePlane[];
}
export interface ratesPlan extends Record<string, unknown> {
  ratesPlan: RoomTypeRate[];
}
