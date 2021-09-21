export interface GuestState {
  adult: number;
  children: number;
  baby: number;
}

export interface DatetState {
  arrival: Date;
  departure: Date;
}

export interface searchIndexForm {
  date: DatetState;
  guests: GuestState;
}
