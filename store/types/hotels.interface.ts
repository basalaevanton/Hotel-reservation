import { Hotel } from '../../interfaces/hotels.interface';

export interface HotelsState {
  hotels: Hotel[] | undefined;
  // error: string;
}

export enum HotelsActionTypes {
  FETCH_HOTELS = 'FETCH_HOTELS',
}

interface FetchHotelsAction {
  type: HotelsActionTypes.FETCH_HOTELS;
  payload: Hotel[];
}
// interface ShowModalAction {
//   type: UiActionTypes.SHOW_MODAL;
//   payload: number;
// }

export type HotelsAction = FetchHotelsAction;
